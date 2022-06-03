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

});