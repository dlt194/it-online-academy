## Recipe Manager (CLI)

A tiny command-line app to add, view, search, edit, and delete recipes.

Features:

- JSON persistence in ./data/recipes.json
- Add / View / Search (by title or ingredients) / Edit / Delete
- Input validation and graceful error handling
- Simple IDs for editing/deleting
- Optional fields: category and rating (bonus)

Project structure (create this):
.
├─ recipe_manager.py
└─ data/
└─ recipes.json (auto-created on first save)

Usage:
python recipe_manager.py
