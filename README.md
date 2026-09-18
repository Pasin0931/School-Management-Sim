# HW7: Individual Database Project - School Management Simulation

**Student:** Pasin Makcharoen
**Student ID:** 6810545794

## Selected Option

**Option C — Simple Database Application**

A full web application was built with Next.js and MySQL (via `mysql2`, no ORM), demonstrating:
- **Adding a new record** — `/root/creation`, a form supporting all 5 entities (School, Student, Teacher, Subject, Enrollment)
- **Searching for or viewing records** — `/` (Dashboard), listing all records for all 5 tables with live counts
- **Updating or deleting a record** — Edit/Delete actions on every record in the Dashboard, backed by `PUT`/`DELETE` API routes
- **3+ meaningful reports using joined/aggregated data** — `/root/view`, a Query Type dropdown running 5 SQL reports (see below)

The 5 reporting queries collectively include:
- A query joining multiple tables (Query 1)
- A query using GROUP BY and an aggregate function (Query 2)
- A query using HAVING (Query 3)
- A query using a subquery (Query 4)
- A query answering an interesting business question (Query 5)

## DBMS and Tools Used

- **Database:** MySQL 8.4, hosted on Aiven (cloud MySQL service)
- **Backend/Frontend:** Next.js (App Router), using the `mysql2` package for raw SQL queries — no ORM
- **UI:** shadcn/ui components with Tailwind CSS
- **Deployment:** Vercel
- **Live app:** https://school-management-sim-rho.vercel.app

## Project Scope

A simplified school management system tracking 5 related tables:
- **School** — schools in the system
- **Student** — students enrolled at a school
- **Teacher** — teachers employed at a school
- **AvaliableSubjects** — subjects offered
- **Enrollment** — records of which students are enrolled in which subjects, with grades

## How to Run the SQL Script

1. Create a MySQL database (e.g. `CREATE DATABASE SIMULATION_DATABASE_6810545794;`)
2. Run the submitted `.sql` file against that database using a MySQL client (Workbench, CLI, etc.):
   ```
   mysql -u <user> -p <database_name> < SIMULATION_DATABASE_6810545794.sql
   ```
3. The script creates all 5 tables with primary/foreign key constraints, inserts sample data (5+ rows per master table, 10+ rows in Enrollment), and includes the 5 reporting queries at the end of the file.

## How to Run the Web Application

1. Clone the repository and install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file in the project root with your MySQL connection details:
   ```
   DB_HOST=<your-mysql-host>
   DB_PORT=<your-mysql-port>
   DB_USER=<your-mysql-user>
   DB_PASSWORD=<your-mysql-password>
   DB_NAME=<your-database-name>
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

Alternatively, visit the deployed version directly: https://school-management-sim-rho.vercel.app

## App Navigation

- **Home (/)** — dashboard showing record counts and full listings for all 5 tables, with Edit and Delete actions for each record
- **/root/creation** — form to create a new record for any of the 5 entities
- **/root/updates/[id]** — form to update an existing Student, Teacher, School, or Subject record
- **/root/updates/[id_1]/[id_2]** — form to update an existing Enrollment record (composite key)
- **/root/view** — Query Type dropdown to run and view results for the 5 SQL reporting queries
- **/root/aboutme** — project and developer information

## Folder Structure

```
StudentID_HW7_ProjectName/
├── 01_Report/StudentID_HW7_Report.pdf
├── 02_Database/StudentID_HW7.sql
├── 03_Practical_Database_Use/
│   └── (application source code and this README's running instructions)
├── 04_Screenshots/
└── README.md
```