function Module_2() {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Installing SQL/MySQL/PostgreSQL
        </h2>
        <div className="prose max-w-none">
          <h2 className="font-semibold underline">Microsoft SQL Server</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Download:</strong>Visit the official
              Microsoft website to download the SQL Server installer.
            </li>
            <li>
              <strong className="mr-2">Installation Wizard:</strong>Run the
              installer and follow the installation wizard.
            </li>
            <li>
              <strong className="mr-2">Configuration:</strong>Configure
              installation options such as instance name, authentication mode
              (Windows Authentication or Mixed Mode), and installation
              directories.
            </li>
            <li>
              <strong className="mr-2">Services:</strong>Choose the SQL Server
              services to install (Database Engine, Analysis Services, Reporting
              Services, Integration Services, etc.).
            </li>
            <li>
              <strong className="mr-2">Completing Installation:</strong>Complete
              the installation process and verify that SQL Server is running.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">MySQL</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Download:</strong>Visit the official
              MySQL website and download the MySQL Community Server installer.
            </li>
            <li>
              <strong className="mr-2">Installation Wizard:</strong>Run the
              installer and follow the installation wizard.
            </li>
            <li>
              <strong className="mr-2">Configuration:</strong>Configure
              installation options such as port number, installation directory,
              and root password.
            </li>
            <li>
              <strong className="mr-2">Services:</strong>Choose MySQL services
              to install (MySQL Server, MySQL Workbench, MySQL Utilities, etc.).
            </li>
            <li>
              <strong className="mr-2">Completing Installation:</strong>Complete
              the installation process and verify that MySQL Server is running.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">PostgreSQL</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Download:</strong>Visit the official
              PostgreSQL website and download the PostgreSQL installer.
            </li>
            <li>
              <strong className="mr-2">Installation Wizard:</strong>Run the
              installer and follow the installation wizard.
            </li>
            <li>
              <strong className="mr-2">Configuration:</strong>Configure
              installation options such as port number, data directory, and
              password for the postgres superuser.
            </li>
            <li>
              <strong className="mr-2">Additional Components:</strong>Choose
              additional components to install (pgAdmin, StackBuilder, etc.).
            </li>
            <li>
              <strong className="mr-2">Completing Installation:</strong>Complete
              the installation process and verify that PostgreSQL Server is
              running.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">SQLite</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Download:</strong>Visit the official
              SQLite website and download the SQLite installer appropriate for
              your operating system.
            </li>
            <li>
              <strong className="mr-2">Installation:</strong>SQLite is a
              self-contained, serverless, zero-configuration database engine.
              Installation usually involves downloading the precompiled binaries
              or libraries and placing them in a directory accessible to your
              application.
            </li>
            <li>
              <strong className="mr-2">Integration:</strong>SQLite databases are
              typically integrated directly into applications. There is no
              separate server process to install or manage.
            </li>
            <li>
              <strong className="mr-2">Usage:</strong>Once integrated into your
              application, SQLite databases can be created, accessed, and
              manipulated using SQL commands directly within your code.
            </li>
          </ul>
          <br />
          <p>
            Setting up a relational database management system is an essential
            step in developing database-driven applications. By following the
            installation instructions provided for SQL Server, MySQL, or
            PostgreSQL, developers can establish a local development environment
            for building and testing database applications.
          </p>
          <br />
          <p>
            The choice of database system may vary depending on individual
            preferences, project requirements, or organisational standards.
          </p>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Configuring IDE's for SQL
        </h2>
        <div className="prose max-w-none">
          <h2 className="font-semibold underline">
            SQL Server Management Studio (SSMS)
          </h2>
          <ul className="list-disc pl-6">
            <li>IDE specifically designed for Microsoft SQL Server.</li>

            <li>
              Offers a comprehensive set of tools for database development,
              administration, and management.
            </li>

            <li>
              Supports advanced features such as IntelliSense for code
              completion, debugging, and performance tuning.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">MySQL Workbench</h2>
          <ul className="list-disc pl-6">
            <li>Official IDE for MySQL database management.</li>

            <li>
              Provides tools for SQL development, database design,
              administration, and performance monitoring.
            </li>

            <li>
              Features include SQL editor, visual query builder, database
              modeling, and server administration.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">pgAdmin (PostgreSQL)</h2>
          <ul className="list-disc pl-6">
            <li>Open-source IDE for PostgreSQL database management.</li>

            <li>
              Offers a web-based interface for SQL development, database design,
              and server administration.
            </li>

            <li>
              Features include SQL editor with syntax highlighting, query
              execution, and database object management.
            </li>
          </ul>
          <br />

          <h2 className="font-semibold underline">DBeaver</h2>
          <ul className="list-disc pl-6">
            <li>
              Universal database tool that supports multiple database management
              systems, including SQL Server, MySQL, PostgreSQL, SQLite, and
              others.
            </li>

            <li>
              Offers a consistent user interface and features across different
              database platforms.
            </li>

            <li>
              Provides SQL editor with syntax highlighting, code completion, and
              database browsing capabilities.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          Connecting to Databases
        </h2>
        <div className="prose max-w-none">
          <h2 className="font-semibold underline">Connection Methods</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong className="mr-2">Direct Connection:</strong>Establish a
              direct connection to the database server using connection
              parameters such as hostname/IP address, port number, database
              name, username, and password.
            </li>

            <li>
              <strong className="mr-2">Connection Profiles:</strong>Save
              connection profiles within the IDE for quick access to frequently
              used databases. Profiles store connection details and can be
              easily managed and edited.
            </li>

            <li>
              <strong className="mr-2">SSH Tunneling (Optional):</strong>If
              accessing a remote database server over an insecure network,
              configure SSH tunneling for secure communication. SSH tunneling
              encrypts data transmission between the client and server.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">
            Establishing Database Connections
          </h2>
          <h2 className="font-semibold">SQL Server Management Studio (SSMS)</h2>
          <ul className="list-disc pl-6">
            <li>Open SSMS and navigate to the "Connect" menu.</li>

            <li>
              Choose the appropriate server type (e.g., Database Engine,
              Analysis Services).
            </li>

            <li>
              Enter the connection details (server name, authentication method,
              credentials).
            </li>

            <li>
              Click "Connect" to establish the connection to the database
              server.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">MySQL Workbench</h2>
          <ul className="list-disc pl-6">
            <li>
              Launch MySQL Workbench and click on the "+" icon in the "MySQL
              Connections" panel.
            </li>

            <li>
              Enter the connection details (connection name, hostname, port,
              username, password).
            </li>

            <li>
              Click "Test Connection" to verify the connection parameters.
            </li>

            <li>
              Click "OK" to establish the connection to the MySQL database
              server.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">pgAdmin (PostgreSQL)</h2>
          <ul className="list-disc pl-6">
            <li>Open pgAdmin and navigate to the "Object Browser" panel.</li>
            <li>Right-click on "Servers" and choose "Create &gt; Server."</li>
            <li>
              Enter the connection details (name, hostname/IP, port, username,
              password).
            </li>

            <li>
              Click "Save" to add the server to the list of registered servers.
            </li>

            <li>
              Double-click on the server to establish the connection to the
              PostgreSQL database.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold underline">
            Managing Database Connections
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Connection Pooling: Configure connection pooling settings to
              optimise resource utilisation and improve performance by reusing
              established database connections.
            </li>

            <li>
              Connection Properties: Customise connection properties such as
              timeout settings, character encoding, and SSL encryption options
              based on specific requirements.
            </li>

            <li>
              Session Management: Monitor active database connections, view
              connection details, and terminate idle or inactive connections as
              needed to free up resources.
            </li>
          </ul>

          <br />
          <p>
            Establishing database connections from IDEs is a crucial step for
            SQL development, administration, and management tasks.
          </p>
          <br />
          <p>
            By following the connection methods and procedures outlined in this
            lesson, developers can seamlessly connect to databases and leverage
            IDE features for writing, testing, and debugging SQL queries.
            Managing database connections efficiently ensures optimal
            performance and resource utilisation during database development
            activities.
          </p>
        </div>
      </section>
    </>
  );
}

export default Module_2;
