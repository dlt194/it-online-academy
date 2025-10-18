function Module_9() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Creating Views</h2>
        <div className="prose max-w-none">
          <p>
            A view is a virtual table based on the result set of a SQL Query.
          </p>
          <p>
            It provides a way to present data in a particular format or to
            simplify complex queries.
          </p>
          <br />
          <p>The CREATE VIEW statement is used to create a view.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              Creating a simple view
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE VIEW employee_view AS
SELECT employee_id, first_name, last_name
FROM employees
WHERE active = 1;`}</pre>
              </code>
              <br />
            </li>
            <li>
              Creating a view with joins
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE VIEW employee_department_view AS
SELECT e.employee_id, e.first_name, e.last_name,
d.department_name
FROM employees e
JOIN departments d ON e.department_id =
d.department_id;`}</pre>
              </code>
              <br />
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Advantages</h2>
          <ul className="list-disc pl-6">
            <li>Simplifies complex queries by encapsulating them in views.</li>

            <li>
              Enhances security by providing access to specific data without
              exposing underlying tables.
            </li>
            <li>Can be used to present aggregated data.</li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Presenting a simplified version of a complex data model.</li>

            <li>
              Abstracting and encapsulating complex joins and calculations.
            </li>

            <li>Providing a consistent interface to data.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Indexes for Perfomance Optimisation
        </h2>
        <div className="prose max-w-none">
          <p>
            Indexes are special database objects that improve the speed of data
            retrieval operations.
          </p>
          <p>
            They work similarly to indexes in books, allowing quick access to
            rows in a table.
          </p>
          <br />
          <p>The CREATE INDEX statement is used to create an index.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE INDEX index_name ON table_name
(column1, column2, ...);`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Types of Indexes</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Single-column Index:</strong>Index on a
              single column.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE INDEX idx_employee_lastname ON
employees (last_name);`}</pre>
              </code>
            </li>

            <li>
              <strong className="mr-1">Composite Index:</strong>Index on
              multiple columns.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE INDEX idx_employee_name ON employees
(first_name, last_name);`}</pre>
              </code>
            </li>
            <li>
              <strong className="mr-1">Unique Index:</strong>Ensures that all
              values in the indexed column(s) are unique.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE UNIQUE INDEX idx_employee_email ON employees (email);`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Considerations</h2>
          <ul className="list-disc pl-6">
            <li>
              Indexes can significantly speed up SELECT queries but can slow
              down INSERT, UPDATE, and DELETE operations due to the overhead of
              maintaining the index.
            </li>

            <li>
              Too many indexes can lead to increased storage usage and
              maintenance complexity.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Improving query performance for frequently searched columns.
            </li>
            <li>Enforcing uniqueness on columns that require unique values.</li>
            <li>Optimising JOIN operations on foreign key columns.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Stored Procedures
        </h2>
        <div className="prose max-w-none">
          <p>
            A stored procedure is a precompiled collection of one or more SQL
            statements stored on the database server.
          </p>

          <p>They can be used to encapsulate logic and improve performance.</p>
          <br />
          <p>
            The CREATE PROCEDURE statement is used to create a stored procedure.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE PROCEDURE procedure_name
(parameterl datatype, parameter2 datatype, ... )
BEGIN

-- SQL statements

END;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              Creating a simple stored procedure
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE PROCEDURE GetEmployeeByld
(IN emp_id INT)
BEGIN

SELECT * FROM employees WHERE
employee_id = emp_id;
END;`}</pre>
              </code>
            </li>
            <li>
              Creating a stored procedure with multiple statements:
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE PROCEDURE UpdateEmployeeSalary
(IN emp_id INT, IN new_salary DECIMAL)
BEGIN
UPDATE employees SET salary = new_salary
WHERE employee_id = emp_id;
INSERT INTO salary_history (employee_id,
change_date, new_salary)
VALUES (emp_id, NOW(), new_salary);
END;`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Advantages</h2>
          <ul className="list-disc pl-6">
            <li>Encapsulates business logic in the database.</li>

            <li>
              Reduces network traffic by executing multiple SQL statements in a
              single call.
            </li>

            <li>
              Enhances security by restricting direct access to data and
              allowing controlled access through procedures.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Performing complex business logic that involves multiple SQL
              statements.
            </li>

            <li>Automating repetitive database operations.</li>

            <li>Ensuring consistent execution of critical operations.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          User-Defined Functions
        </h2>
        <div className="prose max-w-none">
          <p>
            User-Defined Functions (UDFs) are routines that accept parameters,
            perform actions, and return the result of the action as a value.
          </p>

          <p>They can be used to encapsulate reusable logic.</p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Types of User-Defines Functions
          </h2>
          <ul className="list-decimal pl-6">
            <li>
              <strong className="mr-1">Scalar Functions:</strong>Return a single
              value.
              <br />
              <p>Creating Scalar Functions</p>
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE FUNCTION function_name (parameterl
datatype, parameter2 datatype, ... )
RETURNS return_datatype
BEGIN

-- Function logic
RETURN return_value;
END:`}</pre>
              </code>
            </li>

            <li>
              <strong className="mr-1">Table-Valued Functions (TVFs):</strong>
              Return a table
              <br />
              <p>Creating a Table-Valued Function</p>
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE FUNCTION GetActiveEmployees
RETURNS TABLE
RETURN (
  SELECT * FROM employees WHERE active = 1
);`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Advantages</h2>
          <ul className="list-disc pl-6">
            <li>
              Encapsulates logic that can be reused across multiple queries.
            </li>

            <li>Simplifies complex calculations or data transformations.</li>

            <li>
              Can be used to enforce business rules at the database level.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Performing calculations or transformations that are used in
              multiple queries.
            </li>

            <li>Creating reusable code blocks for common data operations.</li>
            <li>Enhancing the readability and maintainability of SQL code.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical - Manipulate a Student Information System Database
        </h2>
        <div className="prose max-w-none">
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`-- Lesson 1: Creating Views

-- 1. Use the student_management database from the previous module.
USE student_management;


-- 2. Create a view named student_overview that shows the id, name, and grade columns from the students table.
CREATE VIEW student_overview AS
SELECT id, name, grade
FROM students;


-- 3. Query the student_overview view to verify it displays the correct data.
SELECT * FROM student_overview;


-- 4. Modify the view to include a calculated field that shows age categorized as 'Minor' if the age is less than 18, and 'Adult' otherwise.
DROP VIEW IF EXISTS student_overview;
CREATE VIEW student_overview AS
SELECT 
    id,
    name,
    grade,
    CASE
        WHEN age < 18 THEN 'Minor'
        ELSE 'Adult'
    END AS age_category
FROM students;
SELECT * FROM student_overview;



-- *******************************************************


-- Lesson 3: Stored Procedures

-- 1. Create a stored procedure named add_student that takes the name, age, and grade as parameters and inserts a new record into the students table.
DELIMITER $$

CREATE PROCEDURE add_student(IN student_name VARCHAR(50), IN student_age INT, IN student_grade VARCHAR(10))
BEGIN
    INSERT INTO students (name, age, grade) 
    VALUES (student_name, student_age, student_grade);
END $$

DELIMITER ;


-- 2. Run the stored procedure to add a new student.
CALL add_student('Alice Johnson', 17, '12th Grade');


-- 3. Modify the stored procedure to return the id of the newly added student after insertion.
DROP PROCEDURE IF EXISTS add_student;
DELIMITER $$

CREATE PROCEDURE add_student(IN student_name VARCHAR(50), IN student_age INT, IN student_grade VARCHAR(10), OUT new_student_id INT)
BEGIN
    INSERT INTO students (name, age, grade) 
    VALUES (student_name, student_age, student_grade);
    
    SET new_student_id = LAST_INSERT_ID();
END $$

DELIMITER ;


-- 4. Verify that the stored procedure works as expected.
SET @student_id = 0;
CALL add_student('Bob Smith', 16, '11th Grade', @student_id);
SELECT @student_id;


-- *******************************************************


-- Lesson 4: User-Defined Functions

-- 1. Create a user-defined function named calculate_discount that takes a price and a discount percentage as input and returns the discounted price.
DELIMITER $$

CREATE FUNCTION calculate_discount(price DECIMAL(10,2), discount_percent DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN price - (price * discount_percent / 100);
END $$

DELIMITER ;

-- 2. Write a query to test the function by calculating the discounted price for an item with a price of 100 and a discount of 15%.
SELECT calculate_discount(100, 15) AS discounted_price;


`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_9;
