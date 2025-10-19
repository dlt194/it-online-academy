function Module_7() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          INSERT Statement
        </h2>
        <div className="prose max-w-none">
          <p>
            The INSERT statement is used to add new rows of data to a table in a
            database.
          </p>
          <p>
            It's purpose is to populate tables with data or add new data to
            existing tables.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);`}</pre>
          </code>
          <br />
          <p>
            If you are inserting values into all columns of the table, you can
            omit the columns list
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO table_name
VALUES (value1, value2, value3, ...);`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Inserting Data into Specific Columns
          </h2>
          <p>
            You can specify the columns into which you want to insert data. This
            is useful when you are not providing values for all columns,
            especially if some columns can be NULL or have default values.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO Students (StudentID, FirstName, LastName)
VALUES (2, 'Jane', 'Smith');`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Inserting Multiple Rows</h2>
          <p>
            You can insert multiple rows of data in a single INSERT statement by
            separating each row with a comma.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO Students (StudentID, FirstName, LastName, Major, EnrollmentDate)
VALUES 
  (3, 'Alice', 'Johnson', 'Mathematics', '2024-06-01'),
  (4, 'Bob', 'Brown', 'Physics', '2024-06-01);`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Using INSERT with SELECT</h2>
          <p>
            You can insert data into a table using data selected from another
            table. This is useful for copying data from one table to another.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO table_name (columnl, column2, column3, ... )
SELECT columnl, column2, column3, ...
FROM another_table
WHERE condition;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Using DEFAULT Values</h2>
          <p>
            You can use the DEFAULT keyword to insert default values defined for
            columns.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO Students (StudentID, FirstName, LastName,
EnrollmentDate)
VALUES (5, 'Charlie', 'Davis', DEFAULT);`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Error Handling</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Constraint Violations:</strong>Ensure
              that data being inserted does not violate constraints like primary
              key, foreign key, unique, not null, and check constraints.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`INSERT INTO Students (StudentID, FirstName, LastName)
VALUES (1, 'Eve', 'Wilson'); -- This will fail if StudentID 1 already exists`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-disc pl-6">
            <li>The INSERT statement is used to add new rows to a table.</li>

            <li>It can insert data into all columns or specific columns.</li>

            <li>Multiple rows can be inserted in a single statement.</li>

            <li>
              Data can be inserted using values selected from another table.
            </li>

            <li>
              The DEFAULT keyword can be used to insert default column values.
            </li>

            <li>
              Proper handling of constraints is essential to avoid errors during
              insertion.
            </li>

            <li>
              Understanding and utilising the INSERT statement is fundamental
              for populating and maintaining data in a database. It provides
              various options to insert data efficiently and ensures data
              integrity by adhering to constraints.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          UPDATE Statement
        </h2>
        <div className="prose max-w-none">
          <p>
            The UPDATE statement is used to modify existing records in a table.
          </p>
          <p>It's purpose is to change data in one or more rows in a table.</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}</pre>
          </code>
          <br />

          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Updating Specific Rows</h2>
          <p>
            The WHERE clause specifies which rows should be updated. Without it,
            all rows in the table will be updated.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Updating Multiple Columns</h2>
          <p>You can update multiple columns in a single UPDATE statement.</p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`UPDATE Students
SET Major = 'Data Science', EnrollmentDate = '2024-01-01'
WHERE StudentID = 1;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Updating All Rows</h2>
          <p>
            If you omit the WHERE clause, all rows in the table will be updated.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`UPDATE Students
SET Major = 'Undeclared';`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Using Subqueries in UPDATE</h2>
          <p>
            You can use Subqueries to update columns based on the results of a
            query.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`UPDATE Students
SET Major = (SELECT Major FROM Majors WHERE MajorID = 1)
WHERE StudentID = 2;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Safe Updates</h2>
          <p>ALWAYS back up your data before performing mass updates.</p>
          <p>
            Test your WHERE clause with a SELECT statement before running the
            UPDATE to ensure you're updating the correct rows.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`SELECT * FROM Students WHERE Major = 'Computer Science';`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Error Handling</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Constraint Violations:</strong>Ensure
              that data being inserted does not violate constraints like primary
              key, foreign key, unique, not null, and check constraints.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`UPDATE Users
SET Email= 'duplicate@example.com'
WHERE UserID = 1 ;-- This will fail if 'duplicate@example.com' already exists`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Performance Considerations</h2>
          <p>
            Updating columns that are indexed can impact performance. Plan
            updates carefully to minimise impact.
          </p>
          <p>
            For large tables, consider batching updates to avoid locking issues
            and improve performance.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-disc pl-6">
            <li>
              The UPDATE statement is used to modify existing data in a table.
            </li>

            <li>
              The WHERE clause specifies which rows to update. Without it, all
              rows will be updated.
            </li>

            <li>Multiple columns can be updated in a single statement.</li>

            <li>
              Subqueries can be used in the SET clause for more complex updates.
            </li>

            <li>
              Ensure proper error handling and test conditions to avoid
              unintentional data changes.
            </li>

            <li>
              Consider performance impacts and use batch updates if necessary.
            </li>

            <li>
              Understanding the UPDATE statement is crucial for maintaining and
              modifying data in a database. Proper use of conditions and careful
              planning of updates ensure data integrity and optimal performance.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          DELETE Statement
        </h2>
        <div className="prose max-w-none">
          <p>
            The DELETE statement is used to remove existing records from a
            table.
          </p>
          <p>
            It's purpose is to delete one or more rows of data from a table
            based on a specific condition.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DELETE FROM table_name
WHERE condition;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Deleting Specific Rows</h2>
          <p>
            The WHERE clause specifies which rows should be deleted. Only rows
            that meet the condition will be removed.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DELETE FROM Students
WHERE StudentId = 1;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Deleting All Rows</h2>
          <p>
            If you omit the WHERE clause, all rows in the table will be deleted
            but the table structure remains intact.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DELETE FROM Students;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Using Subqueries in DELETE</h2>
          <p>
            You can use subqueries to delete rows based on the results of
            another query.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DELETE FROM Students
WHERE StudentID IN (SELECT StudentID FROM Graduates
WHERE GraduationYear = 2023);`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Safe Deletes</h2>
          <p>Always back up your data before performing mass deletes.</p>
          <p>
            Test your WHERE clause with a SELECT statement before running the
            DELETE to ensure you're deleting the correct rows
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`SELECT * FROM Students WHERE Major = 'Computer Science'`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Error Handling</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Foreign Key Violations:</strong>Ensure
              the delete operation does not violate foreign key constraints,
              which can lead to referencial integrity issues.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`DELETE FROM Departments
WHERE DepartmentID = 1; -- This will fail if there are employees assigned to this department`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Performance Considerations</h2>
          <p>
            Deleting rows that are indexed can impact performance. Plan deletes
            carefully to minimise impact.
          </p>
          <p>
            For large tables, consider batching deletes to avoid locking issues
            and improve performance.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Cascading Deletes</h2>
          <p>
            Cascading deletes automatically remove related rows in other tables
            when a row is deleted.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE TABLE Orders (
OrderID INT PRIMARY KEY,
CustomerID INT,
OrderDate DATE,
FOREIGN KEY (CustomerID) REFERENCES
Customers(CustomerID) ON DELETE CASCADE
);`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-disc pl-6">
            <li>The DELETE statement is used to remove rows from a table.</li>

            <li>
              The WHERE clause specifies which rows to delete. Without it, all
              rows will be deleted.
            </li>

            <li>
              Subqueries can be used in the WHERE clause for more complex delete
              operations.
            </li>

            <li>
              Ensure proper error handling and test conditions to avoid
              unintentional data loss.
            </li>

            <li>
              Consider performance impacts and use batch deletes if necessary.
            </li>

            <li>
              Cascading deletes can be set up to automatically remove related
              data, maintaining referential integrity.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Transactions and ACID Properties
        </h2>
        <div className="prose max-w-none">
          <p>
            A transaction is a sequence of one or more SQL operations (such as
            INSERT, UPDATE, DELETE) executed as a single unit of work. A
            transaction ensures that either all operations succeed or none do.
          </p>
          <p>
            It's purpose is to maintain data integrity and consistency in the
            database.
          </p>
          <br />
          <p>
            ACID properties are a set of four properties that guarantee that
            database transactions are processes reliably.
          </p>
          <ul className="list-decimal pl-6">
            <li>
              <strong>A</strong>tomicity
              <ul className="list-disc pl-4">
                <li>
                  <strong className="mr-1">Definition:</strong>Ensures that all
                  operations within a transaction are completed successfully.
                </li>
                <li>
                  If any operation fails, the entire transaction is rolled back.
                </li>
                <code className="text-sm mt-2 mb-2">
                  <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRANSACTION;
UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
COMMIT;
-- If either update fails, both updates are rolled back.`}</pre>
                </code>
              </ul>
            </li>
            <li>
              <strong>C</strong>onsistency
              <ul className="list-disc pl-4">
                <li>
                  <strong className="mr-1">Definition:</strong>Ensures that a
                  transaction brings the database from one valid state to
                  another, maintaining database invariants.
                </li>
                <li>
                  <strong className="mr-1">Example:</strong>If transferring
                  money from one account to another, the total amount of money
                  before and after the transaction should remain the same.
                </li>
              </ul>
            </li>
            <li>
              <strong>I</strong>solation
              <ul className="list-none pl-4">
                <li>
                  <strong className="mr-1">Definition:</strong>Ensures that
                  transactions are executed in isolation from one another. The
                  intermediate state of a transaction is invisible to other
                  transactions.
                </li>
                <li>
                  <strong className="mr-1">Isolation Levels:</strong>
                  <ul className="list-disc pl-4">
                    <li>
                      <strong className="mr-1">Read Uncommitted:</strong>Lowest
                      level, allows dirty reads.
                    </li>
                    <li>
                      <strong className="mr-1">Read Committed:</strong>Prevents
                      dirty reads, but non-repeatable reads can occur.
                      Repeatable Read: Prevents dirty and non-repeatable reads,
                      but phantom reads can occur.
                    </li>
                    <li>
                      <strong className="mr-1">Serializable:</strong>Highest
                      level, prevents dirty, non-repeatable, and phantom reads.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="mr-1">Example:</strong>Two transactions
                  attempting to update the same row will not interfere with each
                  other if isolation is ensured.
                </li>
              </ul>
            </li>
            <li>
              <strong>D</strong>urablilty
              <ul className="list-none pl-4">
                <li>
                  <strong className="mr-1">Definition:</strong>Ensures that once
                  a transaction is committed, it will remain so, even in the
                  event of a system failure.
                </li>
                <li>
                  <strong className="mr-1">Example:</strong>After a transaction
                  commits, changes made to the database persist, even if there
                  is a crash immediately afterward.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Transaction Control Statements</h2>
          <ul className="list-decimal pl-6">
            <li>
              BEGIN TRANSACTION
              <br />
              <p>Marks the start of a transaction</p>
              <code className="text-sm mt-2 mb-2">
                <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRANSACTION;`}</pre>
              </code>
            </li>
            <li>
              COMMIT
              <br />
              <p>Saves all changes made during the transaction</p>
              <code className="text-sm mt-2 mb-2">
                <pre className="bg-gray-100 p-4 rounded">{`COMMIT;`}</pre>
              </code>
            </li>
            <li>
              ROLLBACK
              <br />
              <p>Undoes all changes made during the transaction</p>
              <code className="text-sm mt-2 mb-2">
                <pre className="bg-gray-100 p-4 rounded">{`ROLLBACK;`}</pre>
              </code>
            </li>
            <li>
              SAVEPOINT
              <br />
              <p>
                Sets a savepoint within a transaction, allowing a partial
                rollback.
              </p>
              <code className="text-sm mt-2 mb-2">
                <pre className="bg-gray-100 p-4 rounded">{`SAVEPOINT savepoint_name;`}</pre>
              </code>
            </li>
            <li>
              ROLLBACK TO SAVEPOINT
              <br />
              <p>Rolls back to the named savepoint</p>
              <code className="text-sm mt-2 mb-2">
                <pre className="bg-gray-100 p-4 rounded">{`ROLLBACK TO SAVEPOINT savepoint_name;`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <code className="text-sm mt-2 mb-2">
            <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRANSACTION;
INSERT INTO Orders (OrderID, CustomerID, OrderDate)
VALUES (1, 123, '2024-06-05');
INSERT INTO OrderDetails (OrderID, ProductID, Quantity)
VALUES (1, 456, 2); COMMIT;`}</pre>
          </code>
          <br />
          <p>Transaction with Rollback</p>
          <code className="text-sm mt-2 mb-2">
            <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRANSACTION;
UPDATE Accounts SET Balance = Balance - 200 WHERE AccountID = 1;
UPDATE Accounts SET Balance = Balance + 200 WHERE AccountID = 2;
IF @@ERROR<>0
BEGIN
  ROLLBACK;
END
ELSE
BEGIN
  COMMIT;
END;`}</pre>
          </code>
          <br />
          <p>Using Savepoints</p>
          <code className="text-sm mt-2 mb-2">
            <pre className="bg-gray-100 p-4 rounded">{`BEGIN TRANSACTION;
  UPDATE Employees SET Salary = Salary * 1.1
  WHERE Department = 'Sales';
  SAVEPOINT before_bonus;
  UPDATE Employees SET Bonus = Bonus + 500
  WHERE Department = 'Sales';
  -- Rollback to savepoint if needed
  ROLLBACK TO SAVEPOINT before_bonus;
COMMIT;`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Transactions:</strong>Group multiple
              operations into a single unit of work, ensuring they are all
              completed successfully or none at all.
            </li>

            <li>
              <strong className="mr-1">ACID Properties:</strong>Ensure data
              integrity and reliability through Atomicity, Consistency,
              Isolation, and Durability.
            </li>

            <li>
              <strong className="mr-1">Transaction Control Statements:</strong>
              Manage transactions with BEGIN TRANSACTION, COMMIT, ROLLBACK, and
              SAVEPOINT.
            </li>

            <li>
              Understanding transactions and ACID properties is essential for
              ensuring data consistency, reliability, and integrity in a
              database system. Proper management of transactions helps in
              handling complex operations and maintaining stable and predictable
              database behaviour.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical - Manage an Ecommerce Database
        </h2>
        <div className="prose max-w-none">
          <code className="text-sm mt-2 mb-2">
            <pre className="bg-gray-100 p-4 rounded">{`-- Manage an online store's database by performing essential SQL operations. 
The project focuses on inserting, updating, deleting records, and ensuring data consistency through transactions.



-- Lesson 1 - Insert Statement
-- Customers Table:
-- Create a table to store customer information, including a unique identifier for each customer, their first and last names, email address, 
and the date they joined the store.
-- Insert records for at least three customers. Ensure that each customer has a unique email address.
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    JoinDate DATE NOT NULL
);

INSERT INTO Customers (FirstName, LastName, Email, JoinDate)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '2024-01-15'),
    ('Jane', 'Smith', 'jane.smith@example.com', '2024-02-10'),
    ('Alice', 'Johnson', 'alice.johnson@example.com', '2024-03-05');


-- Products Table:
-- Create a table to hold product details, including a unique product identifier, product name, price, and available stock quantity.
-- Insert records for at least three different products. Make sure each product has a unique identifier and a reasonable stock quantity.
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL
);

INSERT INTO Products (ProductName, Price, StockQuantity)
VALUES
    ('Laptop', 999.99, 50),
    ('Smartphone', 699.99, 100),
    ('Headphones', 199.99, 200);


-- Orders Table:
-- Design a table to track customer orders. This table should include an order identifier, the customer's identifier (linking to the Customers table),
the product's identifier (linking to the Products table), the order date, and the quantity ordered.
-- Insert records for at least three orders, ensuring that each order correctly references existing customers and products.
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    ProductID INT,
    OrderDate DATE NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity)
VALUES
    (1, 1, '2024-04-01', 1), 
    (2, 2, '2024-04-02', 2),  
    (3, 3, '2024-04-03', 3); 



    -- Lesson 2 - Update Statement

-- Customers Table
--    - One of the customers has updated their email address. Let's say John Doe's new email address is john.doe.new@example.com.
Identify the customer and modify their record to reflect this change.
UPDATE Customers
SET Email = 'john.doe.new@example.com'
WHERE CustomerID = 1;


-- Products Table
--    - The price of the "Laptop" product has increased to 1,099.99. Adjust the price in the 'Products' table accordingly.
UPDATE Products
SET Price = 1099.99
WHERE ProductName = 'Laptop';


-- Orders Table
--    - A customer has requested a change in their order quantity. Let's say Jane Smith wants to change the quantity
of her smartphone order from 2 to 1.
Update the relevant order record to reflect the new quantity.
UPDATE Orders
SET Quantity = 1
WHERE OrderID = 2;


  -- Lesson 3 - Delete Statement

--  Delete a Customer Record
-- A customer has requested that their account be deleted. Let's say Alice Johnson has asked for her account to be removed.
Identify the customer and remove their record from the database.
DELETE FROM Customers
WHERE CustomerID = 3;


-- Delete a Product Record
-- One of the products, "Headphones," is no longer available for sale and should be removed from the database.
Remove this product from the 'Products' table.
DELETE FROM Products
WHERE ProductName = 'Headphones';


-- Delete an Order Record
-- An order has been canceled by the customer. Let's say the order with OrderID = 3, which was for Alice Johnson, needs to be deleted.
Delete this order from the 'Orders' table.
DELETE FROM Orders
WHERE OrderID = 3;
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_7;
