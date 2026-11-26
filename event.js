[21-11-2026 01:17] Imran: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Events | Event Management Portal</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- NAVBAR -->
    <header class="navbar">
        <div class="logo">
            <span class="logo-icon">✦</span>
            CampusEvents
        </div>

        <nav class="nav-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
        </nav>

        <button class="admin-btn" id="adminBtn">
            Admin Panel
        </button>
    </header>


    <!-- HERO SECTION -->
    <section class="hero" id="home">

        <div class="hero-content">

            <span class="hero-tag">
                ✨ YOUR CAMPUS, YOUR MOMENT
            </span>

            <h1>
                Discover Events.<br>
                <span>Make Memories.</span>
            </h1>

            <p>
                Explore exciting campus events, workshops, competitions
                and seminars. Register for your next unforgettable experience.
            </p>

            <div class="hero-buttons">
                <a href="#events" class="primary-btn">
                    Explore Events →
                </a>

                <a href="#about" class="secondary-btn">
                    Learn More
                </a>
            </div>

        </div>

        <div class="hero-visual">
            <div class="hero-card">
                <div class="hero-card-icon">🎉</div>
                <h3>Something exciting is happening!</h3>
                <p>Your next campus experience awaits.</p>
            </div>
        </div>

    </section>


    <!-- STATS SECTION -->
    <section class="stats-section">

        <div class="stat-card">
            <h2 id="totalEvents">0</h2>
            <p>Total Events</p>
        </div>

        <div class="stat-card">
            <h2 id="totalRegistrations">0</h2>
            <p>Registrations</p>
        </div>

        <div class="stat-card">
            <h2 id="upcomingEvents">0</h2>
            <p>Upcoming Events</p>
        </div>

    </section>


    <!-- EVENTS SECTION -->
    <section class="events-section" id="events">

        <div class="section-heading">
            <span class="section-tag">CAMPUS ACTIVITIES</span>

            <h2>Explore <span>Events</span></h2>

            <p>
                Find something you love and be a part of it.
            </p>
        </div>


        <!-- SEARCH AND FILTER -->
        <div class="event-controls">

            <input
                type="text"
                id="searchInput"
                placeholder="Search events..."
            >

            <select id="categoryFilter">
                <option value="all">All Categories</option>
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Workshop">Workshop</option>
                <option value="Sports">Sports</option>
                <option value="Seminar">Seminar</option>
            >

            </select>

        </div>


        <!-- EVENT CARDS WILL BE ADDED USING JAVASCRIPT -->
        <div class="events-grid" id="eventsContainer">

        </div>

        <p class="empty-message" id="emptyMessage">
            No events found.
        </p>

    </section>


    <!-- ABOUT SECTION -->
    <section class="about-section" id="about">

        <div class="section-heading">
            <span class="section-tag">ABOUT OUR PORTAL</span>

            <h2>Everything happening<br>on your <span>campus.</span></h2>
        </div>

        <div class="about-grid">
[21-11-2026 01:17] Imran: <div class="about-card">
                <div class="about-icon">📅</div>
                <h3>Discover Events</h3>
                <p>
                    Browse upcoming campus events and discover
                    activities that match your interests.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">🎟</div>
                <h3>Easy Registration</h3>
                <p>
                    Register for events with a simple form
                    and get your confirmation.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">📊</div>
                <h3>Live Seat Updates</h3>
                <p>
                    Check available seats and registration status
                    before booking your spot.
                </p>
            </div>

        </div>

    </section>


    <!-- REGISTRATION MODAL -->
    <div class="modal" id="registrationModal">

        <div class="modal-content">

            <button class="close-modal" id="closeRegistrationModal">
                &times;
            </button>

            <h2>Register for Event</h2>

            <p id="selectedEventName">
                Event Name
            </p>

            <form id="registrationForm">

                <input type="hidden" id="eventId">

                <label for="studentName">Full Name</label>
                <input
                    type="text"
                    id="studentName"
                    placeholder="Enter your full name"
                    required
                >

                <label for="studentId">Student Registration Number</label>
                <input
                    type="text"
                    id="studentId"
                    placeholder="Enter your registration number"
                    required
                >

                <label for="studentEmail">Email Address</label>
                <input
                    type="email"
                    id="studentEmail"
                    placeholder="Enter your email"
                    required
                >

                <label for="studentCourse">Course / Branch</label>
                <input
                    type="text"
                    id="studentCourse"
                    placeholder="e.g. B.Tech CSE"
                    required
                >

                <button type="submit" class="primary-btn">
                    Confirm Registration
                </button>

            </form>

        </div>

    </div>


    <!-- CONFIRMATION MODAL -->
    <div class="modal" id="confirmationModal">

        <div class="modal-content confirmation-content">

            <div class="success-icon">✓</div>

            <h2>Registration Successful!</h2>

            <p id="confirmationDetails"></p>

            <p>
                Registration ID:
                <strong id="confirmationId"></strong>
            </p>

            <button class="primary-btn" id="printConfirmation">
                Print Confirmation
            </button>

            <button class="secondary-btn" id="closeConfirmation">
                Close
            </button>

        </div>

    </div>


    <!-- ADMIN MODAL -->
    <div class="modal" id="adminModal">

        <div class="modal-content admin-content">

            <button class="close-modal" id="closeAdminModal">
                &times;
            </button>

            <h2>Admin Dashboard</h2>

            <p>Manage campus events and registrations.</p>

            <div class="admin-stats">

                <div class="admin-stat">
                    <h3 id="adminEventCount">0</h3>
                    <p>Events</p>
                </div>

                <div class="admin-stat">
                    <h3 id="adminRegistrationCount">0</h3>
                    <p>Registrations</p>
                </div>

            </div>

            <h3>Create New Event</h3>

            <form id="eventForm">
[21-11-2026 01:17] Imran: <label for="eventTitle">Event Name</label>
                <input
                    type="text"
                    id="eventTitle"
                    placeholder="Event name"
                    required
                >

                <label for="eventCategory">Category</label>
                <select id="eventCategory" required>
                    <option value="">Select Category</option>
                    <option value="Technical">Technical</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Sports">Sports</option>
                    <option value="Seminar">Seminar</option>
                </select>

                <label for="eventDate">Event Date</label>
                <input type="date" id="eventDate" required>

                <label for="eventTime">Event Time</label>
                <input type="time" id="eventTime" required>

                <label for="eventVenue">Venue</label>
                <input
                    type="text"
                    id="eventVenue"
                    placeholder="Event venue"
                    required
                >

                <label for="eventCapacity">Maximum Participants</label>
                <input
                    type="number"
                    id="eventCapacity"
                    min="1"
                    placeholder="Maximum seats"
                    required
                >

                <label for="eventDescription">Description</label>
                <textarea
                    id="eventDescription"
                    placeholder="Describe your event..."
                    required
                ></textarea>

                <button type="submit" class="primary-btn">
                    Create Event
                </button>

            </form>

            <h3>Manage Existing Events</h3>

            <div id="adminEventsList"></div>

        </div>

    </div>


    <!-- FOOTER -->
    <footer class="footer">

        <div class="logo">
            <span class="logo-icon">✦</span>
            CampusEvents
        </div>

        <p>
            Made for students. Powered by campus spirit.
        </p>

        <p class="copyright">
            © 2026 Campus Event Management Portal
        </p>

    </footer>


    <!-- JAVASCRIPT -->
    <script src="js/app.js"></script>

</body>
</html>


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #0b1020;
    color: #f1f5f9;
    line-height: 1.6;
}

button,
input,
select,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}


/* COLORS */

:root {
    --bg: #0b1020;
    --card: #141b2d;
    --card-light: #1b2438;
    --purple: #8b5cf6;
    --purple-light: #a78bfa;
    --cyan: #22d3ee;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.09);
}


/* NAVBAR */

.navbar {
    width: 100%;
    padding: 18px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(11, 16, 32, 0.92);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(15px);
}

.logo {
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    color: var(--purple-light);
    font-size: 28px;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: var(--muted);
    transition: 0.3s;
}

.nav-links a:hover {
    color: white;
}

.admin-btn {
    border: 1px solid var(--purple);
    background: transparent;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    transition: 0.3s;
}

.admin-btn:hover {
    background: var(--purple);
}


/* HERO SECTION */

.hero {
    padding: 90px 8%;
    min-height: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    background:
        radial-gradient(
            circle at 80% 30%,
            rgba(139, 92, 246, 0.15),
            transparent 40%
        );
}

.hero-content {
    max-width: 650px;
}

.hero-tag,
.section-tag {
    color: var(--cyan);
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.15;
    margin: 20px 0;
}

.hero h1 span,
.section-heading h2 span {
    color: var(--purple-light);
}

.hero-content > p {
    color: var(--muted);
    max-width: 520px;
    font-size: 17px;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}


/* BUTTONS */

.primary-btn,
.secondary-btn {
    display: inline-block;
    padding: 12px 22px;
    border-radius: 10px;
    border: none;
    text-align: center;
    transition: 0.3s;
}

.primary-btn {
    color: white;
    background: linear-gradient(
        135deg,
        var(--purple),
        #6d28d9
    );
    font-weight: bold;
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.secondary-btn {
    color: white;
    background: var(--card-light);
    border: 1px solid var(--border);
}

.secondary-btn:hover {
    background: #26324a;
}


/* HERO VISUAL */

.hero-visual {
    width: 350px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:
        linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.15),
            rgba(34, 211, 238, 0.08)
        );
    border: 1px solid var(--border);
    border-radius: 30px;
    transform: rotate(2deg);
}

.hero-card {
    width: 85%;
    padding: 30px;
    background: rgba(20, 27, 45, 0.85);
    border: 1px solid var(--border);
    border-radius: 20px;
    transform: rotate(-2deg);
    text-align: center;
}

.hero-card-icon {
    font-size: 60px;
    margin-bottom: 15px;
}

.hero-card h3 {
    margin-bottom: 10px;
    font-size: 23px;
}

.hero-card p {
    color: var(--muted);
}


/* STATS */

.stats-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 8% 60px;
}
[21-11-2026 01:18] Imran: .stat-card {
    text-align: center;
    padding: 25px;
    border-radius: 16px;
    background: var(--card);
    border: 1px solid var(--border);
}

.stat-card h2 {
    font-size: 35px;
    color: var(--purple-light);
}

.stat-card p {
    color: var(--muted);
}


/* EVENTS SECTION */

.events-section {
    padding: 70px 8%;
}

.section-heading {
    text-align: center;
    margin-bottom: 40px;
}

.section-heading h2 {
    font-size: 42px;
    margin: 12px 0;
}

.section-heading > p {
    color: var(--muted);
}


/* SEARCH + FILTER */

.event-controls {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}

.event-controls input,
.event-controls select {
    padding: 14px;
    border: 1px solid var(--border);
    background: var(--card);
    color: white;
    border-radius: 10px;
    outline: none;
}

.event-controls input {
    flex: 1;
}

.event-controls input:focus,
.event-controls select:focus {
    border-color: var(--purple);
}


/* EVENTS GRID */

.events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.event-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    transition: 0.3s;
}

.event-card:hover {
    transform: translateY(-6px);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.event-card-top {
    min-height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    background:
        linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.2),
            rgba(34, 211, 238, 0.08)
        );
}

.event-card-body {
    padding: 22px;
}

.event-category {
    display: inline-block;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 20px;
    color: var(--cyan);
    background: rgba(34, 211, 238, 0.1);
    margin-bottom: 12px;
}

.event-card h3 {
    font-size: 21px;
    margin-bottom: 10px;
}

.event-description {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 15px;
}

.event-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 18px;
}

.event-seats {
    margin-bottom: 15px;
    color: var(--cyan);
    font-size: 14px;
}

.event-card .primary-btn {
    width: 100%;
}

.event-card .primary-btn:disabled {
    background: #374151;
    cursor: not-allowed;
    transform: none;
}

.empty-message {
    text-align: center;
    color: var(--muted);
    padding: 30px;
    display: none;
}


/* ABOUT */

.about-section {
    padding: 70px 8%;
    background: rgba(255, 255, 255, 0.015);
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.about-card {
    padding: 30px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 18px;
    transition: 0.3s;
}

.about-card:hover {
    transform: translateY(-5px);
}

.about-icon {
    font-size: 35px;
    margin-bottom: 15px;
}

.about-card h3 {
    margin-bottom: 10px;
}

.about-card p {
    color: var(--muted);
}


/* MODALS */

.modal {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow-y: auto;
}

.modal.active {
    display: flex;
}

.modal-content {
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 30px;
    position: relative;
}

.modal-content h2 {
    font-size: 27px;
    margin-bottom: 10px;
}

.modal-content > p {
    color: var(--muted);
    margin-bottom: 20px;
}

.close-modal {
    position: absolute;
    right: 18px;
    top: 15px;
    border: none;
    background: transparent;
    color: white;
    font-size: 28px;
}


/* FORMS */

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
[21-11-2026 01:18] Imran: .modal-content label {
    font-size: 14px;
    color: #cbd5e1;
    margin-top: 5px;
}

.modal-content input,
.modal-content select,
.modal-content textarea {
    width: 100%;
    padding: 12px;
    background: #0b1020;
    border: 1px solid var(--border);
    color: white;
    border-radius: 9px;
    outline: none;
}

.modal-content input:focus,
.modal-content select:focus,
.modal-content textarea:focus {
    border-color: var(--purple);
}

.modal-content textarea {
    resize: vertical;
    min-height: 100px;
}

.modal-content form button {
    margin-top: 12px;
}


/* CONFIRMATION */

.confirmation-content {
    text-align: center;
}

.success-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.15);
    color: #4ade80;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
}

.confirmation-content .primary-btn,
.confirmation-content .secondary-btn {
    width: 100%;
    margin-top: 12px;
}


/* ADMIN DASHBOARD */

.admin-content {
    max-width: 700px;
}

.admin-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 25px 0;
}

.admin-stat {
    padding: 20px;
    text-align: center;
    background: var(--card-light);
    border-radius: 12px;
}

.admin-stat h3 {
    font-size: 28px;
    color: var(--purple-light);
}

.admin-stat p {
    color: var(--muted);
}

.admin-content > h3 {
    margin: 25px 0 15px;
}


/* ADMIN EVENT LIST */

.admin-event-item {
    padding: 15px;
    background: var(--card-light);
    border-radius: 12px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.admin-event-item h4 {
    margin-bottom: 5px;
}

.admin-event-item p {
    font-size: 13px;
    color: var(--muted);
}

.delete-event-btn {
    background: #ef4444;
    border: none;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
}


/* FOOTER */

.footer {
    padding: 40px 8%;
    text-align: center;
    border-top: 1px solid var(--border);
}

.footer .logo {
    justify-content: center;
    margin-bottom: 12px;
}

.footer p {
    color: var(--muted);
    margin-top: 8px;
}

.copyright {
    font-size: 13px;
}


/* RESPONSIVE DESIGN */

@media (max-width: 1000px) {

    .events-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-visual {
        width: 300px;
    }

}


@media (max-width: 700px) {

    .navbar {
        padding: 15px 5%;
    }

    .nav-links {
        gap: 12px;
        font-size: 13px;
    }

    .admin-btn {
        padding: 8px 12px;
        font-size: 13px;
    }

    .hero {
        padding: 60px 5%;
        flex-direction: column;
        text-align: center;
    }

    .hero-content > p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-visual {
        width: 100%;
        max-width: 350px;
    }

    .stats-section {
        padding: 15px 5% 40px;
        gap: 10px;
    }

    .stat-card {
        padding: 15px 8px;
    }

    .stat-card h2 {
        font-size: 26px;
    }

    .stat-card p {
        font-size: 12px;
    }

    .events-section,
    .about-section {
        padding: 50px 5%;
    }

    .section-heading h2 {
        font-size: 32px;
    }

    .event-controls {
        flex-direction: column;
    }

    .events-grid,
    .about-grid {
        grid-template-columns: 1fr;
    }

    .modal-content {
        padding: 25px 20px;
    }

}


@media (max-width: 450px) {

    .navbar {
        flex-wrap: wrap;
        gap: 12px;
    }

    .logo {
        font-size: 18px;
    }

    .nav-links {
        order: 3;
        width: 100%;
        justify-content: center;
    }

    .admin-btn {
        font-size: 12px;
    }

    .hero h1 {
        font-size: 40px;
    }

}


/* PRINT CONFIRMATION */

@media print {

    body * {
        visibility: hidden;
    }

    #confirmationModal,
    #confirmationModal * {
        visibility: visible;
    }
[21-11-2026 01:18] Imran: #confirmationModal {
        position: absolute;
        inset: 0;
        background: white;
        display: block;
    }

    .confirmation-content {
        color: black;
        background: white;
        border: 1px solid #ccc;
        margin: auto;
    }

    .close-modal,
    #printConfirmation,
    #closeConfirmation {
        display: none;
    }

}


// Sample events
const defaultEvents = [
    {
        id: "EVT001",
        title: "CodeFest 2026",
        category: "Technical",
        date: "2026-12-10",
        time: "10:00",
        venue: "Main Auditorium",
        capacity: 100,
        description: "A coding competition where students showcase their programming skills and solve exciting challenges.",
        icon: "💻"
    },
    {
        id: "EVT002",
        title: "Annual Cultural Fest",
        category: "Cultural",
        date: "2026-12-15",
        time: "16:00",
        venue: "College Ground",
        capacity: 200,
        description: "Celebrate music, dance, art and culture with students from across the campus.",
        icon: "🎭"
    },
    {
        id: "EVT003",
        title: "Web Development Workshop",
        category: "Workshop",
        date: "2026-12-08",
        time: "11:00",
        venue: "Computer Lab 2",
        capacity: 50,
        description: "Learn the fundamentals of modern web development through hands-on activities.",
        icon: "🌐"
    },
    {
        id: "EVT004",
        title: "Campus Cricket Tournament",
        category: "Sports",
        date: "2026-12-20",
        time: "09:00",
        venue: "Sports Ground",
        capacity: 80,
        description: "Participate in an exciting inter-college cricket tournament and compete with teams.",
        icon: "🏏"
    },
    {
        id: "EVT005",
        title: "AI & Technology Seminar",
        category: "Seminar",
        date: "2026-12-12",
        time: "13:00",
        venue: "Seminar Hall",
        capacity: 120,
        description: "Explore artificial intelligence, emerging technologies and their future impact.",
        icon: "🤖"
    },
    {
        id: "EVT006",
        title: "Photography Competition",
        category: "Cultural",
        date: "2026-12-18",
        time: "14:00",
        venue: "Open Campus",
        capacity: 60,
        description: "Capture campus life, creativity and beautiful moments through your lens.",
        icon: "📸"
    }
];


// Load saved events from localStorage
function getEvents() {

    const savedEvents = localStorage.getItem("campusEvents");

    if (savedEvents) {
        return JSON.parse(savedEvents);
    }

    // First time: save default events
    localStorage.setItem(
        "campusEvents",
        JSON.stringify(defaultEvents)
    );

    return defaultEvents;
}


// Save events
function saveEvents(events) {

    localStorage.setItem(
        "campusEvents",
        JSON.stringify(events)
    );

}


// Event icons by category
function getEventIcon(category) {

    const icons = {
        Technical: "💻",
        Cultural: "🎭",
        Workshop: "🌐",
        Sports: "🏏",
        Seminar: "🤖"
    };

    return icons[category]  "🎉";

}


// Format date
function formatEventDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

}


// Get registrations for an event
function getEventRegistrations(eventId) {

    const registrations = JSON.parse(
        localStorage.getItem("campusRegistrations")  "[]"
    );

    return registrations.filter(
        registration => registration.eventId === eventId
    ).length;

}


// Render events
function renderEvents(eventList = getEvents()) {

    const container = document.getElementById("eventsContainer");
    const emptyMessage = document.getElementById("emptyMessage");

    if (!container) return;

    container.innerHTML = "";

    if (eventList.length === 0) {

        emptyMessage.style.display = "block";

        return;

    }

    emptyMessage.style.display = "none";


    eventList.forEach(event => {

        const registeredCount = getEventRegistrations(event.id);

        const availableSeats = event.capacity - registeredCount;

        const isFull = availableSeats <= 0;
        [21-11-2026 01:17] Imran: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Events | Event Management Portal</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- NAVBAR -->
    <header class="navbar">
        <div class="logo">
            <span class="logo-icon">✦</span>
            CampusEvents
        </div>

        <nav class="nav-links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
        </nav>

        <button class="admin-btn" id="adminBtn">
            Admin Panel
        </button>
    </header>


    <!-- HERO SECTION -->
    <section class="hero" id="home">

        <div class="hero-content">

            <span class="hero-tag">
                ✨ YOUR CAMPUS, YOUR MOMENT
            </span>

            <h1>
                Discover Events.<br>
                <span>Make Memories.</span>
            </h1>

            <p>
                Explore exciting campus events, workshops, competitions
                and seminars. Register for your next unforgettable experience.
            </p>

            <div class="hero-buttons">
                <a href="#events" class="primary-btn">
                    Explore Events →
                </a>

                <a href="#about" class="secondary-btn">
                    Learn More
                </a>
            </div>

        </div>

        <div class="hero-visual">
            <div class="hero-card">
                <div class="hero-card-icon">🎉</div>
                <h3>Something exciting is happening!</h3>
                <p>Your next campus experience awaits.</p>
            </div>
        </div>

    </section>


    <!-- STATS SECTION -->
    <section class="stats-section">

        <div class="stat-card">
            <h2 id="totalEvents">0</h2>
            <p>Total Events</p>
        </div>

        <div class="stat-card">
            <h2 id="totalRegistrations">0</h2>
            <p>Registrations</p>
        </div>

        <div class="stat-card">
            <h2 id="upcomingEvents">0</h2>
            <p>Upcoming Events</p>
        </div>

    </section>


    <!-- EVENTS SECTION -->
    <section class="events-section" id="events">

        <div class="section-heading">
            <span class="section-tag">CAMPUS ACTIVITIES</span>

            <h2>Explore <span>Events</span></h2>

            <p>
                Find something you love and be a part of it.
            </p>
        </div>


        <!-- SEARCH AND FILTER -->
        <div class="event-controls">

            <input
                type="text"
                id="searchInput"
                placeholder="Search events..."
            >

            <select id="categoryFilter">
                <option value="all">All Categories</option>
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Workshop">Workshop</option>
                <option value="Sports">Sports</option>
                <option value="Seminar">Seminar</option>
            >

            </select>

        </div>


        <!-- EVENT CARDS WILL BE ADDED USING JAVASCRIPT -->
        <div class="events-grid" id="eventsContainer">

        </div>

        <p class="empty-message" id="emptyMessage">
            No events found.
        </p>

    </section>


    <!-- ABOUT SECTION -->
    <section class="about-section" id="about">

        <div class="section-heading">
            <span class="section-tag">ABOUT OUR PORTAL</span>

            <h2>Everything happening<br>on your <span>campus.</span></h2>
        </div>

        <div class="about-grid">
[21-11-2026 01:17] Imran: <div class="about-card">
                <div class="about-icon">📅</div>
                <h3>Discover Events</h3>
                <p>
                    Browse upcoming campus events and discover
                    activities that match your interests.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">🎟</div>
                <h3>Easy Registration</h3>
                <p>
                    Register for events with a simple form
                    and get your confirmation.
                </p>
            </div>

            <div class="about-card">
                <div class="about-icon">📊</div>
                <h3>Live Seat Updates</h3>
                <p>
                    Check available seats and registration status
                    before booking your spot.
                </p>
            </div>

        </div>

    </section>


    <!-- REGISTRATION MODAL -->
    <div class="modal" id="registrationModal">

        <div class="modal-content">

            <button class="close-modal" id="closeRegistrationModal">
                &times;
            </button>

            <h2>Register for Event</h2>

            <p id="selectedEventName">
                Event Name
            </p>

            <form id="registrationForm">

                <input type="hidden" id="eventId">

                <label for="studentName">Full Name</label>
                <input
                    type="text"
                    id="studentName"
                    placeholder="Enter your full name"
                    required
                >

                <label for="studentId">Student Registration Number</label>
                <input
                    type="text"
                    id="studentId"
                    placeholder="Enter your registration number"
                    required
                >

                <label for="studentEmail">Email Address</label>
                <input
                    type="email"
                    id="studentEmail"
                    placeholder="Enter your email"
                    required
                >

                <label for="studentCourse">Course / Branch</label>
                <input
                    type="text"
                    id="studentCourse"
                    placeholder="e.g. B.Tech CSE"
                    required
                >

                <button type="submit" class="primary-btn">
                    Confirm Registration
                </button>

            </form>

        </div>

    </div>


    <!-- CONFIRMATION MODAL -->
    <div class="modal" id="confirmationModal">

        <div class="modal-content confirmation-content">

            <div class="success-icon">✓</div>

            <h2>Registration Successful!</h2>

            <p id="confirmationDetails"></p>

            <p>
                Registration ID:
                <strong id="confirmationId"></strong>
            </p>

            <button class="primary-btn" id="printConfirmation">
                Print Confirmation
            </button>

            <button class="secondary-btn" id="closeConfirmation">
                Close
            </button>

        </div>

    </div>


    <!-- ADMIN MODAL -->
    <div class="modal" id="adminModal">

        <div class="modal-content admin-content">

            <button class="close-modal" id="closeAdminModal">
                &times;
            </button>

            <h2>Admin Dashboard</h2>

            <p>Manage campus events and registrations.</p>

            <div class="admin-stats">

                <div class="admin-stat">
                    <h3 id="adminEventCount">0</h3>
                    <p>Events</p>
                </div>

                <div class="admin-stat">
                    <h3 id="adminRegistrationCount">0</h3>
                    <p>Registrations</p>
                </div>

            </div>

            <h3>Create New Event</h3>

            <form id="eventForm">
[21-11-2026 01:17] Imran: <label for="eventTitle">Event Name</label>
                <input
                    type="text"
                    id="eventTitle"
                    placeholder="Event name"
                    required
                >

                <label for="eventCategory">Category</label>
                <select id="eventCategory" required>
                    <option value="">Select Category</option>
                    <option value="Technical">Technical</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Sports">Sports</option>
                    <option value="Seminar">Seminar</option>
                </select>

                <label for="eventDate">Event Date</label>
                <input type="date" id="eventDate" required>

                <label for="eventTime">Event Time</label>
                <input type="time" id="eventTime" required>

                <label for="eventVenue">Venue</label>
                <input
                    type="text"
                    id="eventVenue"
                    placeholder="Event venue"
                    required
                >

                <label for="eventCapacity">Maximum Participants</label>
                <input
                    type="number"
                    id="eventCapacity"
                    min="1"
                    placeholder="Maximum seats"
                    required
                >

                <label for="eventDescription">Description</label>
                <textarea
                    id="eventDescription"
                    placeholder="Describe your event..."
                    required
                ></textarea>

                <button type="submit" class="primary-btn">
                    Create Event
                </button>

            </form>

            <h3>Manage Existing Events</h3>

            <div id="adminEventsList"></div>

        </div>

    </div>


    <!-- FOOTER -->
    <footer class="footer">

        <div class="logo">
            <span class="logo-icon">✦</span>
            CampusEvents
        </div>

        <p>
            Made for students. Powered by campus spirit.
        </p>

        <p class="copyright">
            © 2026 Campus Event Management Portal
        </p>

    </footer>


    <!-- JAVASCRIPT -->
    <script src="js/app.js"></script>

</body>
</html>
[21-11-2026 01:18] Imran: /* =========================================
   CAMPUS EVENT MANAGEMENT PORTAL
   MAIN STYLESHEET
========================================= */

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #0b1020;
    color: #f1f5f9;
    line-height: 1.6;
}

button,
input,
select,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}


/* COLORS */

:root {
    --bg: #0b1020;
    --card: #141b2d;
    --card-light: #1b2438;
    --purple: #8b5cf6;
    --purple-light: #a78bfa;
    --cyan: #22d3ee;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.09);
}


/* NAVBAR */

.navbar {
    width: 100%;
    padding: 18px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(11, 16, 32, 0.92);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(15px);
}

.logo {
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    color: var(--purple-light);
    font-size: 28px;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: var(--muted);
    transition: 0.3s;
}

.nav-links a:hover {
    color: white;
}

.admin-btn {
    border: 1px solid var(--purple);
    background: transparent;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    transition: 0.3s;
}

.admin-btn:hover {
    background: var(--purple);
}


/* HERO SECTION */

.hero {
    padding: 90px 8%;
    min-height: 520px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    background:
        radial-gradient(
            circle at 80% 30%,
            rgba(139, 92, 246, 0.15),
            transparent 40%
        );
}

.hero-content {
    max-width: 650px;
}

.hero-tag,
.section-tag {
    color: var(--cyan);
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.15;
    margin: 20px 0;
}

.hero h1 span,
.section-heading h2 span {
    color: var(--purple-light);
}

.hero-content > p {
    color: var(--muted);
    max-width: 520px;
    font-size: 17px;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}


/* BUTTONS */

.primary-btn,
.secondary-btn {
    display: inline-block;
    padding: 12px 22px;
    border-radius: 10px;
    border: none;
    text-align: center;
    transition: 0.3s;
}

.primary-btn {
    color: white;
    background: linear-gradient(
        135deg,
        var(--purple),
        #6d28d9
    );
    font-weight: bold;
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.secondary-btn {
    color: white;
    background: var(--card-light);
    border: 1px solid var(--border);
}

.secondary-btn:hover {
    background: #26324a;
}


/* HERO VISUAL */

.hero-visual {
    width: 350px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:
        linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.15),
            rgba(34, 211, 238, 0.08)
        );
    border: 1px solid var(--border);
    border-radius: 30px;
    transform: rotate(2deg);
}

.hero-card {
    width: 85%;
    padding: 30px;
    background: rgba(20, 27, 45, 0.85);
    border: 1px solid var(--border);
    border-radius: 20px;
    transform: rotate(-2deg);
    text-align: center;
}

.hero-card-icon {
    font-size: 60px;
    margin-bottom: 15px;
}

.hero-card h3 {
    margin-bottom: 10px;
    font-size: 23px;
}

.hero-card p {
    color: var(--muted);
}


/* STATS */

.stats-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 8% 60px;
}
[21-11-2026 01:18] Imran: .stat-card {
    text-align: center;
    padding: 25px;
    border-radius: 16px;
    background: var(--card);
    border: 1px solid var(--border);
}

.stat-card h2 {
    font-size: 35px;
    color: var(--purple-light);
}

.stat-card p {
    color: var(--muted);
}


/* EVENTS SECTION */

.events-section {
    padding: 70px 8%;
}

.section-heading {
    text-align: center;
    margin-bottom: 40px;
}

.section-heading h2 {
    font-size: 42px;
    margin: 12px 0;
}

.section-heading > p {
    color: var(--muted);
}


/* SEARCH + FILTER */

.event-controls {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}

.event-controls input,
.event-controls select {
    padding: 14px;
    border: 1px solid var(--border);
    background: var(--card);
    color: white;
    border-radius: 10px;
    outline: none;
}

.event-controls input {
    flex: 1;
}

.event-controls input:focus,
.event-controls select:focus {
    border-color: var(--purple);
}


/* EVENTS GRID */

.events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.event-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    transition: 0.3s;
}

.event-card:hover {
    transform: translateY(-6px);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.event-card-top {
    min-height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    background:
        linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.2),
            rgba(34, 211, 238, 0.08)
        );
}

.event-card-body {
    padding: 22px;
}

.event-category {
    display: inline-block;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 20px;
    color: var(--cyan);
    background: rgba(34, 211, 238, 0.1);
    margin-bottom: 12px;
}

.event-card h3 {
    font-size: 21px;
    margin-bottom: 10px;
}

.event-description {
    color: var(--muted);
    font-size: 14px;
    margin-bottom: 15px;
}

.event-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 18px;
}

.event-seats {
    margin-bottom: 15px;
    color: var(--cyan);
    font-size: 14px;
}

.event-card .primary-btn {
    width: 100%;
}

.event-card .primary-btn:disabled {
    background: #374151;
    cursor: not-allowed;
    transform: none;
}

.empty-message {
    text-align: center;
    color: var(--muted);
    padding: 30px;
    display: none;
}


/* ABOUT */

.about-section {
    padding: 70px 8%;
    background: rgba(255, 255, 255, 0.015);
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.about-card {
    padding: 30px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 18px;
    transition: 0.3s;
}

.about-card:hover {
    transform: translateY(-5px);
}

.about-icon {
    font-size: 35px;
    margin-bottom: 15px;
}

.about-card h3 {
    margin-bottom: 10px;
}

.about-card p {
    color: var(--muted);
}


/* MODALS */

.modal {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
    overflow-y: auto;
}

.modal.active {
    display: flex;
}

.modal-content {
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 30px;
    position: relative;
}

.modal-content h2 {
    font-size: 27px;
    margin-bottom: 10px;
}

.modal-content > p {
    color: var(--muted);
    margin-bottom: 20px;
}

.close-modal {
    position: absolute;
    right: 18px;
    top: 15px;
    border: none;
    background: transparent;
    color: white;
    font-size: 28px;
}


/* FORMS */

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
[21-11-2026 01:18] Imran: .modal-content label {
    font-size: 14px;
    color: #cbd5e1;
    margin-top: 5px;
}

.modal-content input,
.modal-content select,
.modal-content textarea {
    width: 100%;
    padding: 12px;
    background: #0b1020;
    border: 1px solid var(--border);
    color: white;
    border-radius: 9px;
    outline: none;
}

.modal-content input:focus,
.modal-content select:focus,
.modal-content textarea:focus {
    border-color: var(--purple);
}

.modal-content textarea {
    resize: vertical;
    min-height: 100px;
}

.modal-content form button {
    margin-top: 12px;
}


/* CONFIRMATION */

.confirmation-content {
    text-align: center;
}

.success-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(34, 197, 94, 0.15);
    color: #4ade80;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
}

.confirmation-content .primary-btn,
.confirmation-content .secondary-btn {
    width: 100%;
    margin-top: 12px;
}


/* ADMIN DASHBOARD */

.admin-content {
    max-width: 700px;
}

.admin-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 25px 0;
}

.admin-stat {
    padding: 20px;
    text-align: center;
    background: var(--card-light);
    border-radius: 12px;
}

.admin-stat h3 {
    font-size: 28px;
    color: var(--purple-light);
}

.admin-stat p {
    color: var(--muted);
}

.admin-content > h3 {
    margin: 25px 0 15px;
}


/* ADMIN EVENT LIST */

.admin-event-item {
    padding: 15px;
    background: var(--card-light);
    border-radius: 12px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.admin-event-item h4 {
    margin-bottom: 5px;
}

.admin-event-item p {
    font-size: 13px;
    color: var(--muted);
}

.delete-event-btn {
    background: #ef4444;
    border: none;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
}


/* FOOTER */

.footer {
    padding: 40px 8%;
    text-align: center;
    border-top: 1px solid var(--border);
}

.footer .logo {
    justify-content: center;
    margin-bottom: 12px;
}

.footer p {
    color: var(--muted);
    margin-top: 8px;
}

.copyright {
    font-size: 13px;
}


/* RESPONSIVE DESIGN */

@media (max-width: 1000px) {

    .events-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-visual {
        width: 300px;
    }

}


@media (max-width: 700px) {

    .navbar {
        padding: 15px 5%;
    }

    .nav-links {
        gap: 12px;
        font-size: 13px;
    }

    .admin-btn {
        padding: 8px 12px;
        font-size: 13px;
    }

    .hero {
        padding: 60px 5%;
        flex-direction: column;
        text-align: center;
    }

    .hero-content > p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-visual {
        width: 100%;
        max-width: 350px;
    }

    .stats-section {
        padding: 15px 5% 40px;
        gap: 10px;
    }

    .stat-card {
        padding: 15px 8px;
    }

    .stat-card h2 {
        font-size: 26px;
    }

    .stat-card p {
        font-size: 12px;
    }

    .events-section,
    .about-section {
        padding: 50px 5%;
    }

    .section-heading h2 {
        font-size: 32px;
    }

    .event-controls {
        flex-direction: column;
    }

    .events-grid,
    .about-grid {
        grid-template-columns: 1fr;
    }

    .modal-content {
        padding: 25px 20px;
    }

}


@media (max-width: 450px) {

    .navbar {
        flex-wrap: wrap;
        gap: 12px;
    }

    .logo {
        font-size: 18px;
    }

    .nav-links {
        order: 3;
        width: 100%;
        justify-content: center;
    }

    .admin-btn {
        font-size: 12px;
    }

    .hero h1 {
        font-size: 40px;
    }

}


/* PRINT CONFIRMATION */

@media print {

    body * {
        visibility: hidden;
    }

    #confirmationModal,
    #confirmationModal * {
        visibility: visible;
    }
[21-11-2026 01:18] Imran: #confirmationModal {
        position: absolute;
        inset: 0;
        background: white;
        display: block;
    }

    .confirmation-content {
        color: black;
        background: white;
        border: 1px solid #ccc;
        margin: auto;
    }

    .close-modal,
    #printConfirmation,
    #closeConfirmation {
        display: none;
    }

}
[21-11-2026 01:20] Imran: /* =========================================
   CAMPUS EVENT PORTAL
   EVENTS MANAGEMENT
========================================= */

// Sample events
const defaultEvents = [
    {
        id: "EVT001",
        title: "CodeFest 2026",
        category: "Technical",
        date: "2026-12-10",
        time: "10:00",
        venue: "Main Auditorium",
        capacity: 100,
        description: "A coding competition where students showcase their programming skills and solve exciting challenges.",
        icon: "💻"
    },
    {
        id: "EVT002",
        title: "Annual Cultural Fest",
        category: "Cultural",
        date: "2026-12-15",
        time: "16:00",
        venue: "College Ground",
        capacity: 200,
        description: "Celebrate music, dance, art and culture with students from across the campus.",
        icon: "🎭"
    },
    {
        id: "EVT003",
        title: "Web Development Workshop",
        category: "Workshop",
        date: "2026-12-08",
        time: "11:00",
        venue: "Computer Lab 2",
        capacity: 50,
        description: "Learn the fundamentals of modern web development through hands-on activities.",
        icon: "🌐"
    },
    {
        id: "EVT004",
        title: "Campus Cricket Tournament",
        category: "Sports",
        date: "2026-12-20",
        time: "09:00",
        venue: "Sports Ground",
        capacity: 80,
        description: "Participate in an exciting inter-college cricket tournament and compete with teams.",
        icon: "🏏"
    },
    {
        id: "EVT005",
        title: "AI & Technology Seminar",
        category: "Seminar",
        date: "2026-12-12",
        time: "13:00",
        venue: "Seminar Hall",
        capacity: 120,
        description: "Explore artificial intelligence, emerging technologies and their future impact.",
        icon: "🤖"
    },
    {
        id: "EVT006",
        title: "Photography Competition",
        category: "Cultural",
        date: "2026-12-18",
        time: "14:00",
        venue: "Open Campus",
        capacity: 60,
        description: "Capture campus life, creativity and beautiful moments through your lens.",
        icon: "📸"
    }
];


// Load saved events from localStorage
function getEvents() {

    const savedEvents = localStorage.getItem("campusEvents");

    if (savedEvents) {
        return JSON.parse(savedEvents);
    }

    // First time: save default events
    localStorage.setItem(
        "campusEvents",
        JSON.stringify(defaultEvents)
    );

    return defaultEvents;
}


// Save events
function saveEvents(events) {

    localStorage.setItem(
        "campusEvents",
        JSON.stringify(events)
    );

}


// Event icons by category
function getEventIcon(category) {

    const icons = {
        Technical: "💻",
        Cultural: "🎭",
        Workshop: "🌐",
        Sports: "🏏",
        Seminar: "🤖"
    };

    return icons[category]  "🎉";

}


// Format date
function formatEventDate(dateString) {

    const date = new Date(dateString + "T00:00:00");

    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

}


// Get registrations for an event
function getEventRegistrations(eventId) {

    const registrations = JSON.parse(
        localStorage.getItem("campusRegistrations")  "[]"
    );

    return registrations.filter(
        registration => registration.eventId === eventId
    ).length;

}


// Render events
function renderEvents(eventList = getEvents()) {

    const container = document.getElementById("eventsContainer");
    const emptyMessage = document.getElementById("emptyMessage");

    if (!container) return;

    container.innerHTML = "";

    if (eventList.length === 0) {

        emptyMessage.style.display = "block";

        return;

    }

    emptyMessage.style.display = "none";


    eventList.forEach(event => {

        const registeredCount = getEventRegistrations(event.id);

        const availableSeats = event.capacity - registeredCount;

        const isFull = availableSeats <= 0;
[21-11-2026 01:20] Imran: const eventCard = document.createElement("div");

        eventCard.className = "event-card";


        eventCard.innerHTML = `

            <div class="event-card-top">
                ${getEventIcon(event.category)}
            </div>

            <div class="event-card-body">

                <span class="event-category">
                    ${event.category}
                </span>

                <h3>${event.title}</h3>

                <p class="event-description">
                    ${event.description}
                </p>

                <div class="event-info">

                    <span>📅 ${formatEventDate(event.date)}</span>

                    <span>🕒 ${event.time}</span>

                    <span>📍 ${event.venue}</span>

                </div>

                <div class="event-seats">
                    ${
                        isFull
                        ? "❌ All seats are booked"
                        : 🎟 ${availableSeats} seats available
                    }
                </div>

                <button
                    class="primary-btn register-btn"
                    data-event-id="${event.id}"
                    ${isFull ? "disabled" : ""}
                >
                    ${isFull ? "Registration Full" : "Register Now →"}
                </button>

            </div>

        `;


        container.appendChild(eventCard);

    });


    // Register button events
    document.querySelectorAll(".register-btn").forEach(button => {

        button.addEventListener("click", function() {

            const eventId = this.dataset.eventId;

            openRegistrationModal(eventId);

        });

    });


}


// Search and category filter
function filterEvents() {

    const searchInput = document.getElementById("searchInput");

    const categoryFilter = document.getElementById("categoryFilter");

    const searchText = searchInput.value.toLowerCase().trim();

    const selectedCategory = categoryFilter.value;


    const filteredEvents = getEvents().filter(event => {

        const matchesSearch =
            event.title.toLowerCase().includes(searchText) 
            event.description.toLowerCase().includes(searchText) 
            event.venue.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            event.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });


    renderEvents(filteredEvents);

}


// Search listener
document.getElementById("searchInput").addEventListener(
    "input",
    filterEvents
);


// Filter listener
document.getElementById("categoryFilter").addEventListener(
    "change",
    filterEvents
);