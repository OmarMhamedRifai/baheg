// Navigation functionality
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Menu opening functions
function openMenu(type) {
    if (type === 'premium') {
        showMenuModal('القائمة المميزة', 'هذه القائمة متاحة فقط لفرعي التجمع الخامس ومدينة نصر - أسماك طازجة ومأكولات بحرية فاخرة');
    } else if (type === 'standard') {
        showMenuModal('القائمة العادية', 'هذه القائمة متاحة فقط لفرعي وسط البلد وشيراتون والإسكندرية - مأكولات بحرية شهية بأسعار مناسبة');
    } else if (type === 'special') {
        showSpecialOffers();
    }
}

// Show menu modal
function showMenuModal(title, description) {
    const modal = document.createElement('div');
    modal.className = 'menu-modal';
    
    // الحصول على الفرع المختار
    const savedUser = localStorage.getItem('bahegUser');
    let userBranch = '';
    if (savedUser) {
        const user = JSON.parse(savedUser);
        userBranch = user.branch;
    }
    
    // تحديد الصور حسب الفرع
    let menuImages = '';
    if (title === 'القائمة المميزة') {
        if (userBranch === 'tagamo5') {
            menuImages = `
                <div class="menu-image-item">
                    <img src="مينيو التجمع الخامس ومدينه نصر.jpg" alt="قائمة الأسماك الطازجة">
                    <h4>قائمة الأسماك الطازجة</h4>
                </div>
                <div class="menu-image-item">
                    <img src="مينيو التجمع الخامس ومدينه نصر2.jpg" alt="قائمة المأكولات البحرية">
                    <h4>قائمة المأكولات البحرية</h4>
                </div>
            `;
        } else if (userBranch === 'nasrcity') {
            menuImages = `
                <div class="menu-image-item">
                    <img src="مينيو مدينة نصر.jpg" alt="قائمة الأسماك الطازجة">
                    <h4>قائمة الأسماك الطازجة</h4>
                </div>
                <div class="menu-image-item">
                    <img src="مينيو مدينة نصر2.jpg" alt="قائمة المأكولات البحرية">
                    <h4>قائمة المأكولات البحرية</h4>
                </div>
            `;
        }
    } else {
        if (userBranch === 'wust') {
            menuImages = `
                <div class="menu-image-item">
                    <img src="مينيو وسط البلد.jpg" alt="قائمة الأسماك الطازجة">
                    <h4>قائمة الأسماك الطازجة</h4>
                </div>
                <div class="menu-image-item">
                    <img src="مينيو وسط البلد2.jpg" alt="قائمة المأكولات البحرية">
                    <h4>قائمة المأكولات البحرية</h4>
                </div>
            `;
        } else if (userBranch === 'alexandria') {
            menuImages = `
                <div class="menu-image-item">
                    <img src="مينيو الإسكندرية.jpg" alt="قائمة الأسماك الطازجة">
                    <h4>قائمة الأسماك الطازجة</h4>
                </div>
                <div class="menu-image-item">
                    <img src="مينيو الإسكندرية2.jpg" alt="قائمة المأكولات البحرية">
                    <h4>قائمة المأكولات البحرية</h4>
                </div>
            `;
        } else if (userBranch === 'sheraton') {
            menuImages = `
                <div class="menu-image-item">
                    <img src="مينيو شيراتون.jpg" alt="قائمة الأسماك الطازجة">
                    <h4>قائمة الأسماك الطازجة</h4>
                </div>
                <div class="menu-image-item">
                    <img src="مينيو شيراتون2.jpg" alt="قائمة المأكولات البحرية">
                    <h4>قائمة المأكولات البحرية</h4>
                </div>
            `;
        }
    }
    
    // تحديد المحتوى حسب نوع القائمة
    let menuContent = '';
    if (title === 'القائمة المميزة') {
        menuContent = `
            <div class="menu-images">
                ${menuImages}
            </div>
            <div class="menu-items">
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300" alt="سمك مشوي">
                    </div>
                    <div class="menu-item-content">
                        <h4>سمك مشوي</h4>
                        <p>سمك طازج مشوي على الفحم مع الخضروات</p>
                        <span class="price">120 جنيه</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300" alt="جمبري مشوي">
                    </div>
                    <div class="menu-item-content">
                        <h4>جمبري مشوي</h4>
                        <p>جمبري طازج مشوي مع الصلصة الخاصة</p>
                        <span class="price">150 جنيه</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300" alt="كابوريا">
                    </div>
                    <div class="menu-item-content">
                        <h4>كابوريا</h4>
                        <p>كابوريا طازجة مع الصلصة الحارة</p>
                        <span class="price">180 جنيه</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        menuContent = `
            <div class="menu-images">
                ${menuImages}
            </div>
            <div class="menu-items">
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300" alt="سمك مشوي">
                    </div>
                    <div class="menu-item-content">
                        <h4>سمك مشوي</h4>
                        <p>سمك طازج مشوي على الفحم مع الخضروات</p>
                        <span class="price">120 جنيه</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300" alt="جمبري مشوي">
                    </div>
                    <div class="menu-item-content">
                        <h4>جمبري مشوي</h4>
                        <p>جمبري طازج مشوي مع الصلصة الخاصة</p>
                        <span class="price">150 جنيه</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300" alt="كابوريا">
                    </div>
                    <div class="menu-item-content">
                        <h4>كابوريا</h4>
                        <p>كابوريا طازجة مع الصلصة الحارة</p>
                        <span class="price">180 جنيه</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    modal.innerHTML = `
        <div class="menu-modal-content">
            <div class="menu-modal-header">
                <h3>${title}</h3>
                <button class="close-modal" onclick="closeMenuModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="menu-modal-body">
                <p>${description}</p>
                ${menuContent}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .menu-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        .menu-modal-content {
            background: white;
            border-radius: 20px;
            padding: 30px;
            max-width: 900px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
        }
        .menu-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .menu-modal-header h3 {
            color: #286b98;
            margin: 0;
            font-size: 1.8rem;
        }
        .close-modal {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        .menu-modal-body p {
            color: #666;
            margin-bottom: 30px;
            font-size: 1.1rem;
            line-height: 1.6;
        }
        .menu-images {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .menu-image-item {
            text-align: center;
            background: #f8f9fa;
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        .menu-image-item:hover {
            transform: translateY(-5px);
        }
        .menu-image-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .menu-image-item h4 {
            color: #286b98;
            margin: 15px;
            font-size: 1.2rem;
        }
        .menu-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .menu-item {
            background: #f8f9fa;
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        .menu-item:hover {
            transform: translateY(-5px);
        }
        .menu-item-image {
            height: 150px;
            overflow: hidden;
        }
        .menu-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .menu-item-content {
            padding: 20px;
        }
        .menu-item-content h4 {
            color: #286b98;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }
        .menu-item-content p {
            color: #666;
            margin-bottom: 15px;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        .price {
            font-size: 1.3rem;
            font-weight: 700;
            color: #2ed573;
        }
        @media (max-width: 768px) {
            .menu-modal-content {
                padding: 20px;
                margin: 10px;
            }
            .menu-images {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            .menu-items {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }
    `;
    document.head.appendChild(modalStyle);
    
    // إضافة معالج النقر على صور المينيو في النافذة المنبثقة
    setTimeout(() => {
        const menuImageItems = modal.querySelectorAll('.menu-image-item');
        menuImageItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const title = this.querySelector('h4').textContent;
                showMenuImageModal(img.src, title);
            });
        });
    }, 100);
}

// Close menu modal
function closeMenuModal() {
    const modal = document.querySelector('.menu-modal');
    if (modal) {
        modal.remove();
    }
}

// Show special offers
function showSpecialOffers() {
    const offersDiv = document.createElement('div');
    offersDiv.className = 'special-offers';
    offersDiv.innerHTML = `
        <div class="special-offers-content">
            <div class="special-offers-header">
                <h3>العروض الخاصة</h3>
                <button class="close-offers" onclick="closeSpecialOffers()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="offers-grid">
                <div class="offer-item">
                    <div class="offer-image">
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300" alt="عرض خاص">
                    </div>
                    <div class="offer-content">
                        <h4>عرض العائلة</h4>
                        <p>طبق أسماك مشوي + أرز + سلطة + مشروب</p>
                        <span class="offer-price">150 جنيه</span>
                        <span class="offer-original">200 جنيه</span>
                    </div>
                </div>
                <div class="offer-item">
                    <div class="offer-image">
                        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300" alt="عرض خاص">
                    </div>
                    <div class="offer-content">
                        <h4>عرض الأصدقاء</h4>
                        <p>طبقين أسماك + طبقين أرز + سلطة + مشروبات</p>
                        <span class="offer-price">280 جنيه</span>
                        <span class="offer-original">350 جنيه</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(offersDiv);
    
    // Add offers styles
    const offersStyle = document.createElement('style');
    offersStyle.textContent = `
        .special-offers {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        .special-offers-content {
            background: white;
            border-radius: 20px;
            padding: 30px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
        }
        .special-offers-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .special-offers-header h3 {
            color: #286b98;
            margin: 0;
            font-size: 1.8rem;
        }
        .close-offers {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        .offers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .offer-item {
            background: #f8f9fa;
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        .offer-item:hover {
            transform: translateY(-5px);
        }
        .offer-image {
            height: 200px;
            overflow: hidden;
        }
        .offer-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .offer-content {
            padding: 20px;
        }
        .offer-content h4 {
            color: #286b98;
            margin-bottom: 10px;
            font-size: 1.3rem;
        }
        .offer-content p {
            color: #666;
            margin-bottom: 15px;
            line-height: 1.6;
        }
        .offer-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2ed573;
            margin-right: 10px;
        }
        .offer-original {
            font-size: 1.2rem;
            color: #999;
            text-decoration: line-through;
        }
    `;
    document.head.appendChild(offersStyle);
}

// Close special offers
function closeSpecialOffers() {
    const offers = document.querySelector('.special-offers');
    if (offers) {
        offers.remove();
    }
}

// Gallery image click handler
document.addEventListener('click', function(e) {
    if (e.target.closest('.gallery-item')) {
        const galleryItem = e.target.closest('.gallery-item');
        const img = galleryItem.querySelector('img');
        showImageModal(img.src, img.alt);
    }
    
    // إضافة معالج النقر على صور المينيو
    if (e.target.closest('.menu-preview-item')) {
        const menuPreviewItem = e.target.closest('.menu-preview-item');
        const img = menuPreviewItem.querySelector('img');
        const title = menuPreviewItem.querySelector('span').textContent;
        showMenuImageModal(img.src, title);
    }
});

// Show image modal
function showImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <button class="close-image-modal" onclick="closeImageModal()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        }
        .image-modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .image-modal-content img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        .close-image-modal {
            position: absolute;
            top: -50px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    `;
    document.head.appendChild(modalStyle);
}

// Close image modal
function closeImageModal() {
    const modal = document.querySelector('.image-modal');
    if (modal) {
        modal.remove();
    }
}

// Show menu image modal
function showMenuImageModal(src, title) {
    const modal = document.createElement('div');
    modal.className = 'menu-image-modal';
    modal.innerHTML = `
        <div class="menu-image-modal-content">
            <div class="menu-image-modal-header">
                <h3>${title}</h3>
                <div class="menu-image-controls">
                    <button class="zoom-control zoom-in" title="تكبير">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button class="zoom-control zoom-out" title="تصغير">
                        <i class="fas fa-search-minus"></i>
                    </button>
                    <button class="zoom-control zoom-reset" title="إعادة تعيين">
                        <i class="fas fa-undo"></i>
                    </button>
                    <button class="close-menu-image-modal" onclick="closeMenuImageModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="menu-image-modal-body">
                <div class="image-container">
                    <img src="${src}" alt="${title}" class="zoomable-image">
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .menu-image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            backdrop-filter: blur(5px);
        }
        .menu-image-modal-content {
            background: white;
            border-radius: 20px;
            max-width: 95%;
            max-height: 95%;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        .menu-image-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: linear-gradient(135deg, #286b98, #2bbac2);
            color: white;
            border-radius: 20px 20px 0 0;
        }
        .menu-image-modal-header h3 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 700;
        }
        .menu-image-controls {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .zoom-control {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s ease;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .zoom-control:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }
        .zoom-control:active {
            transform: scale(0.95);
        }
        .close-menu-image-modal {
            background: rgba(220, 53, 69, 0.8);
            border: none;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            padding: 8px;
            border-radius: 50%;
            transition: all 0.3s ease;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .close-menu-image-modal:hover {
            background: rgba(220, 53, 69, 1);
            transform: scale(1.1);
        }
        .menu-image-modal-body {
            padding: 20px;
            text-align: center;
            background: #f8f9fa;
            border-radius: 0 0 20px 20px;
        }
        .image-container {
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            background: white;
            position: relative;
        }
        .zoomable-image {
            max-width: 100%;
            max-height: 70vh;
            object-fit: contain;
            transition: transform 0.3s ease;
            cursor: grab;
            user-select: none;
        }
        .zoomable-image:active {
            cursor: grabbing;
        }
        .zoomable-image.zoomed {
            cursor: grab;
        }
        .zoomable-image.zoomed:active {
            cursor: grabbing;
        }
        .zoom-info {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .zoom-info.show {
            opacity: 1;
        }
        @media (max-width: 768px) {
            .menu-image-modal-content {
                max-width: 98%;
                max-height: 98%;
            }
            .menu-image-modal-header {
                padding: 15px;
            }
            .menu-image-modal-header h3 {
                font-size: 1.2rem;
            }
            .menu-image-modal-body {
                padding: 15px;
            }
            .zoomable-image {
                max-height: 60vh;
            }
            .menu-image-controls {
                gap: 8px;
            }
            .zoom-control {
                width: 30px;
                height: 30px;
                font-size: 0.9rem;
            }
        }
        @media (max-width: 480px) {
            .menu-image-modal-header {
                padding: 12px;
            }
            .menu-image-modal-header h3 {
                font-size: 1.1rem;
            }
            .menu-image-modal-body {
                padding: 10px;
            }
            .zoomable-image {
                max-height: 50vh;
            }
            .menu-image-controls {
                gap: 5px;
            }
            .zoom-control {
                width: 28px;
                height: 28px;
                font-size: 0.8rem;
            }
        }
    `;
    document.head.appendChild(modalStyle);
    
    // Get the image element
    const image = modal.querySelector('.zoomable-image');
    const imageContainer = modal.querySelector('.image-container');
    
    // Zoom functionality
    let currentZoom = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    
    // Add zoom info element
    const zoomInfo = document.createElement('div');
    zoomInfo.className = 'zoom-info';
    zoomInfo.textContent = '100%';
    imageContainer.appendChild(zoomInfo);
    
    // Zoom functions
    function updateZoom() {
        image.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
        zoomInfo.textContent = `${Math.round(currentZoom * 100)}%`;
        
        if (currentZoom > 1) {
            image.classList.add('zoomed');
            zoomInfo.classList.add('show');
        } else {
            image.classList.remove('zoomed');
            zoomInfo.classList.remove('show');
            translateX = 0;
            translateY = 0;
        }
    }
    
    function zoomIn() {
        if (currentZoom < 3) {
            currentZoom += 0.25;
            updateZoom();
        }
    }
    
    function zoomOut() {
        if (currentZoom > 0.5) {
            currentZoom -= 0.25;
            updateZoom();
        }
    }
    
    function resetZoom() {
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        updateZoom();
    }
    
    // Event listeners for zoom controls
    modal.querySelector('.zoom-in').addEventListener('click', zoomIn);
    modal.querySelector('.zoom-out').addEventListener('click', zoomOut);
    modal.querySelector('.zoom-reset').addEventListener('click', resetZoom);
    
    // Mouse wheel zoom
    imageContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });
    
    // Touch events for mobile
    let initialDistance = 0;
    let initialZoom = 1;
    
    imageContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            // Pinch to zoom
            initialDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            initialZoom = currentZoom;
        } else if (e.touches.length === 1 && currentZoom > 1) {
            // Pan
            isDragging = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
        }
    });
    
    imageContainer.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (e.touches.length === 2) {
            // Pinch to zoom
            const distance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const scale = distance / initialDistance;
            currentZoom = Math.max(0.5, Math.min(3, initialZoom * scale));
            updateZoom();
        } else if (e.touches.length === 1 && isDragging && currentZoom > 1) {
            // Pan
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            updateZoom();
        }
    });
    
    imageContainer.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Mouse drag for desktop
    image.addEventListener('mousedown', (e) => {
        if (currentZoom > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            image.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging && currentZoom > 1) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateZoom();
        }
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            image.style.cursor = 'grab';
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'none') {
            switch(e.key) {
                case '+':
                case '=':
                    e.preventDefault();
                    zoomIn();
                    break;
                case '-':
                    e.preventDefault();
                    zoomOut();
                    break;
                case '0':
                    e.preventDefault();
                    resetZoom();
                    break;
                case 'Escape':
                    closeMenuImageModal();
                    break;
            }
        }
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeMenuImageModal();
        }
    });
}

// Close menu image modal
function closeMenuImageModal() {
    const modal = document.querySelector('.menu-image-modal');
    if (modal) {
        modal.remove();
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.about-content, .menu-cards, .gallery-grid, .contact-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // التحقق من حالة تسجيل الدخول
    checkLoginStatus();
    
    // تهيئة معلومات التواصل
    const savedUser = localStorage.getItem('bahegUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        updateContactInfo(user.branch);
    } else {
        updateContactInfo(null);
    }
});

// دالة للتحقق من حالة تسجيل الدخول
function checkLoginStatus() {
    const savedUser = localStorage.getItem('bahegUser');
    const userInfo = document.getElementById('userInfo');
    const loginBtn = document.getElementById('loginBtn');
    const loginMessage = document.getElementById('loginMessage');
    
    if (savedUser) {
        const user = JSON.parse(savedUser);
        
        // إظهار معلومات المستخدم
        document.getElementById('userName').textContent = `مرحباً ${user.name}`;
        document.getElementById('userBranch').textContent = user.branchName;
        userInfo.style.display = 'flex';
        loginBtn.style.display = 'none';
        
        // إخفاء رسالة تسجيل الدخول
        if (loginMessage) {
            loginMessage.style.display = 'none';
        }
        
        // إضافة رسالة ترحيب في قسم الرئيسية
        showWelcomeMessage(user.name, user.branchName);
        
        // إظهار الصورة المناسبة في قسم قائمة الطعام
        showBranchMenu(user.branch);
        
        // تحديث معلومات التواصل
        updateContactInfo(user.branch);
        
    } else {
        // إظهار زر تسجيل الدخول
        userInfo.style.display = 'none';
        loginBtn.style.display = 'flex';
        
        // إظهار رسالة تسجيل الدخول
        if (loginMessage) {
            loginMessage.style.display = 'flex';
        }
        
        // إخفاء جميع صور الفروع
        hideAllBranchMenus();
        
        // إعادة تعيين معلومات التواصل
        updateContactInfo(null);
    }
}

// دالة لعرض رسالة الترحيب
function showWelcomeMessage(name, branch) {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = `
            <div class="welcome-badge">
                <i class="fas fa-user-check"></i>
                <span>مرحباً ${name} - ${branch}</span>
            </div>
        `;
        heroText.insertBefore(welcomeDiv, heroText.firstChild);
    }
}

// دالة تسجيل الخروج
function logout() {
    localStorage.removeItem('bahegUser');
    checkLoginStatus();
    location.reload();
}

// دالة لإظهار الصورة المناسبة حسب الفرع
function showBranchMenu(branchValue) {
    // إخفاء جميع صور الفروع أولاً
    hideAllBranchMenus();
    
    // إظهار الصورة المناسبة للفرع المختار
    const targetCard = document.querySelector(`[data-branch="${branchValue}"]`);
    if (targetCard) {
        targetCard.classList.add('active');
        
        // إضافة انيميشن بعد فترة قصيرة
        setTimeout(() => {
            targetCard.style.transition = 'all 0.6s ease';
            targetCard.style.opacity = '1';
            targetCard.style.transform = 'translateY(0)';
        }, 100);
    }
}

// دالة لإخفاء جميع صور الفروع
function hideAllBranchMenus() {
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.classList.remove('active');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
}

// دالة لتحديث معلومات التواصل حسب الفرع
function updateContactInfo(branch) {
    const branchAddress = document.getElementById('branchAddress');
    const branchPhone = document.getElementById('branchPhone');
    const branchHours = document.getElementById('branchHours');
    const contactLoginMessage = document.getElementById('contactLoginMessage');
    const contactInfo = document.querySelector('.contact-info');
    
    // معلومات الفروع
    const branchInfo = {
        tagamo5: {
            address: 'شارع التسعين، التجمع الخامس، القاهرة الجديدة',
            phone: '+20 123 456 7891',
            hours: 'السبت - الخميس: 12:00 م - 12:00 ص<br>الجمعة: 2:00 م - 12:00 ص'
        },
        nasrcity: {
            address: 'شارع النصر، مدينة نصر، القاهرة',
            phone: '+20 123 456 7892',
            hours: 'السبت - الخميس: 12:00 م - 12:00 ص<br>الجمعة: 2:00 م - 12:00 ص'
        },
        wust: {
            address: 'شارع النيل، وسط البلد، القاهرة',
            phone: '+20 123 456 7893',
            hours: 'السبت - الخميس: 11:00 ص - 11:00 م<br>الجمعة: 1:00 م - 11:00 م'
        },
        sheraton: {
            address: 'شارع شيراتون، شيراتون، القاهرة',
            phone: '+20 123 456 7894',
            hours: 'السبت - الخميس: 11:00 ص - 11:00 م<br>الجمعة: 1:00 م - 11:00 م'
        },
        alexandria: {
            address: 'شارع البحر، ميناء الإسكندرية، الإسكندرية',
            phone: '+20 123 456 7895',
            hours: 'السبت - الخميس: 11:00 ص - 11:00 م<br>الجمعة: 1:00 م - 11:00 م'
        }
    };
    
    if (branch && branchInfo[branch]) {
        // إخفاء رسالة تسجيل الدخول
        if (contactLoginMessage) {
            contactLoginMessage.style.display = 'none';
        }
        
        // إظهار معلومات الفرع
        if (contactInfo) {
            contactInfo.style.display = 'grid';
            contactInfo.classList.add('branch-loaded');
        }
        
        // تحديث المعلومات
        if (branchAddress) {
            branchAddress.textContent = branchInfo[branch].address;
            branchAddress.parentElement.parentElement.classList.add('dynamic');
        }
        
        if (branchPhone) {
            branchPhone.textContent = branchInfo[branch].phone;
            branchPhone.parentElement.parentElement.classList.add('dynamic');
        }
        
        if (branchHours) {
            branchHours.innerHTML = branchInfo[branch].hours;
            branchHours.parentElement.parentElement.classList.add('dynamic');
        }
        
        // إضافة تأثيرات بصرية
        setTimeout(() => {
            const dynamicItems = document.querySelectorAll('.contact-item.dynamic');
            dynamicItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        }, 100);
        
    } else {
        // إظهار رسالة تسجيل الدخول
        if (contactLoginMessage) {
            contactLoginMessage.style.display = 'flex';
        }
        
        // إخفاء معلومات الفرع
        if (contactInfo) {
            contactInfo.style.display = 'none';
            contactInfo.classList.remove('branch-loaded');
        }
        
        // إعادة تعيين النصوص
        if (branchAddress) {
            branchAddress.textContent = 'يرجى تسجيل الدخول لعرض عنوان الفرع';
            branchAddress.parentElement.parentElement.classList.remove('dynamic');
        }
        
        if (branchPhone) {
            branchPhone.textContent = 'يرجى تسجيل الدخول لعرض رقم الهاتف';
            branchPhone.parentElement.parentElement.classList.remove('dynamic');
        }
        
        if (branchHours) {
            branchHours.innerHTML = 'السبت - الخميس: 12:00 م - 12:00 ص<br>الجمعة: 2:00 م - 12:00 ص';
            branchHours.parentElement.parentElement.classList.remove('dynamic');
        }
    }
}

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .hero-section {
        animation: fadeInUp 1s ease;
    }
    
    .hero-stats {
        animation: fadeInUp 1s ease 0.3s both;
    }
`;
document.head.appendChild(loadingStyle); 