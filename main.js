// البيانات الافتراضية للسيارات
let cars = [
    {name: "تويوتا كورولا", year: 2020, price: 400000, brand: "تويوتا", image: "https://via.placeholder.com/250x150"},
    {name: "هوندا سيفيك", year: 2019, price: 380000, brand: "هوندا", image: "https://via.placeholder.com/250x150"},
    {name: "مرسيدس C-Class", year: 2018, price: 600000, brand: "مرسيدس", image: "https://via.placeholder.com/250x150"}
];

// المستخدمين الافتراضيين
let users = [
    {username: "admin", password: "1234"}
];

let currentUser = null;

// العناصر
const carsSection = document.getElementById("carsSection");
const sellFormSection = document.getElementById("sellFormSection");
const showCarsBtn = document.getElementById("showCarsBtn");
const showSellFormBtn = document.getElementById("showSellFormBtn");
const sellForm = document.getElementById("sellForm");
const searchInput = document.getElementById("searchInput");
const filterBrand = document.getElementById("filterBrand");

const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeUser = document.getElementById("welcomeUser");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");
const showRegister = document.getElementById("showRegister");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// عرض السيارات
function displayCars(list) {
    carsSection.innerHTML = "";
    list.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
            <img src="${car.image || 'https://via.placeholder.com/250x150'}" alt="${car.name}">
            <h3>${car.name} ${car.year}</h3>
            <p>السعر: ${car.price} دج</p>
            <p>الماركة: ${car.brand}</p>
            <button>شراء</button>
        `;
        carsSection.appendChild(card);
    });
}

// تصفية السيارات
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = cars.filter(car => car.name.toLowerCase().includes(query));
    displayCars(filtered);
});

filterBrand.addEventListener("change", () => {
    const brand = filterBrand.value;
    const filtered = brand ? cars.filter(car => car.brand === brand) : cars;
    displayCars(filtered);
});

// التبديل بين العرض ونموذج البيع
showCarsBtn.addEventListener("click", () => {
    carsSection.classList.remove("hidden");
    sellFormSection.classList.add("hidden");
});

showSellFormBtn.addEventListener("click", () => {
    if (!currentUser) {
        loginModal.style.display = "block";
        return;
    }
    sellFormSection.classList.remove("hidden");
    carsSection.classList.add("hidden");
});

// إضافة سيارة جديدة
sellForm.addEventListener("submit", e => {
    e.preventDefault();
    const car = {
        name: document.getElementById("carName").value,
        year: parseInt(document.getElementById("carYear").value),
        price: parseInt(document.getElementById("carPrice").value),
        brand: document.getElementById("carBrand").value,
        image: document.getElementById("carImage").value
    };
    cars.push(car);
    displayCars(cars);
    sellForm.reset();
    sellFormSection.classList.add("hidden");
    carsSection.classList.remove("hidden");
});

// تسجيل الدخول
loginBtn.addEventListener("click", () => loginModal.style.display = "block");
closeLogin.addEventListener("click", () => loginModal.style.display = "none");
showRegister.addEventListener("click", () => {
    loginModal.style.display = "none";
    registerModal.style.display = "block";
});
closeRegister.addEventListener("click", () => registerModal.style.display = "none");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.username === username && u.password === password);
    if(user) {
        currentUser = user;
        welcomeUser.textContent = `مرحباً، ${user.username}`;
        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
        loginModal.style.display = "none";
    } else {
        alert("بيانات الدخول غير صحيحة!");
    }
});

// تسجيل جديد
registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    if(users.some(u => u.username === username)) {
        alert("اسم المستخدم موجود مسبقاً!");
        return;
    }
    const newUser = {username, password};
    users.push(newUser);
    alert("تم التسجيل بنجاح!");
    registerModal.style.display = "none";
});

// تسجيل الخروج
logoutBtn.addEventListener("click", () => {
    currentUser = null;
    welcomeUser.textContent = "";
    loginBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
});

// العرض الأولي
displayCars(cars);
