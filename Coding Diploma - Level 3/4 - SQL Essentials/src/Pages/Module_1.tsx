function Module_1() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">SQL Definition</h2>
        <div className="prose max-w-none">
          <p>SQL Stands for Structured Query Language</p>
          <p>
            It is a domain-specific language used in programming and designed
            for managing and manipulating data in relational database management
            systems (RDBMS)
          </p>
          <br />
          <h3 className="font-semibold underline">Key Points</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong className="pr-2">Database Management:</strong>SQL is
              primarily used for managing data held in relational database
              management systems
            </li>
            <li>
              <strong className="pr-2">Query Language:</strong>SQL is a query
              language, which means it is used to communicate with the database
              to perform tasks like retireving data, updating data, deleting
              data and creating new data structures (i.e. tables, views etc)
            </li>
            <li>
              <strong className="pr-2">Declarative Language:</strong>SQL is a
              declarative language, meaning that you specify what you want to
              achieve, rather than how to achieve it. You can tell the database
              what data you want to retrieve or manipulate, and the database
              figures out the most efficient way to perform the operation
            </li>
            <li>
              <strong className="pr-2">Standarised Language</strong>SQL is an
              ANSI/ISO standard language. However different database management
              systems may implement SQL slightly differently, leading to
              variations in syntax and functionality.
            </li>
            <li>
              <strong className="pr-2">Components of SQL:</strong>SQL comprises
              several different components, including Data Definition Language
              (DDL), Data Manipulation Language (DML), Data Control Language
              (DCL) and Transaction Control Language (TCL).
            </li>
            <li>
              <strong className="pr-2">Ubiquity:</strong>SQL is widely used in
              various industries and applications, including web development,
              data analysis, business intelligence and much more.
            </li>
          </ul>
          <br />
          <code>
            <pre className="bg-gray-100 p-4 rounded">
              {`
-- Example of a simple SQL query to retrieve data from a table

SELECT column1, column2
FROM table_name
WHERE condition;
              `}
            </pre>
          </code>
          <p>
            SQL is a powerful and versatile language for managing and
            manipulating data in relational databases.
          </p>
          <p>
            Understanding SQL fundamentals is essential for anyone working with
            databases or involved in software development, data analysis, or
            database administration.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Importance of SQL
        </h2>
        <div className="prose max-w-none">
          <p>
            SQL's origins can be traced back to the 1970s when IBM researchers
            developed the first prototype of a relational database management
            system (RDBMS) called System R.
          </p>
          <p>
            SQL was originally developed by IBM as part of the System R Project
            in the early 70s. It was initially called SEQUEL (Structured English
            Query Language) and was designed to manipulate and retrieve data
            stored in IBM's original RDBMS.
          </p>
          <p>
            In the 1980s, SQL became standardised by the American National
            Standards Institute (ANSI) and the International Organisation for
            Standardisation (ISO). This standardisation helped SQL become widely
            adopted across various database management systems.
          </p>
          <h2 className="font-semibold underline">Importances:</h2>
          <ul className="list-disc pl-6">
            <li>Universal Language</li>
            <li>Data Retrieval and Manipulation</li>
            <li>Data Analysis</li>
            <li>Web Development</li>
            <li>Database Administration</li>
            <li>Scalability and Performance</li>
          </ul>
          <br />
          <h2 className="font-semibold underline">Universal Language:</h2>
          <p>
            SQL is the standard language for communicating with relational
            database management systems
          </p>
          <p>
            It provides a common syntax and set of commands that can be used
            across different database platforms, including MySQL, PostgresQL,
            Oracle, SQL Server, and many more.
          </p>
          <br />
          <h2 className="font-semibold underline">
            Data Retrieval and Manipulation:
          </h2>
          <p>
            SQL allows users to retrieve, insert, update and delete data from
            databases.
          </p>
          <p>
            This capability is fundamental for managing and manipulating data in
            various applications and industries.
          </p>
          <br />
          <h2 className="font-semibold underline">Data Analysis:</h2>
          <p>
            SQL is widely used in data analysis and business intelligence
            applications.
          </p>
          <p>
            Analysts and data scientists use SQL queries to extract insights
            from large datasets stored in databases.
          </p>
          <br />
          <h2 className="font-semibold underline">Web Development:</h2>
          <p>
            SQL is essential for web development, particularly in building
            dynamic and interactive websites.
          </p>
          <p>
            Web developers use SQL to interact with the databases and retrieve
            or update data based on user inputs or system requirements.
          </p>
          <br />
          <h2 className="font-semibold underline">Database Administration:</h2>
          <p>
            Database administrators (DBAs) rely on SQL for tasks such as
            database creation, configuration, optimisation, security management
            and performance tuning.
          </p>
          <p>
            SQL can be integrated with programming languages like Java, Python,
            PHP and C# through database connectors and APIs
          </p>
          <p>
            This integration enables developers to build powerful applications
            that interact with databases seamlessly
          </p>
          <br />
          <h2 className="font-semibold underline">
            Scalability and Performance:
          </h2>
          <p>
            SQL databases offer features for scalability and perfomance
            optimisation, allowing organisations to handle large volumes of data
            and deliver responsive applications to users.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Types of Database
        </h2>
        <div className="prose max-w-none">
          <ul className="list-disc pl-6">
            <li>Relational</li>
            <li>Non-Relational</li>
          </ul>
          <p>
            Understanding the differences between these types of databases is
            crucial for choosing the right database solution for specific use
            cases.
          </p>
          <br />
          <h2 className="font-semibold underline">Relational Databases:</h2>
          <ul className="list-decimal pl-6">
            <li>
              <strong className="mr-2">Definition:</strong>Relational databases
              store data in tables consisting of rows and columns. Each table
              represents an entity, and relationships between entities are
              established through keys.
            </li>
            <li>
              <strong className="mr-2">Structured Data:</strong>Data in
              relational databases is highly structured, meaning it follows a
              predefined schema. Tables have defined columns with data types,
              constraints, and relationships.
            </li>
            <li>
              <strong className="mr-2">SQL Compatibility:</strong>Relational
              databases use SQL (Structured Query Language) for querying and
              manipulating data. SQL provides a powerful and standardised way to
              interact with relational databases.
            </li>
            <li>
              <strong className="mr-2">ACID Properties:</strong>Relational
              databases typically adhere to ACID (Atomicity, Consistency,
              Isolation, Durability) properties, ensuring data integrity and
              transactional consistency.
            </li>
            <li>
              <strong className="mr-2">Examples:</strong>MySQL, PostgreSQL,
              Oracle Database, SQL Server, SQLite.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">Non-Relational Databases:</h2>
          <ul className="list-decimal pl-6">
            <li>
              <strong className="mr-2">Definition:</strong>Non-relational
              databases, often referred to as NoSQL databases, are designed to
              store and manage unstructured or semi-structured data. They offer
              flexible schema designs and are optimised for horizontal
              scalability.
            </li>

            <li>
              <strong className="mr-2">Schema Flexibility:</strong>NoSQL
              databases allow for flexible schema designs, enabling developers
              to store data without a predefined schema. This flexibility is
              beneficial for handling rapidly evolving data structures.
            </li>

            <li>
              <strong className="mr-2">Variety of Data Models:</strong>NoSQL
              databases support various data models, including
              document-oriented, key-value, column-family, and graph databases.
              Each data model is optimised for specific use cases and data
              access patterns.
            </li>

            <li>
              <strong className="mr-2">Scalability:</strong>NoSQL databases
              excel at horizontal scalability, allowing them to handle massive
              amounts of data and high concurrent loads. They use distributed
              architectures and partitioning strategies to distribute data
              across multiple nodes.
            </li>

            <li>
              <strong className="mr-2">CAP Theorem:</strong>NoSQL databases
              often prioritise scalability and availability over strict
              consistency, as per the CAP (Consistency, Availability, Partition
              Tolerance) theorem. Different NoSQL databases make different
              trade-offs between these three properties.
            </li>

            <li>
              <strong className="mr-2">Examples:</strong>MongoDB (Document
              Store), Cassandra (Wide-column Store), Redis (Key-value Store),
              Neo4j (Graph Database), Amazon DynamoDB.
            </li>
          </ul>
          <br />
          <p>
            Understanding the differences between relational and non-relational
            databases is essential for making informed decisions when designing
            database systems.
          </p>
          <br />
          <p>
            Relational databases are well-suited for structured data and
            transactional applications, while non-relational databases offer
            flexibility, scalability, and performance advantages for handling
            diverse data types and high-volume workloads.
          </p>
          <br />
          <p>
            Depending on the specific requirements of an application, developers
            can choose the appropriate database type to ensure optimal
            performance and scalability.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">SQL Standards</h2>
        <div className="prose max-w-none">
          <h2 className="font-semibold underline">ANSI/ISO SQL Standards:</h2>
          <ul className="list-decimal pl-6">
            <li>
              <strong className="mr-2">Definition:</strong>The American National
              Standards Institute (ANSI) and the International Organisation for
              Standardisation (ISO) have defined SQL standards to promote
              consistency and interoperability among different database systems.
            </li>

            <li>
              <strong className="mr-2">Standardisation Process:</strong>ANSI/ISO
              periodically release updates to the SQL standard, incorporating
              new features, enhancements, and clarifications based on industry
              needs and technological advancements.
            </li>

            <li>
              <strong className="mr-2">
                SQL-92, SQL:1999, SQL:2003, SQL:2008, SQL:2011, SQL:2016,
                SQL:2019:
              </strong>
              These are some of the major versions of the SQL standard released
              over the years. Each version introduces new features and
              improvements to the language.
            </li>

            <li>
              <strong className="mr-2">Features:</strong>SQL standards define
              syntax rules, data types, functions, operators, and other language
              constructs. They also specify rules for data manipulation,
              transaction control, concurrency control, and data definition.
            </li>

            <li>
              <strong className="mr-2">Compliance:</strong>Database vendors
              strive to comply with SQL standards to varying degrees. While most
              DBMS support core SQL features, some may offer extensions or
              proprietary features that deviate from the standard.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">
            Importances of SQL Standards:
          </h2>
          <ul className="list-decimal pl-6">
            <li>
              <strong className="mr-2">Portability:</strong>Adhering to SQL
              standards ensures that SQL code written for one database system
              can be easily migrated to another compliant database system
              without significant modifications.
            </li>

            <li>
              <strong className="mr-2">Interoperability:</strong>Applications
              built on SQL standards can seamlessly interact with different
              database systems, facilitating integration and data exchange
              across diverse environments.
            </li>

            <li>
              <strong className="mr-2">Vendor Neutrality:</strong>SQL standards
              promote vendor neutrality, allowing organisations to avoid vendor
              lock-in and choose database solutions based on their technical
              merits and business requirements.
            </li>

            <li>
              <strong className="mr-2">Future-proofing:</strong>By following SQL
              standards, developers future-proof their applications against
              changes in database technologies and vendor-specific
              implementations.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">
            Importances of SQL Standards:
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Feature Variability:</strong> Not all
              database systems fully comply with the latest SQL standards. Some
              may lack support for certain features or implement them
              differently, leading to compatibility issues.
            </li>

            <li>
              <strong className="mr-2">Performance Considerations:</strong>{" "}
              While SQL standards aim to promote consistency, performance
              considerations may prompt database vendors to introduce
              optimisations or proprietary extensions that diverge from the
              standard.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Module_1;
