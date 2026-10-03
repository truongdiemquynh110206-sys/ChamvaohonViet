/* =========================================================
   CHẠM VÀO HỒN VIỆT
   script.js
   Dữ liệu sản phẩm - lọc - tìm kiếm - giỏ hàng - chi tiết
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU 16 SẢN PHẨM
   ========================================================= */

const products = [
    {
        id: 1,
        name: "Đôi Lục Bình Tứ Cảnh Men Lam Cổ",
        price: 3850000,
        category: "binh",
        origin: "Làng nghề Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đồ trang trí - đôi lục bình",
        material: "Gốm Bát Tràng, men lam truyền thống",
        size: "Cao khoảng 45 - 50 cm",
        technique: "Tạo hình thủ công, vẽ họa tiết và phủ men",
        description:
            "Đôi lục bình mang phong cách cổ điển với gam trắng - lam và các họa tiết trang trí truyền thống. Sản phẩm tạo điểm nhấn trang trọng cho phòng khách, sảnh hoặc không gian trưng bày.",
        use:
            "Trang trí phòng khách, sảnh, tủ kệ; thích hợp làm quà tân gia và quà biếu.",
        image:
            "https://xuonggomsuviet.vn/wp-content/uploads/2019/04/doc-dao-ky-thuat-trang-tri-tren-san-pham-gom-su-bat-trang-1.jpg"
    },

    {
        id: 2,
        name: "Bộ Bát Đĩa Men Lam Hoa Văn Bát Tràng",
        price: 2980000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ đồ ăn gia đình cao cấp",
        material: "Gốm/sứ Bát Tràng, men trắng vẽ lam",
        size: "Bộ nhiều món",
        technique: "Tạo hình, nung nhiệt cao, trang trí họa tiết",
        description:
            "Bộ bát đĩa mang vẻ đẹp thanh lịch với nền trắng và họa tiết xanh lam. Thiết kế phù hợp cho bàn ăn gia đình, nhà hàng phong cách truyền thống hoặc làm quà biếu.",
        use:
            "Dùng trong bữa ăn, tiếp khách, nhà hàng hoặc làm quà tặng.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/09/dong-san-pham-dac-trung-cua-bat-trang-13.jpg"
    },

    {
        id: 3,
        name: "Bộ Bát Đĩa Hoa Cúc Vẽ Tay Men Trắng",
        price: 2680000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ bát đĩa gia dụng - quà tặng",
        material: "Sứ trắng Bát Tràng, men bóng",
        size: "Bộ gia đình nhiều món",
        technique: "Vẽ họa tiết hoa cúc, nung nhiệt cao",
        description:
            "Bộ bát đĩa lấy hoa cúc làm điểm nhấn. Các họa tiết được bố trí hài hòa trên nền men trắng, tạo cảm giác nhẹ nhàng, thanh lịch và gần gũi.",
        use:
            "Dùng cho gia đình, tiếp khách, quà cưới hoặc quà tân gia.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-gia-co-hoa-tiet-hoa-cuc-ve-tay-4.jpg"
    },

    {
        id: 4,
        name: "Bộ Bát Đĩa Hoa Sen Xanh Men Trắng",
        price: 2480000,
        category: "bat",
        origin: "Làng gốm Bát Tràng, Hà Nội",
        type: "Bộ đồ ăn cao cấp",
        material: "Sứ trắng Bát Tràng, men bóng",
        size: "Bộ gia đình nhiều món",
        technique: "Tạo hình, vẽ họa tiết hoa sen, nung nhiệt cao",
        description:
            "Bộ bát đĩa hoa sen xanh mang biểu tượng thanh nhã của văn hóa Việt. Nền men trắng làm nổi bật sắc xanh, tạo cảm giác tinh tế trên bàn ăn.",
        use:
            "Dùng cho gia đình, tiếp khách, bàn ăn và quà tặng.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-su-trang-hoa-tiet-hoa-sen-xanh-2.jpg"
    },

    {
        id: 5,
        name: "Bảo Bình Sen Cá Phú Quý",
        price: 4250000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bình trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men màu trang trí",
        size: "Cao khoảng 60 cm, đường kính khoảng 34 cm",
        technique: "Tạo hình thủ công, trang trí và phủ men",
        description:
            "Bảo bình kích thước lớn lấy hình tượng sen và cá làm chủ đề trang trí. Thiết kế phù hợp với không gian phòng khách, sảnh hoặc khu vực tiếp khách.",
        use:
            "Trang trí nội thất, quà tân gia, quà doanh nghiệp.",
        image:
            "https://i1-vnexpress.vnecdn.net/2019/12/19/lang-gom-Bat-Trang-png-6590-1576729451.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=qNrvTb1lci5tRl9RRQ9COw"
    },

    {
        id: 6,
        name: "Bảo Bình Sen Cá Phú Quý Cao Cấp",
        price: 4980000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bình phong thủy - nghệ thuật",
        material: "Gốm Bát Tràng, men trang trí cao cấp",
        size: "Dòng bình lớn",
        technique: "Tạo hình thủ công, trang trí, nung nhiệt cao",
        description:
            "Mẫu bảo bình lấy sen và cá làm điểm nhấn, hướng đến vẻ đẹp trang trọng và ý nghĩa cát tường. Phù hợp để trưng bày trong phòng khách hoặc không gian tiếp khách.",
        use:
            "Trang trí, quà tân gia, quà mừng khai trương.",
        image:
            "https://godinh.com/web/image/product.template/81280/image_512/B%E1%BA%A3o%20B%C3%ACnh%20Sen%20C%C3%A1%20Ph%C3%BA%20Qu%C3%BD%20Cao%2060%20%C4%90%C6%B0%E1%BB%9Dng%20K%C3%ADnh%2034%20%28cm%29?unique=a500000"
    },

    {
        id: 7,
        name: "Cốc Sứ Bát Tràng Men Hỏa Biến Dáng Trụ",
        price: 1250000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Cốc sứ thủ công",
        material: "Gốm/sứ Bát Tràng, men hỏa biến",
        size: "Cốc dáng trụ",
        technique: "Tạo dáng thủ công, phủ men hỏa biến",
        description:
            "Cốc dáng trụ với bề mặt men hỏa biến tạo chuyển sắc tự nhiên sau quá trình nung. Mỗi sản phẩm có thể có sắc độ khác nhau.",
        use:
            "Uống trà, cà phê, nước; sử dụng tại nhà hoặc văn phòng.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2025/12/coc-su-bat-trang-men-hoa-bien-dang-tru-co-quai-ls-27-anh-dai-dien.jpg"
    },

    {
        id: 8,
        name: "Bộ Ba Bình Hoa Men Ngọc Trang Trí",
        price: 1850000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ bình hoa trang trí",
        material: "Gốm Bát Tràng, men màu",
        size: "Bộ 3 bình",
        technique: "Tạo hình thủ công, phủ men màu, nung hoàn thiện",
        description:
            "Bộ ba bình hoa kết hợp các sắc xanh, xanh đậm và trắng, phù hợp tạo bố cục trang trí nhiều tầng. Có thể sử dụng riêng hoặc trưng bày thành bộ.",
        use:
            "Trang trí bàn, kệ, tủ phòng khách, quầy lễ tân.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j"
    },

    {
        id: 9,
        name: "Đĩa Trang Trí Cá Sóng Men Lam",
        price: 3650000,
        category: "bat",
        origin: "Làng nghề Bát Tràng, Hà Nội",
        type: "Đĩa gốm trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men lam và men màu",
        size: "Đĩa đường kính lớn",
        technique: "Trang trí họa tiết thủ công, nung nhiệt cao",
        description:
            "Đĩa trang trí kích thước lớn với hình tượng cá và sóng nước, sử dụng sắc xanh làm chủ đạo. Có thể treo tường hoặc đặt trên giá đỡ.",
        use:
            "Trang trí tường, tủ, kệ; làm quà tặng nghệ thuật.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKFGtC66RZipOkQeJgtMMAfcENcr5WdIWRu9TFALRATRhGpBj"
    },

    {
        id: 10,
        name: "Bình Trang Trí Hoa Điểu Họa Tiết Hope",
        price: 4580000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bình trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men trang trí đa sắc",
        size: "Dòng bình trung - lớn",
        technique: "Vẽ và phối họa tiết thủ công",
        description:
            "Mẫu bình trang trí kết hợp họa tiết hoa, chim và bố cục trang nhã. Thiết kế phù hợp với những không gian cần một điểm nhấn nghệ thuật.",
        use:
            "Phòng khách, sảnh, tủ kệ, quà tặng.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9W4D4mGP2J6ZGS1DJNzcZ5K1DYBdJGXJA46hAFzx7jOTK5egaFjWn5Hr&s=10"
    },

    {
        id: 11,
        name: "Bộ Ấm Chén Men Rạn Họa Tiết Cổ",
        price: 2680000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ ấm chén thưởng trà",
        material: "Gốm Bát Tràng, men rạn",
        size: "Ấm và chén",
        technique: "Tạo hình thủ công, phủ men rạn, nung nhiệt cao",
        description:
            "Bộ ấm chén mang bề mặt men rạn đặc trưng, tạo cảm giác cổ kính và mộc mạc. Phù hợp với không gian trà hoặc làm quà biếu.",
        use:
            "Thưởng trà, tiếp khách, trưng bày và quà tặng.",
        image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqTjHmLxve9gZTwigiRXZm_VY3RcPht7_IgL5_YLOvPX-oAafI"
    },

    {
        id: 12,
        name: "Bộ Ấm Trà Gà Trống Men Nâu Xanh",
        price: 2950000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ ấm trà",
        material: "Gốm Bát Tràng, men nâu và xanh",
        size: "Ấm trà kèm chén",
        technique: "Trang trí họa tiết gà trống, phủ men và nung",
        description:
            "Bộ trà sử dụng hình tượng gà trống làm điểm nhấn, kết hợp sắc nâu và xanh tạo vẻ ấm áp. Phù hợp cho không gian trà gia đình.",
        use:
            "Pha trà, tiếp khách, trưng bày và quà tặng.",
        image:
            "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mifiykrms9ag43"
    },

    {
        id: 13,
        name: "Đôi Lục Bình Hắc Kim Thuyền Hải Hành",
        price: 6850000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đôi lục bình cao cấp",
        material: "Gốm Bát Tràng, men đen - ánh kim",
        size: "Dòng bình lớn - đôi",
        technique: "Tạo hình, đắp nổi họa tiết, xử lý men và nung",
        description:
            "Đôi lục bình tông đen ánh kim tạo cảm giác sang trọng, nổi bật với hình ảnh thuyền và cảnh biển trên thân bình.",
        use:
            "Phòng khách, sảnh lớn, văn phòng và quà biếu cao cấp.",
        image:
            "https://bizweb.dktcdn.net/100/659/338/products/2e9c6da5-bca0-4a06-97a3-0c85f3d74a57.jpg?v=1773291686963"
    },

    {
        id: 14,
        name: "Đôi Lục Bình Bạch Kim Thuyền Mã",
        price: 7580000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đôi lục bình nghệ thuật cao cấp",
        material: "Gốm Bát Tràng, men trắng và điểm nhấn ánh kim",
        size: "Dòng bình lớn - đôi",
        technique: "Tạo hình thủ công, đắp nổi họa tiết, phối men",
        description:
            "Đôi lục bình nền trắng phối chi tiết vàng, tạo hình ảnh thuyền và ngựa với bố cục giàu tính trang trí. Phù hợp với không gian sang trọng.",
        use:
            "Biệt thự, phòng khách lớn, sảnh, văn phòng và quà tặng.",
        image:
            "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/486496hTq/anh-mo-ta.png"
    },

    {
        id: 15,
        name: "Đĩa Nghệ Thuật Thuyền Buồm Vượt Sóng",
        price: 4850000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đĩa trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men màu",
        size: "Đĩa lớn - dùng trưng bày",
        technique: "Tạo hình, trang trí cảnh thuyền buồm, nung nhiệt cao",
        description:
            "Đĩa nghệ thuật tái hiện hình ảnh thuyền buồm trên biển. Thiết kế phù hợp với cách trưng bày theo chủ đề và tạo điểm nhấn cho không gian.",
        use:
            "Trang trí nội thất, quà tặng doanh nghiệp, quà tân gia.",
        image:
            "https://product.hstatic.net/200000258799/product/z6560994619592_1dd138feeafdadd8b79ef6d63e0a82b1_28308021f6864719bf8ebce77630607a_master.jpg"
    },

    {
        id: 16,
        name: "Bình Hoa Men Trắng Viền Vàng Kèm Cốc",
        price: 3250000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ bình hoa và cốc trang trí",
        material: "Sứ/gốm Bát Tràng, men trắng, điểm nhấn vàng",
        size: "Bình cỡ vừa kèm phụ kiện",
        technique: "Tạo hình, trang trí hoa, phối màu và nung",
        description:
            "Bộ sản phẩm có bình hoa nền trắng với họa tiết hoa và đường viền vàng, đi kèm các cốc đồng bộ. Tổng thể thanh lịch và phù hợp làm quà tặng.",
        use:
            "Trang trí bàn, phòng khách, phòng làm việc; quà tặng.",
        image:
            "https://neon.vn/image/cache/catalog/products/D39-2-1100x1100.jpg.webp"
    }
];


/* =========================================================
   2. GIỎ HÀNG
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("chamHonVietCart") || "[]"
);


/* =========================================================
   3. HÀM TIỆN ÍCH
   ========================================================= */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price) + " đ";
}


function getProduct(productId) {
    return products.find(
        product => product.id === Number(productId)
    );
}


function saveCart() {
    localStorage.setItem(
        "chamHonVietCart",
        JSON.stringify(cart)
    );
}


function getCategoryName(category) {

    const categoryNames = {
        all: "Tất cả",
        binh: "Bình & đồ trang trí",
        bat: "Bát & đĩa",
        am: "Ấm & cốc"
    };

    return categoryNames[category] || "Sản phẩm";
}


/* =========================================================
   4. HIỂN THỊ CARD SẢN PHẨM
   ========================================================= */

function createProductCard(product) {

    return `
        <article
            class="product-card"
            data-category="${product.category}"
            onclick="showProductDetail(${product.id})"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('image-error');
                    "
                >

                <span class="product-badge">
                    ${getCategoryName(product.category)}
                </span>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="product-origin">
                    ${product.origin}
                </p>

                <div class="product-bottom">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <button
                        type="button"
                        class="add-cart-btn"
                        onclick="
                            event.stopPropagation();
                            addToCart(${product.id});
                        "
                    >
                        Thêm vào giỏ
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   5. HIỂN THỊ DANH SÁCH SẢN PHẨM
   ========================================================= */

function renderProducts(category = "all") {

    const grids = [

        document.getElementById("productGrid"),

        document.getElementById("productsGrid"),

        document.querySelector(".products-grid"),

        document.querySelector(".product-grid")

    ].filter(Boolean);


    if (!grids.length) {
        return;
    }


    let filteredProducts;


    if (category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(
            product => product.category === category
        );

    }


    const html = filteredProducts
        .map(createProductCard)
        .join("");


    grids.forEach(grid => {

        grid.innerHTML = html;

    });
}


/* =========================================================
   6. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(
    category = "all",
    button = null
) {

    renderProducts(category);


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }
}


/* =========================================================
   7. TÌM KIẾM
   ========================================================= */

function searchProducts(keyword) {

    const query = String(keyword || "")
        .trim()
        .toLowerCase();


    const grids = [

        document.getElementById("productGrid"),

        document.getElementById("productsGrid"),

        document.querySelector(".products-grid"),

        document.querySelector(".product-grid")

    ].filter(Boolean);


    if (!grids.length) {
        return;
    }


    const results = products.filter(product => {

        const searchText = [

            product.name,

            product.origin,

            product.type,

            product.material,

            product.description,

            product.use

        ]
            .join(" ")
            .toLowerCase();


        return searchText.includes(query);

    });


    grids.forEach(grid => {

        if (!results.length) {

            grid.innerHTML = `
                <div class="empty-products">
                    <h3>Không tìm thấy sản phẩm</h3>

                    <p>
                        Hãy thử tìm kiếm với từ khóa khác.
                    </p>
                </div>
            `;

        } else {

            grid.innerHTML = results
                .map(createProductCard)
                .join("");

        }

    });
}


/* =========================================================
   8. POPUP CHI TIẾT SẢN PHẨM
   ========================================================= */

function createProductModal() {

    let modal =
        document.getElementById("productDetailModal");


    if (modal) {
        return modal;
    }


    modal = document.createElement("div");

    modal.id = "productDetailModal";

    modal.className = "product-detail-modal";


    modal.innerHTML = `

        <div
            class="product-detail-overlay"
            onclick="closeProductDetail()"
        ></div>


        <div
            class="product-detail-box"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="product-detail-close"
                onclick="closeProductDetail()"
            >
                ×
            </button>


            <div id="productDetailContent"></div>

        </div>

    `;


    document.body.appendChild(modal);


    addProductModalCSS();


    return modal;
}


/* =========================================================
   9. CSS CHO POPUP
   ========================================================= */

function addProductModalCSS() {

    if (
        document.getElementById(
            "productDetailAutoStyle"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "productDetailAutoStyle";


    style.textContent = `

        .product-detail-modal {

            position: fixed;

            inset: 0;

            z-index: 9999;

            display: none;

        }


        .product-detail-modal.show {

            display: block;

        }


        .product-detail-overlay {

            position: absolute;

            inset: 0;

            background:
                rgba(52, 37, 26, .65);

            backdrop-filter:
                blur(4px);

        }


        .product-detail-box {

            position: relative;

            z-index: 2;

            width:
                min(1000px, calc(100% - 30px));

            max-height:
                calc(100vh - 40px);

            overflow-y: auto;

            margin:
                20px auto;

            background:
                #fffdf9;

            border-radius:
                20px;

            box-shadow:
                0 25px 80px
                rgba(0,0,0,.25);

        }


        .product-detail-close {

            position: absolute;

            top: 15px;

            right: 15px;

            width: 42px;

            height: 42px;

            border: none;

            border-radius: 50%;

            background:
                #eadfd3;

            color:
                #4e392b;

            font-size: 28px;

            cursor: pointer;

            z-index: 5;

        }


        .product-detail-close:hover {

            background:
                #d9c8b7;

        }


        .detail-layout {

            display: grid;

            grid-template-columns:
                1fr 1fr;

            gap: 32px;

            padding: 35px;

        }


        .detail-image {

            min-height: 430px;

            display: flex;

            align-items: center;

            justify-content: center;

            background:
                #f5eee5;

            border-radius: 15px;

            overflow: hidden;

        }


        .detail-image img {

            width: 100%;

            height: 430px;

            object-fit: contain;

        }


        .detail-content h2 {

            margin:
                10px 50px 10px 0;

            color:
                #4d3829;

            font-size:
                29px;

            line-height:
                1.3;

        }


        .detail-price {

            margin:
                10px 0 20px;

            color:
                #986943;

            font-size:
                25px;

            font-weight:
                800;

        }


        .detail-description {

            color:
                #65564b;

            line-height:
                1.7;

        }


        .detail-list {

            list-style:
                none;

            padding:
                0;

            margin:
                20px 0;

            border-top:
                1px solid #e7ddd2;

        }


        .detail-list li {

            display:
                grid;

            grid-template-columns:
                120px 1fr;

            gap:
                12px;

            padding:
                11px 0;

            border-bottom:
                1px solid #e7ddd2;

            color:
                #5b4a3d;

            line-height:
                1.5;

        }


        .detail-list strong {

            color:
                #4d3829;

        }


        .detail-actions {

            display:
                flex;

            gap:
                10px;

            flex-wrap:
                wrap;

            margin-top:
                20px;

        }


        .detail-actions button {

            border:
                none;

            padding:
                12px 20px;

            border-radius:
                10px;

            cursor:
                pointer;

            font-weight:
                700;

        }


        .detail-cart-btn {

            background:
                #8b6041;

            color:
                white;

        }


        .detail-close-btn {

            background:
                #eee3d6;

            color:
                #564437;

        }


        @media (max-width: 720px) {

            .detail-layout {

                grid-template-columns:
                    1fr;

                padding:
                    22px;

            }


            .detail-image {

                min-height:
                    300px;

            }


            .detail-image img {

                height:
                    300px;

            }


            .detail-content h2 {

                font-size:
                    24px;

            }


            .detail-list li {

                grid-template-columns:
                    1fr;

                gap:
                    4px;

            }

        }

    `;


    document.head.appendChild(style);
}


/* =========================================================
   10. MỞ CHI TIẾT SẢN PHẨM
   ========================================================= */

function showProductDetail(productId) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const modal =
        createProductModal();


    const content =
        document.getElementById(
            "productDetailContent"
        );


    content.innerHTML = `

        <div class="detail-layout">


            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="detail-content">


                <span class="product-badge">

                    ${getCategoryName(
                        product.category
                    )}

                </span>


                <h2>
                    ${product.name}
                </h2>


                <div class="detail-price">

                    ${formatPrice(
                        product.price
                    )}

                </div>


                <p class="detail-description">

                    ${product.description}

                </p>


                <ul class="detail-list">


                    <li>

                        <strong>
                            Xuất xứ
                        </strong>

                        <span>
                            ${product.origin}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Loại đồ
                        </strong>

                        <span>
                            ${product.type}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Chất liệu
                        </strong>

                        <span>
                            ${product.material}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Kích thước
                        </strong>

                        <span>
                            ${product.size}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Kỹ thuật
                        </strong>

                        <span>
                            ${product.technique}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Công dụng
                        </strong>

                        <span>
                            ${product.use}
                        </span>

                    </li>


                </ul>


                <div class="detail-actions">


                    <button
                        type="button"
                        class="detail-cart-btn"
                        onclick="
                            addToCart(${product.id});
                            closeProductDetail();
                        "
                    >

                        Thêm vào giỏ hàng

                    </button>


                    <button
                        type="button"
                        class="detail-close-btn"
                        onclick="
                            closeProductDetail();
                        "
                    >

                        Đóng

                    </button>


                </div>


            </div>

        </div>

    `;


    modal.classList.add("show");


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   11. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "productDetailModal"
        );


    if (modal) {

        modal.classList.remove("show");

    }


    document.body.style.overflow =
        "";
}


/* =========================================================
   12. THÊM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();


    showToast(
        `Đã thêm "${product.name}" vào giỏ hàng.`
    );
}


/* =========================================================
   13. TĂNG / GIẢM SỐ LƯỢNG
   ========================================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id ===
                Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity +=
        Number(change);


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !==
                    Number(productId)
            );

    }


    saveCart();

    updateCart();
}


/* =========================================================
   14. XÓA SẢN PHẨM KHỎI GIỎ
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !==
                Number(productId)
        );


    saveCart();

    updateCart();
}


/* =========================================================
   15. TỔNG GIỎ HÀNG
   ========================================================= */

function getCartTotal() {

    return cart.reduce(

        (total, item) =>

            total +
            item.price *
            item.quantity,

        0

    );
}


/* =========================================================
   16. SỐ LƯỢNG SẢN PHẨM TRONG GIỎ
   ========================================================= */

function getCartCount() {

    return cart.reduce(

        (total, item) =>

            total +
            item.quantity,

        0

    );
}


/* =========================================================
   17. CẬP NHẬT GIỎ HÀNG
   ========================================================= */

function updateCart() {

    const count =
        getCartCount();


    const total =
        getCartTotal();


    /*
       Cập nhật số lượng trên icon giỏ hàng
    */

    const countElements = [

        document.getElementById(
            "cartCount"
        ),

        document.getElementById(
            "cart-count"
        ),

        document.querySelector(
            ".cart-count"
        )

    ].filter(Boolean);


    countElements.forEach(
        element => {

            element.textContent =
                count;

        }
    );


    /*
       Cập nhật tổng tiền
    */

    const totalElements = [

        document.getElementById(
            "cartTotal"
        ),

        document.getElementById(
            "cart-total"
        )

    ].filter(Boolean);


    totalElements.forEach(
        element => {

            element.textContent =
                formatPrice(total);

        }
    );


    /*
       Hiển thị danh sách sản phẩm
    */

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    if (!cartItems) {
        return;
    }


    /*
       Nếu giỏ hàng trống
    */

    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <p>
                    Giỏ hàng đang trống.
                </p>

                <small>
                    Hãy chọn một tác phẩm
                    gốm bạn yêu thích.
                </small>

            </div>

        `;

        return;
    }


    /*
       Hiển thị sản phẩm trong giỏ
    */

    cartItems.innerHTML =

        cart.map(item => `

            <div class="cart-item">


                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-item-info">


                    <h4>
                        ${item.name}
                    </h4>


                    <strong>
                        ${formatPrice(
                            item.price
                        )}
                    </strong>


                    <div
                        class="quantity-control"
                    >


                        <button
                            type="button"
                            onclick="
                                changeQuantity(
                                    ${item.id},
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            type="button"
                            onclick="
                                changeQuantity(
                                    ${item.id},
                                    1
                                )
                            "
                        >
                            +
                        </button>


                        <button
                            type="button"
                            class="remove-cart-item"
                            onclick="
                                removeFromCart(
                                    ${item.id}
                                )
                            "
                        >
                            Xóa
                        </button>


                    </div>


                </div>


            </div>

        `).join("");
}


/* =========================================================
   18. MỞ / ĐÓNG GIỎ HÀNG
   ========================================================= */

function toggleCart(forceState) {

    const sidebar =

        document.getElementById(
            "cartSidebar"
        ) ||

        document.querySelector(
            ".cart-sidebar"
        );


    if (!sidebar) {
        return;
    }


    let shouldOpen;


    if (
        typeof forceState ===
        "boolean"
    ) {

        shouldOpen =
            forceState;

    } else {

        shouldOpen =
            !sidebar.classList.contains(
                "open"
            );

    }


    sidebar.classList.toggle(
        "open",
        shouldOpen
    );


    sidebar.classList.toggle(
        "active",
        shouldOpen
    );
}


/* =========================================================
   19. THANH TOÁN
   ========================================================= */

function checkout() {

    if (!cart.length) {

        showToast(
            "Giỏ hàng đang trống."
        );

        return;
    }


    const total =
        getCartTotal();


    const confirmed =
        window.confirm(

            `Xác nhận đặt hàng với tổng giá trị ${formatPrice(total)}?`

        );


    if (!confirmed) {
        return;
    }


    cart = [];


    saveCart();

    updateCart();

    toggleCart(false);


    showToast(
        "Đặt hàng thành công! Đây là website mô phỏng."
    );
}


/* =========================================================
   20. ĐĂNG KÝ EMAIL
   ========================================================= */

function subscribeEmail(event) {

    if (event) {

        event.preventDefault();

    }


    const input =

        document.getElementById(
            "emailInput"
        ) ||

        document.querySelector(
            'input[type="email"]'
        );


    if (
        !input ||
        !input.value.trim()
    ) {

        showToast(
            "Vui lòng nhập email."
        );

        return false;
    }


    const email =
        input.value.trim();


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {

        showToast(
            "Email chưa đúng định dạng."
        );

        return false;
    }


    localStorage.setItem(
        "chamHonVietNewsletter",
        email
    );


    input.value = "";


    showToast(
        "Đăng ký nhận thông tin thành công!"
    );


    return false;
}


/* =========================================================
   21. THÔNG BÁO TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "siteToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );


        toast.id =
            "siteToast";


        toast.style.cssText = `

            position: fixed;

            right: 22px;

            bottom: 22px;

            z-index: 10000;

            max-width:
                min(
                    390px,
                    calc(100vw - 44px)
                );

            padding:
                13px 17px;

            border-radius:
                12px;

            background:
                #5a4030;

            color:
                #ffffff;

            box-shadow:
                0 12px 30px
                rgba(0,0,0,.18);

            font-size:
                14px;

            line-height:
                1.5;

            transform:
                translateY(20px);

            opacity:
                0;

            transition:
                .25s ease;

        `;


        document.body.appendChild(
            toast
        );
    }


    toast.textContent =
        message;


    toast.style.opacity =
        "1";


    toast.style.transform =
        "translateY(0)";


    clearTimeout(
        window.__toastTimer
    );


    window.__toastTimer =
        setTimeout(() => {

            toast.style.opacity =
                "0";

            toast.style.transform =
                "translateY(20px)";

        }, 2800);
}


/* =========================================================
   22. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Hiển thị toàn bộ sản phẩm
        */

        renderProducts("all");


        /*
           Cập nhật giỏ hàng
        */

        updateCart();


        /*
           Thanh tìm kiếm
        */

        const searchInput =
            document.getElementById(
                "productSearch"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                event => {

                    searchProducts(
                        event.target.value
                    );

                }
            );

        }


        /*
           Nhấn ESC để đóng popup
        */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeProductDetail();

                }

            }
        );

    }
);
document.addEventListener("DOMContentLoaded", function () {

    updateCart();

});
