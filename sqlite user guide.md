<h1>
  <span> Getting Started with </span>
  <span style="color:rgb(255, 102, 0);">SQLite</span>
</h1>

## 📌 Table of Contents
- [📌 Table of Contents](#-table-of-contents)
- [What is SQLite?](#what-is-sqlite)
- [Why Use SQLite?](#why-use-sqlite)
- [🛠️ Installation Guide](#️-installation-guide)
  - [📦 Step 1: Download SQLite](#-step-1-download-sqlite)
  - [🔽 Step 2: Verify Installation](#-step-2-verify-installation)
- [🔗 Further Resources](#-further-resources)
- [❓ FAQs](#-faqs)
- [Conclusion](#conclusion)

---

## What is SQLite?

**SQLite** is a lightweight, serverless, self-contained SQL database engine. Unlike other databases, it doesn’t require a separate server to run.

---

## Why Use SQLite?

- No server setup required
- Great for mobile apps, small projects, and prototyping  
- Just one file = one database  
- Easy to use with Python, JavaScript, etc.

---

## 🛠️ Installation Guide

### 📦 Step 1: Download SQLite

Go to the [SQLite Downloads page](https://www.sqlite.org/download.html) and download:
- **Windows**: sqlite-tools-win32-x86.zip
- **Mac**: Use Homebrew: `brew install sqlite`
- **Linux**: `sudo apt install sqlite3`

### 🔽 Step 2: Verify Installation

Open a terminal and type:

```bash
sqlite3 --version
```

---

## 🔗 Further Resources

- [SQL Tutorial](https://www.sqltutorial.org/)
- [SQL Functions](https://www.sqltutorial.org/sql-aggregate-functions/)
- [SQLite Cheat Sheet](https://www.sqltutorial.org/sql-cheat-sheet/)
  
---

## ❓ FAQs

<span style="color:rgb(255, 102, 0);">**Q1:**</span>
**What makes SQLite different from other databases like MySQL ?**  
<span style="color:rgb(255, 102, 0);">**A:**</span> 
SQLite is a lightweight, embedded database for small-scale apps, while SQL Server is a powerful, enterprise-grade database for large-scale and transactional applications.

<span style="color:rgb(255, 102, 0);">**Q2:**</span>
**Can multiple users access the same SQLite database at once?**  
<span style="color:rgb(255, 102, 0);">**A:**</span> 
SQLite allows concurrent reads, but only one write operation can occur at a time. It's not ideal for high-concurrency, multi-user applications and hence, better suited for single-user or low-write scenarios.

<span style="color:rgb(255, 102, 0);">**Q3:**</span>
**Where is the data stored in SQLite?**  
<span style="color:rgb(255, 102, 0);">**A:**</span> 
In a single `.db` file on your local system. You can specify the filename when connecting to the database (e.g., `sqlite3 mydata.db`).

<span style="color:rgb(255, 102, 0);">**Q4:**</span>
**Can I use SQLite with Python / Java / Node.js?**  
<span style="color:rgb(255, 102, 0);">**A:**</span> 
Yes! SQLite is supported by most major languages:

- Python: `sqlite3` module (built-in)

- Node.js: `sqlite3` or `better-sqlite3`

- Java: Use `JDBC` with SQLite driver

<span style="color:rgb(255, 102, 0);">**Q5:**</span>
**How do I back up a SQLite database?**  
<span style="color:rgb(255, 102, 0);">**A:**</span>
Just copy the `.db` file! Make sure no write operations are occurring during the copy to avoid corruption.

---

## Conclusion 

You’ve now reached the end of this beginner-friendly guide to SQLite, well done!

From here, you can:

- Try connecting SQLite with Python, JavaScript, or your favorite programming language

- Experiment with joins, indexes, and more complex queries

- Explore GUI tools like DB Browser for SQLite or DBeaver for easier database management

<span style="color:rgb(255, 102, 0);">**Happy Querying!👨🏽‍💻**</span> 


