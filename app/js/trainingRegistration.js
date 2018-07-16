// Schedule

$(function () {
    $.getJSON('../data/schedule.json', function (data) {
        var schedule = '<div class="training__schedule">';
        $.each(data, function (key, trainingAll) {
            schedule += '<div class="training__box">';
            schedule += '<h3 class="training__week-day">' + trainingAll.day + '</h3>';

            $.each(trainingAll.training, function (key, trainingInfo) {

                schedule += '<ul class="training__list" data-places =' + trainingInfo.freePlaces + ' ' + 'data-id =' + trainingInfo.uniqueId + '>';
                schedule += '<li>' + trainingInfo.name + '</li>';
                schedule += '<li>' + trainingInfo.time + '</li>';
                schedule += '<li>' + trainingInfo.trainer + '</li>';
                schedule += '<li>' + 'All places: ' + trainingInfo.allPlaces + '</li>';
                schedule += '<li>' + 'Free places: ' + trainingInfo.freePlaces + '</li>';
                schedule += '</ul>';
            });
            schedule += '</div>';
        });
        schedule += '</div>';

        $('#training-box').html(schedule);
        registration();
    });

});


//The modal window for free places

var Modal = document.getElementById("modal-window");

function showModalWindow() {
    Modal.style.display = "block";
}

function closeModalWindow() {
    Modal.style.display = "none";
}


// The modal window for not free places

var preventionModal = document.getElementById("prevention-modal");

function modalPrevention() {
    preventionModal.style.display = "block";
}

function closeModalPrevention() {
    preventionModal.style.display = "none";
}


// The ansver modal window

var ansverModal = document.getElementById("ansver-modal");

function modalAnsver() {
    ansverModal.style.display = "block";
}

function closeModalAnsver() {
    ansverModal.style.display = "none";
    window.location.reload();
}

window.onclick = function (event) {
    if (event.target === ansverModal || event.target === preventionModal || event.target === Modal || event.target === formModal || event.target === personalFormModal) {
        event.target.style.display = "none";
    }
};


// Buy a subscription

$('.subscription-box__subscription').on('click', function () {
    showModalWindow();
});


// Registration for the training

function registration() {
    $('.training__list').on('click', function () {
        if (parseInt($(this).attr('data-places')) === 0) {
            modalPrevention();
        }
        else {
            showModalWindow();
            var id = parseInt($(this).attr('data-id'));
            $('#submit').on('click', function () {
                var name = $("#name").val();
                var phone = $("#phone").val();
                var mail = $("#email").val();
                console.log("Send on server:", "User name: " + name, "User phone: " + phone, "User email: " + mail, "Training id: " + id);
            });
        }
    });
}


// Form conditions

$("#submit").on("click", formConditions);

function formConditions() {

    var name = $("#name").val();
    var phone = $("#phone").val();

    if ((name == null || name === "") && (phone == null || phone === "")) {
        $("#warning").html("Please enter your name and phone number!");
        return false;
    }
    else if (name == null || name === "") {
        $("#warning").html("Please enter your name!");
        return false;
    }
    else if (phone == null || phone === "") {
        $("#warning").html("Please enter your phone number!");
        return false;
    }
    else {
        closeModalWindow();
        modalAnsver();
        return false;
    }
}


// The modal window for personal training form

var personalFormModal = document.getElementById("personal-modal");

function personalFormModalAnver(e) {

    e.preventDefault();

    personalFormModal.style.display = "block";

    var name = $("#personal-name").val();
    var phone = $("#personal-phone").val();
    var time = $("#preferred-time").val();

    if ((name == null || name === "") && (phone == null || phone === "") && (time == null || time === "")) {
        $("#personal-ansver").html("Please enter your name, phone number and preferred time!");
        return false;
    }
    else if (name == null || name === "") {
        $("#personal-ansver").html("Please enter your name!");
        return false;
    }
    else if (phone == null || phone === "") {
        $("#personal-ansver").html("Please enter your phone number!");
        return false;
    }
    else if (time == null || time === "") {
        $("#personal-ansver").html("Please enter preferred time!");
        return false;
    }
    else {
        $("#personal-ansver").html("Thank you! We will contact you");
        return false;
    }

}

function closePersonalFormModalAnsver() {
    personalFormModal.style.display = "none";
}


$("#personal-submit").on("click", personalFormModalAnver);





