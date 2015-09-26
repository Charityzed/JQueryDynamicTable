function addRow() {
    $("table").append("<tr><td  class='editable'>" +
        "</td><td  class='editable'></td><td><a href='#' onclick='addRow()'>" +
        "<span class='glyphicon glyphicon-plus' aria-hidden='true'></a>" +
        "<a href='#' onclick='deleteRow()'><span class='glyphicon glyphicon-trash' aria-hidden='true'>" +
        "</span></a><a onclick='editRow(this)'><span class='glyphicon glyphicon-edit' aria-hidden='true'>" +
        "</span></a></td></tr>");
}
function deleteRow() {

    $("a").click(function () {
        $(this).closest("tr").remove();

    });

}
function editRow(data) {

$(data).parent().parent().children("td:nth-child(1), td:nth-child(2)").attr("contentEditable", true);

}