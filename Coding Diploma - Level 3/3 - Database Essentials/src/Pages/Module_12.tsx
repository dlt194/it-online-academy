function Module_12() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Building a Simple Database Application for Data Analysis
        </h2>
        <div className="prose max-w-none">
          <ul className="list-decimal pl-6">
            <li>
              Define Requirements:
              <ul className="list-decimal pl-6">
                <p>
                  Identify the application's purpose and required features (e.g.
                  a simple sales data analysis tool.)
                </p>
              </ul>
            </li>
            <li>
              Design the Database:
              <ul className="list-decimal pl-6">
                <li>
                  Create tables, define relationships, and set constraints.
                </li>
                <li>Example schema for a sales data analysis tool:</li>
                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`CREATE TABLE sales (
  sale_id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  sale_date TEXT NOT NULL,
  amount REAL NOT NULL
);`}</pre>
                </code>
              </ul>
            </li>

            <li>
              Set Up the Development Environment:
              <ul className="list-decimal pl-6">
                <p>Install the necessary software (e.g., SQLite, Python)</p>
              </ul>
            </li>
            <li>
              Develop the Application:
              <ul className="list-decimal pl-6">
                <li>Connect to the database</li>
                <li>
                  Implement CRUD operations (Create, Read, Update, Delete)
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Example with Python & SQLite</h2>
          <ul className="list-decimal pl-6">
            <li>
              Connecting to the Database:
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`import sqlite3

def connect_to_db(db_name):
conn = sqlite3.connect(db_name)
return conn

conn = connect_to_db(sales_data.db')
cur = conn.cursor`}</pre>
              </code>
            </li>

            <li>
              Creating a Product Sale Record:
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`def create_sale(product_name, quantity, sale_date, amount):
  try:
    sql = "INSERT INTO sales (product_name, quantity, sale_date, amount)
      VALUES (?, ?, ?, ?)'"
    cur.execute(sql, (product_name, quantity, sale_date, amount))
    conn.commit(
    print("Sale record created successfully")
  except Exception as e:
    print(f"Error creating sale record: {e}")
    conn.rollback(

  create_sale(Product1', 100, '2023-01-01', 999.99)`}</pre>
              </code>
            </li>
            <li>
              Reading Sales Records:
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`def read_sales(:
  try:
    sql = "SELECT * FROM sales"
    cur.execute(sql)
    rows = cur.fetchall(
    for row in rows:
      print(f"id: {row[o]}, Product: {row[1]}, Quantity: {row[2]},
      Date: {row[3]}, Amount: {row[4]}")
  except Exception as e:
    print(f"Error reading sales records: {e}")

  read_sales()`}</pre>
              </code>
            </li>
            <li>
              Updating a Sale Record:
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`def update_sale(sale_id, product_name, quantity, sale_date, amount):
  try:
    sql = "UPDATE sales
      SET product_name =? , quantity = ?, sale_date = ?, amount = ?
      WHERE sale_id = ?"
    cur.execute(sql, (product_name, quantity, sale_date, amount, sale_id))
    conn.commit(
    print("Sale record updated successfully")
  except Exception as e:
    print(f"Error updating sale record: {e}")
    conn.rollback(

update_sale(1, 'Product1_updated', 150, '2023-01-02', 1200.99)`}</pre>
              </code>
            </li>
            <li>
              Deleting a Sale Record:
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`def delete_sale(sale_id):
  try:
    sql = "DELETE FROM sales WHERE sale_id = ?"
    cur.execute(sql, (sale_id,))
    conn.commit(
    print("Sale record deleted successfully")
  except Exception as e:
    print(f"Error deleting sale record: {e}")
    conn.rollback(

delete_sale(1)`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Building dynamic applications with data fetched from databases.
            </li>

            <li>Storing and retrieving sales data for analysis.</li>
            <li>
              Performing CRUD operations (Create, Read, Update, Delete) in
              applications.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Analysing and Optimising Queries
        </h2>
        <div className="prose max-w-none">
          <ul className="list-decimal pl-6">
            <li>
              Profile Queries:
              <p>
                Use tools like EXPLAIN to understand how queries are executed.
              </p>
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`EXPLAIN QUERY PLAN SELECT * FROM sales WHERE
product_name = 'Productl';`}</pre>
              </code>
            </li>

            <li>
              Identify Bottlenecks:
              <ul className="list-disc pl-6">
                <li>
                  Look for slow-running queries, large scans, and inefficient
                  joins.
                </li>
                <li>Use indexes to improve query performance.</li>
              </ul>
            </li>

            <li>
              Optimise Queries:
              <ul className="list-disc pl-6">
                <li>
                  Avoid using SELECT *; specify only the necessary columns.
                </li>
                <li>Use appropriate indexes.</li>
                <li>Optimise joins and subqueries.</li>
                <li>Use proper filtering in WHERE clauses.</li>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Examples of Query Optimisation</h2>
          <ul className="list-decimal pl-6">
            <li>
              Using Indexes
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE INDEX idx_product_name ON sales (product_name)`}</pre>
              </code>
            </li>
            <li>
              Optimising a Query
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`SELECT product_name, quantity, amount FROM sales WHERE product_name = 'Product1';`}</pre>
              </code>
            </li>
            <li>
              Using Joins efficiently
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`SELECT s.product_name, s.quantity, c.customer_name
FROM sales s
JOIN customers c ON s.customer_id = c.customer_id
WHERE s.amount > 100;`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Improving the performance of frequently executed queries.</li>{" "}
            <li>
              Ensuring the database can handle high transaction volumes
              efficiently.
            </li>
            <li>
              Reducing resource consumption and improving overall system
              responsiveness.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Module_12;
