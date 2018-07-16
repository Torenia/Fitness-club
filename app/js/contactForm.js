// The modal window of the form contacts

var formModal = document.getElementById("form-modal");

function formModalAnsver(e) {

    e.preventDefault();

    formModal.style.display = "block";

    var name = $("#form-name").val();
    var phone = $("#form-phone").val();

    if ((name == null || name === "") && (phone == null || phone === "")) {
        $("#form-ansver").html("Please enter your name and phone number!");
        return false;
    }
    else if (name == null || name === "") {
        $("#form-ansver").html("Please enter your name!");
        return false;
    }
    else if (phone == null || phone === "") {
        $("#form-ansver").html("Please enter your phone number!");
        return false;
    }
    else {
        $("#form-ansver").html("Thank you! We will contact you");
        return false;
    }

    // To send data to the server

// else {
//         $.ajax({
//             url: "url",
//             method: "POST",
//             data: JSON.stringify({
//                 name: $("#form-name").val(),
//                 phone: $("#form-ansver").val(),
//                 mail: $("#form-mail").val()
//             }),
//             success: function () {
//                 $("#form-ansver").html("Thank you! We will contact you");
//             },
//             error: function () {
//                 console.log("Server error");
//             }
//
//         });
//     }
}

function closeFormModalAnsver() {
    formModal.style.display = "none";
}


$("#form-submit").on("click", formModalAnsver);






