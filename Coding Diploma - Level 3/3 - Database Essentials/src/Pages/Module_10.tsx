function Module_10() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Triggers</h2>
        <div className="prose max-w-none">
          <p>
            A trigger is a special kind of stored procedure that automatically
            executes when a specific event occurs in the database.
          </p>

          <p>
            Triggers can be used to enforce business rules, validate data, and
            maintain audit trails.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Types of Trigger</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">BEFORE Trigger:</strong>Executes before
              an INSERT, UPDATE, or DELETE operation.
            </li>
            <li>
              <strong className="mr-1">AFTER Trigger:</strong>Executes after an
              INSERT, UPDATE, or DELETE operation.
            </li>
            <li>
              <strong className="mr-1">INSTEAD OF Trigger:</strong>Executes
              instead of an INSERT, UPDATE, or DELETE operation (mainly used
              with views).
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Creating Triggers</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE TRIGGER trigger_name
BEFORE | AFTER | INSTEAD OF event
ON table_name
FOR EACH ROW
BEGIN

-- Trigger logic
END;`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <p>Creating a trigger to log updates</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE TRIGGER log_employee_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employee_audit (employee_id,
  change_date, old_salary, new_salary)
  VALUES (OLD.employee_id, NOW(), OLD.salary,
  NEW.salary);
END;`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Enforcing business rules (e.g., updating related records).</li>
            <li>Automatically updating summary tables or logs.</li>

            <li>Validating data before it is committed to the database.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Cursors</h2>
        <div className="prose max-w-none">
          <p>
            A cursor is a database object that allows row-by-row processing of
            query results.
          </p>

          <p>
            Cursors are useful for operations that cannot be performed with
            set-based operations.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Using Cursors</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Declare:</strong>Declare the cursor.
            </li>
            <li>
              <strong className="mr-1">Open:</strong>Open the cursor.
            </li>
            <li>
              <strong className="mr-1">Fetch:</strong>Fetch rows from the
              cursor.
            </li>
            <li>
              <strong className="mr-1">Close:</strong>Close the cursor.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Creating & Using Cursors</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DECLARE cursor_name CURSOR FOR
SELECT columnl, column2, ...
FROM table_name

WHERE condition;

OPEN cursor_name;

FETCH NEXT FROM cursor_name INTO variablel, variable2, ... ,

-- Process fetched data

CLOSE cursor_name;`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <p>Using a cursor to process rows</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DECLARE employee_cursor CURSOR FOR
SELECT employee_id, salary FROM employees;

OPEN employee_cursor;

FETCH NEXT FROM employee_cursor INTO @employee_id, @salary;

WHILE @@FETCH_STATUS= 0
BEGIN

-- Process each row
PRINT 'Employee ID:'+ CAST(@employee_id AS VARCHAR) +', Salary:'
+ CAST(@salary AS VARCHAR);

FETCH NEXT FROM employee_cursor INTO @employee_id, @salary;
END:

CLOSE employee_cursor;`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Performing operations that require row-by-row processing.</li>

            <li>
              Implementing complex business logic that cannot be achieved with
              set-based operations.
            </li>

            <li>Processing large result sets in a controlled manner.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Dynamic SQL</h2>
        <div className="prose max-w-none">
          <p>
            Dynamic SQL refers to SQL statements that are constructed and
            executed at runtime. It provides flexibility to create and execute
            queries based on variable input.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Using Dynamic SQL</h2>
          <ul className="list-disc pl-6">
            <li>Constructing the SQL statement as a string.</li>

            <li>
              Executing the SQL statement using the appropriate function (e.g.,
              EXEC or sp_executesql in SQL Server).
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              Simple dynamic SQL execution:
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`DECLARE @sql NVARCHAR(MAX);
SET @sql = 'SELECT * FROM employees
WHERE department_id = 1';
EXEC sp_executesql @sql;`}</pre>
              </code>
              <br />
            </li>
            <li>
              Dynamic SQL with parameters
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`DECLARE @sql NVARCHAR(MAX), @department_id INT;
SET @department_id = 1;
SET @sql = 'SELECT * FROM employees WHERE
department_id = @dept_id';
EXEC sp_executesql @sql, N'@dept_id INT', @dept_id=
@department_id;`}</pre>
              </code>
              <br />
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Creating flexible and reusable query templates.</li>

            <li>Implementing conditional logic in SQL statements.</li>

            <li>
              Generating complex queries dynamically based on user input or
              application logic.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Handling Errors</h2>
        <div className="prose max-w-none">
          <p>
            Error handling in SQL involves detecting, capturing, and managing
            errors that occur during the execution of SQL statements.
          </p>

          <p>
            Proper error handling ensures that the database operations are
            robust and reliable.
          </p>
          <br />
          <p>Using Try...Catch for Error Handling</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRY

-- SQL statements

END TRY

BEGIN CATCH

-- Error handling logic
SELECT ERROR_MESSAGE( AS ErrorMessage;

END CATCH;`}</pre>
          </code>
          <br />
          <p>Error handling with transaction control</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRY
BEGIN TRANSACTION;

-- SQL statements

COMMIT TRANSACTION;
END TRY
BEGIN CATCH
ROLLBACK TRANSACTION;
SELECT ERROR_MESSAGE( AS ErrorMessage;
END CATCH;`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Ensuring database transactions are completed successfully or
              rolled back in case of errors.
            </li>

            <li>
              Logging error details for debugging and monitoring purposes.
            </li>

            <li>
              Providing meaningful error messages to end-users or applications.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Performance Optimisation
        </h2>
        <div className="prose max-w-none">
          <p>
            Performance optimisation involves techniques and best practices to
            improve the speed and efficiency of database operations.
          </p>
          <p>
            It includes query optimisation, indexing strategies, and resource
            management.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Techniques</h2>
          <ul className="list-decimal pl-6">
            <li>
              Query Optimisation: <br />
              <ul className="list-disc pl-6">
                <li>Use appropriate indexes.</li>
                <li>Avoid using SELECT *; specify only necessary columns.</li>
                <li>Use joins instead of subqueries where applicable.</li>
                <li>Optimise WHERE clauses with selective filters.</li>
              </ul>
            </li>
            <li>
              Indexing Strategies:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  Create indexes on columns used in WHERE, JOIN, and ORDER BY
                  clauses.
                </li>
                <li>Use composite indexes for multi-column searches.</li>
                <li>
                  Regularly monitor and maintain indexes (e.g., rebuilding
                  fragmented indexes).
                </li>
              </ul>
            </li>

            <li>
              Resource Management:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  Ensure sufficient hardware resources (CPU, memory, storage).
                </li>
                <li>Monitor and tune database configuration settings.</li>
                <li>
                  Use partitioning for large tables to improve query performance
                  and manageability.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              Creating an index to optimise a query:
              <br />
              <ul className="list-disc pl-6">
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`CREATE INDEX idx_employee_lastname
ON employees (last_name);`}</pre>
                </code>
              </ul>
            </li>
            <li>
              Analysing and optimising a slow query:
              <br />
              <ul className="list-disc pl-6">
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`EXPLAIN SELECT * FROM employees
WHERE last_name = 'Smith';`}</pre>
                </code>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Improving the performance of frequently executed queries.</li>

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
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical - Advanced Database Operations
        </h2>
        <div className="prose max-w-none">
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`-- Lesson 1: Triggers
-- Exercise 1: Create an Audit Log Using a Trigger

-- 1. Create a New Database as 'module10_db'
CREATE DATABASE module10_db;
USE module10_db;

-- 2. Create a table employees with columns id, name, salary, and department.
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10,2),
    department VARCHAR(50)
);


-- 3. Create a table audit_log to store changes made to the salary column in employees.
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Write a BEFORE UPDATE trigger named salary_update_trigger that logs any changes to the salary into the audit_log.
DELIMITER $$

CREATE TRIGGER salary_update_trigger
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF OLD.salary != NEW.salary THEN
        INSERT INTO audit_log (employee_id, old_salary, new_salary)
        VALUES (OLD.id, OLD.salary, NEW.salary);
    END IF;
END $$

DELIMITER ;

-- 5. Test the trigger by updating the salary of an employee and verifying that the change is logged.
INSERT INTO employees (name, salary, department) VALUES ('John Doe', 5000, 'HR');
UPDATE employees SET salary = 5500 WHERE id = 1;
SELECT * FROM audit_log;


-- *******************************************************

-- Lesson 2: Cursors
-- Exercise 2: Loop Through Records with a Cursor

-- 1. Create a table products with columns id, product_name, and price.
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2)
);

-- 2. Write a stored procedure named discount_high_prices that uses a cursor to loop through products priced above 100 and reduces their prices by 10%.
DELIMITER $$

CREATE PROCEDURE discount_high_prices()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE product_id INT;
    DECLARE product_price DECIMAL(10,2);
    
    DECLARE product_cursor CURSOR FOR 
        SELECT id, price FROM products WHERE price > 100;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
    
    OPEN product_cursor;
    
    price_loop: LOOP
        FETCH product_cursor INTO product_id, product_price;
        IF done THEN
            LEAVE price_loop;
        END IF;
        

        UPDATE products SET price = product_price * 0.9 WHERE id = product_id;
    END LOOP price_loop;
    
    CLOSE product_cursor;
END $$

DELIMITER ;

-- 3. Test the procedure by checking the price changes before and after running the cursor.
INSERT INTO products (product_name, price) VALUES ('Laptop', 150), ('Tablet', 200);
CALL discount_high_prices();
SELECT * FROM products;


-- *******************************************************


-- Lesson 3: Dynamic SQL
-- Exercise 3: Execute Dynamic SQL to Select from Any Table

-- 1. Create tables orders and customers.
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50),
    order_amount DECIMAL(10,2)
);

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50),
    email VARCHAR(100)
);

-- 2. Write a stored procedure named dynamic_select that takes a table name as input and dynamically selects all rows from that table.
DELIMITER $$

CREATE PROCEDURE dynamic_select(table_name VARCHAR(50))
BEGIN
    SET @sql = CONCAT('SELECT * FROM ', table_name);
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END $$

DELIMITER ;

-- 3. Test the procedure by passing different table names like orders and customers.
INSERT INTO orders (customer_name, order_amount) VALUES ('Alice', 100), ('Bob', 200);
INSERT INTO customers (customer_name, email) VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');

CALL dynamic_select('orders');
CALL dynamic_select('customers');



-- *******************************************************

-- Lesson 4: Handling Errors
-- Exercise 4: Handle Errors in a Stored Procedure

-- 1. Create a table transactions with columns id, account_number, and amount.
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_number VARCHAR(20) UNIQUE, 
    amount DECIMAL(10,2)
);


-- 2. Create a table error_log with columns id, error_message, and error_time to store error logs.
CREATE TABLE error_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    error_message VARCHAR(255),
    error_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Write a stored procedure process_transaction that tries to insert a record into the transactions table and logs an error in the error_log table if the transaction fails.
DELIMITER $$

CREATE PROCEDURE process_transaction(account_number VARCHAR(20), amount DECIMAL(10,2))
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        INSERT INTO error_log (error_message) 
        VALUES ('Transaction failed due to a SQL error');
    END;
    
    INSERT INTO transactions (account_number, amount) 
    VALUES (account_number, amount);
END $$

DELIMITER ;


-- 4. Test the procedure by attempting to insert a duplicate record and logging the error.
CALL process_transaction('1234567890', 500);
CALL process_transaction('1234567890', 500);
SELECT * FROM transactions;
SELECT * FROM error_log;
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_10;
