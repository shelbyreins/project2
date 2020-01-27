function fillCard() {
    var userId = JSON.parse(localStorage.getItem("currentUser")).id;
    console.log("User id: " + userId);
    var date = localStorage.getItem("datePicked");
    var dateFormatted = new Date(date).format("yyyy-mm-dd");
    console.log("Formatted date: " + dateFormatted);

    dateFormatted = dateFormatted.split("-");
    if (dateFormatted[1] < 10) {
        dateFormatted[1] = "0" + dateFormatted[1];
    }
    if (dateFormatted[2] < 10) {
        dateFormatted[2] = "0" + dateFormatted[2];
    }
    dateFormatted = dateFormatted.join("-");

    $.get("/api/alcoholuser/" + userId + "/" + dateFormatted, function(data) {
        console.log("cardData: " + data);
    })
}