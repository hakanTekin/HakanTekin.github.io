document.getElementById("github").onclick = () => {

};
document.getElementById("linkedIn").onclick = () => {
    window.open("https://www.linkedin.com/in/hakan-tekin", "_blank");
}
document.getElementById("gmail").onclick = () => {
    window.location = "mailto: hakan.ahmet.tekin@gmail.com";
}

document.onload = start();

function start() {
    var mariovsky = document.getElementById("mariovsky");
    mariovsky.onmouseover = () => {
        var vid = mariovsky.getElementsByTagName("video");
        for (x of vid) {
            x.play();
        }
    }
    mariovsky.onmouseout = () => {
        var vid = mariovsky.getElementsByTagName("video");
        for (x of vid) {
            x.pause();
            x.currentTime = 0;
        }
    }
    var cityscape = document.getElementById("cityscape");
    cityscape.onmouseover = () => {
        var vid = cityscape.getElementsByTagName("video");
        for (x of vid) {
            x.play();
        }
    }
    cityscape.onmouseout = () => {
        var vid = cityscape.getElementsByTagName("video");
        for (x of vid) {
            x.pause();
            x.currentTime = 0;
        }
    }
}

function createCard(imagePath, cardClass, coverClass, titleClass, subtitleClass, cardTitle, cardSubtitle, sectionName) {
    var cardDiv = document.createElement("div");
    cardDiv.style.backgroundImage = imagePath;
    cardDiv.className = cardClass;

    var coverDiv = document.createElement("div");
    coverDiv.className = coverClass;
    var cardTitleP = document.createElement("p");
    cardTitleP.className = titleClass;
    cardTitleP.innerHTML = cardTitle;

    var cardSubtitleP = document.createElement("p");
    cardSubtitleP.className = subtitleClass;
    cardSubtitleP.innerHTML = cardSubtitle;

    coverDiv.appendChild(cardTitleP);
    coverDiv.appendChild(cardSubtitleP);
    cardDiv.appendChild(coverDiv);

    document.getElementById(sectionName).appendChild(cardDiv);
}