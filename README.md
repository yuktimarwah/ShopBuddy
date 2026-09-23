# 🛒 ShopBuddy

A responsive electronics shopping platform inspired by my family's electronics business, **Marwah Communications**.

ShopBuddy is designed to help users explore electronics, search for products, compare options, save products to a wishlist, and find suitable products through preference-based recommendations.

## 🎯 Project Overview

ShopBuddy is a frontend web application developed using **HTML, CSS, and JavaScript**.

The project focuses on creating a responsive and user-friendly electronics platform where users can explore different categories, view product details, compare products, manage a cart and wishlist, and get recommendations based on their requirements.

The project is inspired by the real-world experience of an electronics business and aims to make the process of exploring and choosing electronics simpler and more organized.

## 🎯 Project Goals

* Build a responsive frontend web application using HTML, CSS, and JavaScript
* Practice DOM manipulation and JavaScript-based dynamic rendering
* Implement client-side data storage using Web Storage
* Provide product search, comparison, wishlist, and cart functionality
* Implement CRUD operations in the application
* Build a preference-based product recommendation system
* Maintain a clean and reusable project structure
* Make the application responsive across desktop, tablet, and mobile devices

## 📋 Specifications

The current version of ShopBuddy includes:

* Multiple electronics categories
* Product search
* Product listing and filtering
* Product details and specifications
* Shopping cart with quantity management
* Wishlist management
* Product comparison
* Preference-based recommendations
* Shared navigation across pages
* Responsive layouts
* Client-side data storage using `localStorage`

The application is currently implemented as a **frontend-only web application**. No backend server or database is used in the current version.

## 🎨 Design

ShopBuddy follows a consistent visual design across its pages.

### Design Approach

* Navy, white, and yellow color theme
* Consistent navigation across pages
* Card-based product presentation
* Responsive layouts for different screen sizes
* Clear product information and actions
* Reusable CSS files for different sections
* JavaScript-based dynamic content rendering

### Application Flow

```text
User
  ↓
Shared Navigation
  ↓
Search / Categories / Recommendations
  ↓
Product Listing
  ↓
Product Details
  ↓
Cart / Wishlist / Compare
  ↓
localStorage
```

## 🚀 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Data Storage

* Browser `localStorage`

### Planned MERN Upgrade

* React
* Node.js
* Express.js
* MongoDB

The MERN technologies are planned for the future version and are **not part of the current implementation**.

## ✨ Features

* Product browsing across multiple electronics categories
* Product search
* Product details and specifications
* Add to cart and cart management
* Cart quantity update
* Wishlist functionality
* Product comparison
* Personalized product recommendations
* Responsive design for desktop, tablet, and mobile
* Shared navigation across pages
* Product images and structured product data
* Client-side data persistence using `localStorage`

## 📂 Product Categories

* Mobile
* Tablet
* Smart Watch
* Air Conditioner
* Refrigerator
* Washing Machine
* Microwave

## 🔄 Data Storage & CRUD Operations

ShopBuddy uses browser **`localStorage`** for client-side data persistence.

### Cart CRUD

The shopping cart demonstrates CRUD operations:

* **Create:** Add a product to the cart
* **Read:** Display products stored in the cart
* **Update:** Increase or decrease product quantity
* **Delete:** Remove products from the cart

The cart data remains available after refreshing the page because it is stored in browser `localStorage`.

Wishlist data is also maintained using `localStorage`.

## 📁 Project Structure

```text
ShopBuddy/
│
├── components/
│   └── navbar.html
│
├── css/
│   ├── account.css
│   ├── cart.css
│   ├── compare.css
│   ├── navbar.css
│   ├── product-details.css
│   ├── products.css
│   ├── recommendation.css
│   ├── style.css
│   └── wishlist.css
│
├── images/
│   ├── Airconditioner.avif
│   ├── Mobile.avif
│   ├── Refrigrator.webp
│   ├── SmartWatch.webp
│   ├── Tablet.avif
│   ├── WashingMachine.avif
│   ├── hero.png
│   └── microwave.avif
│
├── js/
│   ├── cart.js
│   ├── compare-page.js
│   ├── compare.js
│   ├── data.js
│   ├── navbar.js
│   ├── product-details.js
│   ├── products.js
│   ├── recommendation.js
│   ├── script.js
│   └── wishlist.js
│
├── pages/
│   ├── account.html
│   ├── cart.html
│   ├── compare.html
│   ├── product-details.html
│   ├── products.html
│   ├── recommendation.html
│   └── wishlist.html
│
├── index.html
├── LICENSE
├── README.md
└── .gitignore
```

## ▶️ Prerequisites

ShopBuddy is a frontend-only project and does not require a backend server or database.

You only need:

* A modern web browser such as Chrome, Edge, or Firefox
* Git, if cloning the repository

For local development, a code editor such as **Visual Studio Code** and a local development server such as **Live Server** can be used.

## 🛠️ How to Run

### Option 1: Clone the Repository

```bash
git clone https://github.com/yuktimarwah/ShopBuddy.git
```

Move into the project directory:

```bash
cd ShopBuddy
```

Open the project in a code editor and run `index.html` using a local development server.

### Option 2: Run Locally

1. Download or clone the repository.
2. Open the project folder in a code editor.
3. Start a local development server.
4. Open `index.html` in the browser.
5. Explore the different pages and features.

## 📌 Current Status

The **HTML, CSS and JavaScript version is complete**.

The project was developed incrementally with meaningful commits throughout the semester.

The current version includes responsive design, product browsing, search, product details, cart CRUD operations, wishlist, comparison, recommendations, and browser-based data storage.

The next phase will extend ShopBuddy into a **MERN-based application** with backend functionality, database integration, authentication, and other full-stack features.

## 🎯 Learning Goals

* Responsive Web Design
* JavaScript Fundamentals
* DOM Manipulation
* Local Storage
* Frontend Application Structure
* Product Recommendation Logic
* CRUD Operations
* REST APIs
* Backend Development
* Database Integration
* Authentication
* Deployment

## 🔮 Future Improvements

* React-based frontend
* Node.js and Express.js backend
* MongoDB database
* Customer and admin authentication
* Admin dashboard and product management
* Order management
* Payment gateway integration
* Backend-powered recommendations
* Deployment of the full-stack application

## 🌐 Deployment

ShopBuddy is deployed using **Vercel**.

The deployed version can be accessed from the project's Vercel deployment.

## 📄 License

This project is licensed under the **MIT License**. See the [`LICENSE`](LICENSE) file for details.

