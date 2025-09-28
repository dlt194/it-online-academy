function Module_3() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          SELECT Statements
        </h2>
        <div className="prose max-w-none">
          <p>
            The SELECT statement is one of the fundamental SQL commands,
            primarily used to retrieve data from a database table(s).
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2, ...
FROM table_name;
              `}
            </pre>
          </code>

          <p>
            column1, column2, ... : The specific columns you want to retrieve
            data from.
          </p>

          <p>
            table_name: The name of the table from which data is being
            retrieved.
          </p>
          <p>
            The basic SELECT statement retrieves specific columns from a
            specified table in the database.
          </p>
          <br />
          <hr className="py-2" />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM table_name;
              `}
            </pre>
          </code>
          <br />
          <p>To select all columns from the table, use the * wildcard.</p>
          <br />
          <hr className="py-2" />
          <p>To retrieve unique values, use the DISTINCT keyword.</p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT DISTINCT column1
FROM table_name;
              `}
            </pre>
          </code>
          <br />
          <p>
            DISTINCT ensures that only unique values are returned, removing any
            duplicates.
          </p>
          <br />
          <hr className="py-2" />
          <p>
            To filter rows based on specific conditions, use the WHERE clause.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
WHERE condition;
              `}
            </pre>
          </code>
          <p>
            The WHERE clause filters rows based on the specified condition,
            allowing you to retrieve only the rows that meet the critera.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">
            Common Operators in the WHERE clause
          </h2>
          <ul className="list-disc pl-6">
            <li>
              =, &lt;&gt; or != , &gt;, &lt;, &gt;=, =: Standard comparison
              operators.
            </li>
            <li>
              BETWEEN ... AND ...: Filters for values within a specified range.
            </li>
            <li>LIKE: Matches patterns using wildcards % and _.</li>{" "}
            <li>IN: Matches any value in a specified list.</li>{" "}
            <li>IS NULL / IS NOT NULL: Checks for null values.</li>
          </ul>
          <br />
          <hr className="py-2" />
          <p>
            To combine multiple conditions, use logical operators such as AND,
            OR and NOT
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
WHERE condition1 AND condition2;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <p>To sort the results, use the ORDER BY clause</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC, column2 DESC;
              `}
            </pre>
          </code>
          <p>
            ORDER BY sorts the result set based on the specified column(s),
            either in ascending (ASC) or descending (DESC) order.
          </p>
          <br />
          <hr className="py-2" />
          <p>To limit the number of rows returned, use the LIMIT clause.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
LIMIT number;
              `}
            </pre>
          </code>
          <p>
            LIMIT restricts the number of rows returned by the query to the
            specified number.
          </p>
          <br />
          <hr className="py-2" />
          <p>To rename columns or tables in the result set, use aliases.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1 AS alias_name
FROM table_name AS alias_name;
              `}
            </pre>
          </code>
          <p>
            Aliases provide alternative names for columns or tables in the
            result set, improving readability or handling duplicate column
            names.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Filtering Data with WHERE Clauses
        </h2>
        <div className="prose max-w-none">
          <p>
            The WHERE clause is used in SQL to filter records that meet a
            specific condition.
          </p>
          <p>
            It can be used in conjuntion with the SELECT, UPDATE, DELETE and
            other SQL commands to narrow down the results to only those records
            that fulfil the criteria specified.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
WHERE condition;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Filtering by a Single Condition</h2>
          <p>To select specific rows based on a single condition</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE department = 'Sales';
              `}
            </pre>
          </code>
          <p>
            This query selects the first_name and last_name of employees who
            work in the Sales department.
          </p>
          <hr className="py-2" />
          <h2 className="font-semibold">Using Comparison Operators</h2>
          <p>
            You can use various comparison operators such as =, &lt;&gt; (not
            equal), &gt;, &lt;, &gt;= and &lt;=
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE salary > 50000;
              `}
            </pre>
          </code>
          <p>
            This query retrieves the first_name and last_name of employees whose
            salary is greater than 50,000
          </p>
          <hr className="py-2" />
          <h2 className="font-semibold">
            Filtering by using Multiple Conditions
          </h2>
          <p>
            To filter records based on multiple conditions, you can use AND or
            OR operators
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE department = 'Sales' AND salary > 50000;
              `}
            </pre>
          </code>
          <p>
            This query selects employees who work in the 'Sales' department and
            have a salary greater than 50,000.
          </p>
          <hr className="py-2" />
          <h2 className="font-semibold">Using the BETWEEN Operator</h2>
          <p>The BETWEEN operator is used to filter records within a range.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE salary BETWEEN 40000 AND 60000;
              `}
            </pre>
          </code>
          <p>
            This query selects the first_name and last_name of employees whose
            salary is between 40,000 and 60,000.
          </p>
          <hr className="py-2" />
          <h2 className="font-semibold">Using the IN Operator</h2>
          <p>
            The IN operator allows you to specify multiple values in a WHERE
            clause.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE department IN ('Sales', 'Marketing', 'HR');
              `}
            </pre>
          </code>
          <p>
            This query selects the first_name and last_name of employees who
            work in the 'Sales', 'Marketing', or 'HR' departments.
          </p>
          <hr className="py-2" />
          <h2 className="font-semibold">Using the LIKE Operator</h2>
          <p>
            The LIKE operator is used for pattern matching with wildcard
            characters (% for zero or more characters, _ for a single
            character).
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE first_name LIKE 'D%';
              `}
            </pre>
          </code>
          <p>
            This query selects the first_name and last_name of employees whos
            first name starts with 'D'.
          </p>
          <hr className="py-2" />
          <h2 className="font-semibold">Using IS NULL & IS NOT NULL</h2>
          <p>To filter records with null values</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE manager_id IS NULL;
              `}
            </pre>
          </code>
          <p>
            This query selects the first_name and last_name of employees who do
            not have a manager, i.e. their manager_id is NULL.
          </p>
          <br />
          <p>To filter records with not null values</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
WHERE manager_id IS NOT NULL;
              `}
            </pre>
          </code>
          <p>
            This query selects the first_name and last_name of employees who do
            have a manager, i.e. their manager_id is NOT NULL.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Sorting Data with ORDER BY
        </h2>
        <div className="prose max-w-none">
          <p>
            The ORDER BY clause in SQL is used to sort the result set of a query
            by one or more columns.
          </p>
          <p>
            Sorting can be done in ascending (ASC) or descending (DESC) order.
            By default, sorting is in ascending order if no specific order is
            mentioned.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Basic Syntax</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC, column2 DESC;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Sorting by a Single Column</h2>
          <p>
            To sort the result set by a single column in ascending order
            (default)
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
ORDER BY last_name;
              `}
            </pre>
          </code>
          <p>
            This query sorts the employees by their last_name in ascending
            order.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Sorting by Multiple Columns</h2>
          <p>
            You can sort the result set by multiple columns. the sorting is
            performed based on the order of the columns specified.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name, department
from employees
ORDER BY department ASC, last_name DESC;
              `}
            </pre>
          </code>
          <p>
            This query sorts the employees first by department in ascending
            order, then by last_name in descending order within each department.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">
            Sorting by Columns Not in the SELECT Clause
          </h2>
          <p>
            You can sort the result set by columns that are not included in the
            SELECT clause
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
ORDER BY hire_date;
              `}
            </pre>
          </code>
          <p>
            This query sorts the employees by their hire_date, even though
            hire_date is not included in the selected columns.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Using Aliases in ORDER BY</h2>
          <p>
            If you use column aliases in the SELECT clause, you can refer to
            those aliases in the ORDER BY clause.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name, salary AS annual_salary
FROM employees
ORDER BY annual_salary DESC;
              `}
            </pre>
          </code>
          <p>
            This query sorts the employees by their annual_salary in descending
            order, using the alias defined in the SELECT clause.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Ordering by Expressions</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name, (salary + bonus) AS total_compensation
FROM employees
ORDER BY total_compensation DESC;
              `}
            </pre>
          </code>
          <p>
            This query sorts the employees by their total_compensation (sum of
            salary and bonus) in descending order.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">
            Combining ORDER BY with Other Clauses
          </h2>
          <p>
            The ORDER BY clause can be used in conjunction with other clauses
            like WHERE and LIMIT
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name, salary
FROM employees
WHERE department = 'Sales'
ORDER BY salary DESC;
              `}
            </pre>
          </code>
          <p>
            This query selects employees from the 'Sales' department and sorts
            them by salary in descending order.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Limiting Results with LIMIT/OFFSET
        </h2>
        <div className="prose max-w-none">
          <p>
            The LIMIT and OFFSET clauses in SQL are used to constrain the number
            of rows returned by a query.
          </p>
          <p>
            These clauses are particularly useful for pagination, where you only
            want to retrieve a specific subset of results.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, column2
FROM table_name
LIMIT number_of_rows OFFSET offset_value;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Limiting the Number of Results</h2>
          <p>To retrieve a specific number of rows from a query result</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
LIMIT 5;
              `}
            </pre>
          </code>
          <p>This query returns the first 5 rows from the employees table.</p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Using OFFSET for Pagination</h2>
          <p>
            The OFFSET clause is used to skip a specified number of rows before
            beggining to return rows
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
LIMIT 5 OFFSET 10;
              `}
            </pre>
          </code>
          <p>
            This query skips the first 10 rows and returns the next 5 rows from
            the employees table.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">
            Combining ORDER BY with LIMIT/OFFSET
          </h2>
          <p>
            It's common to use ORDER BY with LIMIT and OFFSET to sort the
            results before limiting the number of rows.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
ORDER BY hire_date DESC
LIMIT 5;
              `}
            </pre>
          </code>
          <p>This query returns the 5 most recently hired employees.</p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
ORDER BY hire_date DESC
LIMIT 5 OFFSET 5;
              `}
            </pre>
          </code>
          <p>
            This query skips the first 5 most recently hired employees and then
            returns the next 5.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">
            Using LIMIT with OFFSET in Different Databases
          </h2>
          <p>MySQL, PostgreSQL, SQLite</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
LIMIT 5 OFFSET 10;
              `}
            </pre>
          </code>
          <br />
          <p>SQL Server</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
ORDER BY hire_date
OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY;
              `}
            </pre>
          </code>
          <br />
          <p>Oracle</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM employees
ORDER BY hire_date
OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY;
              `}
            </pre>
          </code>

          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Using ROWNUM in Oracle</h2>
          <p>
            In Oracle, before version 12c, the ROWNUM pseudocolumn was used to
            limit the number of rows
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT first_name, last_name
FROM (SELECT first_name, last_name FROM employees ORDER BY hire_date)
WHERE ROWNUM <= 5;
              `}
            </pre>
          </code>
          <p>
            This query returns the first 5 rows of employees ordered by
            hire_date.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold">Top N Rows in SQL Server</h2>
          <p>SQL Server uses the TOP keyword to limit the number of rows</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT TOP 5 first_name, last_name
FROM employees
ORDER BY hire_date DESC;
              `}
            </pre>
          </code>
          <p>
            This query returns the top 5 rows based on the hire_date in
            descending order.
          </p>
          <br />
          <hr className="py-2" />
          <p>
            The LIMIT and OFFSET clauses are essential for controlling the
            number of rows returned by a query, which is particularly useful for
            implementing pagination in applications.
          </p>
          <p>
            Different SQL databases may have variations in syntax, but the basic
            concept remains the same: LIMIT restricts the number of rows, and
            OFFSET specifies the starting point for the rows to be returned.
          </p>
        </div>
      </section>
    </>
  );
}

export default Module_3;
