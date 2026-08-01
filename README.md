# Basic Informational Site using Node.js

A beginner-friendly Node.js project that serves different HTML pages based on the requested URL using Node.js's built-in `http` and `fs` modules.

This project was built as part of **The Odin Project** to understand how a basic web server works without using Express.js.

---

## Features

- Serves different HTML pages based on the URL.
- Handles multiple routes:
  - Home (`/`)
  - About (`/about`)
  - Contact (`/contact-me`)
- Displays a custom **404 page** for unknown routes.
- Uses Node.js built-in modules (`http` and `fs`).
- No external libraries or frameworks.

---

## Project Structure

```
basic-informational-site/
│
├── index.js
├── index.html
├── about.html
├── contact-me.html
├── 404.html
└── README.md
```

---

## Technologies Used

- Node.js
- JavaScript
- HTML5

---

## How to Run

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd basic-informational-site
```

3. Start the server

```bash
node index.js
```

4. Open your browser

```
http://localhost:9000/
```

> **Note:** The original assignment uses port **8080**. This project uses **9000** because port 8080 was already occupied on my system.

---

## Available Routes

| Route | Page |
|--------|------|
| `/` | Home Page |
| `/about` | About Page |
| `/contact-me` | Contact Page |
| Any other route | Custom 404 Page |

---

## Learning Outcomes

Through this project, I learned:

- Creating a web server using Node.js.
- Using the `http` module.
- Reading files using the `fs` module.
- Handling requests with `req.url`.
- Serving HTML files dynamically.
- Basic routing without Express.js.

---

## Future Improvements

- Add proper HTTP status codes.
- Improve error handling.
- Add CSS styling.
- Rebuild the project using Express.js.

---

## Acknowledgements

This project was completed as part of **The Odin Project – Node.js Curriculum**.
