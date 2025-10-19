function Module_4() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Advanced SQL Commands Aggregate Functions
        </h2>
        <div className="prose max-w-none">
          <p>
            Aggregate functions in SQL are used to perform calculations on a set
            of values and return a single value.
          </p>
          <p>
            They are commonly used in conjunction with the GROUP BY clause to
            summarise data across groups.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">SUM()</h2>
          <p className="pb-2">
            The SUM function returns the total sum of a numeric column.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT SUM(salary)
FROM employees
WHERE department = 'Sales';
              `}
            </pre>
          </code>
          <p>
            This query calculates the total salary of employees in the Sales
            department.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">AVG()</h2>
          <p className="pb-2">
            The AVG function returns the average value of a numeric column.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT AVG(salary)
FROM employees
WHERE department = 'Sales';
              `}
            </pre>
          </code>
          <p>
            This query calculates the average salary of employees in the Sales
            department.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">COUNT()</h2>
          <p className="pb-2">
            The COUNT function returns the number of rows that match a specified
            condition.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT COUNT(DISTINCT department)
FROM employees;
              `}
            </pre>
          </code>
          <p>
            This query counts the number of distinct departments in the
            employees table.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">MIN()</h2>
          <p className="pb-2">
            The MIN function returns the smallest value in a numeric column.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT MIN(salary)
FROM employees
WHERE department = 'Sales';
              `}
            </pre>
          </code>
          <p>
            This query returns the smallest salary in the 'Sales' department.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">MAX()</h2>
          <p className="pb-2">
            The MAX function returns the largest value in a numeric column.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT MAX(salary)
FROM employees
WHERE department = 'Sales';
              `}
            </pre>
          </code>
          <p>
            This query returns the largest salary in the 'Sales' department.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            Using Aggregate Functions with GROUP BY
          </h2>
          <p className="pb-2">
            The GROUP BY clause groups rows that have the same values in
            specified columns into aggregated data. Aggregate functions are then
            applied to each group.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
              `}
            </pre>
          </code>
          <p>
            This query calculates the average salary for each department by
            grouping the results by the department column.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Combining Aggregate Functions</h2>
          <p className="pb-2">
            You can combine multiple aggregate functions in a single query to
            get a comprehensive summary of your data.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT department, COUNT(*), AVG(salary), MIN(salary), MAX(salary)
FROM employees
GROUP BY department;
              `}
            </pre>
          </code>
          <p>
            This query provides a count of employees, average salary, minimum
            salary, and maximum salary for each department.
          </p>
          <br />
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Grouping Data with GROUP BY
        </h2>
        <div className="prose max-w-none">
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT column1, aggregate_function(column2)
FROM employees
WHERE condition
GROUP BY column1;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Group Data by a Single Column</h2>
          <p className="pb-2">
            To group data by a single column and perform aggregate functions
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
              `}
            </pre>
          </code>
          <p>
            This query groups the employees by their department and counts the
            number of employees in each department.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Group Data by Multiple Columns</h2>
          <p className="pb-2">
            You can also group data by multiple columns, creating nested groups.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT department, COUNT(*)
FROM employees
GROUP BY department, gender;
              `}
            </pre>
          </code>
          <p>
            This query groups employees first by department and then by gender,
            providing a count of employees for each department-gender
            combination.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Filtering Groups with HAVING</h2>
          <p className="pb-2">
            The HAVING clause is used to filter groups based on aggregate
            values.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;
              `}
            </pre>
          </code>
          <p>
            This query calculates the average salary for each department and
            filters out departments where teh average salary is greater than
            50,000.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Grouping by Expressions</h2>
          <p className="pb-2">
            You can also group data by expressions or computed values.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT YEAR(hire_date) as hire_year, COUNT(*)
FROM employees
GROUP BY YEAR(hire_date);
              `}
            </pre>
          </code>
          <p>
            This query groups employees first by the year they were hired,
            extracting the year from the hire_date column.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Using GROUP BY with ORDER BY</h2>
          <p className="pb-2">
            You can combine GROUP BY with ORDER BY to sort the groups based on
            aggregate values.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;
              `}
            </pre>
          </code>
          <p>
            This query calculates the average salary for each department and
            orders the results by average salary in descending order.
          </p>
          <br />
          <hr className="py-2" />
          <p>
            The GROUP BY clause is a powerful tool in SQL for summarizing and
            analysing data by creating groups based on specified columns.
          </p>

          <p>
            When combined with aggregate functions like COUNT, SUM, AVG, MIN,
            and MAX, it provides valuable insights into the distribution and
            characteristics of data within each group.
          </p>

          <p>
            Additionally, the HAVING clause allows for further filtering of
            groups based on aggregate values.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Joining Tables</h2>
        <div className="prose max-w-none">
          <p>
            In SQL, joining tables allows you to combine data from two or more
            tables based on a related column between them.
          </p>
          <p>
            There are several types of joins, including INNER JOIN, LEFT JOIN,
            RIGHT JOIN and FULL JOIN. Each serving different purposes.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT columns
FROM table1
JOIN table2 ON table1.column_name = table2.column_name;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">INNER JOIN</h2>
          <p className="pb-2">
            An INNER JOIN returns rows when there is at least one match in both
            tables.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;
              `}
            </pre>
          </code>
          <p>
            This query returns the first names of employees along with their
            corresponding department names.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">LEFT JOIN</h2>
          <p className="pb-2">
            A LEFT JOIN returns all rows from the left table (table1) and
            matching rows from the right table (table2). If there are no
            matches, NULL values are returned for the missing columns from the
            right table.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT employees.first_name, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;
              `}
            </pre>
          </code>
          <p>
            This query returns all employee names and their corresponding
            department names. If an employee does not belong to any department
            (or there's no matching department), NULL is returned for the
            department name.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">RIGHT JOIN</h2>
          <p className="pb-2">
            A RIGHT JOIN returns all rows from the right table (table2) and
            matching rows from the left table (table1). If there are no matches,
            NULL values are returned for the missing columns from the left
            table.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT employees.first_name, departments.department_name
FROM employees
RIGHT JOIN departments ON employees.department_id = departments.department_id;
              `}
            </pre>
          </code>
          <p>
            This query returns all department names and the first names of
            employees belonging to those departments. If there are no matching
            employees, NULL is returned for the first name.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">FULL JOIN</h2>
          <p className="pb-2">
            A FULL JOIN returns rows when there is a match in either table. If
            there are no matches, NULL values are returned for the missing
            columns from the other tale.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT employees.first_name, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.department_id;
              `}
            </pre>
          </code>
          <p>
            This query returns all employee names and department names. If there
            are no matches between employees and departments, NULL values are
            returned for both first name and department name.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            Combining JOINs with WHERE Clause
          </h2>
          <p className="pb-2">
            JOINs can also be combined with the WHERE clause to further filter
            the result set
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT employees.first_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id
WHERE departments.location = 'New York';
              `}
            </pre>
          </code>
          <p>
            This query returns employee names and their department names for
            employees located in New York.
          </p>
          <br />
          <hr className="py-2" />
          <p>
            Joining tables in SQL allows you to combine data from multiple
            tables based on a related column.
          </p>

          <p>
            Each type of join-INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL
            JOIN-serves different purposes and provides flexibility in
            retrieving and combining data from related tables.
          </p>

          <p>
            By understanding the characteristics of each type of join, you can
            effectively query and analyse data stored across multiple tables in
            a database.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Subqueries</h2>
        <div className="prose max-w-none">
          <p>
            In SQL, a subquery (also known as inner query or nested query) is a
            query nested within another query.
          </p>
          <p>
            Subqueries can be used in various parts of a SQL statement to
            retrieve data dynamically or perform complex operations.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT columns
FROM table
WHERE column IN (SELECT column FROM another_table WHERE condition);
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Using Subquery in WHERE Clause</h2>
          <p className="pb-2">
            Subqueries can be used in the WHERE clause to filter results based
            on the result of the subquery.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT product_name, unit_price
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);
              `}
            </pre>
          </code>
          <p>
            This query selects product names and unit prices for products whose
            unit price is higher than the average unit price of all products.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Using Subquery in FROM Clause</h2>
          <p className="pb-2">
            Subqueries can be used in the FROM clause to create derived tables,
            which can then be queried like regular tables.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT customer_name, order_count
FROM (SELECT customer_id, COUNT(*) AS order_count FROM orders)
JOIN customers ON order_counts.customer_id = customers.customer_id;
              `}
            </pre>
          </code>
          <p>
            This query calculates the number of orders per customer, then joins
            the result with the customers table to retrieve customer names.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            Using Subquery in SELECT Clauses
          </h2>
          <p className="pb-2">
            Subqueries can also be used in the SELECT clause to return a single
            value as part of the result set.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT customer_name, (SELECT COUNT(*) FROM orders WHERE orders.customer_id = customers.customer_id) AS order_count
FROM customers;
              `}
            </pre>
          </code>
          <p>
            This query retrieves customer names along with the count of orders
            placed by each customer.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            Using Subquery with EXISTS Operator
          </h2>
          <p className="pb-2">
            The EXISTS operator is often used with subqueries to check for the
            existence of rows that meet certain criteria.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT product_name
FROM products
WHERE EXISTS (SELECT * FROM orders WHERE orders.product_id = products.product_id);
              `}
            </pre>
          </code>
          <p>
            This query selects product names for products that have been
            ordered.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            Using Subquery with ANY/ALL Operator
          </h2>
          <p className="pb-2">
            Subqueries can be used with the ANY or ALL operators to compare a
            value with a set of values returned by the subquery.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT product_name
FROM products
WHERE unit_price > ALL (SELECT unit_price FROM products WHERE discontinued = 0);
              `}
            </pre>
          </code>
          <p>
            This query selects product names for producs whose unit price is
            higher than the unit price of all products that are not
            discontinued.
          </p>
          <br />
          <hr className="py-2" />
          <p>
            Subqueries in SQL provide a powerful way to perform complex
            operations and retrieve data dynamically within a single query.
          </p>

          <p>
            They can be used in various parts of a SQL statement, including the
            SELECT, FROM, and WHERE clauses, to manipulate and filter data based
            on the result of the subquery.
          </p>

          <p>
            By understanding how to use subqueries effectively, you can write
            more efficient and flexible SQL queries to meet your data analysis
            needs.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Common Table Expressions (CTE's)
        </h2>
        <div className="prose max-w-none">
          <p>
            Common Table Expressions (CTEs) provide a way to create temporary
            result sets that can be referenced within a SELECT, INSERT, UPDATE,
            or DELETE statement.
          </p>
          <p>
            CTEs improve the readability and maintainability of complex queries
            by breaking them into simpler, reusable components.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH cte_name (column1, column2, ...) AS (
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
)
SELECT column1, column2, ...
FROM cte_name
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Basic CTE Usage</h2>
          <p className="pb-2">Creating a simple CTE and using it in a query.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH SalesCTE AS (
    SELECT employee_id, SUM(sales) AS total_sales
    FROM sales
    GROUP BY employee_id
    )
SELECT employee_id, total_sales
FROM SalesCTE
WHERE total_sales > 10000;
              `}
            </pre>
          </code>
          <p>
            This query calculates the total sales per employee and retrieves
            employees with total sales greater than 10,000
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Multiple CTEs</h2>
          <p className="pb-2">
            You can define multiple CTEs in a single query by separating them
            with commas.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH SalesCTE AS (
    SELECT employee_id, SUM(sales) AS total_sales
    FROM sales
    GROUP BY employee_id
    ),
    EmployeeCTE AS (
    SELECT employee_id, first_name, last_name
    FROM employees
    )
SELECT e.first_name, e.last_name, s.total_sales
FROM SalesCTE
JOIN EmployeeCTE e ON s.employee_id = e.employee_id
WHERE s.total_sales > 10000;
              `}
            </pre>
          </code>
          <p>
            This query uses two CTEs to calculate total sales and retrieve
            employee details for those with total sales greater than 10,000.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">Recursive CTEs</h2>
          <p className="pb-2">
            Recursive CTEs are used to perform recursive queries, such as
            hierarchical or tree-structured data
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH RECURSIVE OrgChartCTE AS (
    SELECT employee_id, manager_id, first_name, last_name, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.employee_id, e.manager_id, e.first_name, e.last_name, oc.level + 1
    FROM employees e
    JOIN OrgChartCTE oc ON e.manager_id = oc.employee_id
)
SELECT employee_id, manager_id, first_name, last_name, level
FROM OrgChartCTE;
              `}
            </pre>
          </code>
          <p>
            This query generates an organisational chart, showing each
            employee's hierarchical level.
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            CTEs with INSERT, UPDATE, DELETE
          </h2>
          <p className="pb-2">
            CTEs can also be used with INSERT,UPDATE, and DELETE statements for
            more complex data manipulation.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH HighSalesCTE AS (
    SELECT employee_id
    FROM sales
    GROUP BY employee_id
    HAVING SUM(sales) > 10000
    )
    UPDATE employees
    SET bonus = bonus + 1000
    WHERE employee_id IN (SELECT employee_id FROM HighSalesCTE);
              `}
            </pre>
          </code>
          <p>
            This query identifies employees with total sales greater than 10,000
            and increases their bonus by 1,000
          </p>
          <br />
          <hr className="py-2" />
          <h2 className="font-semibold pb-2">
            Using CTEs to Simplify Complex Queries
          </h2>
          <p className="pb-2">
            CTEs can be used to break down complex queries into simpler, more
            manageable parts.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH DepartmentSales AS (
    SELECT department_id, SUM(sales) as total_sales
    FROM sales
    GROUP BY department_id
    ),
    DepartmentBudget AS (
    SELECT department_id, budget
    FROM budgets
    )
    SELECT d.department_id, d.total_sales, b.budget
    FROM DepartmentSales d
    JOIN DepartmentBudget b ON d.department_id = b.department_id
    WHERE d.total_sales > b.budget;
              `}
            </pre>
          </code>
          <p>
            This query calculates total sales per department and compares it
            with the budget, returning departments where total sales exceed the
            budget.
          </p>
          <br />
          <hr className="py-2" />
          <p>
            Common Table Expressions (CTEs) are a powerful feature in SQL that
            improve query readability and maintainability by allowing you to
            define temporary result sets.
          </p>

          <p>
            CTEs are especially useful for simplifying complex queries and
            performing recursive operations.
          </p>

          <p>
            They can be used with SELECT, INSERT, UPDATE, and DELETE statements,
            providing flexibility in data retrieval and manipulation. By
            leveraging CTEs, you can write more efficient and organised SQL
            queries.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical - F1 Database Challenge
        </h2>
        <div className="prose max-w-none">
          <h2 className="font-semibold pb-2">1. List all Constructors</h2>
          <p>- Retrieve the names of all constructors.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT DISTINCT Name
FROM constructors;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">2. Find All Drivers:</h2>
          <p>- List the names of all drivers in the dataset.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT DISTINCT GivenName, FamilyName
FROM drivers;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            3. Count the Number of Constructors:
          </h2>
          <p>- How many constructors are there in the dataset?</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT COUNT(DISTINCT ConstructorID) AS NumberOfConstructors
FROM constructors;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            4. Count the Number of Drivers:
          </h2>
          <p>- How many drivers are there in the dataset?</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT COUNT(DISTINCT DriverID) AS NumberOfDrivers
FROM drivers;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            5. List All Races for a Specific Season:
          </h2>
          <p>- Retrieve all races that took place in the 2020 season.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT Season, Round, CircuitID
FROM qualifying_results
WHERE Season = 2020;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">6. Basic SELECT:</h2>
          <p>- Retrieve the `Name` and `Nationality` of all constructors.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT Name, Nationality
FROM constructors;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">7. SELECT with Aliases:</h2>
          <p>
            - Retrieve driver `GivenName` and `FamilyName` and alias them as
            `FirstName` and `LastName`.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT GivenName AS FirstName, FamilyName AS LastName
FROM drivers;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">8. SELECT Distinct Values:</h2>
          <p>
            - Retrieve distinct nationalities of drivers from the `drivers`
            table.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT DISTINCT Nationality
FROM drivers;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            9. SELECT with Calculated Columns:
          </h2>
          <p>
            - Retrieve the `Position` and `Points` of drivers, and calculate
            their `PointsPerPosition` (Points divided by Position).
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT Position, Points, 
       (Points * 1.0 / Position) AS PointsPerPosition
FROM driver_standings;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">10. SELECT with Concatenation:</h2>
          <p>
            - Retrieve driver `GivenName` and `FamilyName` concatenated into a
            single column named `FullName`.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT CONCAT(GivenName, ' ', FamilyName) AS FullName
FROM drivers;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">11. Basic Filtering:</h2>
          <p>- Retrieve all races where the `Season` is 2022.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
WHERE Season = 2022;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            12. Filtering with Multiple Conditions:
          </h2>
          <p>- Retrieve drivers who are either `German` or `British`.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM drivers
WHERE Nationality IN ('German', 'British');
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">13. Filtering with LIKE:</h2>
          <p>- Retrieve all constructors whose name contains 'Ferrari'.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM constructors
WHERE Name LIKE '%Ferrari%';
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">14. Filtering with IN:</h2>
          <p>
            - Retrieve all results where the `ConstructorID` is either 'ferrari'
            or 'williams'.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
WHERE ConstructorName IN ('ferrari', 'williams');
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">15. Filtering with Date:</h2>
          <p>- Retrieve all drivers who were born before 2000.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM drivers
WHERE DateOfBirth < '2000-01-01';
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">16. Basic Sorting:</h2>
          <p>- Retrieve all races sorted by `Season` in ascending order.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
ORDER BY Season ASC;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            17. Sorting with Multiple Columns:
          </h2>
          <p>
            - Retrieve all drivers sorted first by `Nationality` and then by
            `GivenName`.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM drivers
ORDER BY Nationality ASC, GivenName ASC;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">18. Descending Order:</h2>
          <p>- Retrieve all results sorted by `Points` in descending order.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
ORDER BY Points DESC;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">19. Sorting with NULLs:</h2>
          <p>
            - Retrieve all drivers and sort by `DateOfBirth`, placing NULL
            values last.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM drivers
ORDER BY 
  DateOfBirth IS NULL ASC, 
  DateOfBirth ASC;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">20. Top N Results:</h2>
          <p>
            - Retrieve the top 5 drivers with the highest `Points` in the 2020
            season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM driver_standings
WHERE Season = 2020
ORDER BY Points DESC
LIMIT 5;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">21. Basic LIMIT:</h2>
          <p>
            - Retrieve the first 10 constructors from the `constructors` table.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM constructors
LIMIT 10;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">22. LIMIT with OFFSET:</h2>
          <p>
            - Retrieve 10 drivers starting from the 11th driver in the list.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM drivers
ORDER BY driverId
LIMIT 10 OFFSET 10;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">23. Top N Results with OFFSET:</h2>
          <p>
            - Retrieve the next 10 drivers after the top 5 drivers with the most
            `Points` in the 2021 season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
WHERE Season = 2021
ORDER BY Points DESC
LIMIT 10 OFFSET 5;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">24. LIMIT without ORDER BY:</h2>
          <p>
            - Retrieve the first 5 results of the 2020 season without specifying
            the order.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
WHERE Season = 2020
LIMIT 5;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">25. Pagination:</h2>
          <p>
            - Retrieve drivers for the 2020 season, showing results 11 through
            20.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT *
FROM results
WHERE Season = 2020
ORDER BY Points DESC
LIMIT 10 OFFSET 10;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">26. SUM Function:</h2>
          <p>- Calculate the total `Points` scored in the 2024 season.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT SUM(Points) AS TotalPoints
FROM results
WHERE Season = 2024;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">27. AVG Function:</h2>
          <p>
            - Calculate the average `Points` scored by drivers in the 2000
            season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT AVG(Points) AS AveragePoints
FROM results
WHERE Season = 2000;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">28. MAX and MIN Functions:</h2>
          <p>
            - Find the maximum and minimum `Points` scored by a driver in the
            2021 season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT MAX(Points) AS MaxPoints, MIN(Points) AS MinPoints
FROM results
WHERE Season = 2021;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">29. COUNT Function:</h2>
          <p>- Count the number of races in the 2000 season.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT COUNT(DISTINCT CircuitID) as Race_Count
FROM results
WHERE Season = 2000;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">30. GROUP_CONCAT Function:</h2>
          <p>
            - List all drivers in each constructor, concatenated into a single
            column.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT r.ConstructorName, 
       GROUP_CONCAT(
       DISTINCT CONCAT(d.GivenName, ' ', d.FamilyName) ORDER BY d.FamilyName ASC
       ) 
       AS Drivers
FROM results r
JOIN drivers d ON r.driverId = d.driverId
GROUP BY r.ConstructorName;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">31. Basic GROUP BY:</h2>
          <p>
            - Retrieve the total `Points` scored by each constructor in the 2000
            season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT ConstructorName, SUM(Points) AS TotalPoints
FROM results 
WHERE Season = 2000
GROUP BY ConstructorName;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">32. GROUP BY with HAVING:</h2>
          <p>
            - Retrieve constructors that have more than 20 `Points` in the 2002
            season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT ConstructorName, SUM(Points) AS TotalPoints
FROM results
WHERE Season = 2002
GROUP BY ConstructorName
HAVING SUM(Points) > 20;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">33. COUNT with GROUP BY:</h2>
          <p>
            - Count the number of races each constructor participated in during
            2020.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT ConstructorName, COUNT(*) AS NumberOfRaces
FROM results
WHERE Season = 2020
GROUP BY ConstructorName;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">34. SUM with GROUP BY:</h2>
          <p>
            - Calculate the total `Points` for each driver, grouped by
            `Nationality`.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT d.Nationality, d.GivenName, d.FamilyName, SUM(r.Points) AS TotalPoints
FROM results r
JOIN drivers d ON r.DriverID = d.DriverID
GROUP BY d.Nationality, d.GivenName, d.FamilyName;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            35. GROUP BY with Multiple Columns:
          </h2>
          <p>
            - Retrieve the average `Points` for each constructor and season
            combination.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT ConstructorName, Season, AVG(Points) AS AveragePoints
FROM results
GROUP BY ConstructorName, Season;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">36. Inner Join:</h2>
          <p>
            - Retrieve driver names and their corresponding constructor names
            for races in the 2000 season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT DISTINCT d.GivenName, d.FamilyName, r.ConstructorName
FROM results r
INNER JOIN drivers d ON r.DriverID = d.DriverID
WHERE r.Season = 2024;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">37. Left Join:</h2>
          <p>
            - Retrieve all constructors and any drivers who raced for
            them(include constructors with no drivers).
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT c.constructorId, d.GivenName, d.FamilyName
FROM constructors c
LEFT JOIN results r ON c.constructorId = r.ConstructorName 
LEFT JOIN drivers d ON r.DriverID = d.DriverID
GROUP BY c.constructorId, d.GivenName, d.FamilyName;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">38. Right Join:</h2>
          <p>
            - Retrieve all results and the corresponding drivers for each
            result, including results with no drivers.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT r.Season, r.Round, r.CircuitID, d.GivenName, d.FamilyName
FROM results r
RIGHT JOIN drivers d ON r.DriverID = d.DriverID;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">39. Left Join:</h2>
          <p>
            - Retrieve a list of all drivers and their corresponding results,
            including drivers who have not participated in any races.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT d.GivenName, d.FamilyName, r.Position, r.Points
FROM drivers d
LEFT JOIN results r ON d.DriverID = r.DriverID
ORDER BY d.GivenName, d.FamilyName;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">40. Join with Multiple Tables:</h2>
          <p>
            - Retrieve the GivenName, FamilyName, and ConstructorName for each
            driver, along with their total Points earned in the 2000 season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT d.GivenName, d.FamilyName, c.constructorId, SUM(r.Points) AS TotalPoints
FROM drivers d
JOIN results r ON d.DriverID = r.DriverID
JOIN constructors c ON r.ConstructorName = c.ConstructorID
WHERE r.Season = 2000
GROUP BY d.GivenName, d.FamilyName, c.constructorId;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">41. Simple Subquery:</h2>
          <p>
            - Retrieve drivers who have more points than the driver with the
            least points in the 2000 season.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT d.GivenName, d.FamilyName, SUM(r.Points) AS TotalPoints
FROM drivers d
JOIN results r ON d.DriverID = r.DriverID
WHERE r.Season = 2000
GROUP BY d.DriverID, d.GivenName, d.FamilyName
HAVING SUM(r.Points) > (
  SELECT MIN(TotalPoints)
  FROM (
    SELECT SUM(r.Points) AS TotalPoints
    FROM results r
    WHERE r.Season = 2000
    GROUP BY r.DriverID
  ) AS DriverTotals
);
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">42. Subquery in SELECT:</h2>
          <p>
            - Retrieve the `GivenName` and `FamilyName` of drivers along with
            their highest `Points` in any race.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT d.GivenName, d.FamilyName,
       (SELECT MAX(r.Points)
        FROM results r
        WHERE r.DriverID = d.DriverID) AS HighestPoints
FROM drivers d;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">43. Correlated Subquery:</h2>
          <p>
            - Retrieve constructors and their drivers where the driver’s
            `Points` is greater than the average `Points` for that constructor.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
SELECT 
    c.constructorId, 
    r.CircuitID,
    d.GivenName,          
    d.FamilyName,         
    r.Points,            
    r.Season            
FROM 
    constructors c
JOIN 
    results r ON c.constructorId = r.ConstructorName
JOIN 
    drivers d ON r.DriverID = d.DriverID
WHERE 
    r.Points > (
        SELECT AVG(r2.Points)
        FROM results r2
        WHERE r2.ConstructorName = c.constructorId
        GROUP BY r2.ConstructorName
    );
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">44. Simple CTE</h2>
          <p>
            - Retrieve the average points scored per driver in the 2000 season.
            Use a CTE to first calculate the total points scored by each driver,
            and then calculate the average from this aggregated data.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH DriverTotalPoints AS (
    SELECT 
        d.DriverID, 
        d.GivenName, 
        d.FamilyName, 
        SUM(r.Points) AS TotalPoints
    FROM 
        drivers d
    JOIN 
        results r ON d.DriverID = r.DriverID
    WHERE 
        r.Season = 2000
    GROUP BY 
        d.DriverID, d.GivenName, d.FamilyName
)
SELECT GivenName, 
    FamilyName, 
    TotalPoints,
    (SELECT AVG(TotalPoints) FROM DriverTotalPoints) AS AveragePoints
FROM 
    DriverTotalPoints;
              `}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">45. Complex CTE</h2>
          <p>
            - Retrieve drivers who have finished in the top 3 positions in more
            than 5 races in the 2000 season, along with their average points per
            race.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`
WITH Top3Races AS (
    SELECT 
        r.DriverID, 
        COUNT(*) AS Top3Count
    FROM 
        results r
    WHERE 
        r.Season = 2000 AND r.Position <= 3
    GROUP BY 
        r.DriverID
    HAVING 
        COUNT(*) > 5
),
DriverPoints AS (
    SELECT 
        d.DriverID, 
        d.GivenName, 
        d.FamilyName, 
        AVG(r.Points) AS AvgPointsPerRace
    FROM 
        drivers d
    JOIN 
        results r ON d.DriverID = r.DriverID
    WHERE 
        r.Season = 2000
    GROUP BY 
        d.DriverID, d.GivenName, d.FamilyName
)
SELECT 
    t.GivenName, 
    t.FamilyName, 
    t.AvgPointsPerRace
FROM 
    Top3Races tr
JOIN 
    DriverPoints t ON tr.DriverID = t.DriverID;
              `}
            </pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_4;
