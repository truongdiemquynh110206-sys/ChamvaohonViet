// ========================================
// DỮ LIỆU SẢN PHẨM
// ========================================

const products = [
    {
        id: 1,
        name: "Bình men trắng tối giản",
        category: "binh",
        categoryName: "Bình",
        price: 350000,
        description: "Thiết kế thanh lịch, phù hợp trang trí phòng khách."
    },
    {
        id: 2,
        name: "Bình men ngọc Bát Tràng",
        category: "binh",
        categoryName: "Bình",
        price: 420000,
        description: "Sắc men ngọc nhẹ nhàng, mang vẻ đẹp tự nhiên."
    },
    {
        id: 3,
        name: "Bình men lam truyền thống",
        category: "binh",
        categoryName: "Bình",
        price: 390000,
        description: "Họa tiết xanh lam lấy cảm hứng từ gốm truyền thống."
    },
    {
        id: 4,
        name: "Bát cơm men trắng",
        category: "bat",
        categoryName: "Bát",
        price: 85000,
        description: "Kiểu dáng đơn giản, sử dụng tiện lợi hằng ngày."
    },
    {
        id: 5,
        name: "Bát men ngọc thủ công",
        category: "bat",
        categoryName: "Bát",
        price: 110000,
        description: "Gam màu xanh ngọc dịu mắt, phù hợp bàn ăn hiện đại."
    },
    {
        id: 6,
        name: "Ấm trà men lam",
        category: "am",
        categoryName: "Ấm trà",
        price: 450000,
        description: "Bộ ấm trà mang nét đẹp truyền thống và tinh tế."
    },
    {
        id: 7,
        name: "Ấm trà men trắng",
        category: "am",
        categoryName: "Ấm trà",
        price: 380000,
        description: "Thiết kế tối giản, phù hợp sử dụng hằng ngày."
    },
    {
        id: 8,
        name: "Bình hoa men ngọc",
        category: "binh",
        categoryName: "Bình",
        price: 480000,
        description: "Bình hoa thủ công với màu men ngọc trang nhã."
    },
    {
        id: 9,
        name: "Bát ăn cơm men lam",
        category: "bat",
        categoryName: "Bát",
        price: 95000,
        description: "Bát gốm men lam với họa tiết truyền thống."
    },
    {
        id: 10,
        name: "Ấm trà Bát Tràng cổ điển",
        category: "am",
        categoryName: "Ấm trà",
        price: 520000,
        description: "Kiểu dáng cổ điển kết hợp kỹ thuật gốm thủ công."
    }
];


// ========================================
// GIỎ HÀNG
// ========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ========================================
// ĐỊNH DẠNG GIÁ TIỀN
// ========================================

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}


// ========================================
// LƯU GIỎ HÀNG
// ========================================

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// ========================================
// THÊM SẢN PHẨM VÀO GIỎ HÀNG
// ========================================

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) {
        return;
    }

    const existingProduct = cart.find(
        item => item.id === productId
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    // Mở giỏ hàng sau khi thêm sản phẩm
    if (typeof toggleCart === "function") {
        toggleCart();
    }
}


// ========================================
// THAY ĐỔI SỐ LƯỢNG
// ========================================

function changeQuantity(productId, change) {

    const product = cart.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }

    product.quantity += change;

    if (product.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== productId
        );

    }

    saveCart();
    updateCart();
}


// ========================================
// XÓA SẢN PHẨM
// ========================================

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();
    updateCart();
}


// ========================================
// CẬP NHẬT GIAO DIỆN GIỎ HÀNG
// ========================================

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    if (!cartItems || !cartCount || !cartTotal) {
        return;
    }

    let total = 0;
    let count = 0;

    // Giỏ hàng trống
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Giỏ hàng đang trống.
            </p>
        `;

    } else {

        cartItems.innerHTML = "";

        cart.forEach(item => {

            total += item.price * item.quantity;
            count += item.quantity;

            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ${formatPrice(item.price)}
                    </p>

                </div>

                <div class="cart-item-actions">

                    <button
                        onclick="changeQuantity(${item.id}, -1)">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)">
                        +
                    </button>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${item.id})">
                        ×
                    </button>

                </div>
            `;

            cartItems.appendChild(cartItem);
        });
    }

    cartCount.textContent = count;
    cartTotal.textContent = formatPrice(total);
}


// ========================================
// LỌC SẢN PHẨM
// ========================================

function filterProducts(category, button) {

    const productCards =
        document.querySelectorAll(".product-card");

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    // Xóa trạng thái active
    filterButtons.forEach(btn => {
        btn.classList.remove("active");
    });


    // Thêm trạng thái active
    if (button) {
        button.classList.add("active");
    }


    // Hiển thị sản phẩm theo danh mục
    productCards.forEach(card => {

        const productCategory =
            card.dataset.category;

        if (
            category === "all" ||
            productCategory === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }
    });
}


// ========================================
// HIỂN THỊ SẢN PHẨM
// ========================================

function renderProducts(category = "all") {

    const productsGrid =
        document.getElementById("products-grid");

    if (!productsGrid) {
        return;
    }

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(
                product => product.category === category
            );


    productsGrid.innerHTML = "";


    filteredProducts.forEach(product => {

        const productCard =
            document.createElement("article");

        productCard.className = "product-card";

        productCard.dataset.category =
            product.category;


        productCard.innerHTML = `

            <div class="product-image product-image-${product.id}">
                <span>${product.categoryName.toUpperCase()}</span>
            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.categoryName}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <button
                        onclick="addToCart(${product.id})">
                        Thêm vào giỏ
                    </button>

                </div>

            </div>
        `;


        productsGrid.appendChild(productCard);
    });
}


// ========================================
// MỞ / ĐÓNG GIỎ HÀNG
// ========================================

function toggleCart() {

    const cartSidebar =
        document.getElementById("cart-sidebar");

    const cartOverlay =
        document.getElementById("cart-overlay");

    if (!cartSidebar || !cartOverlay) {
        return;
    }

    cartSidebar.classList.toggle("active");
    cartOverlay.classList.toggle("active");
}


// ========================================
// THANH TOÁN
// ========================================

function checkout() {

    if (cart.length === 0) {

        alert("Giỏ hàng đang trống.");

        return;
    }

    alert(
        "Cảm ơn bạn! Đây là website mô phỏng nên chức năng thanh toán chưa kết nối backend."
    );
}


// ========================================
// ĐĂNG KÝ EMAIL
// ========================================

function subscribeEmail(event) {

    event.preventDefault();

    const emailInput =
        document.getElementById("email");

    if (!emailInput) {
        return;
    }

    const email = emailInput.value.trim();

    if (email === "") {
        return;
    }

    alert(
        "Đăng ký thành công với email: " + email
    );

    emailInput.value = "";
}


// ========================================
// KHỞI TẠO WEBSITE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    updateCart();

});
