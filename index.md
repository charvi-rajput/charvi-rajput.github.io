<h1 style="font-size: 2.5rem; margin-bottom: 0;">
    <span>Getting Started with </span>
    <span style="color:#e67e22;">SQLite</span>
  </h1>

<h2 style=" padding: 10px 15px; background-color:rgb(230, 226, 223); border-left: 5px solid #e67e22; border-radius: 4px;">Table of Contents</h2>

- [What is SQLite?](#what-is-sqlite)
- [Why Use SQLite?](#why-use-sqlite)
- [Installation Guide](#installation-guide)
    - [📦 Step 1: Download SQLite](#-step-1-download-sqlite)
    - [🔽 Step 2: Verify Installation](#-step-2-verify-installation)
- [Further Resources](#further-resources)
- [FAQs](#faqs)
- [Conclusion](#conclusion)

## What is SQLite?
**SQLite** is a lightweight, serverless, self-contained SQL database engine. Unlike other databases, it doesn’t require a separate server to run.



## Why Use SQLite?

- No server setup required  
- Great for mobile apps, small projects, and prototyping  
- Just one file = one database  
- Easy to use with Python, JavaScript, etc.


## Installation Guide

#### 📦 Step 1: Download SQLite

Go to the [SQLite Downloads page](https://www.sqlite.org/download.html) and download:

- **Windows**: `sqlite-tools-win32-x86.zip`  
- **Mac**: Use Homebrew – `brew install sqlite`  
- **Linux**: `sudo apt install sqlite3`

#### 🔽 Step 2: Verify Installation

Open a terminal and type:  
```bash 
sqlite --version
```


## Further Resources

- [SQL Tutorial](https://www.sqltutorial.org/)
- [SQL Functions](https://www.sqltutorial.org/sql-aggregate-functions/)
- [SQLite Cheat Sheet](https://www.sqltutorial.org/sql-cheat-sheet/)



## FAQs

<b><span style="color:#e67e22;">Q1:</span>
What makes SQLite different from other databases like MySQL?</b>  
**<span style="color:#e67e22;">A:</span>** 
SQLite is a lightweight, embedded database for small-scale apps, while SQL Server is an enterprise-grade database for large-scale, transactional applications.

<b><span style="color:#e67e22;">Q2:</span> Can multiple users access the same SQLite database at once?</b>  
**<span style="color:#e67e22;">A:</span>** 
SQLite allows concurrent reads, but only one write at a time. It’s best for single-user or low-write scenarios.

<b><span style="color:#e67e22;">Q3:</span>
Where is the data stored in SQLite?</b>  
**<span style="color:#e67e22;">A:</span>** 
In a single `.db` file on your local system. For example:  
`sqlite3 mydata.db`

<b><span style="color:#e67e22;">Q4:</span>
Can I use SQLite with Python / Java / Node.js?</b>  
**<span style="color:#e67e22;">A:</span>** 
Yes!  
- Python: `sqlite3` module (built-in)  
- Node.js: `sqlite3` or `better-sqlite3`  
- Java: Use `JDBC` with an SQLite driver

<b><span style="color:#e67e22;">Q5:</span>
How do I back up a SQLite database?</b>  
**<span style="color:#e67e22;">A:</span>** 
Just copy the `.db` file. Ensure no write operations are happening during the copy.


## Conclusion

You’ve now reached the end of this beginner-friendly guide to SQLite. Well done!

- Try connecting SQLite with Python, JavaScript, or your favorite language  
- Experiment with joins, indexes, and complex queries  
- Explore GUI tools like DB Browser for SQLite or DBeaver

<b><span style="color:#e67e22;">Happy Querying! 👨🏽‍💻</span></b>

