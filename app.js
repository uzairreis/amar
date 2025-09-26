// AMAR Enhanced Product Data with Hyderabad themes
const productsData = [
  {
    "id": 1,
    "name": "Char Minar Heritage Tee",
    "price": 1299,
    "originalPrice": 1599,
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1583743814966-8936f37f4041?w=400&h=400&fit=crop&auto=format",
    "category": "tshirts",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Black", "Red", "White"],
    "description": "Premium cotton tee celebrating Hyderabad's iconic heritage with modern streetwear aesthetics",
    "stock": 25,
    "isNew": true,
    "isFeatured": true,
    "rating": 4.8,
    "reviews": 24
  },
  {
    "id": 2,
    "name": "Biryani Dynasty Hoodie",
    "price": 2499,
    "originalPrice": 2999,
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format",
    "category": "hoodies",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Maroon", "Charcoal"],
    "description": "Luxurious oversized hoodie for the modern Hyderabadi with premium embroidered details",
    "stock": 15,
    "isNew": false,
    "isFeatured": true,
    "rating": 4.9,
    "reviews": 18
  },
  {
    "id": 3,
    "name": "Nizam Legacy Bomber",
    "price": 3499,
    "originalPrice": 3999,
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop&auto=format",
    "category": "jackets",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Navy", "Burgundy"],
    "description": "Premium bomber jacket with hand-crafted Nizami-inspired embroidery and luxury finishes",
    "stock": 8,
    "isNew": true,
    "isFeatured": true,
    "rating": 5.0,
    "reviews": 12
  },
  {
    "id": 4,
    "name": "Hi-Tech District Joggers",
    "price": 1899,
    "originalPrice": 2199,
    "image": "https://images.unsplash.com/photo-1506629905607-c49db4b37884?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&auto=format",
    "category": "bottoms",
    "sizes": ["28", "30", "32", "34", "36"],
    "colors": ["Black", "Charcoal", "Navy"],
    "description": "Tech-wear inspired joggers designed for the modern Hyderabadi professional",
    "stock": 20,
    "isNew": false,
    "isFeatured": false,
    "rating": 4.6,
    "reviews": 31
  },
  {
    "id": 5,
    "name": "Deccani Crown Snapback",
    "price": 899,
    "originalPrice": 1099,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1575428652377-a312d1fd2f12?w=400&h=400&fit=crop&auto=format",
    "category": "accessories",
    "sizes": ["One Size"],
    "colors": ["Black/Red", "All Black", "Red/Black"],
    "description": "Premium snapback celebrating Deccani culture with luxury embroidered details",
    "stock": 35,
    "isNew": false,
    "isFeatured": false,
    "rating": 4.7,
    "reviews": 45
  },
  {
    "id": 6,
    "name": "Golconda Fortress Crew",
    "price": 1699,
    "originalPrice": 1999,
    "image": "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop&auto=format",
    "category": "sweatshirts",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Grey", "Burgundy"],
    "description": "Minimalist luxury crewneck with subtle fort silhouette and premium cotton blend",
    "stock": 18,
    "isNew": false,
    "isFeatured": false,
    "rating": 4.8,
    "reviews": 22
  },
  {
    "id": 7,
    "name": "Cyberabad Tech Tee",
    "price": 1199,
    "originalPrice": 1399,
    "image": "https://images.unsplash.com/photo-1583743814966-8936f37f4041?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
    "category": "tshirts",
    "sizes": ["S", "M", "L", "XL", "XXL"],
    "colors": ["Black", "White", "Red"],
    "description": "Future-forward design celebrating Hyderabad's tech revolution",
    "stock": 30,
    "isNew": true,
    "isFeatured": true,
    "rating": 4.5,
    "reviews": 15
  },
  {
    "id": 8,
    "name": "Charminar Nights Hoodie",
    "price": 2299,
    "originalPrice": 2599,
    "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&auto=format",
    "hoverImage": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&auto=format",
    "category": "hoodies",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black", "Dark Grey", "Navy"],
    "description": "Premium hoodie capturing the mystique of Hyderabad's iconic nights",
    "stock": 12,
    "isNew": false,
    "isFeatured": true,
    "rating": 4.9,
    "reviews": 28
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
let isAnimationEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Animation and scroll utilities
let scrollTicking = false;
let intersectionObserver;
let lastScrollY = 0;

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const cartCount = document.getElementById('cart-count');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const scrollProgress = document.getElementById('scroll-progress');
const fab = document.getElementById('scroll-to-top');
const loadingScreen = document.getElementById('loading-screen');
const mainNav = document.getElementById('main-nav');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupLoadingScreen();
  setupNavigation();
  setupScrollAnimations();
  setupIntersectionObserver();
  setupModals();
  setupParallax();
  loadFeaturedProducts();
  loadShopProducts();
  setupFilters();
  updateCartCount();
  setupForms();
  setupCollectionCards();
  populateDropdownOptions();
  setupFloatingActionButton();
  setupTouchAnimations();
  initializePageAnimations();
  setupImageErrorHandling();
}

// Image Error Handling
function setupImageErrorHandling() {
  // Add error handling for all images
  document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
      console.log('Image failed to load:', e.target.src);
      // Create a placeholder with brand colors
      e.target.style.backgroundColor = '#1a1a1a';
      e.target.style.border = '2px solid #FF0000';
      e.target.style.display = 'flex';
      e.target.style.alignItems = 'center';
      e.target.style.justifyContent = 'center';
      e.target.alt = 'AMAR';
      
      // Add text overlay if possible
      if (!e.target.hasAttribute('data-placeholder-added')) {
        e.target.setAttribute('data-placeholder-added', 'true');
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #FF0000;
          font-weight: bold;
          font-size: 20px;
          pointer-events: none;
        `;
        placeholder.textContent = 'AMAR';
        
        if (e.target.parentNode) {
          e.target.parentNode.style.position = 'relative';
          e.target.parentNode.appendChild(placeholder);
        }
      }
    }
  }, true);
}

// Loading Screen
function setupLoadingScreen() {
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.visibility = 'hidden';
      
      setTimeout(() => {
        if (loadingScreen.parentNode) {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }
        // Trigger entrance animations
        triggerEntranceAnimations();
      }, 500);
    }, 2000);
  }
}

// Enhanced Navigation with Scroll Effects
function setupNavigation() {
  // Mobile menu toggle with animation
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      // Animate menu items
      if (navMenu.classList.contains('active')) {
        const navItems = navMenu.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
          item.style.animation = `fadeInUp 0.3s ease-out ${index * 0.1}s both`;
        });
      }
    });
  }

  // Page navigation with smooth transitions - Fixed navigation routing
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      console.log('Navigating to page:', page); // Debug log
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

  // Footer navigation links
  const footerNavLinks = document.querySelectorAll('footer [data-page]');
  footerNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
    });
  });
}

// Fixed Page Navigation with proper validation
function navigateToPage(page) {
  console.log('Attempting to navigate to:', page); // Debug log
  
  // Validate page exists
  const targetPage = document.getElementById(`${page}-page`);
  if (!targetPage) {
    console.error('Page not found:', `${page}-page`);
    return;
  }

  const currentActivePage = document.querySelector('.page.active');
  
  if (currentActivePage === targetPage) {
    console.log('Already on target page');
    return;
  }

  // Animate out current page
  if (currentActivePage) {
    currentActivePage.style.opacity = '0';
    currentActivePage.style.transform = 'translateX(-30px)';
    
    setTimeout(() => {
      currentActivePage.classList.remove('active');
      
      // Animate in target page
      targetPage.classList.add('active');
      targetPage.style.opacity = '0';
      targetPage.style.transform = 'translateX(30px)';
      
      requestAnimationFrame(() => {
        targetPage.style.opacity = '1';
        targetPage.style.transform = 'translateX(0)';
      });
      
      currentPage = page;
      console.log('Successfully navigated to:', page); // Debug log
    }, 200);
  } else {
    targetPage.classList.add('active');
    currentPage = page;
    console.log('Navigated to page (no animation):', page); // Debug log
  }

  // Close mobile menu with animation
  if (navMenu) navMenu.classList.remove('active');
  if (navToggle) navToggle.classList.remove('active');

  // Smooth scroll to top
  smoothScrollTo(0, 800);

  // Special handling for different pages
  if (page === 'cart') {
    updateCartDisplay();
  } else if (page === 'shop') {
    setTimeout(() => {
      const productsGrid = document.getElementById('products-grid');
      if (productsGrid) {
        triggerStaggerAnimation(productsGrid);
      }
    }, 300);
  }
  
  // Re-initialize animations for the new page
  setTimeout(() => {
    initializePageAnimations();
  }, 300);
}

// Scroll Animations and Effects
function setupScrollAnimations() {
  let ticking = false;

  function updateScrollElements() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

    // Update scroll progress bar
    if (scrollProgress) {
      scrollProgress.style.transform = `scaleX(${Math.min(scrollPercent / 100, 1)})`;
    }

    // Update navigation background
    if (mainNav) {
      if (scrollY > 100) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }

    // Show/hide floating action button
    if (fab) {
      if (scrollY > 500) {
        fab.classList.add('visible');
      } else {
        fab.classList.remove('visible');
      }
    }

    // Parallax effects
    updateParallaxElements(scrollY);

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollElements);
      ticking = true;
    }
  });
}

// Parallax Effects
function setupParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  window.addEventListener('scroll', () => {
    if (!isAnimationEnabled) return;
    
    requestAnimationFrame(() => {
      updateParallaxElements(window.pageYOffset);
    });
  });
}

function updateParallaxElements(scrollY) {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  parallaxElements.forEach(element => {
    const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
    const yPos = -(scrollY * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
}

// Intersection Observer for Scroll-triggered Animations
function setupIntersectionObserver() {
  if (!isAnimationEnabled) return;

  const observerOptions = {
    threshold: [0.1, 0.3, 0.5],
    rootMargin: '0px 0px -50px 0px'
  };

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        if (element.classList.contains('stagger-container')) {
          triggerStaggerAnimation(element);
        } else if (element.classList.contains('section-animate')) {
          const animation = element.getAttribute('data-animation') || 'fade-in-up';
          element.classList.add(`animate-${animation}`);
        } else if (element.classList.contains('reveal-text')) {
          element.classList.add('animate-text-reveal');
        }
        
        // Unobserve after animation triggers
        intersectionObserver.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe elements
  const elementsToObserve = document.querySelectorAll(
    '.stagger-container, .section-animate, .reveal-text, .luxury-card'
  );
  
  elementsToObserve.forEach(el => {
    intersectionObserver.observe(el);
  });
}

// Staggered Animations
function triggerStaggerAnimation(container) {
  if (!container || !isAnimationEnabled) return;

  const children = container.children;
  let delay = 0;

  Array.from(children).forEach((child, index) => {
    const staggerDelay = child.getAttribute('data-stagger') || (index * 0.1);
    delay = parseFloat(staggerDelay);
    
    setTimeout(() => {
      child.style.animation = `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both`;
    }, delay * 1000);
  });

  container.classList.add('animate');
}

// Enhanced Product Display with Hover Effects and Image Loading
function createProductCard(product, showAddToCart = true) {
  const card = document.createElement('div');
  card.className = 'product-card luxury-card';
  card.setAttribute('data-product-id', product.id);
  
  const badgeHtml = product.isNew ? '<div class="product-badge">New</div>' : '';
  const originalPriceHtml = product.originalPrice ? 
    `<span class="product-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : '';
  
  card.innerHTML = `
    ${badgeHtml}
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" class="product-img-main" loading="lazy" crossorigin="anonymous">
      ${product.hoverImage ? `<img src="${product.hoverImage}" alt="${product.name}" class="product-img-hover" loading="lazy" crossorigin="anonymous">` : ''}
      <div class="image-loading-placeholder">
        <div class="loading-spinner"></div>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">₹${product.price.toLocaleString('en-IN')}${originalPriceHtml}</p>
      <p class="product-description">${product.description}</p>
      ${showAddToCart ? `
        <div class="product-actions">
          <button class="btn btn--primary luxury-btn add-to-cart-btn" data-product-id="${product.id}">
            <span>Add to Cart</span>
            <div class="btn-glow"></div>
          </button>
          <button class="btn btn--outline luxury-btn view-product-btn" data-product-id="${product.id}">
            <span>View Details</span>
            <div class="btn-ripple"></div>
          </button>
        </div>
      ` : ''}
    </div>
  `;

  // Enhanced image loading with fallback
  const mainImg = card.querySelector('.product-img-main');
  const hoverImg = card.querySelector('.product-img-hover');
  const loadingPlaceholder = card.querySelector('.image-loading-placeholder');
  
  // Show loading placeholder initially
  if (loadingPlaceholder) {
    loadingPlaceholder.style.display = 'flex';
  }

  // Handle main image load
  if (mainImg) {
    mainImg.onload = () => {
      if (loadingPlaceholder) {
        loadingPlaceholder.style.display = 'none';
      }
    };
    
    mainImg.onerror = () => {
      console.log('Main image failed to load, using fallback');
      if (loadingPlaceholder) {
        loadingPlaceholder.innerHTML = '<span style="color: #FF0000; font-weight: bold;">AMAR</span>';
      }
    };
  }

  // Enhanced hover effects for product images
  if (product.hoverImage && hoverImg) {
    hoverImg.style.opacity = '0';
    hoverImg.style.position = 'absolute';
    hoverImg.style.top = '0';
    hoverImg.style.left = '0';
    hoverImg.style.width = '100%';
    hoverImg.style.height = '100%';
    hoverImg.style.objectFit = 'cover';
    hoverImg.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

    card.addEventListener('mouseenter', () => {
      if (hoverImg) hoverImg.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      if (hoverImg) hoverImg.style.opacity = '0';
    });
  }

  // Add event listeners with enhanced feedback
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  const viewProductBtn = card.querySelector('.view-product-btn');

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCartWithAnimation(product.id, addToCartBtn);
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

// Enhanced Add to Cart with Animation
function addToCartWithAnimation(productId, button) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  // If product has multiple sizes and no size selected, show modal
  if (product.sizes.length > 1 && product.sizes[0] !== 'One Size') {
    showProductModal(product, true);
    return;
  }

  // Add item to cart
  addToCart(productId);
  
  // Animate button
  if (button) {
    const originalText = button.querySelector('span').textContent;
    button.querySelector('span').textContent = 'Added!';
    button.classList.add('success-state');
    
    // Cart bounce animation
    animateCartButton();
    
    setTimeout(() => {
      button.querySelector('span').textContent = originalText;
      button.classList.remove('success-state');
    }, 2000);
  }
}

function animateCartButton() {
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.style.animation = 'pulse 0.6s ease-out';
    setTimeout(() => {
      cartBtn.style.animation = '';
    }, 600);
  }
}

function loadFeaturedProducts() {
  const carousel = document.getElementById('featured-carousel');
  if (!carousel) return;

  carousel.innerHTML = '';
  
  // Show featured products
  const featuredProducts = productsData.filter(p => p.isFeatured);
  
  featuredProducts.forEach((product, index) => {
    const card = createProductCard(product);
    card.setAttribute('data-stagger', index * 0.15);
    carousel.appendChild(card);
  });

  // Trigger stagger animation when in view
  if (intersectionObserver) {
    intersectionObserver.observe(carousel);
  }
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
  
  currentProducts.forEach((product, index) => {
    const card = createProductCard(product);
    card.setAttribute('data-stagger', index * 0.1);
    productsGrid.appendChild(card);
  });

  // Re-observe for animations
  if (intersectionObserver) {
    intersectionObserver.observe(productsGrid);
  }
}

// Populate dropdown options
function populateDropdownOptions() {
  // Populate checkout location dropdown
  const checkoutLocationDropdown = document.getElementById('drop-location');
  if (checkoutLocationDropdown) {
    const firstOption = checkoutLocationDropdown.options[0];
    checkoutLocationDropdown.innerHTML = '';
    checkoutLocationDropdown.appendChild(firstOption);
    
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
      const options = dropdown.querySelectorAll('option');
      let hasAreaOptions = false;
      
      options.forEach(option => {
        if (option.value === 'Banjara Hills' || option.value === 'Jubilee Hills') {
          hasAreaOptions = true;
        }
      });
      
      if (hasAreaOptions) {
        const existingOptions = Array.from(dropdown.options);
        const genericOptions = existingOptions.filter(opt => 
          opt.value === '' || opt.value === 'Other'
        );
        
        dropdown.innerHTML = '';
        genericOptions.forEach(opt => dropdown.appendChild(opt));
        
        hyderabadAreas.forEach(area => {
          const option = document.createElement('option');
          option.value = area;
          option.textContent = area;
          dropdown.appendChild(option);
        });
        
        const otherOption = document.createElement('option');
        otherOption.value = 'Other';
        otherOption.textContent = 'Other';
        dropdown.appendChild(otherOption);
      }
    }
  });
}

// Filters
function setupFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const sizeFilter = document.getElementById('size-filter');

  [categoryFilter, priceFilter, sizeFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', () => {
        applyFiltersWithAnimation();
      });
    }
  });
}

function applyFiltersWithAnimation() {
  // Animate out current products
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  
  const currentCards = productsGrid.querySelectorAll('.product-card');
  
  currentCards.forEach((card, index) => {
    card.style.animation = `fadeOut 0.3s ease-out ${index * 0.05}s both`;
  });

  setTimeout(() => {
    applyFilters();
  }, 500);
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

// Enhanced Shopping Cart
function addToCart(productId, selectedSize = null) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

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
  
  // Show elegant success animation
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
  const cartCountElement = document.getElementById('cart-count');
  
  if (cartCountElement) {
    // Animate count change
    cartCountElement.style.animation = 'scaleIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    cartCountElement.textContent = totalItems;
    
    setTimeout(() => {
      cartCountElement.style.animation = '';
    }, 300);
  }
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

    cart.forEach((item, index) => {
      const itemTotal = item.product.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item glass-morphism';
      cartItem.style.animation = `fadeInUp 0.3s ease-out ${index * 0.1}s both`;
      cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="${item.product.image}" alt="${item.product.name}" crossorigin="anonymous">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.product.name}</h4>
          <p class="cart-item-size">Size: ${item.size}</p>
          <p class="cart-item-price">₹${item.product.price.toLocaleString('en-IN')}</p>
        </div>
        <div class="cart-item-controls">
          <button class="quantity-btn luxury-btn" onclick="updateQuantity(${item.product.id}, '${item.size}', ${item.quantity - 1})">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn luxury-btn" onclick="updateQuantity(${item.product.id}, '${item.size}', ${item.quantity + 1})">+</button>
          <button class="btn btn--outline luxury-btn" onclick="removeFromCart(${item.product.id}, '${item.size}')" style="margin-left: 12px;">
            <span>Remove</span>
          </button>
        </div>
      `;

      cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toLocaleString('en-IN');
    
    const checkoutTotal = document.getElementById('checkout-total');
    if (checkoutTotal) {
      checkoutTotal.textContent = total.toLocaleString('en-IN');
    }
  }
}

// Enhanced Modals with Smooth Animations
function setupModals() {
  // Product modal
  const productModal = document.getElementById('product-modal');
  const closeProductModal = document.getElementById('close-product-modal');
  
  if (closeProductModal) {
    closeProductModal.addEventListener('click', () => {
      hideModal(productModal);
    });
  }

  // Checkout modal
  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckout = document.getElementById('close-checkout');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (closeCheckout) {
    closeCheckout.addEventListener('click', () => {
      hideModal(checkoutModal);
    });
  }
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        updateCartDisplay();
        populateDropdownOptions();
        showModal(checkoutModal);
      } else {
        showNotification('Your cart is empty!', 'error');
      }
    });
  }

  // Close modals when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') && !e.target.classList.contains('hidden')) {
      hideModal(e.target);
    }
  });

  // Checkout form submission
  const checkoutForm = document.querySelector('.checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processOrderWithAnimation();
    });
  }
}

function showModal(modal) {
  if (!modal) return;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Focus trap for accessibility
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

function hideModal(modal) {
  if (!modal) return;
  
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function showProductModal(product, focusOnAddToCart = false) {
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-detail-content');
  
  if (!modal || !content) return;

  const originalPriceHtml = product.originalPrice ? 
    `<span style="color: var(--brand-light-gray); text-decoration: line-through; margin-left: 8px; font-size: var(--font-size-lg);">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : '';

  content.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}" class="modal-product-img" crossorigin="anonymous">
    </div>
    <div class="product-detail-info">
      <h2>${product.name}</h2>
      <p class="product-detail-price">₹${product.price.toLocaleString('en-IN')}${originalPriceHtml}</p>
      <p class="product-detail-description">${product.description}</p>
      <p class="product-detail-stock"><strong>Stock:</strong> ${product.stock} available</p>
      
      ${product.sizes.length > 1 && product.sizes[0] !== 'One Size' ? `
        <div class="size-selector">
          <label>Select Size:</label>
          <div class="size-options">
            ${product.sizes.map(size => `
              <button class="size-option luxury-btn" data-size="${size}">${size}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="product-actions">
        <button class="btn btn--primary luxury-btn pulse-btn" id="modal-add-to-cart">
          <span>Add to Cart</span>
          <div class="btn-glow"></div>
        </button>
        <button class="btn btn--outline luxury-btn" id="add-to-wishlist">
          <span>Add to Wishlist</span>
          <div class="btn-ripple"></div>
        </button>
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

  // Enhanced image zoom effect
  const modalImg = content.querySelector('.modal-product-img');
  if (modalImg) {
    modalImg.addEventListener('mouseenter', () => {
      modalImg.style.transform = 'scale(1.1)';
    });
    modalImg.addEventListener('mouseleave', () => {
      modalImg.style.transform = 'scale(1)';
    });
  }

  // Add to cart from modal
  const modalAddToCart = content.querySelector('#modal-add-to-cart');
  modalAddToCart.addEventListener('click', () => {
    addToCart(product.id, selectedSize);
    hideModal(modal);
    
    // Show success animation
    showSuccessModal();
  });

  // Add to wishlist
  const addToWishlist = content.querySelector('#add-to-wishlist');
  addToWishlist.addEventListener('click', () => {
    showNotification(`${product.name} added to wishlist!`, 'success');
  });

  showModal(modal);
  
  if (focusOnAddToCart) {
    modalAddToCart.focus();
  }
}

// Enhanced Order Processing with Animations
function processOrderWithAnimation() {
  const form = document.querySelector('.checkout-form');
  
  // Get form values with validation
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
  
  // Validate phone format
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\D/g, '').slice(-10))) {
    showNotification('Please enter a valid 10-digit mobile number', 'error');
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Animate form during processing
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.querySelector('span').textContent;
  
  submitBtn.querySelector('span').textContent = 'Processing...';
  submitBtn.disabled = true;
  submitBtn.classList.add('processing');
  
  // Add loading spinner to button
  const spinner = document.createElement('div');
  spinner.className = 'btn-spinner';
  spinner.innerHTML = '<div class="loading-spinner"></div>';
  submitBtn.appendChild(spinner);
  
  showNotification('Redirecting to UPI payment...', 'info');
  
  // Simulate UPI payment process
  setTimeout(() => {
    // Hide checkout modal
    hideModal(document.getElementById('checkout-modal'));
    
    // Show success modal with celebration animation
    showSuccessModal();
    
    // Clear cart with animation
    cart = [];
    updateCartCount();
    updateCartDisplay();
    
    // Reset form
    form.reset();
    submitBtn.querySelector('span').textContent = originalBtnText;
    submitBtn.disabled = false;
    submitBtn.classList.remove('processing');
    if (spinner.parentNode) {
      spinner.parentNode.removeChild(spinner);
    }
    
    setTimeout(() => {
      showNotification(`Order confirmed! Delivery to ${location} in 2-3 days.`, 'success');
    }, 1000);
    
    // Navigate to home after celebration
    setTimeout(() => {
      hideModal(document.getElementById('success-modal'));
      navigateToPage('home');
    }, 3000);
    
  }, 2500);
}

// Success Modal with Celebration Animation
function showSuccessModal() {
  const successModal = document.getElementById('success-modal');
  if (successModal) {
    showModal(successModal);
    
    // Auto-hide after animation
    setTimeout(() => {
      hideModal(successModal);
    }, 3000);
  }
}

// Enhanced Forms with Elegant Interactions
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
          // Animate success
          const submitBtn = newsletterForm.querySelector('button');
          const originalText = submitBtn.querySelector('span').textContent;
          
          submitBtn.querySelector('span').textContent = 'Subscribed!';
          submitBtn.classList.add('success-state');
          
          showNotification('Successfully subscribed to AMAR updates!', 'success');
          newsletterForm.reset();
          
          setTimeout(() => {
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.classList.remove('success-state');
          }, 2000);
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
          // Animate success
          const submitBtn = contactForm.querySelector('button');
          const originalText = submitBtn.querySelector('span').textContent;
          
          submitBtn.querySelector('span').textContent = 'Sent!';
          submitBtn.classList.add('success-state');
          
          showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
          contactForm.reset();
          
          setTimeout(() => {
            submitBtn.querySelector('span').textContent = originalText;
            submitBtn.classList.remove('success-state');
          }, 2000);
        } else {
          showNotification('Please enter a valid email address', 'error');
        }
      } else {
        showNotification('Please fill in all fields', 'error');
      }
    });
  }

  // Enhanced input focus effects
  const luxuryInputs = document.querySelectorAll('.luxury-input, .luxury-select');
  luxuryInputs.forEach(input => {
    input.addEventListener('focus', () => {
      const wrapper = input.closest('.input-wrapper');
      if (wrapper) {
        wrapper.classList.add('focused');
      }
    });

    input.addEventListener('blur', () => {
      const wrapper = input.closest('.input-wrapper');
      if (wrapper) {
        wrapper.classList.remove('focused');
      }
    });
  });
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

// Floating Action Button
function setupFloatingActionButton() {
  if (fab) {
    fab.addEventListener('click', () => {
      smoothScrollTo(0, 1000);
    });
  }
}

// Smooth Scroll Utility
function smoothScrollTo(target, duration) {
  const start = window.pageYOffset;
  const distance = target - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function
    const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
    
    window.scrollTo(0, start + distance * ease);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}

// Touch Animations for Mobile
function setupTouchAnimations() {
  // Add touch feedback to buttons
  const buttons = document.querySelectorAll('.btn, .luxury-btn, .product-card');
  
  buttons.forEach(button => {
    button.addEventListener('touchstart', () => {
      button.classList.add('touch-active');
    });

    button.addEventListener('touchend', () => {
      setTimeout(() => {
        button.classList.remove('touch-active');
      }, 150);
    });

    button.addEventListener('touchcancel', () => {
      button.classList.remove('touch-active');
    });
  });
}

// Initialize Page Animations
function initializePageAnimations() {
  const currentActivePage = document.querySelector('.page.active');
  if (!currentActivePage || !isAnimationEnabled) return;

  // Animate elements on the current page
  const animatedElements = currentActivePage.querySelectorAll(
    '.stagger-container, .section-animate, .luxury-card'
  );
  
  animatedElements.forEach(element => {
    if (intersectionObserver) {
      intersectionObserver.observe(element);
    }
  });
}

// Trigger entrance animations after loading
function triggerEntranceAnimations() {
  if (!isAnimationEnabled) return;

  // Animate navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item, index) => {
    item.style.animation = `fadeInDown 0.4s ease-out ${index * 0.1}s both`;
  });

  // Animate hero elements
  const heroElements = document.querySelectorAll('.hero .animate-fade-in-up, .hero .animate-scale-in');
  heroElements.forEach((element, index) => {
    element.style.animationDelay = `${0.5 + index * 0.2}s`;
  });

  // Initialize scroll-triggered animations
  setTimeout(() => {
    setupIntersectionObserver();
  }, 1000);
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
  const existing = document.querySelectorAll('.notification');
  existing.forEach(notif => notif.remove());

  const notification = document.createElement('div');
  notification.className = `notification notification--${type} glass-morphism`;
  
  let bgColor, borderColor, icon;
  
  switch(type) {
    case 'success':
      bgColor = 'rgba(255, 0, 0, 0.9)';
      borderColor = 'var(--brand-red)';
      icon = '✓';
      break;
    case 'error':
      bgColor = 'rgba(0, 0, 0, 0.9)';
      borderColor = 'var(--brand-red)';
      icon = '✗';
      break;
    case 'info':
      bgColor = 'rgba(26, 26, 26, 0.9)';
      borderColor = 'var(--brand-red)';
      icon = 'ⓘ';
      break;
    default:
      bgColor = 'rgba(26, 26, 26, 0.9)';
      borderColor = 'rgba(255, 0, 0, 0.3)';
      icon = '';
  }
  
  notification.innerHTML = `
    <span class="notification-icon">${icon}</span>
    <span class="notification-message">${message}</span>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${bgColor};
    color: var(--brand-white);
    padding: 16px 20px;
    border-radius: 12px;
    border: 2px solid ${borderColor};
    z-index: 3000;
    max-width: 350px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: var(--font-size-sm);
    display: flex;
    align-items: center;
    gap: 10px;
    backdrop-filter: blur(20px);
    animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  
  document.body.appendChild(notification);

  // Auto remove notification
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 400);
  }, 4000);
}

// Make functions globally available
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.navigateToPage = navigateToPage;

// Keyboard navigation and accessibility
document.addEventListener('keydown', (e) => {
  // Escape key closes modals
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal:not(.hidden)');
    if (openModal) {
      hideModal(openModal);
    }
  }
  
  // Space or Enter on buttons
  if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('btn')) {
    e.preventDefault();
    e.target.click();
  }
});

// Performance optimization: Throttle resize events
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Re-calculate any layout-dependent animations
    if (intersectionObserver) {
      // Re-observe elements after layout changes
      const elementsToObserve = document.querySelectorAll(
        '.stagger-container:not(.animate), .section-animate, .reveal-text, .luxury-card'
      );
      elementsToObserve.forEach(el => {
        intersectionObserver.observe(el);
      });
    }
  }, 250);
});

// Console branding
console.log('%cAMAR by REIS Enterprises%c\n🏛️ Street Culture, Elevated Experience ✨', 
  'font-size: 24px; font-weight: bold; color: #FF0000; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);',
  'font-size: 14px; color: #666;'
);

console.log('🔥 Enhanced animations and premium interactions loaded!');

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
