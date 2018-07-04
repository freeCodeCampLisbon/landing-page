// Inspired from https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// Documentation of the fetch method https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// Instagram API: https://www.instagram.com/developer/

/** Javascript to fetch the last instagram photos using the Instagram API */

// Get Images from the DOM
let imagesList = document.querySelectorAll(".joinUsSection--instagram__imageHolder > img");

// Settings
let settings = {
    user_id: "0cc4ef0beeeb4f568dc237aa869e1b7d",// user ID of Freecodecamp Lisbon
    access_token: "7936680959.0cc4ef0.ba075073ced34573bb47bd0eafef3c42" // Access Token 
};

// API URL
const url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=${access_token}&count=6"

// Call the fetch function from ES6
fetch(url)

// Transform data into JSON
.then((response) => response.json())

// Handle the retrieved and transformed data
.then(function(data) {
    
    data.images.standard_resolution.url


    let image = imagesList[].src;
    return processedData
})

// If an error ocurs
.catch(function() {

})
