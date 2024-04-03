const players = [
    {
        "name": "Sachin",
        "runs": 20000,
        "loc": "Mumbia",
        "hun": 100
    },
    {
        "name": "Dhoni",
        "runs": 18000,
        "loc": "Ranchi",
        "hun": 40
    },
    {
        "name": "Dravid",
        "runs": 10000,
        "loc": "Banglore",
        "hun": 32
    },
    {
        "name": "Kohli",
        "runs": 19000,
        "loc": "Delhi",
        "hun": 76
    },
];
//to get the player object whose name is "Kohli"
let kohliObject = players.filter(player => player.name === "Kohli");
//to get the players whose runs grater than 18000
let playersWithRunsGreaterThan18000 = players.filter(player => player.runs >= 18000).map((name) => name.name);
//is All palyers Hit min one century - true/false
let isAllPlayerHitCentury = players.every(player => player.hun >= 1);
// Add one extra property to all players "fif", value is half of the hun property value.
players.forEach(player => {
    player.fif = parseInt(player.hun / 2)
});
console.log("Kohlii object is:", kohliObject);
console.log(`Players having greater than 18000 runs: ${playersWithRunsGreaterThan18000}`);
console.log(isAllPlayerHitCentury);
console.log(players);