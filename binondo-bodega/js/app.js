// ========== Shared utilities for Binondo Bodega Furniture ==========

const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0 });
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ---------- Cart ----------
function getCart() {
  try { return JSON.parse(localStorage.getItem("bb-cart") || "[]"); } catch { return []; }
}
function setCart(items) {
  localStorage.setItem("bb-cart", JSON.stringify(items));
  updateCartBadge();
}
function addToCart(productId, qty = 1) {
  const items = getCart();
  const found = items.find((i) => i.id === productId);
  if (found) found.qty += qty;
  else items.push({ id: productId, qty });
  setCart(items);
  toast("Added to cart");
}
function removeFromCart(productId) {
  setCart(getCart().filter((i) => i.id !== productId));
}
function setQty(productId, qty) {
  const items = getCart().map((i) => i.id === productId ? { ...i, qty: Math.max(1, qty) } : i);
  setCart(items);
}
function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function cartSubtotal() {
  return getCart().reduce((s, i) => {
    const p = PRODUCTS.find((p) => p.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}
function updateCartBadge() {
  $$(".cart-badge").forEach((b) => {
    const n = cartCount();
    b.textContent = n;
    b.style.display = n > 0 ? "flex" : "none";
  });
}

// ---------- Auth (prototype only — uses localStorage) ----------
function getUser() {
  try { return JSON.parse(localStorage.getItem("bb-user") || "null"); } catch { return null; }
}
function setUser(u) {
  if (u) localStorage.setItem("bb-user", JSON.stringify(u));
  else localStorage.removeItem("bb-user");
  renderAuthState();
}
function login(email, password) {
  const acc = DEMO_ACCOUNTS.find((a) => a.email === email && a.password === password);
  if (!acc) return null;
  setUser({ email: acc.email, role: acc.role, name: acc.name });
  return acc;
}
function logout() { setUser(null); window.location.href = "../index.html"; }

function renderAuthState() {
  const u = getUser();
  $$("[data-auth-name]").forEach((el) => el.textContent = u ? u.name : "");
  $$("[data-auth-role]").forEach((el) => el.textContent = u ? u.role : "");
  $$("[data-auth-link]").forEach((el) => {
    if (u) {
      el.innerHTML = `<a href="${dashboardLinkFor(u.role)}" title="${u.name}">👤</a>`;
    } else {
      el.innerHTML = `<a href="${pathTo('pages/login.html')}" title="Sign in">👤</a>`;
    }
  });
}
function dashboardLinkFor(role) {
  if (role === "superadmin") return pathTo("pages/superadmin.html");
  if (role === "admin")      return pathTo("pages/admin.html");
  return pathTo("pages/account.html");
}

// ---------- Path helper (works from root or /pages) ----------
function pathTo(p) {
  const inPages = window.location.pathname.includes("/pages/");
  return (inPages ? "../" : "") + p;
}

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

// ---------- Navbar render ----------
function renderNavbar(active = "") {
  const inPages = window.location.pathname.includes("/pages/");
  const base = inPages ? "../" : "";
  return `
  <header class="navbar">
    <div class="container nav-inner">
      <a href="${base}index.html" class="logo">Binondo<span>·</span>Bodega</a>
      <nav class="nav-links">
        <a href="${base}index.html" class="${active==='home'?'active':''}">Home</a>
        <a href="${base}pages/shop.html" class="${active==='shop'?'active':''}">Shop</a>
        <a href="${base}pages/shop.html?cat=Living%20Room">Living</a>
        <a href="${base}pages/shop.html?cat=Bedroom">Bedroom</a>
        <a href="${base}pages/shop.html?cat=Office">Office</a>
        <a href="${base}pages/shop.html?cat=Dining">Dining</a>
      </nav>
      <div class="nav-actions">
        <form class="search-box" onsubmit="event.preventDefault(); const q=this.q.value; window.location.href='${base}pages/shop.html?q='+encodeURIComponent(q);">
          <span>🔍</span>
          <input name="q" type="text" placeholder="Search furniture…" />
        </form>
        <span data-auth-link><a href="${base}pages/login.html" class="icon-btn" title="Sign in">👤</a></span>
        <a href="${base}pages/cart.html" class="icon-btn" title="Cart">🛒<span class="cart-badge">0</span></a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const inPages = window.location.pathname.includes("/pages/");
  const base = inPages ? "../" : "";
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo" style="color:white;font-size:1.2rem;margin-bottom:.75rem;">Binondo<span style="color:var(--accent);">·</span>Bodega</div>
          <p style="font-size:.9rem;max-width:320px;color:#a9a59e;">Honest, well-made furniture for everyday living. Crafted with care, priced with sense.</p>
        </div>
        <div>
          <h5>Shop</h5>
          <a href="${base}pages/shop.html?cat=Living%20Room">Living Room</a>
          <a href="${base}pages/shop.html?cat=Bedroom">Bedroom</a>
          <a href="${base}pages/shop.html?cat=Office">Office</a>
          <a href="${base}pages/shop.html?cat=Dining">Dining</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="#">About</a><a href="#">Stores</a><a href="#">Sustainability</a>
        </div>
        <div>
          <h5>Help</h5>
          <a href="#">Shipping</a><a href="#">Returns</a><a href="#">Contact</a>
        </div>
      </div>
      <div class="copy">© ${new Date().getFullYear()} Binondo Bodega Furniture. All rights reserved.</div>
    </div>
  </footer>`;
}

function mountChrome(active) {
  const navHost = document.getElementById("navbar");
  const footHost = document.getElementById("footer");
  if (navHost) navHost.innerHTML = renderNavbar(active);
  if (footHost) footHost.innerHTML = renderFooter();
  updateCartBadge();
  renderAuthState();
}

// ---------- Product card ----------
function productCard(p) {
  const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  return `
    <a class="product-card fade-up" href="${pathTo('pages/product.html')}?id=${p.id}">
      <div class="product-img"><img src="${imgSrc(p.image)}" alt="${p.name}" loading="lazy"></div>
      <div class="product-body">
        <span class="product-cat">${p.category}</span>
        <span class="product-name">${p.name}</span>
        <span class="product-rating">${stars} <span style="color:var(--muted)">(${p.reviews})</span></span>
        <span class="product-price">${money(p.price)}</span>
      </div>
    </a>`;
}
function imgSrc(rel) {
  // image paths in data are relative to root; rewrite if we are in /pages/
  return window.location.pathname.includes("/pages/") ? "../" + rel : rel;
}

// Auto mount on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  if (typeof PAGE_ACTIVE !== "undefined") mountChrome(PAGE_ACTIVE);
  else mountChrome("");
});
