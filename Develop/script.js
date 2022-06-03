$(document).ready(function () {
    //Save data to the local storage using Save Button
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        console.log(time)
        var value = $(this).siblings(".description").val();

        console.log(value)
        window.localStorage.setItem(time, value);
        //clear time-block text area
        $(this).siblings(".description").val("");
    });

    //current date and time
    const today = moment();
    console.log("Today's date is: " + today.format('MM-DD-YYYY')
    );
    //display current day and time
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = "Today's date is:  " + today.format('MM-DD-YYYY');

    // let currentHour = moment().format("hA");
    var generateBtn = document.querySelector("#generate");
    let currentHour = moment().format("hA"); //formating hours

    // look for current hour and diplay on the schedule
    for (let i of $(".hour")) {
        const presentHour = i.textContent.trim();
        console.log(currentHour + " " + presentHour);

        if (currentHour == presentHour) {
            i.classList.add("present");

            //display future hours
            const futureHour = i.parentElement.nextElementSibling.firstElementChild;
            futureHour.classList.add("future");
            // console.log(futureHour)
        }
    // console.log(presentHour.trim());
    }
    //button function to clear local storage

    $("#clearFieldsBtn").click(function (event) {
        $("time-block").val("");
        localStorage.clear();

    });
    //loop for the hours time blocks

    $(".time-block").each(function () {

        var blockHour = parseInt($(this).attr("id").split("hours")[1]);
        // console.log(blockHour)
        if (currentHour == blockHour) {
            $(this).addClass("present");
            $(this).children(".description").addClass("text")
        } else if (currentHour > blockHour) {
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (currentHour < blockHour) {
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        //set items in local storage
        $(".saveBtn").click(function (event) {
            event.preventDefault();
            var value = $(this).siblings(".time-block").val();
            console.log(value)

            var time = $(this).parent().attr("id").split("-")[1];

            console.log(time)
            localStorage.setItem(time, value);

        });

        // load data from Local Storage
        $("#hour9 .time-block").val(localStorage.getItem("hour9"));
        $("#hour10 .time-block").val(localStorage.getItem("hour10"));
        $("#hour11 .time-block").val(localStorage.getItem("hour11"));
        $("#hour12 .time-block").val(localStorage.getItem("hour12"));
        $("#hour13 .time-block").val(localStorage.getItem("hour13"));
        $("#hour14 .time-block").val(localStorage.getItem("hour14"));
        $("#hour15 .time-block").val(localStorage.getItem("hour15"));
        $("#hour16 .time-block").val(localStorage.getItem("hour16"));
        $("#hour17 .time-block").val(localStorage.getItem("hour17"));

    });






    // let addEventListener=button("click"col-md-1-saveBtn");

    //set items in local storage

    //button function to clear local storage and delete 
    // window.localStorage.setItem('add-another-tiem-to-ls').addEventListener("click", function()){

    //check the time if it is past, present or future
    // if (blockHour < currentHour) {
    //     $(this).addClass("past");
    //     $(this).removeClass("present");
    //     $(this).removeClass("future");
    // }
    // else if (blockHour === currentHour) {
    //     $(this).removeClass("past");
    //     $(this).addClass("present");
    //     $(this).removeClass("future");
    // }
    // else {
    //     $(this).removeClass("past");
    //     $(this).removeClass("present");
    //     $(this).addClass("future");
    // }


    //     localStorage.setItem('users')
    //     JSON.stringify({name:""})

    //     updateUI()
    // )}

    // To display the correct color
    // 1. for each div with class hour add data-time equal with that hour
    // function classChanger() {

    //     for (let i = 0; i > 24; i++) {
    //         if (i > date_time.getHours) {
    //             ("<div>").addClass("future")
    //         } if (i < date_time.getHours) {
    //             ("<div>").addClass("past")
    //         } if (i = date_time.getHours) {
    //             ("<div>").addClass("present")
    //         }
    //     }
    // }
    // 2. when app loads select all items with the class hour

    // 2.1 check for each of the element what is data-time and compare with current time; then 
    //     based on that display the color of the item
    // Adding/removing notes
    // 1. When adding a not create an object with key the time of that note and save it in the localstorage
    // before saving the object you need to stringify it
    // 2. When retrieving data just select data from local storage and map it based on the key on the screen
    // when retrievin data you need to use JSON.parse to be able to interact with that data
    // 3. When deleting data just retrieve items from localstorage, filter the data by 
    //    removing the item, then adding that data back to local storage

});