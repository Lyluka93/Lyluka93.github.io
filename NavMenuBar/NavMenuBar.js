/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function OpenResponsiveMenu() {
    var x = document.getElementById("i_NavMenuBar");
    if (x.className === "c_NavMenuBar") {
        x.className += " c_ResponsiveNavMenuBar";
    } else {
        x.className = "c_NavMenuBar";
    }
}