function Module_8() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">GRANT Statement</h2>
        <div className="prose max-w-none">
          <p>
            The GRANT statement is used to give users access privileges to
            database objects.
          </p>
          <p>
            It allows database administrators to specify which users or roles
            have what type of access to which objects.
          </p>
          <br />
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`GRANT privilege [, ...]
ON object
TO user_or_role [, ...]
[WITH GRANT OPTION];`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Key Components</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">privilege:</strong>The specific
              permission being granted (e.g. SELECT, INSERT, UPDATE, DELETE)
            </li>
            <li>
              <strong className="mr-1">object:</strong>The database object (i.e.
              table, view) on which the privilege is being granted.
            </li>
            <li>
              <strong className="mr-1">user_or_role:</strong>The user or role
              that is being granted the privilege.
            </li>
            <li>
              <strong className="mr-1">WITH GRANT OPTION:</strong>Allows the
              grantee to grant the privilege to others.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              <p>Granting SELECT privilege on a table to a user:</p>
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`GRANT SELECT ON employees TO userl;`}</pre>
              </code>
            </li>

            <li>
              <p>Granting multiple privileges on a table to a user:</p>
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`GRANT SELECT, INSERT ON employees TO userl;`}</pre>
              </code>
            </li>

            <li>
              <p>
                Granting a privilege with the option to further grant it to
                others:
              </p>
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`GRANT SELECT ON employees TO userl WITH GRANT OPTION;`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Providing read-only access to certain tables.</li>
            <li>
              Allowing users to insert, update, or delete data in specific
              tables.
            </li>
            <li>
              Delegating administrative tasks to other users by granting them
              the ability to grant privileges.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          REVOKE Statement
        </h2>
        <div className="prose max-w-none">
          <p>
            The REVOKE statement is used to remove access privileges from users
            or roles. It ensures that users or roles no longer have the
            specified permissions on database objects.
          </p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`REVOKE privilege [, ... ]
ON object
FROM user_or_role [, ... ];`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Key Components</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-1">privilege:</strong>The specific
              permission being revoked (e.g. SELECT, INSERT, UPDATE, DELETE)
            </li>
            <li>
              <strong className="mr-1">object:</strong>The database object (i.e.
              table, view) from which the privilege is being revoked.
            </li>
            <li>
              <strong className="mr-1">user_or_role:</strong>The user or role
              from which the privilege is being revoked.
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              <p>Revoking SELECT privilege on a table from a user</p>
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`REVOKE SELECT ON employees FROM userl;`}</pre>
              </code>
            </li>
            <li>
              <p>Revoking multiple privileges on a table from a user:</p>
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`REVOKE SELECT, INSERT ON employees FROM userl;`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Removing access from users who no longer require it.</li>
            <li>Revoking privileges as part of a security policy update.</li>
            <li>
              Enforcing the principle of least privilege by removing unnecessary
              permissions.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Roles and Privileges
        </h2>
        <div className="prose max-w-none">
          <p>
            Roles are a way to group privileges together, making it easier to
            manage and assign them to users. Privileges determine what actions a
            user can perform on database objects.
          </p>
          <br />
          <p>Roles are creating using the CREATE ROLE statement</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`CREATE ROLE role_name;`}</pre>
          </code>
          <br />
          <p>Once a role is create, privileges can be granted to it</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`GRANT SELECT, INSERT ON employees TO role_name;`}</pre>
          </code>
          <br />
          <p>Roles can be assigned to users using the GRANT statement</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`GRANT role_name TO user1;`}</pre>
          </code>
          <br />
          <p>Roles can be revoked from users using the REVOKE statement</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`REVOKE role_name FROM user1`}</pre>
          </code>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Examples</h2>
          <ul className="list-decimal pl-6">
            <li>
              Creating a role and granting it privileges.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE ROLE read_write;
GRANT SELECT, INSERT, UPDATE, DELETE ON
employees TO read_write;`}</pre>
              </code>
            </li>
            <li>
              Assigning the role to a user
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`GRANT read_write TO user1;`}</pre>
              </code>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>Simplifying the management of user privileges.</li>
            <li>
              Grouping common sets of privileges together for easier assignment.
            </li>
            <li>
              Enhancing security by ensuring users have only the necessary
              permissions.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Practical - Manage a Student Information Database
        </h2>
        <div className="prose max-w-none">
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`-- Lesson 1: GRANT Statement


-- 1. Create a new database called student_management.
CREATE DATABASE student_management;


-- 2. Create two tables in the database:
-- students: Stores information about students (id, name, age, grade).USE student_management;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);

-- teachers: Stores information about teachers (id, name, subject).
CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    subject VARCHAR(50)
);


-- 3. Create a user named teacher_user without any initial privileges.
CREATE USER 'teacher_user'@'localhost' IDENTIFIED BY 'password123';


-- 4. Write a query to grant SELECT and INSERT privileges to teacher_user on the students table.
GRANT SELECT, INSERT ON student_management.students TO 'teacher_user'@'localhost';


-- 5. Verify that teacher_user can now select and insert records in the students table but cannot delete or update any records.
SELECT * FROM student_management.students;
INSERT INTO student_management.students (name, age, grade)
VALUES ('John Doe', 16, '10th Grade');
DELETE FROM student_management.students WHERE id = 1;
UPDATE student_management.students SET grade = '11th Grade' WHERE id = 1;



-- *******************************************************


-- Lesson 2: REVOKE Statement

-- 1. Use the same database student_management.
USE student_management;


-- 2. Create another user called admin_user.
CREATE USER 'admin_user'@'localhost' IDENTIFIED BY 'adminpassword';


-- 3. Grant all privileges (SELECT, INSERT, UPDATE, DELETE) on both tables (students and teachers) to admin_user.
GRANT SELECT, INSERT, UPDATE, DELETE ON student_management.students TO 'admin_user'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON student_management.teachers TO 'admin_user'@'localhost';


-- 4. Verify that admin_user can perform all operations.
SELECT * FROM students;
INSERT INTO students (name, age, grade)
VALUES ('Jane Smith', 17, '11th Grade');
UPDATE students SET grade = '12th Grade' WHERE name = 'Jane Smith';
DELETE FROM students WHERE name = 'Jane Smith';


-- 5. Write a query to revoke the DELETE privilege from admin_user on the students table.
REVOKE DELETE ON student_management.students FROM 'admin_user'@'localhost';


-- 6. Verify that admin_user can no longer delete records from the students table but can still insert, update, and select records.SELECT * FROM students;
INSERT INTO students (name, age, grade)
VALUES ('John Doe', 16, '10th Grade');
UPDATE students SET grade = '11th Grade' WHERE name = 'John Doe';
DELETE FROM students WHERE name = 'John Doe';



-- *******************************************************


-- Lesson 3: Roles and Privileges

-- 1. Create a new role called student_role and assign it SELECT privileges on the students table.
CREATE ROLE 'student_role';
GRANT SELECT ON student_management.students TO 'student_role';


-- 2. Create a new user student_user and assign them the student_role.
CREATE USER 'student_user'@'localhost' IDENTIFIED BY 'studentpassword';
GRANT 'student_role' TO 'student_user'@'localhost';


-- 3. Verify that student_user can only view the records in the students table but cannot make any changes.
SELECT * FROM student_management.students;
INSERT INTO students (name, age, grade) VALUES ('Test User', 18, '12th Grade');
UPDATE students SET grade = '11th Grade' WHERE name = 'Test User';
DELETE FROM students WHERE name = 'Test User';


-- 4. Modify the student_role to also include INSERT privileges on the students table.
GRANT INSERT ON student_management.students TO 'student_role';


-- 5. Verify that student_user can now insert new records but still cannot delete or update them.
INSERT INTO students (name, age, grade)
VALUES ('Test User', 18, '12th Grade');
UPDATE students SET grade = '11th Grade' WHERE name = 'Test User';
DELETE FROM students WHERE name = 'Test User';`}</pre>
          </code>
        </div>
      </section>
    </>
  );
}

export default Module_8;
