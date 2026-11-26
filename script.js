function registerStudent() {

    // Get Student Details

    var name = document.getElementById("name").value;

    var regno = document.getElementById("regno").value;

    var email = document.getElementById("email").value;

    var event = document.getElementById("event").value;


    // Check Details

    if (name == "" || regno == "" || email == "" || event == "") {

        document.getElementById("message").innerHTML =
        "Please fill all the details!";

    }

    else {

        document.getElementById("message").innerHTML =
        "Registration Successful! Welcome " + name +
        ". You registered for " + event;

    }

}
