document.getElementById("github").onclick = () => {

};
document.getElementById("linkedIn").onclick = () => {
    window.open("https://www.linkedin.com/in/hakan-tekin", "_blank");
}


document.onload = start();

function start() {
    var videoElementParents = document.getElementsByClassName("card-large");
    for (var item of videoElementParents) {
        item.onmouseover = () => {
            var videos = item.getElementsByTagName("video");
            for (var v of videos) {
                v.play();
            }
        };

        item.onmouseout = () => {
            var videos = item.getElementsByTagName("video");
            for (var v of videos) {
                v.pause();
                v.currentTime = 0;
            }
        };

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