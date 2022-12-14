//init
import apikey from './apikey.json' assert {type: 'json'};
//main function
async function updateData() {
    let jsonData;

    const result = await fetch(getApiLink("6ce02c86a86f46318777b0be28646213"))

    jsonData = await result.json();

    console.log(jsonData);

    //Write code for data processing here
    console.log(getApiLink("6ce02c86a86f46318777b0be28646213"));

    var playerName = jsonData.player.displayName

    document.getElementById("main").innerHTML = playerName






}
//other functions
function getApiLink(uuid) {
    var apiKey = apikey.keys[0].key;
    return "https://api.hypixel.net/player?key="+apiKey+"&uuid="+uuid;
}

function cycleWallpaper() {

document.body.style.backgroundImage = "url(./images/backgrounds/default_background03.png)";
}

document.getElementById("button").addEventListener('click', event => {cycleWallpaper();});

