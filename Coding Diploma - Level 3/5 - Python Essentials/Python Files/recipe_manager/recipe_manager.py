import sys

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
    author = prompt_optional("Author (optional): ")
    category = prompt_optional("Category (optional): ")

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
    q = input("Search term (title or ingredient): ").strip().lower()
    if not q:
        print("Empty search; showing nothing.")
        return []
    hits = []
    for r in recipes:
        title_hit = q in r["title"].lower()
        ing_hit = any(q in ing.lower() for ing in r.get("ingredients", []))
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
    rid = input("Enter recipe ID to edit: ").strip()
    r = find_recipe_by_id(recipes, rid)
    if not r:
        print("No recipe with that ID.")
        return

    print("Press Enter to keep the existing value.")
    r["title"] = prompt_optional(f"Title [{r['title']}]: ", r["title"]) or r["title"]
    r["author"] = prompt_optional(
        f"Author [{r.get('author','')}]: ", r.get("author", "")
    )
    r["category"] = prompt_optional(
        f"Category [{r.get('category','')}]: ", r.get("category", "")
    )

    current_ings = ", ".join(r.get("ingredients", []))
    raw_ings = input(f"Ingredients (comma/newline) [{current_ings}]: ").strip()
    if raw_ings:
        r["ingredients"] = parse_ingredients(raw_ings)

    instr = input("Instructions (leave blank to keep current): ").strip()
    if instr:
        r["instructions"] = instr

    rraw = input(f"Rating 1-5 (blank to keep {r.get('rating','—')}): ").strip()
    if rraw:
        try:
            rint = int(rraw)
            if 1 <= rint <= 5:
                r["rating"] = rint
            else:
                print("Ignored rating (must be 1-5).")
        except ValueError:
            print("Ignored rating (not a number).")

    save_recipes(recipes)
    print("Recipe updated.\n")


def delete_recipe(recipes):
    print("\n[Delete Recipe]")
    rid = input("Enter recipe ID to delete: ").strip()
    r = find_recipe_by_id(recipes, rid)
    if not r:
        print("No recipe with that ID.")
        return
    confirm = input(f"Delete '{r['title']}'? (y/N): ").strip().lower()
    if confirm == "y":
        recipes.remove(r)
        save_recipes(recipes)
        print("Deleted.\n")
    else:
        print("Cancelled.\n")


def menu():
    recipes = load_recipes()

    actions = {
        "1": ("Add recipe", add_recipe),
        "2": ("View all recipes", view_recipes),
        "3": ("Search recipes", search_recipes),
        "4": ("Edit recipe", edit_recipe),
        "5": ("Delete recipe", delete_recipe),
        "0": ("Exit", None),
    }

    while True:
        print("\n=== Recipe Manager ===")
        for key in ["1", "2", "3", "4", "5", "0"]:
            print(f"{key}) {actions[key][0]}")
        choice = input("Choose an option: ").strip()

        if choice == "0":
            break

        action = actions.get(choice)
        if not action:
            print("Invalid option.")
            continue

        func = action[1]
        # Some actions (like search) return data but we don't need it for the menu loop
        try:
            func(recipes)  # type: ignore[arg-type]
        except KeyboardInterrupt:
            print("\n[Interrupted]")
        except Exception as e:
            print(f"[ERROR] {e}")


if __name__ == "__main__":

    try:
        menu()
    except KeyboardInterrupt:
        print("\nGoodbye!")
        sys.exit(0)
