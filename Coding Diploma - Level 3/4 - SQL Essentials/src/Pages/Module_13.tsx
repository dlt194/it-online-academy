function Module_13() {
  const codeCls = "rounded bg-gray-100 px-1 py-0.5 font-mono text-sm";

  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Final Assessment and Certification
        </h2>
        <div className="prose max-w-none">
          <ul className="list-decimal pl-6">
            <li>
              Write a query to find the total sales amount for each product.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- Sum revenue per product (count only completed/financially-realised orders)
SELECT
  p.product_id,
  p.sku,
  p.name,
  SUM(o.quantity * o.unit_price_pence) AS revenue_pence
FROM orders o
JOIN products p ON p.product_id = o.product_id
WHERE o.status IN ('paid','shipped','refunded')
GROUP BY p.product_id, p.sku, p.name
ORDER BY revenue_pence DESC;`}</pre>
              </code>
            </li>
            <li>
              Update the price of a specific product in the database.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- Example: update by SKU
UPDATE products
SET unit_price_pence = 1499
WHERE sku = 'UK-WDG-A';

-- Or update by product_id
UPDATE products
SET unit_price_pence = 2499
WHERE product_id = 42;`}</pre>
              </code>
            </li>

            <li>
              Write a query to retrieve all customer feedback with a rating
              above 4.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`SELECT
  f.feedback_id,
  f.rating,
  f.comment,
  f.created_at,
  c.customer_id,
  c.first_name || ' ' || c.last_name AS customer_name,
  f.order_id
FROM feedback f
JOIN customers c ON c.customer_id = f.customer_id
WHERE f.rating > 4
ORDER BY f.created_at DESC;`}</pre>
              </code>
            </li>

            <li>
              Create a new table to store archived sales data and transfer
              records from the existing sales table that are older than one
              year.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- Create an archive table (no FKs so you can safely keep old snapshots)
CREATE TABLE IF NOT EXISTS archived_sales (
  order_id          INTEGER PRIMARY KEY,
  customer_id       INTEGER,
  product_id        INTEGER,
  quantity          INTEGER,
  unit_price_pence  INTEGER,
  order_date        DATETIME,
  status            TEXT
);

-- Transfer records older than 1 year from orders → archived_sales
INSERT INTO archived_sales (order_id, customer_id, product_id, quantity, unit_price_pence, order_date, status)
SELECT order_id, customer_id, product_id, quantity, unit_price_pence, order_date, status
FROM orders
WHERE order_date < DATE('now', '-1 year');

-- (Optional) Remove transferred rows from active table
DELETE FROM orders
WHERE order_date < DATE('now', '-1 year');
`}</pre>
              </code>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Final Project</h2>
        <div className="prose max-w-none">
          <ul className="list-decimal pl-6">
            <li>
              Create tables for Customers, Orders, Products and Feedback
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`CREATE TABLE customers (
  customer_id   INTEGER PRIMARY KEY,
  first_name    TEXT NOT NULL,
  last_name     TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  phone         TEXT,
  postcode      TEXT,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  product_id        INTEGER PRIMARY KEY,
  sku               TEXT NOT NULL UNIQUE,
  name              TEXT NOT NULL,
  unit_price_pence  INTEGER NOT NULL CHECK (unit_price_pence >= 0),
  active            INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0,1)),
  created_at        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE orders (
  order_id        INTEGER PRIMARY KEY,
  customer_id     INTEGER NOT NULL,
  product_id      INTEGER NOT NULL,
  quantity        INTEGER NOT NULL CHECK (quantity > 0),
  unit_price_pence INTEGER NOT NULL CHECK (unit_price_pence >= 0), -- snapshot at time of order
  order_date      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status          TEXT NOT NULL DEFAULT 'pending'
                    CHECK (status IN ('pending','paid','shipped','cancelled','refunded')),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE RESTRICT,
  FOREIGN KEY (product_id)  REFERENCES products(product_id)  ON DELETE RESTRICT
);

CREATE TABLE feedback (
  feedback_id  INTEGER PRIMARY KEY,
  customer_id  INTEGER NOT NULL,
  order_id     INTEGER, -- optional link to an order
  rating       INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment      TEXT,
  created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
  FOREIGN KEY (order_id)    REFERENCES orders(order_id) ON DELETE SET NULL
);


CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_date     ON orders(order_date);
CREATE INDEX idx_feedback_customer ON feedback(customer_id);`}</pre>
              </code>
            </li>
            <br />
            <li>
              Design the database schema with appropriate relationships and
              constraints.
              <h2 className="mt-6 text-xl font-semibold">Overview</h2>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>customers</strong> – who buys
                </li>
                <li>
                  <strong>products</strong> – what’s sold (prices stored in{" "}
                  <em>pence</em>)
                </li>
                <li>
                  <strong>orders</strong> – one product per order (kept minimal)
                </li>
                <li>
                  <strong>feedback</strong> – reviews, optionally tied to an
                  order
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-semibold">
                Tables, Keys & Constraints
              </h2>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">
                    1) <code className={codeCls}>customers</code>
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>
                      <strong>PK:</strong>{" "}
                      <code className={codeCls}>customer_id</code> (INTEGER
                      PRIMARY KEY)
                    </li>
                    <li>
                      <strong>Required:</strong>{" "}
                      <code className={codeCls}>first_name</code>,{" "}
                      <code className={codeCls}>last_name</code>,{" "}
                      <code className={codeCls}>email</code>
                    </li>
                    <li>
                      <strong>Uniqueness:</strong>{" "}
                      <code className={codeCls}>email</code> is{" "}
                      <code className={codeCls}>UNIQUE</code>
                    </li>
                    <li>
                      <strong>UK fields:</strong>{" "}
                      <code className={codeCls}>postcode</code>, optional{" "}
                      <code className={codeCls}>phone</code>
                    </li>
                    <li>
                      <strong>Audit:</strong>{" "}
                      <code className={codeCls}>
                        created_at DEFAULT CURRENT_TIMESTAMP
                      </code>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    Ensures one account per email and minimum viable customer
                    data.
                  </p>
                </section>

                <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">
                    2) <code className={codeCls}>products</code>
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>
                      <strong>PK:</strong>{" "}
                      <code className={codeCls}>product_id</code>
                    </li>
                    <li>
                      <strong>Business IDs:</strong>{" "}
                      <code className={codeCls}>sku UNIQUE</code>,{" "}
                      <code className={codeCls}>name NOT NULL</code>
                    </li>
                    <li>
                      <strong>Pricing:</strong>{" "}
                      <code className={codeCls}>
                        unit_price_pence INTEGER NOT NULL CHECK (&gt;= 0)
                      </code>
                    </li>
                    <li>
                      <strong>Lifecycle:</strong>{" "}
                      <code className={codeCls}>active</code> (booleanish,{" "}
                      <code className={codeCls}>CHECK active IN (0,1)</code>)
                    </li>
                    <li>
                      <strong>Audit:</strong>{" "}
                      <code className={codeCls}>created_at</code>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    Pence avoids rounding issues;{" "}
                    <code className={codeCls}>UNIQUE(sku)</code> supports stock
                    control.
                  </p>
                </section>

                <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">
                    3) <code className={codeCls}>orders</code>
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>
                      <strong>PK:</strong>{" "}
                      <code className={codeCls}>order_id</code>
                    </li>
                    <li>
                      <strong>FKs:</strong>
                      <ul className="mt-1 list-disc pl-6 space-y-1">
                        <li>
                          <code className={codeCls}>
                            customer_id → customers(customer_id)
                          </code>{" "}
                          (<code className={codeCls}>ON DELETE RESTRICT</code>)
                        </li>
                        <li>
                          <code className={codeCls}>
                            product_id → products(product_id)
                          </code>{" "}
                          (<code className={codeCls}>ON DELETE RESTRICT</code>)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Content (single product):</strong>{" "}
                      <code className={codeCls}>product_id</code>,{" "}
                      <code className={codeCls}>quantity CHECK (&gt; 0)</code>,{" "}
                      <code className={codeCls}>
                        unit_price_pence CHECK (&gt;= 0)
                      </code>{" "}
                      (snapshot at order time)
                    </li>
                    <li>
                      <strong>Status:</strong>{" "}
                      <code className={codeCls}>status</code> with{" "}
                      <code className={codeCls}>CHECK</code> on allowed values (
                      <code className={codeCls}>
                        'pending','paid','shipped','cancelled','refunded'
                      </code>
                      ), default <code className={codeCls}>'pending'</code>
                    </li>
                    <li>
                      <strong>Timing:</strong>{" "}
                      <code className={codeCls}>
                        order_date DEFAULT CURRENT_TIMESTAMP
                      </code>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    RESTRICT protects history; snapshot price preserves
                    historical totals.
                  </p>
                </section>

                <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">
                    4) <code className={codeCls}>feedback</code>
                  </h3>
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>
                      <strong>PK:</strong>{" "}
                      <code className={codeCls}>feedback_id</code>
                    </li>
                    <li>
                      <strong>FKs:</strong>
                      <ul className="mt-1 list-disc pl-6 space-y-1">
                        <li>
                          <code className={codeCls}>
                            customer_id → customers(customer_id)
                          </code>{" "}
                          (<code className={codeCls}>ON DELETE CASCADE</code>)
                        </li>
                        <li>
                          <code className={codeCls}>
                            order_id → orders(order_id)
                          </code>{" "}
                          (nullable,{" "}
                          <code className={codeCls}>ON DELETE SET NULL</code>)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Rating:</strong>{" "}
                      <code className={codeCls}>
                        CHECK (rating BETWEEN 1 AND 5)
                      </code>
                      , optional <code className={codeCls}>comment</code>
                    </li>
                    <li>
                      <strong>Audit:</strong>{" "}
                      <code className={codeCls}>created_at</code>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    Reviews always tied to a customer; can optionally reference
                    a specific order.
                  </p>
                </section>
              </div>
              <h2 className="mt-6 text-xl font-semibold">
                Relationships (Cardinality)
              </h2>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>Customer → Orders:</strong> 1-to-many (one customer,
                  many orders).
                </li>
                <li>
                  <strong>Product → Orders:</strong> 1-to-many (one product,
                  many orders).
                </li>
                <li>
                  <strong>Customer → Feedback:</strong> 1-to-many (each feedback
                  belongs to a customer).
                </li>
                <li>
                  <strong>Order → Feedback:</strong> 1-to-many (feedback may
                  reference an order, but it’s optional).
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-semibold">Indexes</h2>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <code className={codeCls}>idx_orders_customer</code> on{" "}
                  <code className={codeCls}>orders(customer_id)</code> – speeds
                  “orders per customer”.
                </li>
                <li>
                  <code className={codeCls}>idx_orders_date</code> on{" "}
                  <code className={codeCls}>orders(order_date)</code> – helps
                  time-range reports.
                </li>
                <li>
                  <code className={codeCls}>idx_feedback_customer</code> on{" "}
                  <code className={codeCls}>feedback(customer_id)</code> –
                  faster review lookups.
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-semibold">
                Design Choices & Trade-offs
              </h2>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>
                    No <code className={codeCls}>order_items</code> table:
                  </strong>{" "}
                  intentionally simple; one product per order keeps CRUD and
                  reporting straightforward for a POC.
                </li>
                <li>
                  <strong>Prices stored in pence on orders:</strong> historical
                  accuracy even if product prices change later.
                </li>
                <li>
                  <strong>Deletion behaviour:</strong> orders prevent deleting
                  referenced customers/products (
                  <code className={codeCls}>RESTRICT</code>); feedback is
                  removed with its customer (
                  <code className={codeCls}>CASCADE</code>) or detached from an
                  order (<code className={codeCls}>SET NULL</code>).
                </li>
                <li>
                  <strong>
                    Integrity via <code className={codeCls}>CHECK</code>:
                  </strong>{" "}
                  positive quantities, non-negative money, bounded ratings, and
                  allowed statuses enforced at the database layer.
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-semibold">
                How This Meets the Requirements
              </h2>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>Tables:</strong> Customers, Products, Orders, Feedback
                  (all present).
                </li>
                <li>
                  <strong>Relationships & Constraints:</strong> FKs with
                  sensible <code className={codeCls}>ON DELETE</code> rules,
                  plus <code className={codeCls}>UNIQUE</code>,{" "}
                  <code className={codeCls}>NOT NULL</code>, and{" "}
                  <code className={codeCls}>CHECK</code> constraints.
                </li>
                <li>
                  <strong>CRUD-friendly:</strong> minimal columns; constraints
                  guide valid inputs.
                </li>
                <li>
                  <strong>Reporting-ready:</strong> totals via{" "}
                  <code className={codeCls}>quantity × unit_price_pence</code>;
                  date and customer indexes help simple reports.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Implement CRUD operations for each table.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- Create a new customer
INSERT INTO customers (first_name, last_name, email, phone, postcode)
VALUES ('Dan','Thomas','example@email.co.uk','+441234567890','CO11AB');

-- Read customers
SELECT customer_id, first_name, last_name, email FROM customers ORDER BY last_name;

-- Update a product price (in pence)
UPDATE products SET unit_price_pence = 1399 WHERE sku = 'UK-WDG-A';

-- Deactivate a product
UPDATE products SET active = 0 WHERE sku = 'UK-WDG-B';

-- Delete feedback
DELETE FROM feedback WHERE feedback_id = 2;`}</pre>
              </code>
            </li>
            <br />
            <li>
              Write Queries to generate reports on customer orders, product
              sales, and customer feedback analysis.
              <br />
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- A) Customer order totals (lifetime)
--   Shows total spend in pence; format to £ in your app or divide by 100 for pounds.
SELECT
  c.customer_id,
  c.first_name || ' ' || c.last_name AS customer_name,
  c.email,
  COUNT(o.order_id) AS orders_count,
  COALESCE(SUM(o.quantity * o.unit_price_pence), 0) AS total_spend_pence,
  MAX(o.order_date) AS last_order_date
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
GROUP BY c.customer_id
ORDER BY total_spend_pence DESC;`}</pre>
              </code>
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- B) Product sales in the last 30 days
WITH window AS (
  SELECT DATE('now','-30 day') AS start_date, DATE('now') AS end_date
)
SELECT
  p.product_id,
  p.sku,
  p.name,
  SUM(o.quantity) AS units_sold,
  SUM(o.quantity * o.unit_price_pence) AS revenue_pence
FROM orders o
JOIN products p ON p.product_id = o.product_id
JOIN window
WHERE DATE(o.order_date) BETWEEN (SELECT start_date FROM window) AND (SELECT end_date FROM window)
  AND o.status IN ('paid','shipped','refunded')
GROUP BY p.product_id
ORDER BY revenue_pence DESC;`}</pre>
              </code>
              <code className="text-sm">
                <pre className="bg-gray-100 p-4 rounded">{`-- C) Feedback summary by customer
SELECT
  c.customer_id,
  c.first_name || ' ' || c.last_name AS customer_name,
  ROUND(AVG(f.rating), 2) AS avg_rating,
  COUNT(*) AS reviews_count
FROM customers c
JOIN feedback f ON f.customer_id = c.customer_id
GROUP BY c.customer_id
ORDER BY avg_rating DESC, reviews_count DESC;`}</pre>
              </code>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Module_13;
