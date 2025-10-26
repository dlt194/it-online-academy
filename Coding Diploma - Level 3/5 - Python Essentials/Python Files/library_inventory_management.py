class Book:
    def __init__(self, title, author, available=True):
        self.title = title
        self.author = author
        self.available = available


class Library:
    def __init__(self):
        self.books = []

        def addBook(self, book):
            self.books.append(book)

        def searchAuthor(self, query):
            q = query.lower()
            return [b for b in self.books if q in b.author.lower()]

        def searchTitle(self, query):
            q = query.lower()
            return [b for b in self.books if q in b.title.lower()]

        def updateAvailability(self, title, available):
            update_book = lambda book: (
                setattr(book, "available", available)
                if book.title.lower() == title.lower()
                else None
            )
            list(map(update_book, self.books))


books = [
    Book("Nineteen Eighty-Four", "George Orwell"),
    Book("War and Peace", "Leo Tolstoy"),
    Book("Odyssey", "Homer"),
    Book("Resurrection", "Leo Tolstoy"),
]

library = Library()

for book in books:
    library.add_book(book)


print("Books with Title 'Odyssey':")
for book in library.search_by_title("Odyssey"):
    print(f"- {book.title} by {book.author}")

print("Books by Author 'Leo Tolstoy':")
for book in library.search_by_author("Leo Tolstoy"):
    print(f"- {book.title} by {book.author}")

library.update_availability("War and Peace", False)

print("\nAvailability of 'War and Peace':")
for book in library.search_by_title("War and Peace"):
    print(f"- {book.title} is {'available' if book.available else 'not available'}")
