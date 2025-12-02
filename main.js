// Load Cars From LocalStorage
let cars = JSON.parse(localStorage.getItem("motarji_cars")) || [];

// Save Cars
function saveCars() {
    localStorage.setItem("motarji_cars", JSON.stringify(cars));
}

// Display Cars
function displayCars() {
    const list = document.getElementById("carList");
    list.innerHTML = "";

    cars.forEach((car, index) => {
        list.innerHTML += `
        <div class="car-card">
            <h3>${car.name}</h3>
            <p><strong>السعر:</strong> ${car.price} دج</p>
            <p><strong>المسافة:</strong> ${car.km} كم</p>
            <p><strong>السنة:</strong> ${car.year}</p>
            <button onclick="deleteCar(${index})" class="btn-delete">حذف</button>
        </div>
        `;
    });
}

// Add Car
document.getElementById("saveCar").addEventListener("click", function () {
    const name = document.getElementById("carName").value.trim();
    const price = document.getElementById("carPrice").value.trim();
    const km = document.getElementById("carKm").value.trim();
    const year = document.getElementById("carYear").value.trim();

    if (!name || !price || !km || !year) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    cars.push({ name, price, km, year });
    saveCars();
    displayCars();

    document.getElementById("addForm").classList.add("hidden");
});

// Delete Car
function deleteCar(index) {
    if (confirm("هل أنت متأكد من حذف هذه السيارة؟")) {
        cars.splice(index, 1);
        saveCars();
        displayCars();
    }
}

// Show Add Form
document.getElementById("addBtn").addEventListener("click", () => {
    document.getElementById("addForm").classList.toggle("hidden");
});

// Init
displayCars();
