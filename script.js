import apikey from './apikey.json' assert {type: 'json'};
import {getUUID} from './uuidRequest.js';

let uuid = "6ce02c86a86f46318777b0be28646213";
// let uuid = "56aa15293b7145d689d95e9bb5b66ed2";
let inputName = "Oak1939";
async function updateData() {


    let jsonData;
    const result = await fetch(getApiLink(uuid));
    jsonData = await result.json();
    console.log(jsonData);
    if (jsonData['success'] == false) {
        alert("API fetch error");
        return;
    } 


    // JSON accessor
    var gameStats = jsonData['player']['stats']['Bedwars'];
    console.log(gameStats);

    // Variables
    var displayName = jsonData['player']['displayname'];

    var beds_broken_bedwars = gameStats.beds_broken_bedwars;
    var beds_lost_bedwars = gameStats.beds_lost_bedwars;
    var kills_bedwars = gameStats.kills_bedwars;
    var final_kills_bedwars = gameStats.final_kills_bedwars;
    var wins_bedwars = gameStats.wins_bedwars;
    var winstreak = gameStats.winstreak;
    var deaths_bedwars = gameStats.deaths_bedwars;
    var final_deaths_bedwars = gameStats.final_deaths_bedwars;
    var losses_bedwars = gameStats.losses_bedwars;

    var coins = gameStats.coins;
    var gold_resources_collected_bedwars = gameStats.gold_resources_collected_bedwars;
    var iron_resources_collected_bedwars = gameStats.iron_resources_collected_bedwars;
    var diamond_resources_collected_bedwars = gameStats.diamond_resources_collected_bedwars;
    var emerald_resources_collected_bedwars = gameStats.emerald_resources_collected_bedwars;

    // Calculated Variables 
    var WLR = wins_bedwars/losses_bedwars;
    var KDR = kills_bedwars/deaths_bedwars;
    var FKDR = final_kills_bedwars/final_deaths_bedwars;
    var BBLR = beds_broken_bedwars/beds_lost_bedwars;

    // Rank data
    var player_rank_raw = jsonData['player']['newPackageRank'];
    var monthly_rank = jsonData['player']['monthlyPackageRank'];
    var rank_plus_color = jsonData['player']['rankPlusColor'];
    var player_rank;

    if (player_rank_raw == "NONE") {
        player_rank = "";
        document.getElementById("pagetitle").style.color = "gray";
    } else if (player_rank_raw == "VIP") {
        player_rank = "[VIP] ";
        document.getElementById("pagetitle").innerHTML = player_rank + displayName;
        document.getElementById("pagetitle").style.color = "green";
    } else if (player_rank_raw == "VIP_PLUS") {
        player_rank = "[VIP+] ";
        document.getElementById("pagetitle").innerHTML = player_rank + displayName;
        document.getElementById("pagetitle").style.color = "green";
        //add manual plus color
    } else if (player_rank_raw == "MPV") {
        player_rank = "[MVP] ";
        document.getElementById("pagetitle").innerHTML = player_rank + displayName;
        document.getElementById("pagetitle").style.color = "aqua";
    } else if (player_rank_raw == "MVP_PLUS") {
        if (monthly_rank == "SUPERSTAR") {
            player_rank = "[MPV++] ";
            document.getElementById("pagetitle").innerHTML = player_rank + displayName;
            document.getElementById("pagetitle").style.color = "gold";
        } else {
            player_rank = "[MPV+] ";
            document.getElementById("pagetitle").innerHTML = player_rank + displayName;
            document.getElementById("pagetitle").style.color = "aqua";
            //Add plus color support
        }
    }


    // Update HTML
    // document.getElementById("pagetitle").innerHTML = displayName;
    document.getElementById("pagename").innerHTML = displayName + "'s Bedwars Stats";

    document.getElementById("bodyrender").src= "https://crafatar.com/renders/body/"+uuid+"?size=64&default=MHF_Steve&overlay";
    document.getElementById("pageicon").href = "https://crafatar.com/avatars/"+uuid+"?size=64&default=Steve&overlay";


}
updateData();

function getApiLink(uuid) {
    var apiKey = apikey.keys[0].key;
    return "https://api.hypixel.net/player?key="+apiKey+"&uuid="+uuid;
}

function cycleWallpaper() {
document.body.style.backgroundImage = "url(./images/backgrounds/default_background03.png)";
}

document.getElementById("button").addEventListener('click', event => {cycleWallpaper();});

