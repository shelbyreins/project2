function fillCard() {
    var userId = JSON.parse(localStorage.getItem("currentUser")).id;
    var date = localStorage.getItem("datePicked");
    var dateFormatted = new Date(date).format("yyyy-mm-dd");

    dateFormatted = dateFormatted.split("-");
    if (dateFormatted[1] < 10) {
        dateFormatted[1] = "0" + dateFormatted[1];
    }
    if (dateFormatted[2] < 10) {
        dateFormatted[2] = "0" + dateFormatted[2];
    }
    dateFormatted = new String(dateFormatted.join("-"));

    $.get("/api/alcoholuser/" + userId + "/" + dateFormatted, function(data) {
        var cardData = JSON.parse(JSON.stringify(data));

        $("#drink").text(cardData[0].alcoholType);
        $("#drink_quantity").text(cardData[0].count);
        $("#drink_price").text(cardData[0].price);
    });
}