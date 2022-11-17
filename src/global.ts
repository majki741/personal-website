export let isDarkMode: boolean;

export function turnDarkMode(): void {
    let i=0;
    isDarkMode = !isDarkMode;
    console.log("Dark Mode changed to " + isDarkMode);
    let mainApp = document.querySelector(".container");
    let navBar = document.querySelector(".nav");
    let navItem = document.querySelectorAll(".nav-item");
    let linkIcon = document.querySelectorAll(".linkIcon")
    let portfolioThumbnail = document.querySelectorAll("[id='portfolioThumbnail']");
    let menu = document.getElementById("menu");
    //let menu = document.querySelector("#matMenu");
    console.log(navItem)
    if(mainApp?.classList.contains("darkMode")){
      document.body.style.backgroundColor = '';
      navBar?.classList.remove("navDarkMode");
      menu?.classList.remove("darkMode");
      for (i=0;i <linkIcon.length;i++) {
        linkIcon[i].classList.remove("darkMode");
      }
      for (i=0;i <navItem.length;i++) {
        navItem[i].classList.remove("navDarkMode");
      }
      for (i=0;i <portfolioThumbnail.length;i++) {
        portfolioThumbnail[i].classList.remove("portfolioDarkMode");
      }
      mainApp.classList.remove("darkMode");
    }else {
      document.body.style.backgroundColor = '#5a5a5a';
      mainApp?.classList.add("darkMode");
      menu?.classList.add("darkMode");
      for (i=0;i <navItem.length;i++) {
        navItem[i].classList.add("navDarkMode");
      }
      for (i=0;i <linkIcon.length;i++) {
        linkIcon[i].classList.add("darkMode");
      }
      for (i=0;i <portfolioThumbnail.length;i++) {
        portfolioThumbnail[i].classList.add("portfolioDarkMode");
      }
      navBar?.classList.add("navDarkMode");}
      console.log(mainApp?.classList);
    }