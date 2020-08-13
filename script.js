document.getElementById("moment").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
let currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentHour);
/*
powered by jQuery.
color coated past, present, or future time block
click the save button for each timeblock and the text for that event is saved in local storage
even if page is refreshed the saved events persist for current day.
*/
/* Cool place for a for loop function aye? 
*/


function populate_table() {
    // Get current hour. If hour is < current hour, turn it grey or add the class
    for (let i = 0; i < 24; i++) {
        $(".container").append(`<div class="row">
    <div class="col-2 mt-4 time-block t2">${i}:00 AM</div>
    <textarea id=${i} class="col-8 text"></textarea>
    <button hour=${i} class="col-1 saveBtn fa fa-calendar-check-o btn10">Save</button>
</div>`)
}
$(document).on("click", ".saveBtn", function () {
    var hour = $(this).attr("hour")
    alert($(`#${hour}`).val())
    // Take the two things we have access to and store them in local storage
    })
}

populate_table()