const fs = require("fs");

const jsonString = fs.readFileSync('data/wow_data.json');

const wowArr = JSON.parse(jsonString);

module.exports = { wowArr };
