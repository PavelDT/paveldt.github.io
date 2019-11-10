// this cuntion ensures that the jQuerry library and the rest of the webpage
// has loaded before any of the functions are called.
$( document ).ready(function() {

    // check if a session variable is set to dark mode.
    // if it's set, switch to dark mode, if not default to light mode.
    var mode = sessionStorage.getItem("colourMode");
    if (mode !== null && mode === "dark") {
        // load dark mode by switching what css file is used
        $('link[href="css/tutorial-light.css"]').attr('href','css/tutorial-dark.css');
        // change colour mode button's text
        $("#dark-mode").text("Light Mode");
    }


    // this function will toggle the menu to Hide
    // whenever  the toggle-menu button is clicked
    $("#toggle-menu").click(function(){
        var text = $("#toggle-menu").text().toLowerCase();
        if (text === "hide menu") {
            $(".sidebar").hide();
            $("#toggle-menu").text("Show Menu");
        } else {
            $(".sidebar").show();
            $("#toggle-menu").text("Hide Menu");
        }
    });

    // enables switching of colour mode
    // uses a javascript session to persist the switch
    // so if a page is reloaded, the correct theme is used.
    $("#dark-mode").click(function(){
        var text = $("#dark-mode").text().toLowerCase();
        if (text === "dark mode") {
            // switch to dark mode
            $('link[href="css/tutorial-light.css"]').attr('href','css/tutorial-dark.css');
            $("#dark-mode").text("Light Mode");
            // set a variable that will be checked when the page loads so the
            // correct theme is loaded
            sessionStorage.setItem("colourMode","dark");
        } else {
            // switch to light mode
            $('link[href="css/tutorial-dark.css"]').attr('href','css/tutorial-light.css');
            $("#dark-mode").text("Dark Mode");
            // set a variable that will be checked when the page loads so the
            // correct theme is loaded
            sessionStorage.setItem("colourMode","light");
        }
    });
});

function notYetAdded() {
  alert("Sorry, this tutorial isn't available yet. Checkout the IntelliJ tutorial out for a demo!");
}
