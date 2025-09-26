// AMAR Product Data with Hyderabad themes
const productsData = [
  {
    "id": 1,
    "name": "Char Minar Graphic Tee",
    "price": 1299,
    "originalPrice": 1599,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    "category": "tshirts",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "description": "Premium cotton tee celebrating Hyderabad's iconic heritage",
    "stock": 25,
    "isNew": true
  },
  {
    "id": 2,
    "name": "Biryani Gang Hoodie",
    "price": 2499,
    "originalPrice": 2999,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    "category": "hoodies",
    "sizes": ["S", "M", "L", "XL"],
    "description": "Oversized hoodie for the true Hyderabadi food lovers",
    "stock": 15,
    "isNew": false
  },
  {
    "id": 3,
    "name": "Nizam Legacy Bomber",
    "price": 3499,
    "originalPrice": 3999,
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    "category": "jackets",
    "sizes": ["S", "M", "L", "XL"],
    "description": "Premium bomber jacket with Nizami-inspired embroidery",
    "stock": 8,
    "isNew": true
  },
  {
    "id": 4,
    "name": "Hi-Tech City Joggers",
    "price": 1899,
    "originalPrice": 2199,
    "image": "https://images.unsplash.com/photo-1506629905607-c49db4b37884?w=400",
    "category": "bottoms",
    "sizes": ["28", "30", "32", "34", "36"],
    "description": "Tech-wear inspired joggers for the modern Hyderabadi",
    "stock": 20,
    "isNew": false
  },
  {
    "id": 5,
    "name": "Deccani Streetwear Cap",
    "price": 899,
    "originalPrice": 1099,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400",
    "category": "accessories",
    "sizes": ["One Size"],
    "description": "Premium snapback celebrating Deccani culture",
    "stock": 35,
    "isNew": false
  },
  {
    "id": 6,
    "name": "Golconda Fort Crew",
    "price": 1699,
    "originalPrice": 1999,
    "image": "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400",
    "category": "sweatshirts",
    "sizes": ["S", "M", "L", "XL"],
    "description": "Minimalist crewneck with subtle fort silhouette",
    "stock": 18,
    "isNew": false
  }
];

// Hyderabad delivery areas
const hyderabadAreas = [
  "Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City", "Kondapur", 
  "Madhapur", "Kukatpally", "Begumpet", "Secunderabad", "Kompally", 
  "Miyapur", "Uppal", "LB Nagar", "Dilsukhnagar", "Mehdipatnam"
];

// Global state
let cart = [];
let currentProducts = productsData;
let currentPage = 'home';

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const cartCount = document.getElementById('cart-count');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupModals();
  loadFeaturedProducts();
  loadShopProducts();
  setupFilters();
  updateCartCount();
  setupForms();
  setupCollectionCards();
  populateDropdownOptions();
}

// Populate dropdown options
function populateDropdownOptions() {
  // Populate checkout location dropdown
  const checkoutLocationDropdown = document.getElementById('drop-location');
  if (checkoutLocationDropdown) {
    // Clear existing options except the first one
    const firstOption = checkoutLocationDropdown.options[0];
    checkoutLocationDropdown.innerHTML = '';
    checkoutLocationDropdown.appendChild(firstOption);
    
    // Add Hyderabad areas
    hyderabadAreas.forEach(area => {
      const option = document.createElement('option');
      option.value = area;
      option.textContent = area;
      checkoutLocationDropdown.appendChild(option);
    });
  }

  // Populate contact form area dropdown
  const contactAreaDropdowns = document.querySelectorAll('select');
  contactAreaDropdowns.forEach(dropdown => {
    if (dropdown.id !== 'drop-location' && dropdown.id !== 'category-filter' && 
        dropdown.id !== 'price-filter' && dropdown.id !== 'size-filter') {
      // Check if this is a contact form dropdown
      const options = dropdown.querySelectorAll('option');
      let hasAreaOptions = false;
      
      options.forEach(option => {
        if (option.value === 'Banjara Hills' || option.value === 'Jubilee Hills') {
          hasAreaOptions = true;
        }
      });
      
      if (hasAreaOptions) {
        // Clear existing area options but keep the first generic ones
        const existingOptions = Array.from(dropdown.options);
        const genericOptions = existingOptions.filter(opt => 
          opt.value === '' || opt.value === 'Other'
        );
        
        dropdown.innerHTML = '';
        genericOptions.forEach(opt => dropdown.appendChild(opt));
        
        // Add all Hyderabad areas
        hyderabadAreas.forEach(area => {
          const option = document.createElement('option');
          option.value = area;
          option.textContent = area;
          dropdown.appendChild(option);
        });
        
        // Re-add "Other" option if it existed
        const otherOption = document.createElement('option');
        otherOption.value = 'Other';
        otherOption.textContent = 'Other';
        dropdown.appendChild(otherOption);
      }
    }
  });
}

// Navigation
function setupNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Page navigation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
    });
  });

  // Hero CTA
  const heroCta = document.querySelector('.hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', () => {
      navigateToPage('shop');
    });
  }
}

function navigateToPage(page) {
  // Hide all pages
  pages.forEach(p => p.classList.remove('active'));
  
  // Show target page
  const targetPage = document.getElementById(`${page}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = page;
  }

  // Close mobile menu
  navMenu.classList.remove('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Special handling for cart page
  if (page === 'cart') {
    updateCartDisplay();
  }
}

// Product display
function createProductCard(product, showAddToCart = true) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-product-id', product.id);
  
  const badgeHtml = product.isNew ? '<div class="product-badge">New</div>' : '';
  const originalPriceHtml = product.originalPrice ? 
    `<span class="product-original-price">₹${product.originalPrice}</span>` : '';
  
  card.innerHTML = `
    ${badgeHtml}
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">₹${product.price}${originalPriceHtml}</p>
      <p class="product-description">${product.description}</p>
      ${showAddToCart ? `
        <div class="product-actions">
          <button class="btn btn--primary add-to-cart-btn" data-product-id="${product.id}">
            Add to Cart
          </button>
          <button class="btn btn--outline view-product-btn" data-product-id="${product.id}">
            View Details
          </button>
        </div>
      ` : ''}
    </div>
  `;

  // Add event listeners
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  const viewProductBtn = card.querySelector('.view-product-btn');

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product.id);
    });
  }

  if (viewProductBtn) {
    viewProductBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showProductModal(product);
    });
  }

  // Click on card to view details
  card.addEventListener('click', () => {
    showProductModal(product);
  });

  return card;
}

function loadFeaturedProducts() {
  const carousel = document.getElementById('featured-carousel');
  if (!carousel) return;

  carousel.innerHTML = '';
  
  // Show first 3 products as featured
  const featuredProducts = productsData.slice(0, 3);
  
  featuredProducts.forEach(product => {
    const card = createProductCard(product);
    carousel.appendChild(card);
  });
}

function loadShopProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  productsGrid.innerHTML = '';
  
  if (currentProducts.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--brand-light-gray);">
        <h3>No products found</h3>
        <p>Try adjusting your filters</p>
      </div>
    `;
    return;
  }
  
  currentProducts.forEach(product => {
    const card = createProductCard(product);
    productsGrid.appendChild(card);
  });
}

// Filters
function setupFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const sizeFilter = document.getElementById('size-filter');

  if (categoryFilter) {
    categoryFilter.addEventListener('change', applyFilters);
  }
  
  if (priceFilter) {
    priceFilter.addEventListener('change', applyFilters);
  }
  
  if (sizeFilter) {
    sizeFilter.addEventListener('change', applyFilters);
  }
}

function applyFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const sizeFilter = document.getElementById('size-filter');

  let filteredProducts = [...productsData];

  // Category filter
  if (categoryFilter && categoryFilter.value) {
    filteredProducts = filteredProducts.filter(product => 
      product.category === categoryFilter.value
    );
  }

  // Price filter
  if (priceFilter && priceFilter.value) {
    const [min, max] = priceFilter.value.split('-').map(Number);
    if (max) {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= min && product.price <= max
      );
    } else {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= min
      );
    }
  }

  // Size filter
  if (sizeFilter && sizeFilter.value) {
    filteredProducts = filteredProducts.filter(product => 
      product.sizes.includes(sizeFilter.value)
    );
  }

  currentProducts = filteredProducts;
  loadShopProducts();
}

// Shopping Cart
function addToCart(productId, selectedSize = null) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  // If product has multiple sizes and no size selected, show modal
  if (product.sizes.length > 1 && product.sizes[0] !== 'One Size' && !selectedSize) {
    showProductModal(product, true);
    return;
  }

  const size = selectedSize || product.sizes[0];
  
  const existingItem = cart.find(item => 
    item.product.id === productId && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      product: product,
      size: size,
      quantity: 1
    });
  }

  updateCartCount();
  updateCartDisplay();
  
  // Show success message
  showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => 
    !(item.product.id === productId && item.size === size)
  );
  
  updateCartCount();
  updateCartDisplay();
  showNotification('Item removed from cart');
}

function updateQuantity(productId, size, newQuantity) {
  const item = cart.find(item => 
    item.product.id === productId && item.size === size
  );
  
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId, size);
    } else {
      item.quantity = newQuantity;
      updateCartCount();
      updateCartDisplay();
    }
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartSummary = document.getElementById('cart-summary');
  const cartTotal = document.getElementById('cart-total');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.style.display = 'none';
    cartSummary.style.display = 'none';
    cartEmpty.style.display = 'block';
  } else {
    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    cartSummary.style.display = 'block';

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const itemTotal = item.product.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.product.image}" alt="${item.product.name}">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.product.name}</h4>
          <p class="cart-item-size">Size: ${item.size}</p>
          <p class="cart-item-price">₹${item.product.price}</p>
        </div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.product.id}, '${item.size}', ${item.quantity - 1})">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.product.id}, '${item.size}', ${item.quantity + 1})">+</button>
          <button class="btn btn--outline" onclick="removeFromCart(${item.product.id}, '${item.size}')" style="margin-left: 12px;">Remove</button>
        </div>
      `;

      cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toLocaleString('en-IN');
    
    // Update checkout total
    const checkoutTotal = document.getElementById('checkout-total');
    if (checkoutTotal) {
      checkoutTotal.textContent = total.toLocaleString('en-IN');
    }
  }
}

// Modals
function setupModals() {
  // Product modal
  const productModal = document.getElementById('product-modal');
  const closeProductModal = document.getElementById('close-product-modal');
  
  if (closeProductModal) {
    closeProductModal.addEventListener('click', () => {
      productModal.classList.add('hidden');
    });
  }

  // Checkout modal
  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckout = document.getElementById('close-checkout');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (closeCheckout) {
    closeCheckout.addEventListener('click', () => {
      checkoutModal.classList.add('hidden');
    });
  }
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        updateCartDisplay(); // Update totals
        populateDropdownOptions(); // Ensure dropdown is populated
        checkoutModal.classList.remove('hidden');
      } else {
        showNotification('Your cart is empty!', 'error');
      }
    });
  }

  // Close modals when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });

  // Checkout form submission
  const checkoutForm = document.querySelector('.checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processOrder();
    });
  }
}

function showProductModal(product, focusOnAddToCart = false) {
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-detail-content');
  
  if (!modal || !content) return;

  const originalPriceHtml = product.originalPrice ? 
    `<span style="color: var(--brand-light-gray); text-decoration: line-through; margin-left: 8px; font-size: var(--font-size-lg);">₹${product.originalPrice}</span>` : '';

  content.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail-info">
      <h2>${product.name}</h2>
      <p class="product-detail-price">₹${product.price}${originalPriceHtml}</p>
      <p class="product-detail-description">${product.description}</p>
      <p class="product-detail-stock"><strong>Stock:</strong> ${product.stock} available</p>
      
      ${product.sizes.length > 1 && product.sizes[0] !== 'One Size' ? `
        <div class="size-selector">
          <label>Select Size:</label>
          <div class="size-options">
            ${product.sizes.map(size => `
              <button class="size-option" data-size="${size}">${size}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="product-actions">
        <button class="btn btn--primary" id="modal-add-to-cart">Add to Cart</button>
        <button class="btn btn--outline" id="add-to-wishlist">Add to Wishlist</button>
      </div>
    </div>
  `;

  // Setup size selection
  const sizeOptions = content.querySelectorAll('.size-option');
  let selectedSize = product.sizes[0];

  sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
      sizeOptions.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      selectedSize = option.getAttribute('data-size');
    });
  });

  // Select first size by default
  if (sizeOptions.length > 0) {
    sizeOptions[0].classList.add('selected');
  }

  // Add to cart from modal
  const modalAddToCart = content.querySelector('#modal-add-to-cart');
  modalAddToCart.addEventListener('click', () => {
    addToCart(product.id, selectedSize);
    modal.classList.add('hidden');
  });

  // Add to wishlist
  const addToWishlist = content.querySelector('#add-to-wishlist');
  addToWishlist.addEventListener('click', () => {
    showNotification(`${product.name} added to wishlist!`, 'success');
  });

  modal.classList.remove('hidden');
  
  if (focusOnAddToCart) {
    modalAddToCart.focus();
  }
}

function processOrder() {
  const form = document.querySelector('.checkout-form');
  
  // Get form values
  const name = form.querySelector('input[placeholder="Full Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
  const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
  const locationDropdown = form.querySelector('#drop-location');
  const location = locationDropdown ? locationDropdown.value : '';
  const address = form.querySelector('textarea[placeholder="Complete Address"]').value.trim();
  
  // Validate required fields
  if (!name || !email || !phone || !location || !address) {
    showNotification('Please fill in all required fields', 'error');
    return;
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Please enter a valid email address', 'error');
    return;
  }
  
  // Validate phone format (basic Indian mobile number)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\D/g, '').slice(-10))) {
    showNotification('Please enter a valid 10-digit mobile number', 'error');
    return;
  }

  // Simulate order processing with UPI payment
  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Disable form during processing
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  submitBtn.textContent = 'Processing...';
  submitBtn.disabled = true;
  
  showNotification('Redirecting to UPI payment...', 'info');
  
  // Simulate UPI payment delay
  setTimeout(() => {
    showNotification('Payment successful! Order confirmed.', 'success');
    
    // Simulate email confirmation
    setTimeout(() => {
      showNotification(`Order confirmation sent to ${email}`, 'success');
    }, 1000);
    
    // Clear cart
    cart = [];
    updateCartCount();
    updateCartDisplay();
    
    // Reset form
    form.reset();
    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;
    
    // Close modal
    document.getElementById('checkout-modal').classList.add('hidden');
    
    // Navigate to home
    setTimeout(() => {
      navigateToPage('home');
      showNotification(`Thank you for shopping with AMAR! Delivery to ${location} in 2-3 days.`, 'success');
    }, 2000);
  }, 2000);
}

// Forms
function setupForms() {
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          showNotification('Successfully subscribed to AMAR updates!', 'success');
          newsletterForm.reset();
        } else {
          showNotification('Please enter a valid email address', 'error');
        }
      } else {
        showNotification('Please enter your email address', 'error');
      }
    });
  }

  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = contactForm.querySelector('input[placeholder="Your Email"]').value.trim();
      const area = contactForm.querySelector('select').value;
      const message = contactForm.querySelector('textarea').value.trim();
      
      if (name && email && area && message) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
          contactForm.reset();
        } else {
          showNotification('Please enter a valid email address', 'error');
        }
      } else {
        showNotification('Please fill in all fields', 'error');
      }
    });
  }
}

// Collection cards
function setupCollectionCards() {
  const collectionCards = document.querySelectorAll('.collection-card');
  collectionCards.forEach(card => {
    card.addEventListener('click', () => {
      navigateToPage('shop');
    });
  });
}

// Utility functions
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelectorAll('.notification');
  existing.forEach(notif => notif.remove());

  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  
  let bgColor = 'var(--brand-black)';
  let borderColor = 'var(--brand-red)';
  
  if (type === 'success') {
    bgColor = 'var(--brand-red)';
    borderColor = 'var(--brand-red)';
  } else if (type === 'error') {
    bgColor = 'var(--brand-black)';
    borderColor = 'var(--brand-red)';
  }
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${bgColor};
    color: var(--brand-white);
    padding: 16px 24px;
    border-radius: 8px;
    border: 2px solid ${borderColor};
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
    max-width: 350px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    font-size: var(--font-size-sm);
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);

  // Add animation keyframes if not already added
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Auto remove notification
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Make functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.navigateToPage = navigateToPage;

// Initialize cart display when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay();
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll animations for better UX
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const nav = document.querySelector('.nav');
  
  if (scrolled > 100) {
    nav.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%)';
    nav.style.backdropFilter = 'blur(10px)';
  } else {
    nav.style.background = 'linear-gradient(135deg, var(--brand-black) 0%, var(--brand-dark-gray) 100%)';
    nav.style.backdropFilter = 'none';
  }
});

// Add loading states for better UX
function addLoadingState(element) {
  const originalText = element.textContent;
  element.textContent = 'Loading...';
  element.disabled = true;
  
  return () => {
    element.textContent = originalText;
    element.disabled = false;
  };
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Escape key closes modals
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal:not(.hidden)');
    if (openModal) {
      openModal.classList.add('hidden');
    }
  }
  
  // Space or Enter on buttons
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('btn')) {
    e.preventDefault();
    e.target.click();
  }
});

console.log('AMAR by REIS Enterprises - Street Culture, Hyderabadi Spirit ✨');
