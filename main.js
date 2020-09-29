document.getElementById("github").onclick = () => {
    window.open("", "_blank");
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
    var cityscape = document.getElementById("cityscape");

    var m_vids = mariovsky.getElementsByTagName("video");
    var cs_vids = cityscape.getElementsByTagName("video");

    for (x of m_vids) {
        x.play();
    }

    
    for (x of cs_vids) {
        x.play();
    }

    mariovsky.onmouseover = () => {
        for (x of m_vids) {
            x.pause();
        }
    }

    mariovsky.onmouseout = () => {
        for (x of  m_vids) {
            x.play();
            x.currentTime = 0;
        }
    }
   
    cityscape.onmouseover = () => {
        
        for (x of cs_vids) {
            x.pause();
        }
    }

    cityscape.onmouseout = () => {
        for (x of cs_vids) {
            x.play();
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

var chronopath = document.getElementById('chronopath');
var cityscape = document.getElementById('cityscape');
var mariovsky = document.getElementById('mariovsky');

chronopath.onclick = () =>{
    window.location.href = "projectPages/chronoPath/chronopath.html"
}
cityscape.onclick = () =>{
    window.location.href = "projectPages/cityScape/cityscape.html"
}
mariovsky.onclick = () =>{
    window.location.href = "projectPages/mariovsky/mariovsky.html"
}