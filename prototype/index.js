function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Set variables:
var exportcode = "";
//exportcode.innerHTML = "<style>body{font-family:helvetica;}</style>";
exportcode = "<style>body{color:black;text-align:center;font-family:'Segoe UI', helvetica, arial;}</style>";
var elementslint = "";
var textelement = "";
var numofe = 0;
var numoft = 0;
//end of set variables.

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var y = document.getElementById(ev.target.id).innerHTML;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("The data is: " + data);
    if (data == "text") {
        numofe = numofe + 1;
        numoft = numoft + 1;
        getSelectionText()
        document.getElementById(ev.target.id).innerHTML = y + "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"title\", \"" + numofe + "\")'></div><div class='text-edit" + numoft + "' id='" + numofe + "' style='width: 75%;border: 1px solid rgb(187, 187, 187);border-radius: 2px;background-color: rgb(224, 224, 224);padding: 5px;border-top-right-radius: 10px;border-top-left-radius: 10px;text-align: center;margin-bottom: 5px;'><button onclick=textadd('i',numoft)><i>Italic</i></button><button onclick=textadd('b',numoft)><b>Bold</b></button><button onclick=textadd('u',numoft)><u>Underline</u></button><button onclick=textadd('s',numoft)><s>Strikethrough</s></button><button onclick=textadd('span',numoft)>Plain</button></div><div id='dd-text-edit" + numofe + "' class='outline-tt' contenteditable>This is a text box <i>Enter text here...</i></div></div>" + "<br>";
        exportcode = exportcode + "<div id='dd-text" + numoft + "'><i></i></div>" + "<br>";
    }
    if (data == "title") {
        numofe = numofe + 1;
        numoft = numoft + 1;
        getSelectionText()
        document.getElementById(ev.target.id).innerHTML = y + "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"text\", \"" + numofe + "\")'></div><div class='text-edit" + numoft + "' id='" + numofe + "' style='width: 75%;border: 1px solid rgb(187, 187, 187);border-radius: 2px;background-color: rgb(224, 224, 224);padding: 5px;border-top-right-radius: 10px;border-top-left-radius: 10px;text-align: center;margin-bottom: 5px;'><button onclick=textadd('i',numoft)><i>Italic</i></button><button onclick=textadd('b',numoft)><b>Bold</b></button><button onclick=textadd('u',numoft)><u>Underline</u></button><button onclick=textadd('s',numoft)><s>Strikethrough</s></button><button onclick=textadd('span',numoft)>Plain</button></div><div id='dd-text-edit" + numofe + "' class='outline-tt' style='font-size: 36px;' contenteditable>Title</div></div>" + "<br>";
        exportcode = exportcode + "<div  style='font-size: 36px;' id='dd-text" + numoft + "'>Title</div>" + "<br>";
    }
    if (data == "photo") {
        swal({
            title: "Add a Picture",
            text: "Enter the link to the photo you want.",
            type: "input",
            inputType: "url",
            showCancelButton: true,
            closeOnConfirm: false
        }, function(value) {
            if (value === false) return false;
            if (value === "" || (value.indexOf("http://")  == -1 && value.indexOf("https://") == -1)) {
                swal.showInputError("Enter a valid URL.");
                return false
            }
            numofe = numofe + 1;
            document.getElementById(ev.target.id).innerHTML = y + 
                "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"img\", \"" + numofe + "\")'></div><img id='" + numoft + "' src='" + value + "' /></div>";
            exportcode = exportcode + "<img src='" + value + "' /><br>";
            swal.close();
        });
    }
    if (data == "ytembed") {
        swal({
                title: "Youtube Embed",
                text: "Enter a Youtube video ID",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "oykOAfgbiZ4"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Please enter a Youtube video ID.");
                    return false
                }
                numofe = numofe + 1;
                document.getElementById(ev.target.id).innerHTML = y + 
                    "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"ytembed\", \"" + numofe + "\")'></div><iframe id='" + numoft + "' width=560 height=315 src=https://www.youtube.com/embed/" +
                    inputValue + " frameborder=" + 0 + " allowfullscreen><\/iframe></div>";
                exportcode = exportcode +
                    "<iframe width=560 height=315 src=https://www.youtube.com/embed/" +
                    inputValue + " frameborder=" + 0 + " allowfullscreen><\/iframe><br>";
                swal({
                        title: "Yay!",
                        text: "Element added!",
                        type: "success",
                        timer: 3000,
                        showConfirmButton: true
                    });
            });
    }
    if (data == "html") {
        swal({
                title: "Embed code",
                text: "Enter some code for your site",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "<!DOCTYPE html>"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Enter some code!");
                    return false
                }
            numofe = numofe + 1
                 document.getElementById(ev.target.id).innerHTML = y + "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"codeembed\", \"" + numofe + "\")'></div><div id='" + numofe + "' " + inputValue + "</div>";
                exportcode = exportcode + inputValue + "<br>";
                swal({
                        title: "Success!",
                        text: "Element added!",
                        type: "success",
                        timer: 3000,
                        showConfirmButton: true
                    });
            });
    }

    if (data == "link") {
        var linkie = prompt("Enter the website address", "http://");
        var linkietext = prompt("What should this link say?")
         document.getElementById(ev.target.id).innerHTML = y + "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"link\", \"" + numofe + "\")'></div><a id='" + numofe + "' href='" +
            linkie + "' > " + linkietext + " <\/a></div>";
        exportcode = exportcode + "<a  href=" + linkie +
            ">" + linkietext + "<\/a><br>";
    }
}

function bgcolask() {
    swal({
            title: "Background Color",
            text: "Enter a HEX value or a color name.",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "#00a2df"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("Please enter a color!");
                return false
            }
            document.getElementById("div1").style.backgroundColor =  inputValue;
            addbgtoex(inputValue);
            swal({
                    title: "Success!",
                    text: "Your background color has been updated",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
        });
}

function faviconask() {
    swal({
            title: "Favicon",
            text: "Please leave a link to a favicon. If the file does not end with .ico , then the favicon will not change.",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "favicon.ico"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue == "" || (inputValue.indexOf("http://") == -1 || inputValue.indexOf("https://") == -1 || inputValue.indexOf("www") == -1)) {
                swal.showInputError("Enter a valid link!");
                return false
            }
            changeFavicon(inputValue);
            swal({
                    title: "Success!",
                    text: "Element added!",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
        });
}

function changeFavicon(link) {
    var $favicon = document.querySelector('link[rel="icon"]');
    if ($favicon !== null) {
        $favicon.href = link;
    } else {
        $favicon = document.createElement("link");
        $favicon.rel = "icon";
        $favicon.href = link;
        document.head.appendChild($favicon);
    }
}

function exportdacode() {
    prompt("Click CTRL+C or CMND+C to copy.", exportcode);
}

function getCode() {
    return exportcode;
}

function enter() {
    var user = getCookie("pass");
    if (user == "") {
        swal({
                title: "Password",
                text: "Enter the password to continue",
                type: "input",
                inputType: "password",
                showCancelButton: false,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "password"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Enter a pssword first!");
                    return false
                }
                if (inputValue === importvar) {

                    swal("Correct!", "Welcome Alpha Tester!", "success");
                    setCookie("pass", "true", "1");
                } else {
                    swal.showInputError("Password incorrect");
                    return false
                }
            });
    }
}

function addbgtoex(bgcolaskit) {
    exportcode = exportcode + "<style>body{background-color: " + bgcolaskit +
        " !important;}<\/style>";
}

function themeask() {
    swal({
            title: "Choose a Theme",
            text: "Themes: 'Raspberry', 'Peace', and 'DragonDrop'",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Enter a Theme name"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "" || !(inputValue == "DragonDrop" || inputValue == "Peace" || inputValue == "Raspberry")) {
                swal.showInputError("Enter a valid theme!");
                return false
            }
            swal(
                "This function is not available!",
                //"You wrote: " + inputValue,
                "",
                "error");
        });
}

function templates() {
    swal("Oh no!", "Feature not available!", "error");
}

function submit() {
    swal("Oh no!", "Feature not available!", "error");
}

function closedialogue() {
    document.getElementById('dialogue').style.visibility = 'hidden';
    alertedtext = "";
}

function alert2(alertedtext) {
    document.getElementById('dialogue').style.visibility = 'visible';
    document.getElementById('dialoguetext').innerHTML = alertedtext;
}

function previewIt() {
    var html = exportcode;
    var dataURI = 'data:text/html, ' + html;
    window.open(dataURI);
}

function settingsDialog(elementType, elementId) {
    // text, img, ytembed, codeembed, link
    window.open('settings?rel=' + String(elementType) + "&id=" + String(elementId))
}

var confirmOnPageExit = function(e) {
    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = 'Woah! You have unsaved changes.';

    // For IE6-8 and Firefox prior to version 4
    if (e) {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;
};
window.onbeforeunload = confirmOnPageExit;
function textadd(type, h, text) {
    t = $('dd-text-edit' + h).html();
    //stuff = getSelectionText();
    if (text == undefined) {
        $('dd-text-edit' + h).html(t + "<" + type + "> style</" + type + " > ");
    } else {
        $('dd-text-edit' + h).html(t + "<" + type + ">" + text + "</" + type + " > ");
    }
}
