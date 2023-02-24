// Toggle menu burger code
let menuBurger = document.getElementById("menu-burger");
let menuList = document.getElementById("menu-container-mobile");
menuList.style.display = "none";

menuBurger.addEventListener("click", () => {
    let menuList = document.getElementById("menu-container-mobile");
    let menuIcon = document.getElementById("burger-menu-icon");
    let crossIcon = document.getElementById("cross-menu-icon");

    if (menuList.style.display === "flex") {
        menuList.style.display = "none";
        menuIcon.style.display = "block";
        crossIcon.style.display = "none";
    } else {
        menuList.style.display = "flex";
        menuIcon.style.display = "none";
        crossIcon.style.display = "block";
    }
});

// Find device is IOS or not
const isDeviceIOS = () => {
    if (navigator)
        return (
            !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
        );
    return false;
};

// Replace Play Store link with app store link if IOS
const updateDownloadLink = () => {
    if (isDeviceIOS()) {
        let btn = document.getElementById("teachmint-top-download-btn");
        if (btn)
            btn["href"] =
                "https://apps.apple.com/in/app/teachmint/id1544210597";
    }
};

updateDownloadLink();

let studyImg = document.getElementById("study-material-img");
if (studyImg) {
    let studyImgCon = document.getElementById("study-material-con");

    if (studyImg.width() > studyImg.height()) {
        studyImgCon.style.setProperty("width", "100%", "important");
    } else if (studyImg.width() < studyImg.height()) {
        studyImgCon.style.setProperty("heig", "100%", "important");
    } else {
        //image width and height are equal, therefore it is square.
    }
}
