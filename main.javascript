// --- Backend (Conceptual Outline) ---
// This is NOT runnable code, but an illustration of how backend APIs might be structured.
// You would use a framework like Node.js/Express, Python/Flask, etc.
// and a database like PostgreSQL, MongoDB, MySQL.

/*

// Example using Node.js with Express (simplified)

const express = require('express');
const app = express();
const port = 3001; // Different port from React development server

// Middleware
app.use(express.json()); // For parsing application/json

// In-memory "database" for demonstration
let dresses = [
  {
    id: 1,
    name: "Elegant Evening Gown",
    description: "A stunning floor-length gown perfect for special occasions.",
    price: 150.00,
    imageUrl: "https://via.placeholder.com/300x400/FFC0CB/000000?text=Evening+Gown",
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Casual Summer Dress",
    description: "Light and breezy dress for warm summer days.",
    price: 55.50,
    imageUrl: "https://via.placeholder.com/300x400/ADD8E6/000000?text=Summer+Dress",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Bohemian Maxi Dress",
    description: "Flowy maxi dress with intricate patterns.",
    price: 80.00,
    imageUrl: "https://via.placeholder.com/300x400/90EE90/000000?text=Maxi+Dress",
    sizes: ["S", "M", "L"],
  },
];

// API Endpoint to get all dresses
app.get('/api/dresses', (req, res) => {
  res.json(dresses);
});

// API Endpoint to get a single dress by ID
app.get('/api/dresses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dress = dresses.find(d => d.id === id);
  if (dress) {
    res.json(dress);
  } else {
    res.status(404).json({ message: 'Dress not found' });
  }
});

// API Endpoint for adding a dress (would involve database persistence)
app.post('/api/dresses', (req, res) => {
  const newDress = {
    id: dresses.length + 1, // Simple ID generation
    ...req.body
  };
  dresses.push(newDress);
  res.status(201).json(newDress);
});

// API Endpoint for updating a dress
app.put('/api/dresses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dressIndex = dresses.findIndex(d => d.id === id);
  if (dressIndex !== -1) {
    dresses[dressIndex] = { ...dresses[dressIndex], ...req.body };
    res.json(dresses[dressIndex]);
  } else {
    res.status(404).json({ message: 'Dress not found' });
  }
});

// API Endpoint for deleting a dress
app.delete('/api/dresses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = dresses.length;
  dresses = dresses.filter(d => d.id !== id);
  if (dresses.length < initialLength) {
    res.status(204).send(); // No content
  } else {
    res.status(404).json({ message: 'Dress not found' });
  }
});

// --- Order/Cart related endpoints would also be here ---
// POST /api/cart - Add item to cart
// GET /api/cart - View cart
// POST /api/orders - Create an order
// GET /api/orders/:userId - Get user's orders

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});

*/

// --- Backend Technologies and Concepts ---
/*
1.  **Server-side Language/Framework:**
    *   Node.js with Express.js: Popular for JavaScript full-stack development.
    *   Python with Django or Flask: Robust and scalable.
    *   Ruby on Rails: Convention over configuration, rapid development.
    *   Java with Spring Boot: Enterprise-grade, robust.
    *   PHP with Laravel: Widely used for web applications.

2.  **Database:**
    *   **Relational Databases (SQL):** PostgreSQL, MySQL, SQLite. Good for structured data like orders, users, products with defined relationships.
    *   **NoSQL Databases:** MongoDB (document-based), Cassandra (column-family). Flexible schema, good for large amounts of unstructured or semi-structured data.

3.  **API Design (RESTful APIs are common):**
    *   **Endpoints:** Define URLs for different resources (e.g., `/api/dresses`, `/api/users`, `/api/orders`).
    *   **HTTP Methods:** Use GET (retrieve), POST (create), PUT (update), DELETE (remove).
    *   **Data Format:** JSON is the standard for data exchange.

4.  **Key Features & Considerations:**
    *   **User Authentication & Authorization:** Securely manage user accounts, login, registration, and permissions. (e.g., JWT - JSON Web Tokens)
    *   **Product Catalog:** Storing dress details, images, sizes, colors, prices, inventory.
    *   **Shopping Cart:** Managing items added by users, persistence (session or database).
    *   **Order Management:** Processing orders, tracking status, payment integration.
    *   **Payment Gateway Integration:** Connecting with services like Stripe, PayPal.
    *   **Search & Filtering:** Allowing users to find dresses by category, size, price, etc.
    *   **Image Handling:** Storing and serving product images efficiently (e.g., using cloud storage like AWS S3).
    *   **Database Migrations:** Managing changes to your database schema over time.
    *   **Deployment:** Hosting your backend and frontend on servers (e.g., Heroku, AWS, Vercel, Netlify).
    *   **Scalability & Performance:** Designing for growth and responsiveness.
    *   **Security:** Protecting against common web vulnerabilities (SQL injection, XSS, CSRF).
*/