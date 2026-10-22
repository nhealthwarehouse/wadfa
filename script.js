/**
 * Wadfan Studio (วาดฝัน สตูดิโอ) - Main Script
 * Minimal & Warm Online Worksheet Store
 */

// 1. Worksheet Data Mockup
const worksheetsData = [
  {
    id: 1,
    title: "ชุดนับจำนวนและเปรียบเทียบ 1-20 แสนสนุก",
    category: "math",
    level: "kindergarten",
    gradeText: "อนุบาล 2 - 3",
    pages: 35,
    price: 69,
    originalPrice: 99,
    tag: "ยอดนิยม",
    tagType: "best",
    icon: "🍎",
    iconClass: "fa-solid fa-apple-whole text-pink",
    shortDesc: "ฝึกการนับจำนวน จับคู่ตัวเลข และเครื่องหมายมากกว่า-น้อยกว่า ลายเส้นน่ารัก",
    fullDesc: "ชุดแบบฝึกหัดคณิตศาสตร์ปฐมวัย เน้นการเรียนรู้ผ่านภาพผลไม้และสัตว์น่ารัก ช่วยให้เด็กๆ เข้าใจความหมายของจำนวน 1-20 อย่างเป็นรูปธรรม พร้อมเกมโยงเส้นจับคู่และระบายสีตามจำนวน",
    learningPoints: [
      "ทักษะการนับจำนวน 1-20 และการเขียนเลขอารบิก",
      "การเปรียบเทียบปริมาณ มากกว่า น้อยกว่า และเท่ากัน",
      "การจัดหมวดหมู่สิ่งของตามประเภทและจำนวน",
      "ไฟล์คมชัด 300 DPI ปริ้นท์ A4 ได้ทั้งสีและขาวดำ"
    ]
  },
  {
    id: 2,
    title: "ตะลุยแดนพยัญชนะไทย ก-ฮ ลายเส้นพร้อมระบายสี",
    category: "thai",
    level: "kindergarten",
    gradeText: "อนุบาล 1 - 2",
    pages: 44,
    price: 79,
    originalPrice: 120,
    tag: "ขายดี",
    tagType: "best",
    icon: "🐘",
    iconClass: "fa-solid fa-shapes text-blue",
    shortDesc: "หัดคัดพยัญชนะไทย 44 ตัว พร้อมรูปภาพประกอบระบายสีคลายเครียด",
    fullDesc: "ใบงานคัดลายมือพยัญชนะไทย ก ไก่ ถึง ฮ นกฮูก ตัวอักษรหัวกลมมาตรฐาน มีทิศทางลูกศรบอกขั้นตอนการลากเส้นอย่างชัดเจน ช่วยฝึกกล้ามเนื้อมัดเล็กและประสาทสัมผัสตาและมือ",
    learningPoints: [
      "เรียนรู้ทิศทางการเขียนพยัญชนะไทย 44 ตัวที่ถูกต้อง",
      "พัฒนาทักษะกล้ามเนื้อมัดเล็ก (Fine Motor Skills)",
      "จดจำคำศัพท์เบื้องต้นผ่านภาพการ์ตูนระบายสี",
      "แถมฟรี! หน้าสรุปตารางพยัญชนะ 1 แผ่นสำหรับติดผนัง"
    ]
  },
  {
    id: 3,
    title: "Fun Phonics Starter: ออกเสียงคำศัพท์ A-Z",
    category: "english",
    level: "kindergarten",
    gradeText: "อนุบาล 3 - ป.1",
    pages: 30,
    price: 89,
    originalPrice: 139,
    tag: "มาใหม่",
    tagType: "new",
    icon: "🔤",
    iconClass: "fa-solid fa-spell-check text-purple",
    shortDesc: "ฝึกออกเสียงโฟนิกส์พื้นฐาน จับคู่เสียงกับรูปภาพ และสะกดคำ 3 ตัวอักษร (CVC Words)",
    fullDesc: "สื่อการสอนโฟนิกส์เบื้องต้นสำหรับคุณหนูๆ ปูพื้นฐานการออกเสียงเสียงสระและพยัญชนะภาษาอังกฤษอย่างเป็นธรรมชาติ พร้อมกิจกรรม Cut & Paste (ตัดแปะภาพ) เพิ่มความสนุกในการเรียน",
    learningPoints: [
      "เข้าใจหลักการถอดรหัสเสียงตัวอักษร Phonics A-Z",
      "ฝึกการผสมคำสระเสียงสั้นกลุ่ม CVC (เช่น cat, bed, pig)",
      "กิจกรรมระบายสีและเกมจับคู่ภาพเพื่อเสริมความจำระยะยาว",
      "แบบทดสอบท้ายบทเรียนพร้อมเฉลยในตัว"
    ]
  },
  {
    id: 4,
    title: "ศิลปะลากเส้นต่อจุด & เขาวงกตเสริมสมาธิ",
    category: "art",
    level: "kindergarten",
    gradeText: "อนุบาล 1 - 3",
    pages: 25,
    price: 0,
    originalPrice: 59,
    tag: "แจกฟรี",
    tagType: "free",
    icon: "🎨",
    iconClass: "fa-solid fa-palette text-yellow",
    shortDesc: "ชุดฝึกกล้ามเนื้อมัดเล็กและฝึกสมาธิด้วยการลากเส้นตามรอยประและเขาวงกต",
    fullDesc: "ชุดใบงานแจกฟรีสุดพิเศษจาก Wadfan Studio รวบรวมเกมลากเส้นต่อจุดตามตัวเลขและเกมเขาวงกตที่ช่วยดึงดูดสมาธิเด็กให้อยู่นิ่งและเพลิดเพลินกับการแก้ปัญหา",
    learningPoints: [
      "เสริมสร้างสมาธิและการจดจ่อ (Focus & Attention)",
      "พัฒนาการทำงานประสานกันระหว่างมือและสายตา",
      "ฝึกทักษะการวางแผนและการสังเกตทิศทาง",
      "ดาวน์โหลดฟรี 100% ใช้งานได้ทันที"
    ]
  },
  {
    id: 5,
    title: "คิดเลขเร็ว บวกลบไม่เกิน 100 พิชิตเกรด 4",
    category: "math",
    level: "primary",
    gradeText: "ประถม 1 - 2",
    pages: 50,
    price: 99,
    originalPrice: 159,
    tag: "แนะนำ",
    tagType: "best",
    icon: "🧮",
    iconClass: "fa-solid fa-calculator text-blue",
    shortDesc: "แบบฝึกทักษะการคำนวณบวกและลบเลข 2 หลัก พร้อมโจทย์ปัญหารูปภาพ",
    fullDesc: "แบบฝึกเสริมสร้างทักษะคณิตศาสตร์ระดับประถมต้น ลำดับขั้นตอนจากง่ายไปสู่โจทย์ที่มีการทดและกระจาย พร้อมแบบทดสอบจับเวลา 5 นาทีเพื่อวัดความคล่องแคล่ว",
    learningPoints: [
      "เทคนิคการบวกลบเลขแนวตั้งและแนวนอนอย่างแม่นยำ",
      "โจทย์ปัญหาประยุกต์ในชีวิตประจำวันสำหรับเด็กวัย 7-8 ขวบ",
      "ตารางติดตามความก้าวหน้า (Score Tracker) เสริมกำลังใจ",
      "มีเฉลยละเอียดทุกข้อท้ายเล่ม"
    ]
  },
  {
    id: 6,
    title: "มาตราตัวสะกดไทย 8 มาตรา จำง่ายไม่มีลืม",
    category: "thai",
    level: "primary",
    gradeText: "ประถม 2 - 3",
    pages: 38,
    price: 85,
    originalPrice: 129,
    tag: "ยอดนิยม",
    tagType: "best",
    icon: "📚",
    iconClass: "fa-solid fa-book text-pink",
    shortDesc: "สรุปหลักภาษาไทยเรื่องมาตราตัวสะกด พร้อมแบบฝึกจำแนกคำและปริศนาอักษรไขว้",
    fullDesc: "ช่วยให้น้องๆ เข้าใจมาตราตัวสะกดทั้งตรงมาตราและไม่ตรงมาตรา ผ่านตารางสรุป Infographic สีหวานละมุน พร้อมแบบฝึกหัดเติมคำ คัดแยกคำ และเกม Crossword ฝึกสมอง",
    learningPoints: [
      "เข้าใจแม่กง กน กม กก กด กบ เกย เกอว อย่างชัดเจน",
      "เทคนิคการจำคำที่มีตัวสะกดไม่ตรงรูป",
      "เกมเสริมสร้างคลังคำศัพท์ภาษาไทยกว่า 300 คำ",
      "ตรงตามมาตรฐานสาระการเรียนรู้ภาษาไทย สพฐ."
    ]
  }
];

// 2. Shopping Cart State
let shoppingCart = [];

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const filterTabs = document.getElementById("filterTabs");
const searchInput = document.getElementById("productSearchInput");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartCountBadge = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalItemsCount = document.getElementById("cartTotalItemsCount");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");
const toastContainer = document.getElementById("toastContainer");

// Preview Modal Elements
const previewModal = document.getElementById("previewModal");
const previewModalContent = document.getElementById("previewModalContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerCloseBtn = document.getElementById("drawerCloseBtn");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const drawerLinks = document.querySelectorAll(".drawer-link");

// Checkout Modal Elements
const checkoutModal = document.getElementById("checkoutModal");
const checkoutCloseBtn = document.getElementById("checkoutCloseBtn");
const checkoutDueAmount = document.getElementById("checkoutDueAmount");

// Freebie Form
const freebieSubmitBtn = document.getElementById("freebieSubmitBtn");
const freebieEmail = document.getElementById("freebieEmail");
const heroFreebieBtn = document.getElementById("heroFreebieBtn");

// Current Filter & Search State
let currentFilter = "all";
let currentSearch = "";

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  loadCartFromStorage();
  setupAccordion();
});

// ==========================================================================
// Render Products Grid
// ==========================================================================
function renderProducts() {
  if (!productsGrid) return;

  const filtered = worksheetsData.filter((item) => {
    // Category or Level Filter
    let matchesFilter = true;
    if (currentFilter === "all") {
      matchesFilter = true;
    } else if (currentFilter === "free") {
      matchesFilter = item.price === 0;
    } else if (currentFilter === "kindergarten" || currentFilter === "primary") {
      matchesFilter = item.level === currentFilter;
    } else {
      matchesFilter = item.category === currentFilter;
    }

    // Search Query Filter
    const searchLow = currentSearch.toLowerCase().trim();
    const matchesSearch =
      searchLow === "" ||
      item.title.toLowerCase().includes(searchLow) ||
      item.shortDesc.toLowerCase().includes(searchLow) ||
      item.gradeText.toLowerCase().includes(searchLow);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 20px; border: 1px dashed #CBD5E1;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: #94A3B8; margin-bottom: 12px; display: block;"></i>
        <h3 style="font-size: 1.2rem; color: #334155; margin-bottom: 6px;">ไม่พบใบงานที่ค้นหา</h3>
        <p style="font-size: 0.9rem; color: #64748B;">ลองค้นหาด้วยคำอื่น หรือกดรีเซ็ตหมวดหมู่เพื่อดูทั้งหมด</p>
        <button class="btn-secondary" style="margin-top: 16px;" onclick="window.resetFilters()">ดูใบงานทั้งหมด</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered
    .map((item) => {
      const isFree = item.price === 0;
      const tagClass =
        item.tagType === "free"
          ? "tag-free"
          : item.tagType === "new"
          ? "tag-new"
          : "tag-best";

      return `
      <article class="product-card" data-id="${item.id}">
        <div class="product-thumb-container">
          <span class="product-tag ${tagClass}">${item.tag}</span>
          <div class="product-mock-sheet">
            <span class="sheet-art-icon">${item.icon}</span>
            <div class="sheet-preview-title">${item.title}</div>
          </div>
          <button class="quick-preview-btn" onclick="window.openPreview(${item.id})">
            <i class="fa-regular fa-eye"></i> ดูตัวอย่าง
          </button>
        </div>

        <div class="product-info">
          <div class="product-meta">
            <span class="meta-grade"><i class="fa-solid fa-graduation-cap"></i> ${item.gradeText}</span>
            <span><i class="fa-regular fa-file-lines"></i> ${item.pages} หน้า (PDF)</span>
          </div>

          <h3 class="product-title">${item.title}</h3>
          <p class="product-desc">${item.shortDesc}</p>

          <div class="product-footer">
            <div class="product-price-box">
              ${
                isFree
                  ? `<span class="price-current is-free">แจกฟรี!</span>`
                  : `
                  <span class="price-current">฿${item.price}</span>
                  ${item.originalPrice ? `<span class="price-old">฿${item.originalPrice}</span>` : ""}
                `
              }
            </div>

            ${
              isFree
                ? `
                <button class="btn-download-free" onclick="window.downloadFreebie(${item.id})">
                  <i class="fa-solid fa-download"></i> โหลดฟรี
                </button>
              `
                : `
                <button class="btn-add-cart" onclick="window.addToCart(${item.id})" title="ใส่ตะกร้า">
                  <i class="fa-solid fa-plus"></i>
                </button>
              `
            }
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

// ==========================================================================
// Filter & Search Handlers
// ==========================================================================
function setupEventListeners() {
  // Filter tabs click
  if (filterTabs) {
    filterTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderProducts();
    });
  }

  // Category cards click (jump to section and filter)
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      window.filterByCategory(cat);
    });
  });

  // Cart open/close
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

  // Preview modal close
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closePreviewModal);
  if (previewModal) {
    previewModal.addEventListener("click", (e) => {
      if (e.target === previewModal) closePreviewModal();
    });
  }

  // Mobile menu drawer
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("open");
      drawerBackdrop.classList.add("open");
    });
  }

  const closeMobileNav = () => {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
  };

  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeMobileNav);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeMobileNav);
  drawerLinks.forEach((l) => l.addEventListener("click", closeMobileNav));

  // Checkout modal
  if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckoutModal);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener("click", closeCheckoutModal);
  if (checkoutModal) {
    checkoutModal.addEventListener("click", (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  // Freebie form submit
  if (freebieSubmitBtn) {
    freebieSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleFreebieSubmit();
    });
  }

  // Hero freebie button
  if (heroFreebieBtn) {
    heroFreebieBtn.addEventListener("click", () => {
      const freeSection = document.getElementById("freebies");
      if (freeSection) {
        freeSection.scrollIntoView({ behavior: "smooth" });
        if (freebieEmail) {
          setTimeout(() => freebieEmail.focus(), 600);
        }
      }
    });
  }

  // Navbar Search shortcut button
  const searchToggleBtn = document.getElementById("searchToggleBtn");
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener("click", () => {
      const prodSection = document.getElementById("products");
      if (prodSection) {
        prodSection.scrollIntoView({ behavior: "smooth" });
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 600);
        }
      }
    });
  }
}

// Global category click helper
window.filterByCategory = function (category) {
  currentFilter = category;
  currentSearch = "";
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    if (btn.dataset.filter === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();

  const prodSection = document.getElementById("products");
  if (prodSection) {
    prodSection.scrollIntoView({ behavior: "smooth" });
  }
};

window.resetFilters = function () {
  window.filterByCategory("all");
};

// ==========================================================================
// Cart Operations
// ==========================================================================
window.addToCart = function (productId) {
  const product = worksheetsData.find((p) => p.id === productId);
  if (!product) return;

  const alreadyInCart = shoppingCart.some((item) => item.id === productId);
  if (alreadyInCart) {
    showToast(`"${product.title}" อยู่ในตะกร้าของคุณแล้ว`, "info");
    openCartDrawer();
    return;
  }

  shoppingCart.push(product);
  saveCartToStorage();
  updateCartUI();
  showToast(`เพิ่ม "${product.title}" ลงในตะกร้าเรียบร้อย`, "success");
  openCartDrawer();
};

window.removeFromCart = function (productId) {
  shoppingCart = shoppingCart.filter((item) => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  showToast("ลบรายการออกจากตะกร้าแล้ว", "info");
};

function updateCartUI() {
  if (cartCountBadge) cartCountBadge.textContent = shoppingCart.length;
  if (cartTotalItemsCount) cartTotalItemsCount.textContent = `${shoppingCart.length} รายการ`;

  const total = shoppingCart.reduce((sum, item) => sum + item.price, 0);
  if (cartTotalPrice) cartTotalPrice.textContent = `฿${total}`;
  if (checkoutDueAmount) checkoutDueAmount.textContent = `฿${total}`;

  if (checkoutBtn) {
    checkoutBtn.disabled = shoppingCart.length === 0;
  }

  if (!cartItemsContainer) return;

  if (shoppingCart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon"><i class="fa-solid fa-basket-shopping"></i></div>
        <h4>ตะกร้าว่างเปล่า</h4>
        <p style="font-size: 0.85rem; margin-top: 4px;">เลือกใบงานน่ารักๆ เพื่อเริ่มเติมรอยยิ้มให้เด็กๆ กันเถอะครับ</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = shoppingCart
    .map(
      (item) => `
    <div class="cart-item-row">
      <div class="cart-item-icon">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">฿${item.price} <span style="font-size: 0.75rem; color: #94a3b8; font-weight: normal;">(${item.pages} หน้า)</span></div>
      </div>
      <button class="cart-item-remove" onclick="window.removeFromCart(${item.id})" title="ลบออก">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `
    )
    .join("");
}

function openCartDrawer() {
  if (cartDrawer && cartBackdrop) {
    cartDrawer.classList.add("open");
    cartBackdrop.classList.add("open");
  }
}

function closeCartDrawer() {
  if (cartDrawer && cartBackdrop) {
    cartDrawer.classList.remove("open");
    cartBackdrop.classList.remove("open");
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("wadfan_cart", JSON.stringify(shoppingCart));
  } catch (e) {
    console.error("Local storage error:", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("wadfan_cart");
    if (saved) {
      shoppingCart = JSON.parse(saved);
      updateCartUI();
    }
  } catch (e) {
    console.error("Failed to parse cart storage:", e);
  }
}

// ==========================================================================
// Preview Modal
// ==========================================================================
window.openPreview = function (productId) {
  const product = worksheetsData.find((p) => p.id === productId);
  if (!product || !previewModalContent || !previewModal) return;

  const isFree = product.price === 0;

  previewModalContent.innerHTML = `
    <div class="preview-modal-body">
      <div class="preview-badge-row">
        <span class="meta-grade"><i class="fa-solid fa-graduation-cap"></i> ${product.gradeText}</span>
        <span class="meta-grade"><i class="fa-regular fa-file-pdf text-pink"></i> ความละเอียด 300 DPI</span>
      </div>

      <h2 class="preview-title">${product.title}</h2>
      <p class="preview-desc-full">${product.fullDesc}</p>

      <div class="preview-grid-details">
        <div class="preview-sheet-box">
          <div class="preview-sheet-icon">${product.icon}</div>
          <strong style="color: #334155; font-size: 0.95rem;">Wadfan Original Worksheet</strong>
          <small style="color: #64748B; margin-top: 4px;">ขนาด A4 พร้อมสั่งพิมพ์ได้ทันที</small>
        </div>

        <div class="preview-details-info">
          <ul class="preview-spec-list">
            ${product.learningPoints
              .map((pt) => `<li><i class="fa-solid fa-circle-check text-pink"></i> ${pt}</li>`)
              .join("")}
          </ul>

          <div class="preview-actions-row">
            ${
              isFree
                ? `
              <button class="btn-primary full-width" onclick="window.downloadFreebie(${product.id}); window.closePreviewModal();">
                <i class="fa-solid fa-download"></i> ดาวน์โหลดฟรีทันที
              </button>
            `
                : `
              <button class="btn-primary full-width" onclick="window.addToCart(${product.id}); window.closePreviewModal();">
                <i class="fa-solid fa-basket-shopping"></i> ใส่ตะกร้า ฿${product.price}
              </button>
            `
            }
          </div>
        </div>
      </div>
    </div>
  `;

  previewModal.classList.add("open");
};

window.closePreviewModal = function () {
  if (previewModal) previewModal.classList.remove("open");
};

// ==========================================================================
// Freebie Handlers
// ==========================================================================
window.downloadFreebie = function (productId) {
  const item = worksheetsData.find((p) => p.id === productId);
  const title = item ? item.title : "ชุดใบงานฟรี";

  // Simulate Instant Download
  showToast(`🎉 เริ่มดาวน์โหลด "${title}" สำเร็จ!`, "success");

  // Create temporary link simulation
  const dummyLink = document.createElement("a");
  dummyLink.href = "#";
  dummyLink.setAttribute("download", `wadfan-freebie-${productId}.pdf`);
  dummyLink.click();
};

function handleFreebieSubmit() {
  const emailVal = freebieEmail ? freebieEmail.value.trim() : "";
  if (!emailVal || !emailVal.includes("@")) {
    showToast("กรุณากรอกอีเมลที่ถูกต้องเพื่อรับไฟล์", "info");
    return;
  }

  showToast(`✨ ส่งลิงก์ดาวน์โหลดชุดใบงานฟรีไปยัง ${emailVal} แล้ว!`, "success");
  if (freebieEmail) freebieEmail.value = "";
}

// ==========================================================================
// Checkout Handlers
// ==========================================================================
function openCheckoutModal() {
  if (shoppingCart.length === 0) return;
  closeCartDrawer();
  if (checkoutModal) checkoutModal.classList.add("open");
}

function closeCheckoutModal() {
  if (checkoutModal) checkoutModal.classList.remove("open");
}

window.handleOrderSubmit = function () {
  const name = document.getElementById("orderName").value;
  const email = document.getElementById("orderEmail").value;

  closeCheckoutModal();

  // Reset cart
  shoppingCart = [];
  saveCartToStorage();
  updateCartUI();

  showToast(`🎉 ขอบพระคุณคุณ ${name}! ระบบจัดส่งไฟล์ PDF ไปที่ ${email} เรียบร้อยแล้ว`, "success");
};

// ==========================================================================
// FAQ Accordion
// ==========================================================================
function setupAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Optional: close other items for clean single accordion
      accordionItems.forEach((other) => other.classList.remove("active"));

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
function showToast(message, type = "info") {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="${type === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-circle-info"}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
