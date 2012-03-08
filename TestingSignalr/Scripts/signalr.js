$(function () {
    // Proxy created on the fly
    var chat = $.connection.chatHub;

    // Declare a function on the chat hub so the server can invoke it
    chat.broadcast = function (message) {
        $('#messages').append('<li>' + message + '</li>');
    };

    $("#broadcast").click(function () {
        // Call the send method on the server
        chat.send($('#msg').val());
    });

    // Start the connection
    $.connection.hub.start();
});