function Module_5() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Introduction to Database Design
        </h2>
        <div className="prose max-w-none">
          <p>
            Database design is the process of defining the structure, storage
            and retrieval mechanisms for a database.
          </p>
          <p>
            Good database design is crucial of ensuring data integrity,
            optimising performance, and facilitating efficient data management.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Key Concepts in Database Design
          </h2>
          <ul className="list-decimal pl-6">
            <li>
              Requirements Analysis
              <ul className="list-disc pl-6">
                <li>
                  Understanding and documenting the data requirements of the
                  users and applications.
                </li>
                <li>
                  Identifying the types of data to be stored, how the data will
                  be used, and any constraints on the data.
                </li>
              </ul>
            </li>
            <li>
              Data Modelling
              <ul className="list-disc pl-6">
                <li>
                  Creating a conecptual model of the database using tools like
                  Entity-Relationship Diagrams (ERDs)
                </li>
                <li>Defining entities, attributes, and relationships.</li>
                <li>
                  Ensuring the model accurately represents the data and
                  relationships needed.
                </li>
              </ul>
            </li>
            <li>
              Entities & Attributes
              <ul className="list-disc pl-6">
                <li>
                  Entities: Objects or concepts that represent data, such as
                  Customer, Order, or Product
                </li>
                <li>
                  Attributes: Properties or characteristics of entities, such as
                  CustomerID, Order Date, or ProductName
                </li>
              </ul>
            </li>
            <li>
              Relationships
              <ul className="list-disc pl-6">
                <li>Defining how entities are related to each other.</li>
                <li>
                  Types of relatoinships include one-to-one, one-to-many, and
                  many-to-many.
                </li>
                <li>
                  Use of foreign keys to establish relationships between tables.
                </li>
              </ul>
            </li>
            <li>
              Normalization
              <ul className="list-disc pl-6">
                <li>
                  Process of organising data to minimise redundancy and improve
                  data integrity.
                </li>
                <li>
                  Involves dividing large tables into smaller, related tables.
                </li>
                <li>
                  Normal forms (1NF, 2NF, 3NF, BCNF) guide the normalization
                  process.
                </li>
              </ul>
            </li>
            <li>
              Primary Keys
              <ul className="list-disc pl-6">
                <li>
                  A primary key is a unique identifier for a record in a table.
                </li>
                <li>Ensures each record can be uniquely identified.</li>
                <li>Example: CustomerID in a Customers table.</li>
              </ul>
            </li>
            <li>
              Foreign Keys
              <ul className="list-disc pl-6">
                <li>
                  A foreign key is an attribute in one table that links to the
                  primary key of another table.
                </li>
                <li>Establishes a relationship between tables.</li>
                <li>
                  Example: CustomerID in an Orders table, linking to CustomerID
                  in the Customers table.
                </li>
              </ul>
            </li>
            <li>
              Indexing
              <ul className="list-disc pl-6">
                <li>
                  Creating indexes to improve the speed of data retrieval
                  operations.
                </li>
                <li>
                  Indexes can be created on one or more columns of a table.
                </li>
                <li>
                  Balancing the use of indexes is crucial, as they can speed up
                  reads but slow down writes.
                </li>
              </ul>
            </li>
            <li>
              Denormalization
              <ul className="list-disc pl-6">
                <li>
                  The process of intentionally introducing redundancy into a
                  database desing to improve read performance.
                </li>
                <li>
                  Often used in data warehousing and reporting scenarios where
                  read operations are more frequent than write operations.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Creating an ER Diagram</h2>
          <ul className="list-disc pl-6">
            <li>
              Use tools like Microsoft Visio, Lucidchart, or online ERD tools to
              create diagrams.
            </li>
            <li>
              Example ERD for an e-commerce system might include
              <ul className="list-disc pl-6">
                <li>
                  Customers table with attributes CustomerID, FirstName,
                  LastName, Email.
                </li>

                <li>
                  Orders table with attributes OrderID, OrderDate, CustomerID.
                </li>
                <li>
                  Products table with attributes ProductID, ProductName, Price.
                </li>
                <li>
                  Relationships illustrated with connecting lines, e.g.,
                  CustomerID in Orders linking to Customers.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Applying Normalization</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Start with unnormalized data:</strong>
              Orders(OrderID, OrderDate, CustomerID, CustomerName, ProductID,
              ProductName, Quantity, Price)
            </li>
            <li>
              <strong className="mr-2">
                Normalize to INF (remove repeating groups):
              </strong>
              Orders(OrderID, OrderDate, CustomerID) OrderDetails(OrderID,
              ProductID, Quantity, Price) Customers(CustomerID, CustomerName)
              Products(ProductID, ProductName)
            </li>
          </ul>
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Defining Primary & Foreign Keys
          </h2>
          <ul className="list-disc pl-6">
            <li>
              In the normalized schema:
              <ul className="list-disc pl-6">
                <li>
                  <strong className="mr-1">Customers Table:</strong>Primary Key
                  CustomerID.
                </li>
                <li>
                  <strong className="mr-1">Orders Table:</strong>Primary Key
                  OrderID, Foreign Key CustomerID
                </li>
                <li>
                  <strong className="mr-1">OrderDetails Table:</strong>Composite
                  Primary Key (OrderID, ProductID), Foreign Key OrderID linking
                  to Orders, ProductID linking to Products.
                </li>
              </ul>
            </li>
          </ul>
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Implementing Indexes</h2>
          <p>Create indexes on clumns frequently used in search conditions</p>
          <code className="text-sm">
            <pre className="bg-gray-100 mb-2 rounded">
              {`
CREATE INDEX idx_customer_email ON
Customers(Email);
CREATE INDEX idx_order_data ON Orders(OrderDate);
              `}
            </pre>
          </code>
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <ul className="list-disc pl-6">
            <li>
              Database design is a critical process that involves understanding
              data requirements, modeling entities and relationships,
              normalizing data to ensure integrity, and optimising for
              performance through indexing and denormalization where
              appropriate.
            </li>

            <li>
              Good design practices lead to efficient, scalable, and
              maintainable databases that meet the needs of users and
              applications.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Entity-Relationship Model (ER Model)
        </h2>
        <div className="prose max-w-none">
          <p>
            The Entity-Relationship (ER) Model is a conceptual framework used to
            describe the structure of a database in terms of entities,
            attributes and relationships.
          </p>
          <p>
            It is commonly used during the design phase of a database to create
            a visual representation of the data and its interconnections, which
            can be used to hide the implementation of the database schema.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Key Components in ER Model</h2>
          <ul className="list-decimal pl-6">
            <li>
              Entities
              <ul className="list-disc pl-6">
                <li>
                  An entity is a real-world object or concept that can have data
                  stored about it in a database.
                </li>
                <li>
                  Entities are typically nouns, such as Customer, Order,
                  Product.
                </li>
                <li>Entities are represented as rectangles in ER diagrams.</li>
              </ul>
            </li>
            <li>
              Attributes
              <ul className="list-disc pl-6">
                <li>
                  Attributes are properties or characteristics of an entity.
                </li>
                <li>
                  Example attributes for a Customer entity might include
                  CustomerID, FirstName, LastName, Email.
                </li>
                <li>
                  Attributes are represented as ovals connected to their entity
                  rectangle.
                </li>
              </ul>
            </li>
            <li>
              Primary Key
              <ul className="list-disc pl-6">
                <li>
                  A primary key is a unique identifier for each instance of an
                  entity.
                </li>
                <li>
                  Ensures that each record in the entity can be uniquely
                  identified.
                </li>
                <li>
                  Represented by underlining the attribute name in the entity
                  rectangle.
                </li>
              </ul>
            </li>
            <li>
              Relationships
              <ul className="list-disc pl-6">
                <li>
                  Relationships describe how entities are related to each other.
                </li>
                <li>
                  Example relationships include Customer places Order, Order
                  contains Product.
                </li>
                <li>
                  Relationships are represented as diamonds connected to related
                  entities with lines.
                </li>
              </ul>
            </li>
            <li>
              Cardinality
              <ul className="list-disc pl-6">
                <li>
                  Cardinality specifies the number of instances of one entity
                  that can be associated with instances of another entity.
                </li>
                <li>
                  Types of cardinality include one-to-one (1:1), one-to-many
                  (1), and many-to-many (M).
                </li>
                <li>
                  Represented using notation like 1, N, or M on the relationship
                  lines.
                </li>
              </ul>
            </li>
            <li>
              Composite Attributes
              <ul className="list-disc pl-6">
                <li>
                  Composite attributes can be divided into smaller sub-parts,
                  each representing a more basic attribute with an independent
                  meaning.
                </li>
                <li>
                  Example: Address can be broken down into Street, City, State,
                  ZipCode.
                </li>
                <li>
                  Represented as ovals connected to their composite attribute
                  oval.
                </li>
              </ul>
            </li>
            <li>
              Multivalued Attributes
              <ul className="list-disc pl-6">
                <li>
                  Multivalued attributes can have multiple values for a single
                  entity instance.
                </li>
                <li>
                  Example: A Person entity might have a multivalued attribute
                  PhoneNumbers.
                </li>
                <li>Represented as double ovals.</li>
              </ul>
            </li>
            <li>
              Derived Attributes
              <ul className="list-disc pl-6">
                <li>
                  Derived attributes are attributes whose values can be
                  calculated from other attributes.
                </li>
                <li>Example: Age can be derived from DateOfBirth.</li>
                <li>Represented as dashed ovals.</li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Example ER Diagram Components</h2>
          <ul className="list-decimal pl-6">
            <li>
              Entities & Attributes
              <ul className="list-disc pl-6">
                <li>
                  Customer entity with attributes: CustomerID, FirstName,
                  LastName, Email.
                </li>
                <li>
                  Order entity with attributes: OrderID, OrderDate, CustomerID.
                </li>
                <li>
                  Product entity with attributes: ProductID, ProductName, Price.
                </li>
              </ul>
            </li>
            <li>
              Relationships & Cardinality
              <ul className="list-disc pl-6">
                <li>
                  Customer to Order relationship: A customer can place multiple
                  orders (one-to-many).
                </li>
                Order to Product relationship:
                <li>
                  An order can include multiple products and a product can be
                  part of multiple orders (many-to-many).
                </li>
              </ul>
            </li>
            <li>
              Composite Attribute Example
              <ul className="list-disc pl-6">
                <li>
                  Address as a composite attribute of Customer, composed of
                  Street, City, State, ZipCode
                </li>
              </ul>
            </li>
            <li>
              Multivalied Attribute Example
              <ul className="list-disc pl-6">
                <li>
                  Customer entitiy with a multivalued attribute PhoneNumbers
                </li>
              </ul>
            </li>
            <li>
              Derived Attribute Example
              <ul className="list-disc pl-6">
                <li>
                  Customer entity with a derived attribute Age from DateOfBirth
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Creating an ER Diagram</h2>
          <ul className="list-decimal pl-6">
            <li>
              Identify Entities
              <ul className="list-disc pl-6">
                <li>
                  Determine the main objects or concepts to be represented, such
                  as Customer, Order, Product.
                </li>
              </ul>
            </li>
            <li>
              Identify Relationships
              <ul className="list-disc pl-6">
                <li>
                  Determine how these entities interact or are related, such as
                  Customer places Order, Order contains Product.
                </li>
              </ul>
            </li>
            <li>
              Determine Attributes
              <ul className="list-disc pl-6">
                <li>
                  Identify the key attributes for each entity, ensuring to
                  include primary keys.
                </li>
              </ul>
            </li>
            <li>
              Define Cardinality
              <ul className="list-disc pl-6">
                <li>
                  Specify the cardinality for each relationship, such as
                  one-to-many, many-to-many.
                </li>
              </ul>
            </li>
            <li>
              Draw the Diagram
              <ul className="list-disc pl-6">
                <li>
                  Use an ER diagram tool or drawing application to create the
                  visual representation:
                  <ul className="list-disc pl-6">
                    <li>Draw rectangles for entities.</li>
                    <li>Draw ovals for attributes.</li>
                    <li>Draw diamonds for relationships.</li>
                    <li>Connect entities and relationships with lines.</li>
                    <li>Annotate lines with cardinality information.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <img src="/er_diagram.png" alt="" />
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <p>
            The Entity-Relationship Model (ER Model) is a crucial part of
            database design, providing a visual and conceptual representation of
            the data and its relationships.
          </p>

          <p>
            By identifying entities, attributes, and relationships, and
            determining cardinality, the ER model helps in creating an organised
            and efficient database schema that ensures data integrity and
            supports the needs of applications and users.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Normalization (1NF, 2NF, 3NF)
        </h2>
        <div className="prose max-w-none">
          <p>
            Normalization is the process of organising data in a database to
            reduce redundancy and improve data integrity.
          </p>

          <p>
            It involves dividing large tables into smaller, related tables and
            defining relationships between them. The goal is to ensure that the
            database is free of anomalies and can be easily maintained.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Example ER Diagram Components</h2>
          <ul className="list-decimal pl-6">
            <li>
              First Normal Form (1NF)
              <ul className="list-disc pl-6">
                A table is in 1NF if:
                <li>All columns contain atomic (indivisible) values.</li>
                <li>Each column contains values of a single type.</li>
                <li>Each column has a unique name.</li>
                <li>The order in which data is stored does not matter.</li>
              </ul>
            </li>
            <li>
              Second Normal Form (2NF)
              <ul className="list-disc pl-6">
                A table is in 2NF if:
                <li>It is in INF.</li>
                <li>
                  All non-key attributes are fully functional dependent on the
                  primary key (no partial dependency).
                </li>
                <li>
                  Partial dependency occurs when a non-key attribute is
                  dependent on only a part of the primary key, instead of the
                  whole primary key.
                </li>
              </ul>
            </li>
            <li>
              Third Normal Form (3NF)
              <ul className="list-disc pl-6">
                A table is in 3NF if:
                <li>It is in 2NF.</li>
                <li>
                  All non-key attributes are non-transitively dependent on the
                  primary key (no transitive dependency).
                </li>
                <li>
                  Transitive dependency occurs when a non-key attribute depends
                  on another non-key attribute, which in turn depends on the
                  primary key.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <p>
            Normalization is a crucial process in database design to ensure data
            integrity, minimise redundancy, and simplify maintenance.
          </p>

          <p>
            By applying the rules of INF, 2NF, and 3NF, you can structure your
            database tables to avoid anomalies and ensure efficient data
            operations.
          </p>

          <p>
            Each normal form builds on the previous one, further refining the
            structure and relationships of the data.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Denormalization</h2>
        <div className="prose max-w-none">
          <p>
            Denormalization is the process of intentionally introducing
            redundancy into a database design to improve read performance and
            reduce the complexity of queries.
          </p>

          <p>
            While normalization aims to minimise redundancy and ensure data
            integrity, denormalization can sometimes provide practical benefits
            in specific scenarios where read-heavy operations are common.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">
            Key Concepts in Denormalization
          </h2>
          <ul className="list-decimal pl-6">
            <li>
              Purpose
              <ul className="list-disc pl-6">
                <li>
                  Improve read performance by reducing the number of joins
                  required to fetch related data.
                </li>
                <li>
                  Simplify complex queries by consolidating data into fewer
                  tables.
                </li>
                <li>
                  Balance between normalization and denormalization to achieve
                  optimal performance based on specific use cases.
                </li>
              </ul>
            </li>
            <li>
              Benefits
              <ul className="list-disc pl-6">
                <li>
                  Faster Read Operations: Less need for joins can lead to
                  quicker data retrieval.
                </li>
                <li>
                  Simplified Queries: Easier to write and maintain queries that
                  fetch data from fewer tables.
                </li>
                <li>
                  Better Performance for Analytical Queries: Aggregated data and
                  precomputed results can enhance performance for reporting and
                  analysis.
                </li>
              </ul>
            </li>
            <li>
              Drawbacks
              <ul className="list-disc pl-6">
                <li>
                  Increased Storage Requirements: Redundant data consumes more
                  space.
                </li>
                <li>
                  Data Inconsistency: Higher risk of data anomalies and
                  inconsistencies due to redundant data.
                </li>
                <li>
                  Complicated Updates: More complex and costly updates, inserts,
                  and deletes due to redundancy.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Examples & Use Cases</h2>
          <ul className="list-decimal pl-6">
            <li>
              Combining Tables
              <ul className="list-disc pl-6">
                <li>
                  Instead of having separate tables for Orders and OrderDetails,
                  combine them into a single table to reduce the need for joins.
                </li>
              </ul>
            </li>
            <li>
              Storing Aggregated Data
              <ul className="list-disc pl-6">
                <li>
                  Instead of computing aggregates on the fly, store precomputed
                  values in a table:
                </li>
              </ul>
            </li>
            <li>
              Including Derived Data
              <ul className="list-disc pl-6">
                <li>
                  Instead of calculating derived data at runtime, store it
                  directly in the table.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Keys (Primary, Foreign, Candidate)
        </h2>
        <div className="prose max-w-none">
          <p>
            Keys are fundamental elements in database design, ensuring data
            integrity and establishing relationships between tables.
          </p>

          <p>
            They uniquely identify records and enable efficient data retrieval.
          </p>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Types of Keys</h2>
          <ul className="list-decimal pl-6">
            <li>
              Primary Key
              <ul className="list-disc pl-6">
                <li>
                  A primary key is a column or a set of columns that uniquely
                  identifies each row in a table.
                </li>
                <li>
                  It ensures that no two rows can have the same primary key
                  value and that the primary key columns do not contain NULL
                  values.
                </li>
              </ul>
              <br />
              <h2 className="font-semibold pb-2">
                Characteristics of a Foreign Key
              </h2>
              <p>
                Unique: Each value in the primary key column(s) must be unique
                across the table.
              </p>
              <p>Not Null: Primary key columns cannot contain NULL values.</p>
              <p>
                Single Column or Composite: A primary key can consist of a
                single column or multiple columns (composite key).
              </p>
            </li>
            <li>
              Foreign Key
              <ul className="list-disc pl-6">
                <li>
                  A foreign key is a column or a set of columns that creates a
                  link between data in two tables.
                </li>
                <li>
                  It is a reference to the primary key in another table,
                  ensuring referential integrity.
                </li>
              </ul>
              <br />
              <h2 className="font-semibold pb-2">
                Characteristics of a Foreign Key
              </h2>
              <p>
                Referential Integrity: Ensures that the value in the foreign key
                column matches a value in the referenced primary key column or
                is NULL.
              </p>
              <p>
                Establishes Relationships: Used to define relationships between
                tables, such as one-to-many or many-to-many.
              </p>
            </li>
            <li>
              Candidate Key
              <ul className="list-disc pl-6">
                <li>
                  A candidate key is a column or a set of columns that can
                  uniquely identify any record in a table.
                </li>
                <li>
                  Each table can have multiple candidate keys, but only one can
                  be chosen as the primary key.
                </li>
              </ul>
              <h2 className="font-semibold pb-2">
                Characteristics of a Candidate Key
              </h2>
              <p>Uniqueness: Each value must be unique across the table.</p>
              <p>Not Null: Candidate key columns cannot contain NULL values.</p>
              <p>
                Minimality: No subset of the candidate key should be unique
                (minimal superkey).
              </p>
            </li>
          </ul>
          <br />
          <hr className="py-2" />
          <br />
          <h2 className="font-semibold pb-2">Conclusion</h2>
          <p>
            Keys are essential for maintaining the structure and integrity of a
            database. The primary key uniquely identifies each record, ensuring
            no duplicates and no NULL values.
          </p>

          <p>
            The foreign key establishes and enforces relationships between
            tables, maintaining referential integrity.
          </p>

          <p>
            Candidate keys provide alternative unique identifiers for records,
            from which one is selected as the primary key. Proper use of keys is
            crucial for designing efficient, reliable, and scalable databases.
          </p>
        </div>
      </section>
    </>
  );
}

export default Module_5;
