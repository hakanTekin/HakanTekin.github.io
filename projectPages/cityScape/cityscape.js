document.getElementById("github").onclick = () => {
    window.open("https://github.com/Black-Coop/CityScape", "_blank");
};

var isPlaying = true;
const videowrappers = document.getElementsByTagName('videowrapper');

for (let index = 0; index < videowrappers.length; index++) {
    const element = videowrappers[index];
    element.onclick = () =>{
        var x = element.getElementsByTagName('video')[0];
        x.paused ? x.play() : x.pause(); 
    }
        
}