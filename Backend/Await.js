const fs = require("fs").promises; // Use fs with Promises

// Define an async function to fetch and process JSON data
async function fetchJsonData() {
    try {
        const data = await fs.readFile("sample2.json", "utf8"); // Read file asynchronously
         //Converts string to JSON object
        const jsonData = JSON.parse(data);
        
        // Extract and display specific data
        console.log("Sugar Value:", jsonData.see.sugar);
        console.log("Worse Value:", jsonData.worse);
        console.log("Straight Value:", jsonData.see.straight);
        console.log("Cake Value:", jsonData.see.cake);
        console.log("Star Value:", jsonData.see.star);
        console.log("These Array:", jsonData.see.these);
    } catch (err) {
        console.error("Error reading or parsing JSON:", err); // Handle errors
    }
}

// Calling the async function
fetchJsonData();
