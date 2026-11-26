// Sample Events

let events = [
    {
        name: "Tech Fest",
        date: "2026-12-05",
        seats: 50
    },

    {
        name: "Dance Competition",
        date: "2026-12-10",
        seats: 40
    },

    {
        name: "Sports Day",
        date: "2026-12-15",
        seats: 100
    },

    {
        name: "Music Night",
        date: "2026-12-20",
        seats: 60
    }
];

// Registered students

let students = [];

// Display Events

function displayEvents() {

    let container = document.getElementById("eventContainer");

    container.innerHTML = "";

    events.forEach(function(event, index) {

        let card = document.createElement("div");

        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>

            <p>Date: ${event.date}</p>

            <p>Seats: ${event.seats}</p>

            <button onclick="registerEvent(${index})">
                Register Now
            </button>
        `;

        container.appendChild(card);

    });

}

// Register for Event

function registerEvent(index) {

    document.getElementById("registration")
        .classList.remove("hidden");

    document.getElementById("eventName")
        .value = events[index].name;

    document.getElementById("registration")
        .scrollIntoView({ behavior: "smooth" });

}

// Registration Form

document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;

    let id = document.getElementById("studentId").value;

    let email = document.getElementById("studentEmail").value;

    let eventName = document.getElementById("eventName").value;

    let student = {
        name: name,
        id: id,
        email: email,
        event: eventName
    };

    students.push(student);

    alert("Registration Successful!");

    this.reset();

    showStudents();

});

// Display Registered Students

function showStudents() {

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach(function(student) {

        list.innerHTML += `
            <div class="event-card">

                <h3>${student.name}</h3>

                <p>Student ID: ${student.id}</p>

                <p>Email: ${student.email}</p>

                <p>Event: ${student.event}</p>

            </div>
        `;

    });

}

// Admin Dashboard

function showAdmin() {

    let admin = document.getElementById("admin");

    admin.classList.toggle("hidden");

    admin.scrollIntoView({ behavior: "smooth" });

}

// Add New Event

document.getElementById("eventForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("newEvent").value;

    let date = document.getElementById("eventDate").value;

    let seats = document.getElementById("eventSeats").value;

    let newEvent = {
        name: name,
        date: date,
        seats: seats
    };

    events.push(newEvent);

    alert("New Event Added Successfully!");

    displayEvents();

    this.reset();

});

// Run website

displayEvents();