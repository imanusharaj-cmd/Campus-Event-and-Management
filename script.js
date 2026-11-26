
/* EVENT SEATS */

var seats = [30, 50, 25, 40];

var registrations = [];

var eventNames = [
    "Hackathon 2026",
    "Tech Fest",
    "Dance Competition",
    "Photography Contest"
];


// SELECT EVENT

function selectEvent(number) {

    document.getElementById("event").value = number;

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });

}


// REGISTER STUDENT

function registerStudent() {

    var name = document.getElementById("name").value;

    var regno = document.getElementById("regno").value;

    var email = document.getElementById("email").value;

    var eventNumber = document.getElementById("event").value;

    var message = document.getElementById("message");


    // CHECK EMPTY DETAILS

    if (name == "" || regno == "" || email == "" || eventNumber == "") {

        message.innerHTML = "Please fill all the details!";
        message.style.color = "red";

    }

    // CHECK SEATS

    else if (seats[eventNumber] == 0) {

        message.innerHTML = "Sorry! No seats are available.";
        message.style.color = "red";

    }

    // SUCCESSFUL REGISTRATION

    else {

        seats[eventNumber] = seats[eventNumber] - 1;

        document.getElementById("seats" + eventNumber).innerHTML =
        seats[eventNumber];


        // SAVE STUDENT DETAILS

        var student = {
            name: name,
            regno: regno,
            email: email,
            event: eventNames[eventNumber]
        };

        registrations.push(student);


        // SHOW SUCCESS MESSAGE

        message.innerHTML =
        "Registration Successful! Welcome " + name + "!";

        message.style.color = "green";


        // DISPLAY REGISTRATIONS

        displayRegistrations();


        // CLEAR FORM

        document.getElementById("name").value = "";

        document.getElementById("regno").value = "";

        document.getElementById("email").value = "";

        document.getElementById("event").value = "";

    }

}


// DISPLAY REGISTERED STUDENTS

function displayRegistrations() {

    var list = document.getElementById("registrationList");

    list.innerHTML = "";


    // CHECK REGISTRATIONS

    if (registrations.length == 0) {

        list.innerHTML = "<p class='empty-message'>No registrations yet.</p>";

    }

    else {

        for (var i = 0; i < registrations.length; i++) {

            var card = document.createElement("div");

            card.className = "registration-card";


            var studentName = document.createElement("h3");

            studentName.innerHTML = registrations[i].name;


            var studentReg = document.createElement("p");

            studentReg.innerHTML =
            "Registration Number: " + registrations[i].regno;


            var studentEmail = document.createElement("p");

            studentEmail.innerHTML =
            "Email: " + registrations[i].email;


            var studentEvent = document.createElement("p");

            studentEvent.innerHTML =
            "Event: " + registrations[i].event;


            var status = document.createElement("p");

            status.innerHTML = "Status: Registration Confirmed";


            // ADD DETAILS TO CARD

            card.appendChild(studentName);

            card.appendChild(studentReg);

            card.appendChild(studentEmail);

            card.appendChild(studentEvent);

            card.appendChild(status);


            // SHOW CARD ON WEBSITE

            list.appendChild(card);

        }

    }

}
