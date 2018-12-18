function OpenSideBar() {
  document.getElementById("i_ShortIntroSideBar").style.width = "250px";
  document.getElementById("i_MainContent").style.marginLeft = "250px";
}

function CloseSideBar() {
  document.getElementById("i_ShortIntroSideBar").style.width = "0";
  document.getElementById("i_MainContent").style.marginLeft= "0";
}