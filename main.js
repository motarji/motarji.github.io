// بيانات سيارات تجريبية – يمكنك استبدالها لاحقاً بقاعدة بيانات حقيقية
const cars = [
    {
        id: 1,
        name: "Toyota Corolla 2018",
        price: "150 مليون",
        image: "https://via.placeholder.com/400x250.png?text=Car+1",
        description: "سيارة ممتازة بحالة جيدة جداً"
    },
    {
        id: 2,
        name: "Hyundai i20 2020",
        price: "185 مليون",
        image: "https://via.placeholder.com/400x250.png?text=Car+2",
        description: "مازالت جديدة مع كيلومترات قليلة"
    },
    {
        id: 3,
        name: "Volkswagen Golf 2017",
        price: "200 مليون",
        image: "https://via.placeholder.com/400x250.png?text=Car+3",
        description: "سيارة أوروبية نظيفة جداً"
    }
];

// دالة تحميل السيارات
function loadCars() {
    const container = document.getElementById("car-list");
    container.innerHTML = "";

    cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";

        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>💰 السعر: ${car.price}</p>
            <p>${car.description}</p>
            <a href="#" class="btn">التفاصيل</a>
        `;

        container.appendChild(card);
    });
}

// تشغيل التطبيق عند تحميل الصفحة
window.onload = () => {
    loadCars();
};
