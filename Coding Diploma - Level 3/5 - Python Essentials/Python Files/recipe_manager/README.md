## Recipe Manager (CLI)

A tiny command-line app to add, view, search, edit, and delete recipes.

Features:

- JSON persistence in ./data/recipes.json
- Add / View / Search (by title or ingredients) / Edit / Delete
- Input validation and graceful error handling
- Simple IDs for editing/deleting
- Optional fields: category and rating (bonus)

## Project structure (create this):

.
├── data
│   └── recipes.json
├── recipe_manager.py
├── utilities
│   └── utils.py

Usage:
python recipe_manager.py or python3 recipe_manager.py
