// ===== بيانات السيارات =====
const cars = [
    {name: "تويوتا كورولا", year: 2020, price: 400000, brand: "تويوتا", image: "https://via.placeholder.com/250x150?text=تويوتا+كورولا"},
    {name: "هوندا سيفيك", year: 2019, price: 380000, brand: "هوندا", image: "https://via.placeholder.com/250x150?text=هوندا+سيفيك"},
    {name: "مرسيدس C-Class", year: 2018, price: 650000, brand: "مرسيدس", image: "https://via.placeholder.com/250x150?text=مرسيدس+C-Class"},
    {name: "بي إم دبليو 320i", year: 2021, price: 700000, brand: "بي إم دبليو", image: "https://via.placeholder.com/250x150?text=بي+إم+دبليو+320i"},
    {name: "نيسان ألتيما", year: 2020, price: 420000, brand: "نيسان", image: "https://via.placeholder.com/250x150?text=نيسان+ألتيما"}
];

// ===== إضافة السيارات للواجهة =====
const carsContainer = document.getElementById('carsContainer');

cars.forEach(car => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');

    carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <div class="car-info">
            <h3>${car.name} (${car.year})</h3>
            <p>السعر: ${car.price.toLocaleString()} دج</p>
            <button>شراء</button>
        </div>
    `;

    carsContainer.appendChild(carCard);
});

// ===== بيانات التعليقات =====
const reviews = [
    {user: "أحمد", comment: "خدمة رائعة وسريعة!"},
    {user: "ليلى", comment: "وجدت السيارة التي أبحث عنها بسهولة."},
    {user: "سامي", comment: "تجربة شراء ممتازة، شكراً لكم."}
];

const reviewsContainer = document.getElementById('reviewsContainer');

reviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `<strong>${review.user}</strong><p>${review.comment}</p>`;
    reviewsContainer.appendChild(reviewCard);
});

// ===== تفعيل تغيير اللغة (تمثيلي) =====
const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', () => {
    alert("ميزة تغيير اللغة غير مفعلة حالياً، لكنها جاهزة للتطوير.");
});

// ===== تفعيل تسجيل الدخول (تمثيلي) =====
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    alert("نافذة تسجيل الدخول ستظهر هنا. يمكنك ربطها لاحقًا مع النظام الخاص بك.");
});

// ===== نموذج الاتصال =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    contactForm.reset();
});
