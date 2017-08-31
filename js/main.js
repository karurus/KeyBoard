function main() {
    var shift = false;
    var caps = false;

    $("td").hover(function () {
        $(this).css('cursor','pointer');
    }, function() {
        $(this).css('cursor','auto');
    });

    $("td").click(function () {
        var input = $(this).text();
        if (input == "Shift") {
            if (shift == true) {
                $(this).css('background-color', '#FFFFFF');
                shift = false;
            } else {
                $(this).css('background-color', '#DDDDDD');
                shift = true;
            }
        }
        else if (input == "Del") {
            var txt = document.getElementById("input").value;
            document.getElementById("input").value = txt.substring(0,txt.length-1);
            
        }
        else if (input == "Caps") {
            if (caps == true) {
                $(this).css('background-color', '#FFFFFF');
                caps = false;
            } else {
                $(this).css('background-color', '#DDDDDD');
                caps = true;
            }
        }
        else if (input =="Space"){
            var space = " ";
            document.getElementById("input").value = document.getElementById("input").value+space;
        }
        else if (input == "Enter"){
            var txt = "OK";
            document.getElementById("input").value = txt;
        }
        else {
            $("#shift").css("background-color", "#FFFFFF");
            if (shift == true || caps == true) {
                input = input.toUpperCase();
            } else {
                input = input.toLowerCase();
            }
            if(document.getElementById("input").value=="OK")
                {
                    document.getElementById("input").value="";
                }
            var output = document.getElementById("input").value+ input;
            document.getElementById("input").value = output;
            shift = false;
        }
        
    });
}

$(document).ready(function() {
    main();
});