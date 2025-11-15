import sys
import os
from utilities.utils import (
    load_recipes,
    save_recipes,
    gen_id,
    prompt_nonempty,
    prompt_optional,
    parse_ingredients,
    print_recipe,
    find_recipe_by_id,
)


def add_recipe(recipes):
    print("\n[Add Recipe]")
    title = prompt_nonempty("Title: ")
    author = prompt_optional("Author (optional): ", "")
    category = prompt_optional("Category (optional): ", "")

    print("Enter ingredients (comma-separated or multi-line).")
    print("Finish multi-line with an empty line.")
    lines = []
    first = input("Ingredients: ").rstrip("\n")
    if first.strip() == "":
        ingredients = []
    else:
        lines.append(first)
        while True:
            more = input()
            if more.strip() == "":
                break
            lines.append(more)
        ingredients = (
            parse_ingredients("\n".join(lines))
            if len(lines) > 1
            else parse_ingredients(lines[0])
        )

    instructions = prompt_nonempty("Instructions: ")
    recipe = {
        "id": gen_id(),
        "title": title,
        "author": author,
        "category": category,
        "ingredients": ingredients,
        "instructions": instructions,
    }
    recipes.append(recipe)
    save_recipes(recipes)
    print("Recipe added.\n")


def view_recipes(recipes):
    print("\n[All Recipes]")
    if not recipes:
        print("No recipes found.")
        return
    for r in recipes:
        print_recipe(r)


def search_recipes(recipes):
    print("\n[Search Recipes]")
    query = input("Search term (title or ingredient): ").strip().lower()
    if not query:
        print("Empty search; showing nothing.")
        return []
    hits = []
    for r in recipes:
        title_hit = query in r["title"].lower()
        ing_hit = any(query in ing.lower() for ing in r.get("ingredients", []))
        if title_hit or ing_hit:
            hits.append(r)

    if not hits:
        print("No matches.")
        return []

    print(f"Found {len(hits)} match(es):")
    for r in hits:
        print_recipe(r)
    return hits


def edit_recipe(recipes):
    print("\n[Edit Recipe]")
    recipe_id = input("Enter recipe ID to edit: ").strip()
    recipe = find_recipe_by_id(recipes, recipe_id)
    if not recipe:
        print("No recipe with that ID.")
        return

    print("Press Enter to keep the existing value.")
    recipe["title"] = (
        prompt_optional(f"Title [{recipe['title']}]: ", recipe["title"])
        or recipe["title"]
    )
    recipe["author"] = prompt_optional(
        f"Author [{recipe.get('author','')}]: ", recipe.get("author", "")
    )
    recipe["category"] = prompt_optional(
        f"Category [{recipe.get('category','')}]: ", recipe.get("category", "")
    )

    current_ingredients = ", ".join(recipe.get("ingredients", []))
    raw_ingredients = input(
        f"Ingredients (comma/newline) [{current_ingredients}]: "
    ).strip()
    if raw_ingredients:
        recipe["ingredients"] = parse_ingredients(raw_ingredients)

    instructions = input("Instructions (leave blank to keep current): ").strip()
    if instructions:
        recipe["instructions"] = instructions

    rating = input(f"Rating 1-5 (blank to keep {recipe.get('rating','-')}): ").strip()
    if rating:
        try:
            rating_int = int(rating)
            if 1 <= rating_int <= 5:
                recipe["rating"] = rating_int
            else:
                print("Ignored rating (must be 1-5).")
        except ValueError:
            print("Ignored rating (not a number).")

    save_recipes(recipes)
    print("Recipe updated.\n")


def delete_recipe(recipes):
    print("\n[Delete Recipe]")
    recipe_id = input("Enter recipe ID to delete: ").strip()
    recipe = find_recipe_by_id(recipes, recipe_id)
    if not recipe:
        print("No recipe with that ID.")
        return
    confirm = input(f"Delete '{recipe['title']}'? (y/N): ").strip().lower()
    if confirm == "y":
        recipes.remove(recipe)
        save_recipes(recipes)
        print("Deleted.\n")
    else:
        print("Cancelled.\n")


def menu():
    while True:
        print(
            """
  ____           _              __  __                                   
 |  _ \\ ___  ___(_)_ __   ___  |  \\/  | __ _ _ __   __ _  __ _  ___ _ __ 
 | |_) / _ \\/ __| | '_ \\ / _ \\ | |\\/| |/ _` | '_ \\ / _` |/ _` |/ _ \\ '__|
 |  _ <  __/ (__| | |_) |  __/ | |  | | (_| | | | | (_| | (_| |  __/ |   
 |_| \\_\\___|\\___|_| .__/ \\___| |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|   
                  |_|                                    |___/           
"""
        )

        print("1. Add recipe")
        print("2. View recipes")
        print("3. Search recipes")
        print("4. Edit recipe")
        print("5. Delete recipe")
        print("0. Exit")

        choice = input("Enter your choice (1-6): ")

        if choice == "1":
            add_recipe(recipes)
        elif choice == "2":
            view_recipes(recipes)
        elif choice == "3":
            search_recipes(recipes)
        elif choice == "4":
            edit_recipe(recipes)
        elif choice == "5":
            delete_recipe(recipes)
        elif choice == "0":
            break
        else:
            print("Invalid choice. Try again.")


if __name__ == "__main__":
    os.system("clear")
    recipes = load_recipes()

    try:
        menu()
    except KeyboardInterrupt:
        print("\nGoodbye!")
        sys.exit(0)
