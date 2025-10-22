students = (
    ("Bill", 30, "D"),
    ("Bob", 30, "B"),
    ("Alice", 24, "A"),
    ("Yvonne", 26, "E"),
    ("Ben", 31, "A"),
    ("Sara", 22, "D"),
    ("Jack", 28, "B"),
    ("Dan", 18, "A"),
    ("John", 20, "C"),
    ("Sam", 16, "F"),
)

names = tuple(name for name, age, grade in students)

print(f"Number of Students: {len(students)}")
print(f"Index of Dan: {names.index("Dan")}\n")


studentIds = {100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110}
courses = {"English", "Biology", "Chemistry", "Physics", "IT", "Maths"}

print(f"Student IDs: {studentIds}")
print(f"Courses: {courses}")

newStudentIds = {111, 112, 113, 114, 115}
studentIds.update(newStudentIds)
print(f"Updated Student IDs: {studentIds}\n")


completedCourses = {"English", "IT", "Chemistry"}
remainingCourses = courses - completedCourses
print(f"Remaining Courses: {remainingCourses}\n")

frozenCourses = frozenset(["Biology", "Physics"])
print(f"Frozen Courses: {frozenCourses}\n")

frozenStudents = frozenset(students)
print(f"Frozen Student Data: {frozenStudents}")
