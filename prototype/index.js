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
exportcode = "<style>body{text-align:center;font-family:'Segoe UI', helvetica, arial;}</style>";
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
    if (data == "text") {
        numofe = numofe + 1;
        numoft = numoft + 1;
        getSelectionText()
        document.getElementById(ev.target.id).innerHTML = y + "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"text\", \"" + numofe + "\")'></div><div class='text-edit' id='" + numofe + "' style='width: 75%;border: 1px solid rgb(187, 187, 187);border-radius: 2px;background-color: rgb(224, 224, 224);padding: 5px;border-top-right-radius: 10px;border-top-left-radius: 10px;text-align: center;margin-bottom: 5px;'><button onclick=textadd('i',numoft)><i>Italic</i></button><button onclick=textadd('b',numoft)><b>Bold</b></button><button onclick=textadd('u',numoft)><u>Underline</u></button><button onclick=textadd('s',numoft)><s>Strikethrough</s></button><button onclick=textadd('span',numoft)>Plain</button></div><div id='dd-text-edit" + numofe + "' class='outline-tt' contenteditable>This is a text box <i>Enter text here...</i></div></div>" + "<br>";
        exportcode = exportcode + "<div id='dd-text'>This is a text box. <i>Enter text here...</i></div>" + "<br>";
    }
    if (data == "photo") {
        var pic = prompt("Leave a link to your picture here",
            "INSERT PHOTO LINK HERE");
        if (pic !== null) {
            numofe = numofe + 1;
            document.getElementById(ev.target.id).innerHTML = y +
                "<div class='element-wrapper'><div class='settings-icon' onClick='settingsDialog(\"img\", \"" + numofe + "\")'></div><img id='" + numoft + "' src='" + pic + "' /></div>";
            exportcode = exportcode + "<img src='" + pic + "' /><br>";
        }
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
            document.getElementById("div1").style.backgroundColor = inputValue;
            addbgtoex(inputValue);
            swal({
                    title: "Success!",
                    text: "Your colored background has been added :)",
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
            if (inputValue === "") {
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
                showCancelButton: false,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "password"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Enter a pssword first!!");
                    return false
                }
                if (inputValue === importvar) {

                    swal("Correct!!", "Welcome Alpha Tester!", "success");
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
    var dataURI = 'https://dragon-drop-scratch.github.io/prototype/preview/?content=' + encodeURIComponent(html);
    window.open(dataURI);
}

function settingsDialog(elementType, elementId) {
    swal("Oh no!", "This feature isn't available yet!", "error");
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
    t = document.getElementById('dd-text-edit' + h).innerHTML;
    //stuff = getSelectionText();
    if (text == undefined) {
        document.getElementById('dd-text-edit' + h).innerHTML = t + "<" + type + "> style</" + type + " > ";
    } else {
        document.getElementById('dd-text-edit' + h).innerHTML = t + "<" + type + ">" + text + "</" + type + " > ";
    }
}
