# Binondo Bodega Furniture

A modern, IKEA-inspired furniture e-commerce site built with **pure HTML, CSS, and vanilla JavaScript** — no frameworks, no build step.

## Run it

Just open `index.html` in your browser.

For best results (so images and page navigation work cleanly), serve the folder with any static server, e.g.:

```bash
# Python 3
python3 -m http.server 8000

# Node (one of)
npx serve .
```

Then visit http://localhost:8000

## Folder structure

```
binondo-bodega/
├── index.html              # Home / landing
├── css/
│   └── styles.css          # Design system + all styles
├── js/
│   ├── data.js             # Sample products, categories, demo accounts
│   └── app.js              # Cart, auth, navbar, toasts, helpers
├── images/                 # Furniture photography
└── pages/
    ├── shop.html           # Product listing + filters + search
    ├── product.html        # Product details + reviews
    ├── cart.html           # Cart + simulated checkout
    ├── login.html
    ├── register.html
    ├── account.html        # Customer dashboard
    ├── admin.html          # Admin dashboard (analytics, orders, inventory)
    └── superadmin.html     # Super admin (staff/roles, system settings)
```

## Demo accounts

| Role         | Email                     | Password      |
|--------------|---------------------------|---------------|
| Super Admin  | superadmin@demo.com       | password123   |
| Admin        | admin@demo.com            | password123   |
| User         | user@demo.com             | password123   |

After signing in, you'll be redirected to the dashboard for that role.

## Features

- IKEA-inspired clean design: white background, soft shadows, oak/beige accent palette, Fraunces + Inter typography
- Browse, search, and filter (category, material, price)
- Product details with image, description, ratings, reviews, qty stepper
- Cart with quantity controls, free-shipping logic, and simulated checkout
- Role-based dashboards with charts (CSS bar charts), tables, inventory and staff management
- Fully responsive (mobile, tablet, desktop)
- Smooth fade-up animations and hover transitions
- Cart and session persisted in `localStorage`

## Notes

This is a pure front-end prototype. There is no real backend — accounts, orders, and the cart live in `localStorage`. To make this production-ready, hook up a real API + database (e.g. Node/Express + Postgres) for products, auth (JWT), orders, and admin actions.
