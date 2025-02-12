//Fetching and processing sample2.json file using call backs.

// Function that simulates fetching data using a callback
function fetchWithCallback(callback) {
    setTimeout(() => {
        let data = { message: "Hello there, This is Tetricia. How's coding?" };

// Call the callback function with the data
        callback(null, data); 
    }, 5000);
}

// Calling the function and passing a callback
fetchWithCallback((error, data) => {
    if (error) {
        console.error("Error:", error); // Handle errors if any
    } else {
        // Log the received data
        console.log("Callback Data:", data); 
    }
});