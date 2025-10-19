function Module_6() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Creating Tables</h2>
        <div className="prose max-w-none">
          <p>Creating tables is a fundamental aspect of database management.</p>

          <p>
            Tables are where data is stored in a structured format, allowing for
            efficient retrieval, manipulation, and management.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Key Concepts in Creating Tables
          </h2>
          <ul className="list-decimal pl-6">
            <li>
              Table Structure
              <ul className="list-disc pl-6">
                <li>A table is composed of rows and columns.</li>
                <li>
                  Each column represents a specific attribute of the data, and
                  each row represents a single record.
                </li>
                <li>
                  The structure of a table includes defining columns, their data
                  types, and any constraints that apply to them.
                </li>
              </ul>
            </li>
            <li>
              Data Types
              <br />
              Common data types include:
              <ul className="list-disc pl-6">
                <li>INT: Integer numbers</li>
                <li>VARCHAR(size): Variable-length strings</li>
                <li>CHAR(size): Fixed-length strings</li>
                <li>DATE: Date values</li>
                <li>DECIMAL(p, s): Decimal numbers with precisionand scale</li>
                <li>BOOLEAN: True/false values</li>
              </ul>
            </li>
            <li>
              Constraints
              <br />
              Constraints enforce rules on the data in the table to ensure data
              integrity and validity.
              <br />
              Common constraints include:
              <ul className="list-disc pl-6">
                <li>NOT NULL: Ensures a column cannot have NULL values.</li>
                <li>UNIQUE: Ensures all values in a column are unique.</li>
                <li>PRIMARY KEY: Uniquely identifies each row in a table.</li>
                <li>
                  FOREIGN KEY: Ensures referential integrity by linking to a
                  primary key in another table.
                </li>
                <li>
                  CHECK: Ensures all values in a column satisfy a specific
                  condition.
                </li>
                <li>
                  DEFAULT: Sets a default value for a column when no value is
                  specified.
                </li>
              </ul>
            </li>
            <li>
              Primary Key
              <ul className="list-disc pl-6">
                <li>
                  The primary key uniquely identifies each row in a table. It is
                  a combination of one or more columns.
                </li>
                <li>
                  Each table must have a primary key, and primary key columns
                  must contain unique and non-null values.
                </li>
              </ul>
            </li>
            <li>
              Foreign Key
              <ul className="list-disc pl-6">
                <li>
                  A foreign key establishes a relationship between two tables by
                  referencing the primary key of another table.
                </li>
                <li>
                  It ensures that values in the foreign key column correspond to
                  values in the referenced primary key column.
                </li>
              </ul>
            </li>
            <li>
              Creating Tables using SQL
              <ul className="list-disc pl-6">
                <li>
                  The CREATE TABLE statement is used to create a new table in a
                  database.
                </li>

                <li>
                  It defines the table structure, data types, and any
                  constraints.
                </li>

                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">
                    {`CREATE TABLE table_name (
columnl datatype constraint,
column2 datatype constraint,

PRIMARY KEY (column),
FOREIGN KEY (column) REFERENCES other_table(column)

):`}
                  </pre>
                </code>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-decimal pl-6">
            <p>
              Creating tables is a critical aspect of database management,
              involving defining the table structure, specifying data types, and
              applying constraints to ensure data integrity.
            </p>

            <p>
              Understanding how to effectively use the CREATE TABLE statement
              and associated elements such as primary keys, foreign keys, and
              indexes is essential for designing robust and efficient databases.
            </p>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Altering Tables</h2>
        <div className="prose max-w-none">
          <p>
            Altering tables in a database involves modifying the structure of
            existing tables to accommodate changes in requirements.
          </p>

          <p>
            This can include adding, deleting, or modifying columns, as well as
            adding or removing constraints and indexes.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Key Concepts in Altering Tables
          </h2>
          <ul className="list-decimal pl-6">
            <li>
              Adding Columns
              <ul className="list-disc pl-6">
                <li>
                  You can add new columns to an existing table using the ADD
                  COLUMN clause of the ALTER TABLE statement.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">
                    {`ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;`}
                  </pre>
                </code>
              </ul>
            </li>
            <li>
              Dropping Columns
              <ul className="list-disc pl-6">
                <li>
                  You can remove columns from an existing table using the DROP
                  COLUMN clause.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">
                    {`ALTER TABLE table_name
DROP COLUMN column_name;`}
                  </pre>
                </code>
              </ul>
            </li>
            <li>
              Modifying Columns
              <ul className="list-disc pl-6">
                <li>
                  You can change the data type, size, or constraints of an
                  existing column using the MODIFY or ALTER COLUMN clause.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">
                    {`ALTER TABLE table_name
MODIFY COLUMN column_name new_datatype
new_constraint;`}
                  </pre>
                </code>
              </ul>
            </li>
            <li>
              Adding Constraints
              <ul className="list-disc pl-6">
                <li>
                  You can add constraints to an existing table to enforce data
                  integrity.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">{`ALTER TABLE table_name
ADD CONSTRAINT constraint_name constraint_type (column_name);`}</pre>
                </code>
              </ul>
            </li>
            <li>
              Dropping Constraints
              <ul className="list-disc pl-6">
                <li>
                  You can remove constraints from an existing table using the
                  DROP CONSTRAINT clause.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">{`ALTER TABLE table_name

DROP CONSTRAINT constraint_name;`}</pre>
                </code>
              </ul>
            </li>
            <li>
              Renaming Tables & Columns
              <ul className="list-disc pl-6">
                <li>
                  You can rename existing tables and columns to reflect changes
                  in their purpose or content.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">{`ALTER TABLE old_table_name
RENAME TO new_table_name;`}</pre>
                </code>
              </ul>
            </li>
            <li>
              Altering Indexes
              <ul className="list-disc pl-6">
                <li>
                  You can add or remove indexes to improve the performance of
                  queries on a table.
                </li>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-2 m-2 rounded">{`CREATE INDEX index_name ON table_name(column_name);`}</pre>
                </code>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-disc pl-6">
            <li>
              Altering tables allows you to modify the structure of existing
              tables to adapt to changing requirements.
            </li>

            <li>
              This includes adding, dropping, and modifying columns, as well as
              managing constraints and indexes.
            </li>

            <li>
              Properly altering tables ensures that your database can evolve
              without losing data integrity or performance.
            </li>

            <li>
              Understanding how to use the ALTER TABLE statement and its various
              clauses is essential for effective database management.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Dropping Tables in SQL
        </h2>
        <div className="prose max-w-none">
          <p>
            Dropping a table in SQL means permanently deleting the table and all
            of its data from the database.
          </p>
          <p>
            This operation cannot be undone. Once a table is dropped, the data
            and the table structure are permanently removed.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`DROP TABLE table_name;`}
            </pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Important Considerations</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">Data Loss:</strong>Dropping a table
              results in complete loss of data stored in the table.
            </li>
            <li>
              <strong className="mr-1">Dependencies:</strong>If other tables
              have foreign key constraints referencing the table to be dropped,
              dropping the table may result in errors or the need to
              adjust/remove those constraints first.
            </li>
            <li>
              <strong className="mr-1">Permissions:</strong>Ensure you have the
              necessary permissions to drop the table. Typically, only the
              database owner or a user with appropriate privileges can drop a
              table.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Dropping Multiple Tables</h2>
          <p>
            You can drop multiple tables in a single command by separating the
            table names with commas.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Cascade Option</h2>
          <p>
            When dealing with foreign keys, some databases allow the use of
            CASCADE to automatically drop dependent objects.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`DROP TABLE employees CASCADE;`}
            </pre>
          </code>

          <p>
            This command will drop the employees table and any other objects
            that depend on it, such as foreign keys in other tables.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Dropping Temporary Tables</h2>
          <p>
            Temporary tables are used for storing temporary data and can also be
            dropped explicitly.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`DROP TEMPORARY TABLE temp_table;`}
            </pre>
          </code>

          <p>
            Dropping a temporary table will only affect the session that created
            it.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Differences Across SQL Databases
          </h2>
          <p>
            Different SQL databases (MySQL, PostgreSQL, SQL Server, etc.) might
            have slight variations in the DROP TABLE syntax and behavior.
          </p>
          <p>
            Always refer to the specific database documentation for precise
            behaviour and options.
          </p>
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Alternatives to Dropping</h2>
          <p>
            If you want to preserve the table structure and data, consider
            alternatives such as renaming the table or archiving the data.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">
              {`RENAME TABLE employees TO employees_old;`}
            </pre>
          </code>
          <p>
            This command renames the employees table to employees_old,
            effectively archiving it.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Best Practices</h2>
          <ul className="list-disc pl-6">
            <li>Always back up your data before dropping tables.</li>
            <li>
              Double-check dependencies and impacts on the overall database
              schema.
            </li>
            <li>Use IF EXISTS to avoid errors in scripts.</li>
            <li>
              Ensure proper testing in a development environment before
              executing in production.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Constraints (Primary Key, Foreign Key, Unique, Not Null)
        </h2>
        <div className="prose max-w-none">
          <p>
            Constraints are rules enforced on data columns on a table. These
            rules ensure the integrity and accuracy of the data within the
            database.
          </p>
          <br />
          <strong>The main types of constraints are:</strong>
          <ul className="list-decimal pl-6">
            <li>
              Primary Key (PK)
              <p>
                A primary key is a column, or a set of columns, that uniquely
                identifies each row in a table. Each table can have only one
                primary key.
              </p>
              <br />
              <strong>Characteristics:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong className="mr-1">Uniqueness:</strong>Ensures that no
                  two rows have the same primary key value.
                </li>
                <li>
                  <strong className="mr-1">Non-Nullability:</strong>The primary
                  key column(s) must not contain NULL values.
                </li>
                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`CREATE TABLE Students(
  StudentID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50)
);`}</pre>
                </code>
                <br />
              </ul>
            </li>
            <li>
              Foreign Key (FK)
              <p>
                A foreign key is a column, or a set of columns, that creates a
                link between the data in two tables. The foreign key in one
                table points to a primary key in another table.
              </p>
              <br />
              <strong>Characteristics:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong className="mr-1">Referential Integrity:</strong>
                  column(s) corresponds to an existing value in the referenced
                  primary key column(s).
                </li>

                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`CREATE TABLE Enrollments (
  EnrollmentID INT PRIMARY KEY,
  StudentID INT,
  CourseID INT,
  FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);`}</pre>
                </code>
                <br />
              </ul>
            </li>
            <li>
              Unique & Not Null
              <p>
                The unique constraint ensures that all values in a column, or a
                set of columns, are distinct across the rows in the table.
              </p>
              <br />
              <strong>Characteristics:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong className="mr-1">Uniqueness:</strong>
                  Ensures no duplicate values in the column(s) it applies to.
                </li>
                <li>
                  <strong className="mr-1">Allows NULLs:</strong>
                  Unlike primary keys, columns with a unique constraint can
                  contain NULL values (unless explicitly disallowed).
                </li>

                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  OrderDate DATE NOT NULL,
  CustomerID INT NOT NULL
):`}</pre>
                </code>
                <br />
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Indexes</h2>
        <div className="prose max-w-none">
          <p>
            An index is a database object that improves the speed of data
            retrieval operations on a table at the cost of additional storage
            space and maintenance overhead.
          </p>
          <p>
            The purpose of indexes are to enhance the performance of queries by
            providing a faster way to access data.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Types of Indexes</h2>
          <ul className="list-disc pl-6">
            <li>
              Primary Index: Automatically created when a primary key is
              defined. It enforces uniqueness and improves lookup performance.
            </li>
            <li>
              Unique Index: Ensures that the indexed column(s) contain unique
              values, similar to the unique constraint but can be applied
              independently.
            </li>
            <li>
              Non-Unique Index: Speeds up data retrieval but allows duplicate
              values.
            </li>
            <li>
              Composite Index: An index on multiple columns. Improves
              performance for queries involving all or the leftmost subset of
              the indexed columns.
            </li>
            <li>
              Clustered Index: Determines the physical order of data in a table.
              Each table can have only one clustered index.
            </li>
            <li>
              Non-Clustered Index: A separate structure that points to the
              actual data. A table can have multiple non-clustered indexes.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Syntax for Creating Indexes</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`-- Creating a Primary Key Index (automatically created with PK constraint)
CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50)
);

--
CREATE UNIQUE INDEX idx_unique_email ON Users (Email);

-- Creating a Non-Unique Index
CREATE INDEX idx_lastname ON Employees (LastName);

-- Creating a Composite Index
CREATE INDEX idx_composite ON Orders (CustomerID, OrderDate);
-- Creating a Clustered Index
CREATE CLUSTERED INDEX idx_clustered ON Products (ProductID);

-- Creating a Non-Clustered Index
CREATE NONCLUSTERED INDEX idx_nonclustered ON Sales (SaleDate);

Creating a Unique Index`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Benefits of Indexes</h2>
          <ul className="list-disc pl-6">
            <li>
              Faster Data Retrieval: Significantly speeds up SELECT queries,
              especially on large datasets.
            </li>
            <li>
              Efficient Sorting: Speeds up the sorting of results (ORDER BY).
            </li>
            <li>
              Quick Searching: Enhances performance of search operations (WHERE
              clauses).
            </li>
            <li>
              Improved Join Operations: Speeds up JOIN operations by providing
              quick access paths to the joining columns.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Drawbacks of Indexes</h2>
          <ul className="list-disc pl-6">
            <li>Increased Storage: Indexes require additional disk space.</li>
            <li>
              Slower Write Operations: INSERT, UPDATE, and DELETE operations can
              be slower due to the need to update indexes.
            </li>
            <li>
              Maintenance Overhead: Requires periodic maintenance, such as
              rebuilding or reorganising, to ensure optimal performance.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Index Usage Guidelines</h2>
          <ul className="list-disc pl-6">
            <li>
              Index Selectivity: Create indexes on columns with high selectivity
              (i.e., columns with many unique values).
            </li>
            <li>
              Index Coverage: Cover frequently used columns in queries,
              especially those in WHERE, ORDER BY, and JOIN clauses.
            </li>
            <li>
              Composite Indexes: Use composite indexes for queries involving
              multiple columns to improve efficiency.
            </li>
            <li>
              Avoid Over-Indexing: Too many indexes can degrade performance due
              to maintenance overhead. Only index columns that are frequently
              queried.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Index Maintenance</h2>
          <p>
            Rebuilding Indexes: Periodically rebuild indexes to reorganise
            fragmented data and improve performance.
          </p>

          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`ALTER INDEX idx_lastname ON Employees REBUILD;`}</pre>
          </code>

          <p>
            Dropping Indexes: Remove unused or redundant indexes to improve
            write performance and reduce storage.
          </p>

          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`DROP INDEX idx_lastname ON Employees;`}</pre>
          </code>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical - Design a Relational Database
        </h2>
        <div className="prose max-w-none">
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`-- Design a relational database for a company ( you can come up with a name ) that manages employees,
             departments, and projects. The goal is to create, modify, and optimize the database structure while ensuring data integrity.


-- Lesson 1 
-- Creating Tables:

-- Employees Table:
-- - Create a table to store employee details, ensuring each employee has a unique identifier, first and last name, 
email address, hire date, and optional department information.
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    HireDate DATE NOT NULL,
    Department VARCHAR(50)
);


-- Departments Table:
-- - Design a table to store department details, including a unique identifier and department name. Each department should have a manager,
who is one of the employees.
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    DepartmentName VARCHAR(100) NOT NULL,
    ManagerID INT,
    FOREIGN KEY (ManagerID) REFERENCES Employees(EmployeeID)
);

-- Projects Table:
-- - Develop a table to manage projects, where each project has a unique identifier, name, start date, and optional end date.
Each project should be managed by an employee.
CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY AUTO_INCREMENT,
    ProjectName VARCHAR(100) NOT NULL UNIQUE,
    StartDate DATE NOT NULL,
    EndDate DATE,
    ManagerID INT,
    FOREIGN KEY (ManagerID) REFERENCES Employees(EmployeeID)
);

-- *******************************************************

-- Lesson 2 
-- Altering Tables:

-- - Add a column to the Employees table to store phone numbers.
-- - Make sure that every department has a name by including a NOT NULL constraint on the DepartmentName column.
-- - Rename the HireDate column in the Employees table to StartDate.
-- - Remove the Department column from the Employees table, as it is redundant.
ALTER TABLE Employees
ADD COLUMN PhoneNumber VARCHAR(15);
ALTER TABLE Departments
MODIFY COLUMN DepartmentName VARCHAR(100) NOT NULL;
ALTER TABLE Employees
CHANGE COLUMN HireDate StartDate DATE NOT NULL;
ALTER TABLE Employees
DROP COLUMN Department;

-- *******************************************************

-- Lesson 3 
-- Dropping Tables:

-- - Drop the Departments table entirely from the database.
-- - Create a temporary table named TempProjects for testing purposes and then drop it.
-- - Write a script to drop the Employees table only if it exists.
DROP TABLE IF EXISTS Departments;
CREATE TEMPORARY TABLE TempProjects (
    TempID INT PRIMARY KEY,
    TempName VARCHAR(50)
);
DROP TEMPORARY TABLE TempProjects;
DROP TABLE IF EXISTS Employees;

-- *******************************************************


-- Lesson 4 
-- Constraints:

-- - Make sure each task assignment is linked to a specific employee and project by 
creating a TaskAssignments table with appropriate primary and foreign keys.
-- - Add a unique constraint to the Email column in the Employees table to prevent duplicate email addresses.
-- - Make sure that every project must have an end-date by setting a NOT NULL constraint on the EndDate column in the Projects table.
CREATE TABLE TaskAssignments (
    TaskID INT PRIMARY KEY AUTO_INCREMENT,
    EmployeeID INT,
    ProjectID INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);
ALTER TABLE Employees
ADD CONSTRAINT unique_email UNIQUE (Email);
ALTER TABLE Projects
MODIFY COLUMN EndDate DATE NOT NULL;

-- *******************************************************


-- Lesson 5 
-- Indexes:

-- - Create an index on the Email column in the Employees table to speed up email searches.
-- - Create a composite index on the LastName and FirstName columns in the Employees table to improve full name searches.
-- - Drop the index on the Email column if it is no longer needed.
CREATE INDEX idx_email ON Employees(Email);
CREATE INDEX idx_fullname ON Employees(LastName, FirstName);
DROP INDEX idx_email ON Employees;
`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_6;
