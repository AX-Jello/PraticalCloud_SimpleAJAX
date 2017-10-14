$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: { userId: '1' },
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index,element) {
                var row = $("<div>").addClass("tableRow")
                var cellId = $("<div>").addClass("tableCell").html(element.id)
                var cellTitle = $("<div>").addClass("tableCell").html(element.title)
                var cellBody = $("<div>").addClass("tableCell").html(element.body)

                row.append(cellId, cellTitle, cellBody)
                $(".tableBody").append(row)
            }
            )
        }
    })
    
})

$("button").click(function(){
    var id = $("input").val().toString()
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: { userId: id },
        dataType: 'json',
        success: function (data) {
            $("h1").text("User ID: ")
            $("h1").append(id)
            $(".tableCell").remove()
            var row = $("<div>").addClass("tableRow")
            var cellId = $("<div>").addClass("tableCell").html("ID")
            var cellTitle = $("<div>").addClass("tableCell").html("Title")
            var cellBody = $("<div>").addClass("tableCell").html("Body")
            row.append(cellId, cellTitle, cellBody)
            $(".tableBody").append(row)
            $.each(data, function(index,element) {
                var row = $("<div>").addClass("tableRow")
                var cellId = $("<div>").addClass("tableCell").html(element.id)
                var cellTitle = $("<div>").addClass("tableCell").html(element.title)
                var cellBody = $("<div>").addClass("tableCell").html(element.body)

                row.append(cellId, cellTitle, cellBody)
                $(".tableBody").append(row)
            }
            )

            if ( data == "" )
                alert("This ID is not exist!")
        }
    })
})