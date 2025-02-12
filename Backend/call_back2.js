//Fetching and processing sample2.json file using call backs.

// Import the File System module
const { json } = require("express");
const fs = require("fs"); 

// Read JSON file using a callback function
fs.readFile("sample2.json", "utf8", (err, data) => {
    if (err) {
        // Handle file reading errors
        console.error("Error reading the file:", err); 
        return;
    }

    try {
        // Parse JSON data from string format
        const jsonData = JSON.parse(data); 
        // Extract specific values
        console.log("Proper Value:", jsonData.proper);
        console.log("Cake Value:", jsonData.see.cake);
        console.log("Sugar Value:", jsonData.see.sugar);
        console.log("Chief value:", jsonData.see.chief);
        console.log("Tree Value:", jsonData.tree); 
        console.log("Star Value:", jsonData.see.star);
        console.log("These Array:", jsonData.see.these);
    } catch (parseError) {
        console.error("Error parsing JSON:", parseError); // Handle JSON parsing errors
    }
});
