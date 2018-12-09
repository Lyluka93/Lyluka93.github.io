function OpenMenuTabs(evt, MenuTabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("c_MenuTabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("c_MenuTabLinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" c_ActualPageNavMenuButton", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(MenuTabName).style.display = "block";
  evt.currentTarget.className += " c_ActualPageNavMenuButton";
  
  //Mark active tab menu item
  
}