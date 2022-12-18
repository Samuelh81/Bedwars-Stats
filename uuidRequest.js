export async function getUUID(playerName) {
    let uuidData;
    const result = await fetch("https://api.mojang.com/users/profiles/minecraft/"+playerName, {mode: 'no-cors'});
    uuidData = await result.json(); //this is the problem

    playerName = uuidData['id'];
    console.log(playerName);
    return playerName;
}