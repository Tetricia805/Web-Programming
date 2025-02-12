// fetching and processing data of sample2.json dataset using promises



// the Promise-based version of fs
const fs = require("fs").promises; 

// Read JSON file using Promises
fs.readFile("sample2.json", "utf8")
    .then((data) => {
        const jsonData = JSON.parse(data); // Parse the JSON file
        console.log("Tree Value:", jsonData.tree);
        console.log("Darkness Value :", jsonData.darkness);
        console.log("Proper:", jsonData.proper);
        console.log("Chief:", jsonData.see.chief);
        console.log("Star Value:", jsonData.see.star);
        console.log("These Array:", jsonData.see.these);
    })
    .catch((err) => {
        console.error("Error reading or parsing JSON:", err); // Handle errors gracefully
    });