// --- Frontend (React) ---
// You would typically use create-react-app or Vite for a React project.
// This code assumes you have a React environment set up.

// To run this frontend part, you would need to:
// 1. Set up a React project (e.g., `npx create-react-app my-dress-shop`)
// 2. Install any necessary UI libraries (e.g., for styling, routing)
// 3. Place this code within your React components.

// Mock data for dresses (in a real app, this would come from a backend API)
const mockDresses = [
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

function DressCard({ dress, onAddToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow-md m-2 w-72">
      <img src={dress.imageUrl} alt={dress.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{dress.name}</h3>
      <p className="text-gray-600 mb-3 text-sm">{dress.description}</p>
      <p className="text-lg font-bold text-blue-700">${dress.price.toFixed(2)}</p>
      <div className="mt-4">
        <button
          onClick={() => onAddToCart(dress)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Cart({ cartItems }) {
  return (
    <div className="mt-8 p-4 border rounded-lg shadow-inner bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-2 border-b">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
          <li className="flex justify-between items-center py-2 font-bold">
            <span>Total:</span>
            <span>
              $
              {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

function App() {
  const [dresses, setDresses] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    // In a real app, you would fetch dresses from your backend API here
    // For this example, we'll use the mock data
    setDresses(mockDresses);
  }, []);

  const handleAddToCart = (dress) => {
    setCartItems([...cartItems, dress]);
    alert(`${dress.name} added to cart!`);
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <header className="bg-blue-800 text-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dress Boutique</h1>
        <div>
          <span className="text-lg">Cart: {cartItems.length} items</span>
        </div>
      </header>

      <main>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Latest Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {dresses.map((dress) => (
            <DressCard key={dress.id} dress={dress} onAddToCart={handleAddToCart} />
          ))}
        </div>

        <Cart cartItems={cartItems} />
      </main>

      <footer className="mt-12 text-center text-gray-600 py-4 border-t">
        <p>&copy; 2026 Dress Boutique. All rights reserved.</p>
      </footer>
    </div>
  );
}

// To make this runnable in a single file for demonstration:
// You would typically import React, ReactDOM from 'react'
// and render the App component to a div in your index.html.

// For a self-contained example without a full setup, this is conceptual.
// If you have a React environment, you would export App:
// export default App;