function Module_6() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Booleans
        </h2>
        <div className="prose max-w-none">
          <p>
            Booleans represent one of two values:{" "}
            <code className="bg-gray-100 text-red-500">True</code> or{" "}
            <code className="bg-gray-100 text-red-500">False</code>
          </p>
          <p>
            In programming you often need to know if an expression is{" "}
            <code className="bg-gray-100 text-red-500">True</code> or{" "}
            <code className="bg-gray-100 text-red-500">False</code>. You can
            evaluate any expression in Python, and get one of two answers,{" "}
            <code className="bg-gray-100 text-red-500">True</code> or{" "}
            <code className="bg-gray-100 text-red-500">False</code>. When you
            compare two values, the expression is evaluated and Python returns
            the Boolean answer:
          </p>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`print(10 > 9)
print(10 == 9)
print(10 < 9)

# Output
True
False
False `}</pre>
          </code>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Combining Booleans with Conditional Statements
        </h2>
        <div className="prose max-w-none">
          <p>
            Booleans are commonly used in conditional statements to control
            program flow.
          </p>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`if x > y:
  print("x is greater than y")
else:
  print("x is not greater than y")`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Understanding Boolean Functions
        </h2>
        <div className="prose max-w-none">
          <p>
            You can define functions that return boolean values based on certain
            conditions.
          </p>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`def is_even(number):
  return number % 2 == 0
  
  
result = is_even(6)
print(result)

# Output
True`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Evaluating Values using Boolean Function
        </h2>
        <div className="prose max-w-none">
          <p>
            The <code className="bg-gray-100 text-red-500">bool()</code>{" "}
            function allows you to evaluate any value, and give you{" "}
            <code className="bg-gray-100 text-red-500">True</code> or{" "}
            <code className="bg-gray-100 text-red-500">False</code> in return,
          </p>
          <br />
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`print(bool("Hello"))
print(bool(15))

# Output
True
True`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Demonstrate your understanding of Booleans
        </h2>
        <div className="prose max-w-none">
          <code className="">
            <pre className="bg-gray-100 p-4 rounded">{`action = input("Do you like action movies? (yes/no): ").lower() == "yes"
comedy = input("Do you like comedy movies? (yes/no): ").lower() == "yes"
drama = input("Do you like drama movies? (yes/no): ").lower() == "yes"


if action and comedy and not drama:
    genre = "Action-Comedy"
elif action and drama and not comedy:
    genre = "Action-Drama"
elif comedy and drama and not action:
    genre = "Comedy-Drama"
elif action:
    genre = "Action"
elif comedy:
    genre = "Comedy"
elif drama:
    genre = "Drama"
else:
    genre = "Unknown"


if genre == "Action-Comedy":
    print("Recommended movies: 'Rush Hour', 'Bad Boys', 'The Nice Guys'")
elif genre == "Action-Drama":
    print("Recommended movies: 'The Dark Knight', 'Inception', 'John Wick'")
elif genre == "Comedy-Drama":
    print(
        "Recommended movies: 'The Big Sick', 'Little Miss Sunshine', 'The Intouchables'"
    )
elif genre == "Action":
    print("Recommended movies: 'Die Hard', 'The Matrix', 'Mission: Impossible'")
elif genre == "Comedy":
    print("Recommended movies: 'The Hangover', 'Superbad', 'Bridesmaids'")
elif genre == "Drama":
    print(
        "Recommended movies: 'The Shawshank Redemption', 'Forrest Gump', 'The Green Mile'"
    )
else:
    print("Sorry, we couldn't determine your movie preferences.")
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_6;
