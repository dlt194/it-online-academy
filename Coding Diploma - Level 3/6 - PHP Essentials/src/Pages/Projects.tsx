import CodeExample from "../Components/CodeExample";
import SectionComponent from "../Components/SectionComponent";

import project_1 from "../../PHP Files/Projects/Simple Blog System/index.php?raw";
import project_2 from "../../PHP Files/Projects/E-commerce Website for a Small Business/index.php?raw";
import project_3 from "../../PHP Files/Projects/Task Management System/index.php?raw";
import project_4 from "../../PHP Files/Projects/Secure File Sharing Platform/index.php?raw";
import project_5 from "../../PHP Files/Projects/Social Media Analytics Dashboard/index.php?raw";

function Projects() {
  return (
    <>
      {/* Project Pages generated with ChatGPT */}
      <SectionComponent title="Simple Blog System">
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
            {/* Header / Hero */}
            <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/80 p-6 shadow-2xl shadow-slate-900/60 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div>
                <p className="mb-2 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                  Blog Platform · Project Summary
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  User-Driven Blog Management System
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  A functional blog platform that enables users to register,
                  create and manage posts, interact through comments, and
                  provides administrators with full content management
                  capabilities.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xs lg:justify-end">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  PHP · MVC · OOP
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  MySQL
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  REST API (Optional)
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  Responsive Frontend
                </span>
              </div>
            </header>

            {/* Objective */}
            <section className="mb-10">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/60">
                <h2 className="text-lg font-semibold text-slate-50">
                  Objective
                </h2>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Create a functional blog system that allows users to register,
                  create posts, and interact with content while providing
                  administrative capabilities for content management.
                </p>
              </div>
            </section>

            {/* Main content grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left column: Detailed Features */}
              <section className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Detailed Features
                </h2>

                {/* User Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                        1. User Management
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Authentication &amp; user profiles
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>User registration with email verification</li>
                    <li>User login and logout functionality</li>
                    <li>Password reset feature</li>
                    <li>
                      User profile page with option to update personal
                      information
                    </li>
                  </ul>
                </article>

                {/* Blog Post Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    2. Blog Post Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Create new blog posts with title, content, and featured
                      image
                    </li>
                    <li>
                      Rich text editor for post content (e.g., TinyMCE or
                      similar)
                    </li>
                    <li>Edit existing blog posts</li>
                    <li>Delete blog posts (with confirmation)</li>
                    <li>Draft saving functionality</li>
                  </ul>
                </article>

                {/* Post Categories */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    3. Post Categories
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Create, edit, and delete categories</li>
                    <li>Assign multiple categories to a post</li>
                    <li>Filter posts by category</li>
                  </ul>
                </article>

                {/* Comments System */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    4. Comments System
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Allow registered users to comment on posts</li>
                    <li>
                      Comment moderation for admin (approve/reject comments)
                    </li>
                    <li>Reply to comments (threaded or flat)</li>
                    <li>Edit or delete own comments</li>
                  </ul>
                </article>

                {/* Search Functionality */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    5. Search Functionality
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Search posts by title, content, or author</li>
                    <li>Display search results with pagination</li>
                    <li>Highlight search terms in results</li>
                  </ul>
                </article>

                {/* Admin Panel */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    6. Admin Panel
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Dashboard with overview statistics (total posts, comments,
                      users)
                    </li>
                    <li>Manage users (view, edit roles, delete)</li>
                    <li>Manage all blog posts</li>
                    <li>Manage categories</li>
                    <li>Moderate comments</li>
                  </ul>
                </article>

                {/* Frontend */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    7. Frontend
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Responsive design using CSS framework (e.g., Bootstrap or
                      Tailwind)
                    </li>
                    <li>Homepage with recent posts and featured content</li>
                    <li>Individual post pages</li>
                    <li>Category pages</li>
                    <li>Author pages</li>
                  </ul>
                </article>
              </section>

              {/* Right column: Technical Requirements */}
              <section className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Technical Requirements
                </h2>

                {/* Requirement cards */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    1. Database Design
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Design and implement schema for users, posts, categories,
                      and comments
                    </li>
                    <li>Use MySQL for database management</li>
                    <li>Implement proper indexing for performance</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    2. PHP Architecture
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Use Object-Oriented Programming (OOP) principles</li>
                    <li>Implement Model-View-Controller (MVC) architecture</li>
                    <li>Create reusable components and helpers</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    3. User Authentication &amp; Authorization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Secure user registration and login system</li>
                    <li>Implement session management</li>
                    <li>Use PHP&apos;s password hashing functions</li>
                    <li>
                      Create middleware for checking user roles and permissions
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    4. Form Handling &amp; Validation
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Server-side validation for all forms</li>
                    <li>Client-side validation using JavaScript</li>
                    <li>Implement CSRF protection for forms</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    5. File Uploads
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Allow image uploads for blog post featured images</li>
                    <li>Implement file type and size validation</li>
                    <li>Generate thumbnails for uploaded images</li>
                    <li>Store files securely outside of web root</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    6. Security Practices
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement input sanitization to prevent XSS attacks</li>
                    <li>
                      Use prepared statements for all database queries to
                      prevent SQL injection
                    </li>
                    <li>Implement proper error handling and logging</li>
                    <li>Set secure HTTP headers</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    7. Performance Optimization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement caching for frequently accessed data</li>
                    <li>Optimize database queries</li>
                    <li>Use pagination for long lists (posts, comments)</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    8. API Development (Optional)
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Create a RESTful API for blog posts and comments</li>
                    <li>Implement API authentication using tokens</li>
                  </ul>
                </article>
              </section>
            </div>

            {/* Development Phases */}
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-slate-50">
                Development Phases &amp; Timeline
              </h2>

              <div className="mt-5 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <ol className="relative space-y-6 border-l border-slate-700 pl-5 text-sm text-slate-200">
                  {/* Phase 1 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-slate-50">
                          1. Planning and Setup (1-2 days)
                        </h3>
                        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs text-slate-300 ring-1 ring-slate-700">
                          Foundation
                        </span>
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Create project structure and set up version control
                          (Git)
                        </li>
                        <li>Design database schema</li>
                        <li>Set up development environment</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 2 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        2. User Management (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Implement user registration, login, and profile
                          management
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 3 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        3. Blog Post Functionality (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop CRUD operations for blog posts</li>
                        <li>Implement categories system</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 4 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        4. Comments System (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Create commenting functionality with moderation
                          features
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 5 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        5. Search &amp; Frontend (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement search functionality</li>
                        <li>Develop responsive frontend templates</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 6 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        6. Admin Panel (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Create admin dashboard and management interfaces
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 7 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        7. Security &amp; Optimization (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement security best practices</li>
                        <li>Optimize performance and queries</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 8 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        8. Testing &amp; Refinement (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Conduct thorough testing of all features</li>
                        <li>Fix bugs and refine user experience</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 9 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        9. Documentation &amp; Deployment (1-2 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Write documentation for setup and usage</li>
                        <li>Prepare for deployment to a live server</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
        <br />
        <CodeExample component={project_1} />
      </SectionComponent>
      <SectionComponent title="E-commerce Website for a Small Business">
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
            {/* Header / Hero */}
            <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/80 p-6 shadow-2xl shadow-slate-900/60 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div>
                <p className="mb-2 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                  E-Commerce Platform · Project Summary
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  Small Business E-Commerce Platform
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  A full-stack e-commerce solution for small businesses to
                  showcase products, manage inventory, process orders, and
                  deliver a seamless shopping experience.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xs lg:justify-end">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  PHP · MVC · OOP
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  MySQL
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  PayPal Sandbox
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  Tailwind CSS Frontend
                </span>
              </div>
            </header>

            {/* Objective */}
            <section className="mb-10">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/60">
                <h2 className="text-lg font-semibold text-slate-50">
                  Objective
                </h2>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Develop a functional e-commerce platform that allows a small
                  business to showcase products, manage inventory, process
                  orders, and provide a seamless shopping experience for
                  customers.
                </p>
              </div>
            </section>

            {/* Main content grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left column: Detailed Features */}
              <section className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Detailed Features
                </h2>

                {/* Product Catalog */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                        1. Product Catalog
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Product discovery &amp; browsing
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Product listing with pagination</li>
                    <li>Product categories and subcategories</li>
                    <li>
                      Product details page with images, description, price, and
                      stock status
                    </li>
                    <li>Featured products section</li>
                    <li>Related products suggestions</li>
                  </ul>
                </article>

                {/* Shopping Cart */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    2. Shopping Cart
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Add/remove products from cart</li>
                    <li>Update quantity in cart</li>
                    <li>Cart persistence using sessions</li>
                    <li>Mini-cart display in header</li>
                  </ul>
                </article>

                {/* User Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    3. User Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>User registration with email verification</li>
                    <li>User login and logout</li>
                    <li>Password reset functionality</li>
                    <li>
                      User profile management (shipping addresses, payment
                      methods)
                    </li>
                  </ul>
                </article>

                {/* Checkout Process */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    4. Checkout Process
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Multi-step checkout (shipping, payment, review)</li>
                    <li>Guest checkout option</li>
                    <li>Multiple shipping methods</li>
                    <li>Integration with PayPal sandbox for payments</li>
                    <li>Order confirmation emails</li>
                  </ul>
                </article>

                {/* Order Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    5. Order Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Order history for users</li>
                    <li>Order status tracking</li>
                    <li>Download invoices (PDF generation)</li>
                  </ul>
                </article>

                {/* Admin Panel */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    6. Admin Panel
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Dashboard with sales statistics and recent orders</li>
                    <li>Product management (CRUD operations)</li>
                    <li>Category management</li>
                    <li>Order management (view, update status, cancel)</li>
                    <li>User management</li>
                    <li>Basic reporting (sales, top products, etc.)</li>
                  </ul>
                </article>

                {/* Search and Filter */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    7. Search and Filter
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Product search by name, description, or SKU</li>
                    <li>
                      Filter products by category, price range, or attributes
                    </li>
                    <li>Sort products by price, popularity, or date added</li>
                  </ul>
                </article>

                {/* Additional Features */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    8. Additional Features
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Wishlist functionality</li>
                    <li>Product reviews and ratings</li>
                    <li>Basic inventory management</li>
                    <li>Coupon code system</li>
                    <li>Newsletter subscription</li>
                  </ul>
                </article>
              </section>

              {/* Right column: Technical Requirements */}
              <section className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Technical Requirements
                </h2>

                {/* Requirement cards */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    1. Database Design
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Design and implement schema for products, categories,
                      users, orders, and other entities
                    </li>
                    <li>Use MySQL for database management</li>
                    <li>Implement proper indexing and relationships</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    2. PHP Architecture
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Use Object-Oriented Programming (OOP) principles</li>
                    <li>Implement Model-View-Controller (MVC) architecture</li>
                    <li>
                      Create reusable components for common functionalities
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    3. User Authentication &amp; Authorization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Secure user registration and login system</li>
                    <li>
                      Implement session management for users and guest carts
                    </li>
                    <li>
                      Create middleware for checking user roles and permissions
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    4. Shopping Cart Implementation
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Use sessions to maintain cart state</li>
                    <li>
                      Implement cart operations (add, remove, update quantity)
                    </li>
                    <li>Calculate totals, taxes, and shipping costs</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    5. Checkout and Payment
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement multi-step checkout process</li>
                    <li>Integrate PayPal sandbox for payment processing</li>
                    <li>
                      Handle payment notifications and order status updates
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    6. Admin Functionality
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Create secure admin login</li>
                    <li>
                      Implement CRUD operations for products and categories
                    </li>
                    <li>Develop order management interface</li>
                    <li>Generate basic sales reports</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    7. Search and Filter
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement full-text search for products</li>
                    <li>Create dynamic filtering system using AJAX</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    8. Frontend Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Use a responsive CSS framework (e.g., Bootstrap)</li>
                    <li>
                      Implement AJAX for dynamic content updates (cart updates,
                      filtering)
                    </li>
                    <li>
                      Use JavaScript for form validation and enhanced user
                      experience
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    9. Security Measures
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement input sanitization and validation</li>
                    <li>Use prepared statements for all database queries</li>
                    <li>
                      Secure sensitive data (passwords, payment information)
                    </li>
                    <li>Implement CSRF protection for forms</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    10. Performance Optimization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement caching for product catalog</li>
                    <li>Optimize database queries</li>
                    <li>Use AJAX for smoother user experience</li>
                  </ul>
                </article>
              </section>
            </div>

            {/* Development Phases */}
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-slate-50">
                Development Phases &amp; Timeline
              </h2>

              <div className="mt-5 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <ol className="relative space-y-6 border-l border-slate-700 pl-5 text-sm text-slate-200">
                  {/* Phase 1 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-slate-50">
                          1. Planning and Setup (2-3 days)
                        </h3>
                        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs text-slate-300 ring-1 ring-slate-700">
                          Foundation
                        </span>
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Define project structure and set up version control
                        </li>
                        <li>Design database schema</li>
                        <li>Set up development environment</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 2 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        2. Product Catalog (4-5 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement product and category management</li>
                        <li>Create product listing and detail pages</li>
                        <li>Develop search and filter functionality</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 3 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        3. User Management (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Implement user registration, login, and profile
                          management
                        </li>
                        <li>Develop admin user management</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 4 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        4. Shopping Cart (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create shopping cart functionality</li>
                        <li>Implement session management for cart</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 5 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        5. Checkout Process (4-5 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop multi-step checkout</li>
                        <li>Integrate PayPal sandbox</li>
                        <li>Implement order processing and confirmation</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 6 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        6. Admin Panel (4-5 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create admin dashboard</li>
                        <li>
                          Implement product and order management interfaces
                        </li>
                        <li>Develop basic reporting functionality</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 7 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        7. Additional Features (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Add wishlist functionality</li>
                        <li>Implement product reviews and ratings</li>
                        <li>Develop coupon system</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 8 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        8. Security and Optimization (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement security best practices</li>
                        <li>Optimize performance and queries</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 9 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        9. Testing and Refinement (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Conduct thorough testing of all features</li>
                        <li>Fix bugs and improve user experience</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 10 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        10. Documentation and Deployment (2-3 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Write documentation for setup and usage</li>
                        <li>Prepare for deployment to a live server</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
        <br />
        <CodeExample component={project_2} />
      </SectionComponent>
      <SectionComponent title="Task Management System">
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
            {/* Header / Hero */}
            <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/80 p-6 shadow-2xl shadow-slate-900/60 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div>
                <p className="mb-2 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                  Task Management · Project Summary
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  Collaborative Task Management Application
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  A web-based task management platform that enables users to
                  organize, track, and collaborate on tasks within projects or
                  boards, inspired by simplified versions of Trello and Asana.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xs lg:justify-end">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  PHP · MVC · OOP
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  MySQL / PostgreSQL
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  WebSockets · JWT
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  Modern JS Frontend
                </span>
              </div>
            </header>

            {/* Objective */}
            <section className="mb-10">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/60">
                <h2 className="text-lg font-semibold text-slate-50">
                  Objective
                </h2>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Create a web-based task management application that allows
                  users to organize, track, and collaborate on tasks within
                  projects or boards, similar to simplified versions of Trello
                  or Asana.
                </p>
              </div>
            </section>

            {/* Main content grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left column: Detailed Features */}
              <section className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Detailed Features
                </h2>

                {/* User Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                        1. User Management
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Authentication, profiles &amp; roles
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>User registration with email verification</li>
                    <li>User login and logout functionality</li>
                    <li>Password reset feature</li>
                    <li>User profile management (name, avatar, time zone)</li>
                    <li>User roles (Admin, Project Manager, Team Member)</li>
                  </ul>
                </article>

                {/* Project / Board Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    2. Project / Board Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Create, edit, and delete projects or boards</li>
                    <li>Invite users to projects/boards</li>
                    <li>
                      Set project/board visibility (public, private, team)
                    </li>
                    <li>Archive completed projects/boards</li>
                  </ul>
                </article>

                {/* Task Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    3. Task Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Create tasks with title, description, and optional
                      attachments
                    </li>
                    <li>Edit and delete tasks</li>
                    <li>Drag-and-drop interface for organizing tasks</li>
                    <li>
                      Create task lists or columns (e.g., To Do, In Progress,
                      Done)
                    </li>
                    <li>Move tasks between lists/columns</li>
                    <li>Task labels or tags for categorization</li>
                  </ul>
                </article>

                {/* Task Details */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    4. Task Details
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Assign tasks to users</li>
                    <li>Set due dates and reminders</li>
                    <li>Set task priorities (High, Medium, Low)</li>
                    <li>Add comments to tasks</li>
                    <li>Create subtasks or checklists</li>
                    <li>Track time spent on tasks</li>
                  </ul>
                </article>

                {/* Task Status and Updates */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    5. Task Status &amp; Updates
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Update task status (Not Started, In Progress, Completed,
                      On Hold)
                    </li>
                    <li>Real-time updates for task changes</li>
                    <li>Activity log for each task</li>
                  </ul>
                </article>

                {/* Collaboration Features */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    6. Collaboration Features
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>@mentions in task comments to notify users</li>
                    <li>
                      Email notifications for task assignments and updates
                    </li>
                    <li>
                      Share tasks or boards with external users (view-only
                      links)
                    </li>
                  </ul>
                </article>

                {/* Search & Filter */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    7. Search &amp; Filter
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Search tasks across all projects/boards</li>
                    <li>
                      Filter tasks by assignee, due date, priority, or status
                    </li>
                    <li>Save custom filters for quick access</li>
                  </ul>
                </article>

                {/* Reporting and Analytics */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    8. Reporting &amp; Analytics
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Dashboard with overview of tasks and projects</li>
                    <li>Generate reports for overdue tasks</li>
                    <li>View completed tasks per user</li>
                    <li>Task completion rate over time</li>
                    <li>Burndown charts for projects</li>
                    <li>Export reports to CSV or PDF</li>
                  </ul>
                </article>

                {/* Calendar View & Mobile */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    9. Calendar View
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Monthly/weekly calendar view of tasks</li>
                    <li>
                      Sync with external calendars (Google Calendar, iCal)
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    10. Mobile Responsiveness
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Responsive design for mobile and tablet devices</li>
                    <li>Basic offline functionality</li>
                  </ul>
                </article>
              </section>

              {/* Right column: Technical Requirements */}
              <section className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Technical Requirements
                </h2>

                {/* Requirement cards */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    1. Database Design
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Design schema for users, projects/boards, tasks, comments,
                      and activity logs
                    </li>
                    <li>
                      Implement proper relationships (one-to-many, many-to-many)
                    </li>
                    <li>Use MySQL or PostgreSQL for the database</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    2. PHP Architecture
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement MVC (Model-View-Controller) architecture</li>
                    <li>Use OOP (Object-Oriented Programming) principles</li>
                    <li>Implement a router for clean URLs</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    3. User Authentication &amp; Authorization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Secure user authentication system</li>
                    <li>
                      Implement JWT (JSON Web Tokens) for API authentication
                    </li>
                    <li>
                      Role-based access control (RBAC) for different user
                      permissions
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    4. Real-time Updates
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Implement WebSockets for real-time task updates (e.g.,
                      Ratchet or ReactPHP)
                    </li>
                    <li>Fall back to long-polling for older browsers</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    5. Frontend Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Use a modern JavaScript framework (e.g., Vue.js, React)
                      for the frontend
                    </li>
                    <li>
                      Implement drag-and-drop functionality for tasks (e.g.,
                      interact.js or Sortable)
                    </li>
                    <li>Use AJAX for asynchronous data loading and updates</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    6. Date &amp; Time Handling
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Use PHP&apos;s DateTime class for date manipulations
                    </li>
                    <li>
                      Implement time zone support for users in different
                      locations
                    </li>
                    <li>Calculate task durations and time tracking</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    7. File Handling
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Allow file attachments for tasks</li>
                    <li>Implement secure file storage and retrieval</li>
                    <li>
                      Support preview for common file types (images, PDFs)
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    8. API Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Create a RESTful API for all task and project operations
                    </li>
                    <li>Implement API versioning</li>
                    <li>Use JSON for data exchange</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    9. Data Visualization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Use a charting library (e.g., Chart.js, D3.js) for reports
                      and dashboards
                    </li>
                    <li>Implement interactive charts and graphs</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    10. Security Measures
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement input validation and sanitization</li>
                    <li>Use prepared statements for all database queries</li>
                    <li>Implement CSRF protection</li>
                    <li>
                      Set up proper HTTP headers (e.g., Content Security Policy)
                    </li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    11. Performance Optimization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Implement caching (e.g., Redis) for frequently accessed
                      data
                    </li>
                    <li>Optimize database queries</li>
                    <li>Use lazy loading for task lists</li>
                  </ul>
                </article>

                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    12. Testing
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement unit testing for core functions</li>
                    <li>Conduct integration testing for API endpoints</li>
                    <li>Perform user acceptance testing</li>
                  </ul>
                </article>
              </section>
            </div>

            {/* Development Phases */}
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-slate-50">
                Development Phases &amp; Timeline
              </h2>

              <div className="mt-5 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <ol className="relative space-y-6 border-l border-slate-700 pl-5 text-sm text-slate-200">
                  {/* Phase 1 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-slate-50">
                          1. Planning &amp; Setup (3-4 days)
                        </h3>
                        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs text-slate-300 ring-1 ring-slate-700">
                          Foundation
                        </span>
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Define project structure and set up version control
                        </li>
                        <li>Design database schema</li>
                        <li>Set up development environment</li>
                        <li>
                          Choose and set up necessary libraries and frameworks
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 2 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        2. User Management (4-5 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Implement user registration, login, and profile
                          management
                        </li>
                        <li>Set up role-based access control</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 3 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        3. Project / Board Management (5-6 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create CRUD operations for projects/boards</li>
                        <li>Implement user invitations and permissions</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 4 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        4. Basic Task Management (7-8 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Develop task creation, editing, and deletion
                          functionality
                        </li>
                        <li>Implement task lists/columns</li>
                        <li>Create drag-and-drop interface</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 5 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        5. Task Details &amp; Assignment (5-6 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Add task assignment functionality</li>
                        <li>
                          Implement due dates, priorities, and status updates
                        </li>
                        <li>Develop commenting system</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 6 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        6. Real-time Updates (4-5 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Set up WebSocket server</li>
                        <li>Implement real-time updates for task changes</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 7 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        7. Search &amp; Filter (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop search functionality across projects</li>
                        <li>Implement task filtering system</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 8 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        8. Reporting &amp; Analytics (6-7 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create dashboard with task overview</li>
                        <li>
                          Implement reports (overdue tasks, completed tasks,
                          etc.)
                        </li>
                        <li>Develop data visualization for reports</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 9 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        9. Calendar Integration (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create calendar view for tasks</li>
                        <li>Implement external calendar sync</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 10 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        10. API Development (5-6 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Design and implement RESTful API</li>
                        <li>Set up API authentication</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 11 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        11. Mobile Responsiveness (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Optimize UI for mobile devices</li>
                        <li>Implement basic offline functionality</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 12 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        12. Security &amp; Optimization (4-5 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement security best practices</li>
                        <li>Optimize performance and queries</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 13 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        13. Testing &amp; Refinement (5-6 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Conduct thorough testing of all features</li>
                        <li>Fix bugs and improve user experience</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 14 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        14. Documentation &amp; Deployment (3-4 days)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Write API documentation</li>
                        <li>Prepare user guide</li>
                        <li>Set up deployment process</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>

        <br />
        <CodeExample component={project_3} />
      </SectionComponent>
      <SectionComponent title="Secure File Sharing Platform">
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
            {/* Header / Hero */}
            <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/80 p-6 shadow-2xl shadow-slate-900/60 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div>
                <p className="mb-2 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                  File Sharing Platform · Project Summary
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  Secure Web-Based File Sharing Platform
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  A secure, web-based file sharing application that allows users
                  to upload, manage, and share files with customizable access
                  controls, expiration dates, and robust security and
                  collaboration features.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xs lg:justify-end">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  PHP 8 · Laravel / Symfony
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  MySQL / PostgreSQL
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  S3 Storage · OAuth 2.0
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  React / Vue Frontend
                </span>
              </div>
            </header>

            {/* Objective */}
            <section className="mb-10">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/60">
                <h2 className="text-lg font-semibold text-slate-50">
                  Objective
                </h2>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Develop a web-based file sharing platform that allows users to
                  securely upload, manage, and share files with customizable
                  access controls and expiration dates.
                </p>
              </div>
            </section>

            {/* Main content grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left column: Detailed Features */}
              <section className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Detailed Features
                </h2>

                {/* User Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                        1. User Management
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Accounts, profiles &amp; roles
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>User registration with email verification</li>
                    <li>User login with optional two-factor authentication</li>
                    <li>Password reset functionality</li>
                    <li>User profile management (name, avatar, preferences)</li>
                    <li>User roles (Admin, Premium User, Regular User)</li>
                  </ul>
                </article>

                {/* File Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    2. File Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>File upload with progress bar</li>
                    <li>Support for multiple file uploads</li>
                    <li>Drag-and-drop file upload interface</li>
                    <li>File organization with folders and tags</li>
                    <li>
                      File preview for common formats (images, PDFs, text files)
                    </li>
                    <li>File versioning system</li>
                    <li>File encryption at rest</li>
                  </ul>
                </article>

                {/* File Sharing */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    3. File Sharing
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Generate unique sharing links for files and folders</li>
                    <li>Set expiration dates for shared links</li>
                    <li>Password protection for shared links</li>
                    <li>Granular permissions (view, edit, download)</li>
                    <li>Share files via email with customizable messages</li>
                    <li>Revoke access to shared files</li>
                  </ul>
                </article>

                {/* Storage and Quotas */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    4. Storage &amp; Quotas
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement user storage quotas</li>
                    <li>Display storage usage statistics</li>
                    <li>
                      Upgrade options for additional storage (premium features)
                    </li>
                    <li>Automatic file cleanup for expired shared links</li>
                  </ul>
                </article>

                {/* Search and Filter */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    5. Search &amp; Filter
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Full-text search for file names and contents</li>
                    <li>Filter files by type, size, date, and tags</li>
                    <li>Sort files by name, date, or size</li>
                  </ul>
                </article>

                {/* Collaboration Features */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    6. Collaboration Features
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Create shared workspaces for team collaboration</li>
                    <li>Activity log for shared files and folders</li>
                    <li>Comments on shared files</li>
                    <li>@mentions in comments to notify users</li>
                  </ul>
                </article>

                {/* Admin Panel */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    7. Admin Panel
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>User management (view, edit, suspend accounts)</li>
                    <li>Storage usage overview</li>
                    <li>System-wide file search</li>
                    <li>Manage and monitor shared links</li>
                    <li>
                      Configure system settings (max file size, allowed file
                      types)
                    </li>
                  </ul>
                </article>

                {/* Security Features */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    8. Security Features
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Virus scanning for uploaded files</li>
                    <li>File integrity checks</li>
                    <li>Audit logs for all file operations</li>
                    <li>IP-based access restrictions</li>
                    <li>
                      Implement file sharing policies (e.g., restrict sharing
                      outside the organization)
                    </li>
                  </ul>
                </article>

                {/* API */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    9. API
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>RESTful API for file operations</li>
                    <li>OAuth 2.0 for API authentication</li>
                    <li>Rate limiting for API requests</li>
                  </ul>
                </article>

                {/* Mobile Responsiveness */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    10. Mobile Responsiveness
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Responsive design for mobile and tablet devices</li>
                    <li>
                      Optional mobile app for iOS and Android (separate project
                      scope)
                    </li>
                  </ul>
                </article>
              </section>

              {/* Right column: Technical Requirements */}
              <section className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Technical Requirements
                </h2>

                {/* Backend Development */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    1. Backend Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Use PHP 8.x with a modern framework (e.g., Laravel,
                      Symfony)
                    </li>
                    <li>Implement MVC architecture</li>
                    <li>Use Composer for dependency management</li>
                  </ul>
                </article>

                {/* Database Design */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    2. Database Design
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Design schema for users, files, shares, and activities
                    </li>
                    <li>Use MySQL or PostgreSQL for the database</li>
                    <li>Implement proper indexing for performance</li>
                    <li>Use database transactions for critical operations</li>
                  </ul>
                </article>

                {/* File Storage */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    3. File Storage
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Implement a scalable file storage system (e.g.,
                      S3-compatible object storage)
                    </li>
                    <li>Use file streaming for large uploads and downloads</li>
                    <li>
                      Implement chunked file uploads for performance and
                      reliability
                    </li>
                  </ul>
                </article>

                {/* Auth & Authorization */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    4. Authentication &amp; Authorization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement JWT (JSON Web Tokens) for authentication</li>
                    <li>Use OAuth 2.0 for third-party integrations</li>
                    <li>Implement role-based access control (RBAC)</li>
                  </ul>
                </article>

                {/* Security Measures */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    5. Security Measures
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement input validation and sanitization</li>
                    <li>Use prepared statements for all database queries</li>
                    <li>
                      Set up proper HTTP headers (e.g., Content Security Policy)
                    </li>
                    <li>Implement CSRF protection</li>
                    <li>Use HTTPS for all connections</li>
                    <li>Encrypt sensitive data in the database</li>
                  </ul>
                </article>

                {/* File Processing */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    6. File Processing
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Implement a job queue system for async file processing
                      (e.g., Redis with Laravel Horizon)
                    </li>
                    <li>Generate thumbnails for image files</li>
                    <li>
                      Extract metadata from files (EXIF for images, document
                      properties)
                    </li>
                  </ul>
                </article>

                {/* Frontend Development */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    7. Frontend Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Use a modern JS framework (e.g., Vue.js, React)</li>
                    <li>
                      Implement drag-and-drop for file uploads and organization
                    </li>
                    <li>
                      Use WebSockets for real-time updates (e.g., upload
                      progress, collaboration)
                    </li>
                  </ul>
                </article>

                {/* Performance Optimization */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    8. Performance Optimization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Implement caching (e.g., Redis) for frequently accessed
                      data
                    </li>
                    <li>Use CDN for serving static assets</li>
                    <li>Optimize database queries</li>
                    <li>Implement lazy loading for file lists</li>
                  </ul>
                </article>

                {/* Monitoring and Logging */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    9. Monitoring &amp; Logging
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Set up application monitoring (e.g., New Relic, Datadog)
                    </li>
                    <li>
                      Implement centralized logging (e.g., ELK stack or similar)
                    </li>
                    <li>
                      Set up alerts for critical errors and security events
                    </li>
                  </ul>
                </article>

                {/* Testing */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    10. Testing
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement unit testing for core functions</li>
                    <li>Conduct integration testing for API endpoints</li>
                    <li>
                      Perform security testing (e.g., penetration testing)
                    </li>
                    <li>
                      Implement end-to-end testing for critical user flows
                    </li>
                  </ul>
                </article>
              </section>
            </div>

            {/* Development Phases */}
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-slate-50">
                Development Phases &amp; Timeline
              </h2>

              <div className="mt-5 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <ol className="relative space-y-6 border-l border-slate-700 pl-5 text-sm text-slate-200">
                  {/* Phase 1 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-slate-50">
                          1. Planning &amp; Setup (1 week)
                        </h3>
                        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs text-slate-300 ring-1 ring-slate-700">
                          Foundation
                        </span>
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Define project structure and set up version control
                        </li>
                        <li>Design database schema</li>
                        <li>Set up development environment</li>
                        <li>
                          Choose and configure necessary libraries and
                          frameworks
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 2 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        2. User Management (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Implement user registration, login, and profile
                          management
                        </li>
                        <li>Set up role-based access control</li>
                        <li>Implement two-factor authentication</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 3 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        3. Basic File Management (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop file upload functionality</li>
                        <li>Implement file organization (folders, tags)</li>
                        <li>Create file preview system</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 4 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        4. File Sharing (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement sharing link generation</li>
                        <li>
                          Develop expiration and password protection features
                        </li>
                        <li>Create granular permission system</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 5 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        5. Storage &amp; Quotas (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement user storage quotas</li>
                        <li>Develop storage usage tracking</li>
                        <li>Create upgrade system for additional storage</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 6 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        6. Search &amp; Filter (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement full-text search functionality</li>
                        <li>Develop filtering and sorting options</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 7 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        7. Collaboration Features (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create shared workspaces</li>
                        <li>Implement activity logging and comments</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 8 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        8. Admin Panel (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop user management interface</li>
                        <li>Create system-wide file search</li>
                        <li>Implement system settings configuration</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 9 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        9. Security Features (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement virus scanning</li>
                        <li>Develop audit logging system</li>
                        <li>Set up IP-based restrictions</li>
                        <li>Implement file encryption</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 10 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        10. API Development (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Design and implement RESTful API</li>
                        <li>Set up OAuth 2.0 authentication</li>
                        <li>Implement rate limiting</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 11 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        11. Mobile Responsiveness (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Optimize UI for mobile devices</li>
                        <li>Test on various devices and screen sizes</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 12 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        12. Performance Optimization (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement caching strategies</li>
                        <li>Optimize database queries</li>
                        <li>Set up CDN for static assets</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 13 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        13. Testing &amp; Security Audit (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Conduct thorough testing of all features</li>
                        <li>Perform security audit and penetration testing</li>
                        <li>Fix bugs and address security issues</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 14 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        14. Documentation &amp; Deployment (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Write API documentation</li>
                        <li>Prepare user guide</li>
                        <li>Set up deployment process</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>

        <br />
        <CodeExample component={project_4} />
      </SectionComponent>
      <SectionComponent title="Social Media Analytics Dashboard">
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
            {/* Header / Hero */}
            <header className="mb-10 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950/80 p-6 shadow-2xl shadow-slate-900/60 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div>
                <p className="mb-2 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                  Social Media Dashboard · Project Summary
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  Multi-Platform Social Media Analytics &amp; Management
                  Dashboard
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  A comprehensive web-based dashboard that aggregates data from
                  multiple social media platforms, providing cross-channel
                  insights, analytics, reporting, and content management for
                  teams and agencies.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xs lg:justify-end">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  PHP 8 · Laravel / Symfony
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  MySQL / PostgreSQL · MongoDB
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  React / Vue SPA
                </span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700">
                  OAuth · WebSockets
                </span>
              </div>
            </header>

            {/* Objective */}
            <section className="mb-10">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/60">
                <h2 className="text-lg font-semibold text-slate-50">
                  Objective
                </h2>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Develop a comprehensive web-based dashboard that aggregates
                  data from various social media platforms, providing users with
                  insights, analytics, and content management capabilities
                  across multiple accounts.
                </p>
              </div>
            </section>

            {/* Main content grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Left column: Detailed Features */}
              <section className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Detailed Features
                </h2>

                {/* User Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                        1. User Management
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Accounts, security &amp; teams
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>User registration and login with email verification</li>
                    <li>
                      OAuth integration for social media account connections
                    </li>
                    <li>Multi-factor authentication</li>
                    <li>User roles (Admin, Manager, Analyst)</li>
                    <li>Team collaboration features</li>
                  </ul>
                </article>

                {/* Platform Integration */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    2. Platform Integration
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Connect and manage multiple accounts from:</li>
                    <ul className="mt-1 list-disc space-y-1 pl-6 text-sm text-slate-200">
                      <li>Facebook (Pages and Groups)</li>
                      <li>Instagram (Business accounts)</li>
                      <li>Twitter</li>
                      <li>LinkedIn (Company pages)</li>
                      <li>YouTube</li>
                    </ul>
                    <li>OAuth authentication for each platform</li>
                    <li>Automatic token refresh and error handling</li>
                  </ul>
                </article>

                {/* Data Aggregation */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    3. Data Aggregation
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Fetch and store recent posts from connected accounts
                    </li>
                    <li>
                      Collect engagement metrics (likes, comments, shares,
                      retweets)
                    </li>
                    <li>Gather follower/subscriber growth data</li>
                    <li>Track reach and impression statistics</li>
                    <li>Store historical data for trend analysis</li>
                  </ul>
                </article>

                {/* Analytics Dashboard */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    4. Analytics Dashboard
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Overview of key metrics across all platforms</li>
                    <li>Platform-specific detailed analytics</li>
                    <li>Customizable date ranges for data viewing</li>
                    <li>
                      Comparative analysis between platforms and time periods
                    </li>
                    <li>Engagement rate calculations</li>
                    <li>Audience demographics (where available)</li>
                    <li>Top performing content identification</li>
                  </ul>
                </article>

                {/* Content Management */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    5. Content Management
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      View all recent posts across platforms in a unified
                      interface
                    </li>
                    <li>Schedule posts to multiple platforms simultaneously</li>
                    <li>Draft and save post ideas</li>
                    <li>Content calendar view</li>
                    <li>Bulk upload and scheduling feature</li>
                  </ul>
                </article>

                {/* Reporting */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    6. Reporting
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Generate customizable reports (PDF, CSV, XLSX)</li>
                    <li>
                      Automatic weekly/monthly report generation and email
                      delivery
                    </li>
                    <li>White-label report options for agencies</li>
                  </ul>
                </article>

                {/* Competitor Analysis */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    7. Competitor Analysis
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Add and track competitor accounts (public data only)
                    </li>
                    <li>Compare performance metrics with competitors</li>
                  </ul>
                </article>

                {/* Sentiment Analysis */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    8. Sentiment Analysis
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Analyze sentiment of comments and mentions</li>
                    <li>Track brand sentiment over time</li>
                  </ul>
                </article>

                {/* Hashtag Tracking */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    9. Hashtag Tracking
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Monitor performance of specific hashtags</li>
                    <li>Discover trending hashtags in your niche</li>
                  </ul>
                </article>

                {/* Alerts and Notifications */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    10. Alerts &amp; Notifications
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Set up custom alerts for specific metrics or events</li>
                    <li>Email and in-app notifications</li>
                    <li>
                      Critical issue warnings (e.g., sudden drop in engagement
                      or reach)
                    </li>
                  </ul>
                </article>

                {/* API Access */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    11. API Access
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Provide RESTful API for third-party integrations</li>
                    <li>Webhook support for real-time data updates</li>
                  </ul>
                </article>
              </section>

              {/* Right column: Technical Requirements */}
              <section className="space-y-6">
                <h2 className="text-lg font-semibold text-slate-50">
                  Technical Requirements
                </h2>

                {/* Backend Development */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    1. Backend Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Use PHP 8.x with a modern framework (e.g., Laravel,
                      Symfony)
                    </li>
                    <li>Implement MVC architecture</li>
                    <li>Use Composer for dependency management</li>
                  </ul>
                </article>

                {/* Database Design */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    2. Database Design
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Design schema for users, social accounts, posts, and
                      metrics
                    </li>
                    <li>Use MySQL or PostgreSQL for relational data</li>
                    <li>
                      Implement MongoDB for storing large volumes of social
                      media data
                    </li>
                    <li>Use database indexing for query optimization</li>
                  </ul>
                </article>

                {/* Data Fetching and Processing */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    3. Data Fetching &amp; Processing
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Implement background jobs for regular data fetching (e.g.,
                      Laravel Horizon)
                    </li>
                    <li>Use queues for handling large data processing tasks</li>
                    <li>
                      Implement rate limiting to comply with API restrictions
                    </li>
                  </ul>
                </article>

                {/* Frontend Development */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    4. Frontend Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Develop a responsive SPA using Vue.js or React</li>
                    <li>
                      Use a UI framework like Tailwind CSS or Bootstrap for
                      styling
                    </li>
                    <li>Implement real-time updates using WebSockets</li>
                  </ul>
                </article>

                {/* Data Visualization */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    5. Data Visualization
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Use D3.js or Chart.js for creating interactive charts and
                      graphs
                    </li>
                    <li>
                      Implement data export functionality (CSV, Excel, PDF)
                    </li>
                  </ul>
                </article>

                {/* Authentication and Security */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    6. Authentication &amp; Security
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement JWT for API authentication</li>
                    <li>
                      Use OAuth 2.0 for social media platform authentication
                    </li>
                    <li>Secure storage of access tokens and sensitive data</li>
                    <li>Implement proper error handling and logging</li>
                  </ul>
                </article>

                {/* Caching and Performance */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    7. Caching &amp; Performance
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Use Redis for caching frequently accessed data</li>
                    <li>Implement query optimization techniques</li>
                    <li>Use CDN for serving static assets</li>
                  </ul>
                </article>

                {/* API Development */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    8. API Development
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Create a RESTful API for all dashboard functionalities
                    </li>
                    <li>Implement API versioning</li>
                    <li>
                      Use JSON:API specification for consistent response
                      formatting
                    </li>
                  </ul>
                </article>

                {/* Testing */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    9. Testing
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>Implement unit testing for core functions</li>
                    <li>Conduct integration testing for API endpoints</li>
                    <li>Perform end-to-end testing for critical user flows</li>
                  </ul>
                </article>

                {/* Deployment and DevOps */}
                <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                    10. Deployment &amp; DevOps
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                    <li>
                      Set up CI/CD pipeline (e.g., GitLab CI, GitHub Actions)
                    </li>
                    <li>Use Docker for containerization</li>
                    <li>Implement auto-scaling for handling traffic spikes</li>
                  </ul>
                </article>
              </section>
            </div>

            {/* Development Phases */}
            <section className="mt-12">
              <h2 className="text-lg font-semibold text-slate-50">
                Development Phases &amp; Timeline
              </h2>

              <div className="mt-5 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <ol className="relative space-y-6 border-l border-slate-700 pl-5 text-sm text-slate-200">
                  {/* Phase 1 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold text-slate-50">
                          1. Planning &amp; Setup (1 week)
                        </h3>
                        <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs text-slate-300 ring-1 ring-slate-700">
                          Foundation
                        </span>
                      </div>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Define project structure and set up version control
                        </li>
                        <li>Design database schema</li>
                        <li>Set up development environment</li>
                        <li>
                          Choose and set up necessary libraries and frameworks
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 2 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        2. User Management &amp; Authentication (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement user registration and login system</li>
                        <li>
                          Set up OAuth for social media account connections
                        </li>
                        <li>Develop user roles and permissions</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 3 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        3. Social Media API Integration (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>
                          Implement OAuth flow for each supported platform
                        </li>
                        <li>Develop data fetching modules for each platform</li>
                        <li>Create background jobs for regular data updates</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 4 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        4. Data Storage &amp; Processing (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Set up databases (relational and NoSQL)</li>
                        <li>Implement data processing and aggregation logic</li>
                        <li>
                          Develop caching mechanisms for performance
                          optimization
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 5 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        5. Analytics Dashboard Development (3 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Create main dashboard interface</li>
                        <li>Develop individual platform analytics views</li>
                        <li>Implement data visualization components</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 6 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        6. Content Management Features (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop post scheduling functionality</li>
                        <li>Create content calendar interface</li>
                        <li>Implement multi-platform posting capability</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 7 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        7. Reporting System (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop customizable report generation</li>
                        <li>Implement export functionality (PDF, CSV, XLSX)</li>
                        <li>Create automated reporting schedules</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 8 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        8. Advanced Features (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Implement competitor analysis functionality</li>
                        <li>Develop sentiment analysis system</li>
                        <li>Create hashtag tracking and analysis features</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 9 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        9. Alerts &amp; Notifications (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Develop custom alert system</li>
                        <li>Implement email and in-app notifications</li>
                        <li>
                          Create real-time update functionality using WebSockets
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 10 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        10. API Development (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Design and implement RESTful API</li>
                        <li>Develop webhook functionality</li>
                        <li>Create API documentation</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 11 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        11. Performance Optimization (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Optimize database queries</li>
                        <li>Implement caching strategies</li>
                        <li>Perform load testing and optimizations</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 12 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        12. Testing &amp; Quality Assurance (2 weeks)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Conduct thorough testing of all features</li>
                        <li>Perform security audits</li>
                        <li>Fix bugs and address performance issues</li>
                      </ul>
                    </div>
                  </li>

                  {/* Phase 13 */}
                  <li className="relative">
                    <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                    <div className="pl-2.5">
                      <h3 className="font-semibold text-slate-50">
                        13. Documentation &amp; Deployment (1 week)
                      </h3>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5">
                        <li>Prepare user documentation</li>
                        <li>Set up production environment</li>
                        <li>Implement monitoring and logging systems</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>

        <br />
        <CodeExample component={project_5} />
      </SectionComponent>
    </>
  );
}

export default Projects;
