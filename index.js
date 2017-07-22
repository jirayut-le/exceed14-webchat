$(document).ready(function() {
    // write
    // /data/chat/set/<something>
    //
    // read
    // /data/chat
    var link = "http://158.108.165.223/data/chat/";

    $('#sent').click(function (data) {
        var message = $('#msg').val();
        $.ajax({
            url: link + "set/" + message
        }).done(function() {
            console.log("successful");
        }).fail(function () {
            console.error("something wrong");
        });
    });
    
    var temp = "";

    setInterval(function() {
        $.ajax({
            url: link
        }).done(function (data) {
            if (temp !== data) {
                // result คือ id ของ component ที่จะโชว์นะครับ
                $('#result').val($('#result').val() + "\n" + data);
                temp = data;
                $('#result').scrollTop = $('#result').scrollHeight;
            }
        }).fail(function (data) {
            console.error(data);
        });
    }, 1000 * 2);
});
