function fillCard() {
    var userId = JSON.parse(localStorage.getItem("currentUser")).id;
    console.log("User id: " + userId);
    var date = localStorage.getItem("datePicked");
    var dateFormatted = new Date(date).format("yyyy-mm-dd");
    // console.log("Formatted date: " + dateFormatted);

    dateFormatted = dateFormatted.split("-");
    if (dateFormatted[1] < 10) {
        dateFormatted[1] = "0" + dateFormatted[1];
    }
    if (dateFormatted[2] < 10) {
        dateFormatted[2] = "0" + dateFormatted[2];
    }
    dateFormatted = new String(dateFormatted.join("-"));
    console.log("Formatted Date: " + dateFormatted);

    $.get("/api/alcoholuser/" + userId + "/" + dateFormatted, function(data) {
        console.log("cardData: " + JSON.stringify(data));
        var cardData = JSON.parse(JSON.stringify(data));
        console.log(cardData[0].alcoholType);
        

        $("#drink").text(cardData[0].alcoholType);
        $("#drink_quantity").text(cardData[0].count);
        $("#drink_price").text(cardData[0].price);
    });
}