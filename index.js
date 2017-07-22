$(document).ready(function() {
    // write
    // /data/chat/set/<something>
    //
    // read
    // /data/chat
    var link = "http://158.108.165.223/data/chat/";

    var enter = function(){
        var message = $('#msg').val();
        $.ajax({
            url: link + "set/" + message
        }).done(function() {
            $('#msg').val('');
        }).fail(function () {
            console.error("something wrong");
        });
    }

    $('#msg').keyup(function (e) {
        if(e.originalEvent.code === "Enter"){
            enter();
        }
    })

    $('#sent').click(enter);
    
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
