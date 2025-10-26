import os
import json
import uuid

DATA_DIR = "data"
DATA_FILE = os.path.join(DATA_DIR, "recipes.json")


def _ensure_storage():
    """Ensure the data directory exists."""
    os.makedirs(DATA_DIR, exist_ok=True)


def load_recipes():
    """Load recipes from JSON file. Return [] if missing or invalid."""
    _ensure_storage()
    if not os.path.exists(DATA_FILE):
        return []
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, list):
                return data
            return []
    except json.JSONDecodeError:
        # Corrupt file: back it up and start fresh
        backup = DATA_FILE + ".corrupt.backup"
        try:
            os.replace(DATA_FILE, backup)
            print(f"[WARN] Corrupt JSON moved to {backup}")
        except OSError:
            print("[WARN] Could not back up corrupt JSON.")
        return []
    except OSError as e:
        print(f"[ERROR] Could not read data file: {e}")
        return []


def save_recipes(recipes):
    """Save recipes list to JSON file."""
    _ensure_storage()
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(recipes, f, ensure_ascii=False, indent=2)
    except OSError as e:
        print(f"[ERROR] Could not write data file: {e}")


def save_recipes(recipes):
    """Save recipes list to JSON file."""
    _ensure_storage()
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(recipes, f, ensure_ascii=False, indent=2)
    except OSError as e:
        print(f"[ERROR] Could not write data file: {e}")


def gen_id() -> str:
    """Generate a short unique ID."""
    return uuid.uuid4().hex[:8]


def print_recipe(recipe):
    """Pretty print a recipe."""
    print("-" * 50)
    print(f"ID:         {recipe['id']}")
    print(f"Title:      {recipe['title']}")
    print(f"Author:     {recipe.get('author', '—')}")
    print(f"Category:   {recipe.get('category', '—')}")
    rating = recipe.get("rating")
    print(f"Rating:     {rating if rating is not None else '—'}")
    print("\nIngredients:")
    for i, item in enumerate(recipe.get("ingredients", []), 1):
        print(f"  {i}. {item}")
    print("\nInstructions:")
    print(recipe.get("instructions", "—"))
    print("-" * 50)


def find_recipe_by_id(recipes, recipe_id):
    for recipe in recipes:
        if recipe["id"] == recipe_id:
            return recipe
    return None


def prompt_nonempty(prompt):
    """Prompt until non-empty input is given (stripped)."""
    while True:
        s = input(prompt).strip()
        if s:
            return s
        print("Please enter a non-empty value.")


def prompt_optional(prompt, default):
    """Prompt allowing empty to keep default (if provided)."""
    s = input(prompt).strip()
    if s == "" and default is not None:
        return default
    return s


def parse_ingredients(raw):
    """
    Turn a comma-separated line into a list of ingredients.
    - Accepts comma or newline separated input
    - Trims each item and drops empties
    """
    if "\n" in raw:
        parts = [p.strip() for p in raw.splitlines()]
    else:
        parts = [p.strip() for p in raw.split(",")]
    return [p for p in parts if p]
