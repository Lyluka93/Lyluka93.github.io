/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function OpenResponsiveMenu() {
    var menu = document.getElementById("i_NavMenuBar");
    if (menu.className === "c_NavMenuBar") {
        menu.className += " c_ResponsiveNavMenuBar";
    } else {
        menu.className = "c_NavMenuBar";
    }
}