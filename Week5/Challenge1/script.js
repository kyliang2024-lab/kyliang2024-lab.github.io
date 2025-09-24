const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = 'REPLACE WITH YOUR API_KEY';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    // const city = 'Moscow'; // Default value, you need to replace this string with actual user input
    const city = document.getElementById("city").value;

    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        console.log(response.data);

        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
       //1. extract weather type from api  (can be array)
        const weatehrMain =response.data.weather;
        console.log("extracted weather type:", weatehrMain);
        //2.1 clear all the existing image source
        const weathercontainer = document.getElementById("weather_images");
        weathercontainer.innerHTML = "";
        //2.2 find img
        weatehrMain.forEach(weatherobj => {
            const weathertype =weatherobj.main;
            const weatherImgPath = weather_type_images[weathertype];
            console.log("image path: ", weatherImgPath);

            const para =document.createElement("p");
            const img = document.createElement("img");
            img.src= weatherImgPath;
            
            para.appendChild(img);
            weathercontainer.appendChild(para);

        })


        
        console.log("weather image updated successfully");


        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        //1.extract temp
        const tmp = response.data.main.temp;
        console.log("temp: ", tmp);

        let tempimgpath;
        if (tmp>25){
            tempimgpath = temp_images["Hot"];
        }else if(5<= tmp && tmp <=25){
            tempimgpath = temp_images["Okay"];
        }else {
            tempimgpath = temp_images["Cold"];
        }
        console.log("temp img path: ", tempimgpath);

        const tempImages_display = document.getElementById("temperature_image");
        tempImages_display.src = tempimgpath;

        console.log("temp image displayed successfully");
    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}

check_weather();