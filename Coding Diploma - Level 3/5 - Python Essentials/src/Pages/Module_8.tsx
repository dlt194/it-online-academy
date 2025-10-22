function Module_8() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Python Tuples</h2>
        <div className="prose max-w-none">
          <p>Tuples are used to store multiple items in a single variable.</p>

          <p>
            Tuple is one of 4 built-in data types in Python used to store
            collections of data, the other 3 are List, Set, and Dictionary, all
            with different qualities and usage.
          </p>

          <p>A tuple is a collection which is ordered and unchangeable.</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`myTuple = ("apple", "banana", "cherry")`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Tuple Items</h2>
          <p>
            Tuple items are ordered, unchangeable, and allow duplicate values.
          </p>

          <p>
            Tuple items are indexed, the first item has index{" "}
            <code className="bg-gray-100 text-red-500">[0]</code>, the second
            item has index <code className="bg-gray-100 text-red-500">[1]</code>{" "}
            etc.
          </p>
          <p>
            When we say that tuples are ordered, it means that the items have a
            defined order, and that order will not change.
          </p>
          <p>
            Tuples are unchangeable, meaning that we cannot change, add or
            remove items after the tuple has been created.
          </p>
          <p>
            Since tuples are indexed, they can have items with the same value:
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`myTuple = ("apple", "banana", "cherry", "apple", "cherry")`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Iterating Over a Tuple
        </h2>
        <div className="prose max-w-none">
          <p>
            You can interate through the elements of a tuple using a{" "}
            <code className="bg-gray-100 text-red-500 mr-1">for</code>loop.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`myTuple = ("apple", "banana", "cherry", "apple", "cherry")
for x in myTuple:
  print(x)
  
# Output
apple
banana
cherry
apple
cherry
`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Tuple Methods</h2>
        <div className="prose max-w-none">
          <p>Python has two built-in methods that you can use on tuples.</p>
          <br />
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">count()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns the number of times a specified value occurs in a
                  tuple
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = thistuple.count(5)
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  <span className="text-indigo-700 font-medium">index()</span>
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Searches the tuple for a specified value and returns the
                  position of where it was found
                </td>
                <td className="px-4 py-2 text-sm text-slate-700 font-mono">
                  x = thistuple.index(8)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Python Sets</h2>
        <div className="prose max-w-none">
          <p>Sets are used to store multiple items in a single variable.</p>

          <p>
            Set is one of 4 built-in data types in Python used to store
            collections of data, the other 3 are List, Tuple, and Dictionary,
            all with different qualities and usage.
          </p>

          <p>
            A set is a collection which is unordered, unchangeable*, and
            unindexed.
          </p>
          <br />
          <p>
            <strong className="mr-1 italic">Note:</strong>Set items are
            unchangeable, but you can remove items and add new items.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`mySet = {"apple", "banana", "cherry"}`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Set Items</h2>
          <p>
            Set items are unordered, unchangeable, and do not allow duplicate
            values.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Unordered</h2>
          <p>
            Unordered means that the items in a set do not have a defined order.
          </p>
          <p>
            Set items can appear in a different order every time you use them,
            and cannot be referred to by index or key.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Unchangeable</h2>
          <p>
            Set items are unchangeable, meaning that we cannot change the items
            after the set has been created.
          </p>
          <br />
          <br />
          <h2 className="font-semibold pb-2">Duplicates Not Allowed</h2>
          <p>Sets cannot have two items with the same value.</p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`mySet = {"apple", "banana", "cherry", "apple"}

print(mySet)

# Output
{'cherry', 'apple', 'banana'}`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Set Operations</h2>
        <div className="prose max-w-none">
          <p>
            Sets support various operations, such as union, intersection,
            difference and symmetric difference.
          </p>{" "}
          <br />
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  add()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Adds an element to the set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  clear()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes all the elements from the set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  copy()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a copy of the set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  difference()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">-</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a set containing the difference between two or more
                  sets
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  difference_update()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">-=</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes the items in this set that are also included in
                  another, specified set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  discard()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes the specified item
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  intersection()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&amp;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns the intersection of two or more sets
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  intersection_update()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&amp;=</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Keeps only the items present in all specified set(s)
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  isdisjoint()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns whether two sets have an intersection or not
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  issubset()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&le;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  True if all items of this set are present in another set
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  (proper subset)
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&lt;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  True if all items of this set are present in another, larger
                  set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  issuperset()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&ge;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  True if all items of another set are present in this set
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  (proper superset)
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&gt;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  True if all items of another, smaller set are present in this
                  set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  pop()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes and returns an arbitrary element from the set
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  remove()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700"></td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Removes the specified element (raises KeyError if not present)
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  symmetric_difference()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">^</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a set with the symmetric difference of two sets
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  symmetric_difference_update()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">^=</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Updates the set with the symmetric difference of this set and
                  another
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  union()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">|</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a set containing the union of sets
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  update()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">|=</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Updates the set with the union of this set and others
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Frozen Sets</h2>
        <div className="prose max-w-none">
          <p>
            <code className="bg-gray-100 text-red-500 mr-1">frozenset</code>is
            an immutable version of a set
          </p>
          <p>
            Like sets, it contains unique, unordered, unchangeable elements.
          </p>
          <p>
            Unlike sets, elements cannot be added or removed from a frozenset.
          </p>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`x = frozenset({"apple", "banana", "cherry"})
print(x)
print(type(x))

# Output
frozenset({'cherry', 'apple', 'banana'})
<class 'frozenset'>
`}</pre>
          </code>
          <br />
          <p>
            Being immutable means you cannot add or remove elements. However,
            frozensets support all non-mutating operations of sets.
          </p>
          <br />
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Operator
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  copy()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&mdash;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a shallow copy
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  difference()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">-</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a new frozenset with the difference
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  intersection()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&amp;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a new frozenset with the intersection
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  isdisjoint()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">&mdash;</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns whether two frozensets have an intersection
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  issubset()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  &le; / &lt;
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if this frozenset is a (proper) subset of another
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  issuperset()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  &ge; / &gt;
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns True if this frozenset is a (proper) superset of
                  another
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  symmetric_difference()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">^</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a new frozenset with the symmetric differences
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-4 py-2 font-mono text-sm text-slate-800">
                  union()
                </td>
                <td className="px-4 py-2 text-sm text-slate-700">|</td>
                <td className="px-4 py-2 text-sm text-slate-700">
                  Returns a new frozenset containing the union
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Project: Student Record Management System
        </h2>
        <div className="prose max-w-none">
          <code>
            <pre className="bg-gray-100 p-4 rounded">{`students = (
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
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_8;
