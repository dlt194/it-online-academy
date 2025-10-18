function Module_11() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          SQL in Web Development (Integration with Python)
        </h2>
        <div className="prose max-w-none">
          <p>
            SQL is commonly used in web development to interact with databases,
            enabling dynamic content and data-driven applications.
          </p>

          <p>
            Integration with languages like PHP and Python is essential for
            building robust web applications.
          </p>
          <br />

          <h2 className="font-semibold pb-2">Integration with Python</h2>
          <p>Connecting to a Database (Using psycopg2 for PostgreSQL)</p>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`import psycopg2
conn = psycopg2.connect(
dbname="testdb", user="postgres", password="secret",
host="localhost"
)`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Executing a Query</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`cur = conn.cursor(
cur.execute("SELECT id, firstname, lastname FROM MyGuests")
rows = cur.fetchall()`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Fetching Results</h2>
          <code className="text-sm">
            <pre className="bg-gray-100 p-4 rounded">{`for row in rows:
  print(f"id: {row[o]}, Name: {row[1]} {row[2]}")
cur.close()
conn.close()`}</pre>
          </code>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Building dynamic web pages with content fetched from databases.
            </li>

            <li>Storing and retrieving user data in web applications.</li>
            <li>
              Performing CRUD operations (Create, Read, Update, Delete) in web
              applications.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Security Best Practices
        </h2>
        <div className="prose max-w-none">
          <p>
            Database security is critical to protect sensitive data from
            unauthorised access, breaches, and other security threats.
          </p>

          <p>
            Implementing security best practices ensures the integrity,
            confidentiality, and availability of data.
          </p>
          <br />
          <h2 className="font-semibold pb-2">Best Practices</h2>
          <ul className="list-decimal pl-6">
            <li>
              Use Strong Authentication & Authorisation:
              <br />
              <ul className="list-disc pl-6">
                <li>Enforce strong passwords and regular password changes.</li>
                <li>Use multi-factor authentication (MFA) where possible.</li>
                <li>
                  Implement role-based access control (RBAC) to limit access
                  based on user roles.
                </li>
              </ul>
            </li>

            <li>
              Encrypt Sensitive Data:
              <br />
              <ul className="list-disc pl-6">
                <li>Use encryption for data at rest and in transit.</li>
                <li>
                  Store encryption keys securely and separately from encrypted
                  data.
                </li>
              </ul>
            </li>
            <li>
              Regularly Update & Patch Systems:
              <br />
              <ul className="list-disc pl-6">
                <li>Keep database software and dependencies up to date.</li>
                <li>
                  Apply security patches promptly to address vulnerabilities.
                </li>
              </ul>
            </li>
            <li>
              Monitor & Audit Database Activity:
              <br />
              <ul className="list-disc pl-6">
                <li>Enable logging and monitoring of database activities.</li>
                <li>
                  Regularly review audit logs to detect suspicious activities.
                </li>
              </ul>
            </li>

            <li>
              Use Parameterized Queries:
              <br />
              <ul className="list-disc pl-6">
                <li>
                  Prevent SQL injection attacks by using parameterized queries
                  or prepared statements.
                </li>

                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`SELECT * FROM users WHERE username = ? AND password = ?`}</pre>
                </code>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Protecting sensitive customer information in e-commerce
              applications.
            </li>
            <li>
              Ensuring compliance with data protection regulations (e.g., GDPR,
              HIPAA).
            </li>
            <li>Preventing data breaches and minimising security risks.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Backup & Recovery Strategies
        </h2>
        <div className="prose max-w-none">
          <p>
            Backup and recovery strategies are essential for ensuring data
            availability and integrity in case of data loss, corruption, or
            disasters.
          </p>

          <p>Effective strategies help minimise downtime and data loss.</p>
          <br />
          <h2 className="font-semibold pb-2">Backup Types</h2>
          <ul className="list-decimal pl-6">
            <li>
              Full Backup:
              <ul className="list-disc pl-6">
                <p>A complete copy of the entire database</p>
                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`BACKUP DATABASE mydb TO DISK = 'C:\\Backups\\mydb_full.bak;`}</pre>
                </code>
                <br />
              </ul>
            </li>

            <li>
              Differential Backup:
              <ul className="list-disc pl-6">
                <p>
                  Copies only the data that has changed since the last full
                  backup
                </p>
                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`BACKUP DATABASE mydb TO DISK = 'C:\\Backups\\mydb_full.bak WITH DIFFERENTIAL;`}</pre>
                </code>
                <br />
              </ul>
            </li>

            <li>
              Transaction Log Backup:
              <ul className="list-disc pl-6">
                <p>
                  Backs up the transaction log to capture all transactions since
                  the last log backup.
                </p>
                <br />
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`BACKUP LOG mydb TO DISK = 'C:\\Backups\\mydb_log.trn;`}</pre>
                </code>
                <br />
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Recovery Strategies</h2>
          <ul className="list-decimal pl-6">
            <li>
              Restoring from Full Backup:
              <ul className="list-disc pl-6">
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`RESTORE DATABASE mydb FROM DISK = 'C:\\Backups\\mydb_full.bak';`}</pre>
                </code>
              </ul>
            </li>

            <li>
              Restoring from Differential Backup:
              <ul className="list-disc pl-6">
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`RESTORE DATABASE mydb FROM DISK = 'C:\\Backups\\mydb_full.bak';`}</pre>
                </code>
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`RESTORE DATABASE mydb FROM DISK = 'C:\\Backups\\mydb_full.bak' WITH NORECOVERY;`}</pre>
                </code>
              </ul>
            </li>

            <li>
              Point-in-Time Recovery:
              <p>
                Restores the database to a specific point in time using
                transaction logs.
              </p>
              <ul className="list-disc pl-6">
                <code className="text-sm">
                  <pre className="bg-gray-100 p-4 rounded">{`RESTORE LOG mydb FROM DISK =
'C:\\Backups\\mydb_log.trn' WITH STOPAT ='2023-01-01
12:00:00';`}</pre>
                </code>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Ensuring data availability in case of hardware failures or data
              corruption.
            </li>

            <li>Performing regular backups to prevent data loss.</li>

            <li>Restoring data after accidental deletions or modifications.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Scaling Databases
        </h2>
        <div className="prose max-w-none">
          <p>
            Scaling databases involves techniques to handle increasing loads and
            ensure performance and availability.
          </p>
          <p>
            It can be achieved through vertical scaling, horizontal scaling, or
            a combination of both.
          </p>
          <br />
          <ul className="list-decimal pl-6">
            <li>
              Vertinal Scaling (Scale-Up)
              <ul className="list-disc pl-6">
                <p>
                  Adding more resources (CPU, RAM, Storage) to a single server
                </p>
              </ul>
              <br />
              Advantages
              <ul className="list-disc pl-6">
                <li>Simpler to implement and manage.</li>
                <li>No changes to application architecture.</li>
              </ul>
              <br />
              Disadvantages
              <ul className="list-disc pl-6">
                <li>Limited by hardware constraints.</li>
                <li>Single point of failure.</li>
              </ul>
              <br />
            </li>
            <li>
              Horizontal Scaling (Scale-Out)
              <ul className="list-disc pl-6">
                <p>Adding more servers to distribute the load.</p>
              </ul>
              <br />
              Techniques
              <ul className="list-disc pl-6">
                <li>
                  <strong className="mr-1">Sharding:</strong>Dividing data
                  across multiple databases or servers.
                </li>
                <li>
                  <strong className="mr-1">Replication:</strong>Creating copies
                  of the database on multiple servers.
                </li>
              </ul>
              <br />
              Advantages
              <ul className="list-disc pl-6">
                <li>Can handle larger loads and data volumes.</li>
                <li>Provides redundancy and fault tolerance.</li>
              </ul>
              <br />
              Disadvantages
              <ul className="list-disc pl-6">
                <li>More complex to implement and manage.</li>
                <li>Requires changes to application architecture.</li>
              </ul>
            </li>
            <li>
              Load Balancing
              <ul className="list-disc pl-6">
                <p>
                  Distributing database queries across multiple servers to
                  ensure even load distribution.
                </p>
              </ul>
              <br />
              Example
              <ul className="list-disc pl-6">
                <li>
                  Using a load balancer to distribute traffic to multiple
                  database replicas.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <h2 className="font-semibold pb-2">Use Cases</h2>
          <ul className="list-disc pl-6">
            <li>
              Handling increased traffic and data volumes in web applications.
            </li>

            <li>Ensuring high availability and fault tolerance.</li>

            <li>Distributing load for better performance and scalability.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Module_11;
