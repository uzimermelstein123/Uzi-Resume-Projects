const GetUnits = (units = document.getElementById("tempUnits").value) => {
    switch (units) {
        case "Farenheit":
            return units = "imperial";
        case "Kelvins":
            return units = "standard";
        case "Celsius":
            return units = "metric";
    }
}
// const apiCall = () => new Promise((resolve, reject) => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=denver,&appid=8f16b352e77f08690bb935e424b3f5b8`)
//     .then(response => {
//         resolve(response.json());
        
//     })
//     .catch((error) => {
//         reject(error);
//     })
// });
// async function getJson() {
//     const city = document.getElementById("search").value; 
//     const units = GetUnits();
//     let json = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=8f16b352e77f08690bb935e424b3f5b8&units=${units}`);
//     console.log(json);
// }

document.getElementById("enterInput").addEventListener("click", async () => {
    const key = "8f16b352e77f08690bb935e424b3f5b8";
    const city = document.getElementById("search").value; 
    const units = GetUnits();

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=8f16b352e77f08690bb935e424b3f5b8&units=${units}`);
        const data = await response.json();
        console.log(data);
        Display(`${data.main.temp} &#176${document.getElementById("tempUnits").value[0]}`, data.name);
    } catch (error) {
        console.error("Error here please enter a valid input");
        document.getElementById("showWeather").innerHTML = "Enter valid input";
        document.getElementById("showWeather").style.color = "red";
    }

    // apiCall()
    // .then(data => {
    //     Display(data.main.temp, "Denver");
    // })
    // .catch((error) => {
    //     console.error("Error: there is an error", error);
    // }) 

    

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=8f16b352e77f08690bb935e424b3f5b8&units=${units}`)
    // .then(response => {
    //     response.json() 
    //     .then(data => {
    //         Display(`${data.main.temp} degrees ${document.getElementById("tempUnits").value}`, data.name);
    //     })
    //     .catch((error) => {
    //         console.error("Error here please enter a valid input");
    //         document.getElementById("showWeather").innerHTML = "Enter valid input";
    //         document.getElementById("showWeather").style.color = "red";
    //     })
    // })
    // .catch((error) => {
    //     console.error("Error: there is an error", error);
    // })
    
    


})

// async response => {
//     try {
//         const data = await response.json();
//         Display(`${data.main.temp} degrees ${document.getElementById("tempUnits").value}`, data.name);
//     } catch (error) {
//         console.error("Error here please enter a valid input");
//         document.getElementById("showWeather").innerHTML = "Enter valid input";
//         document.getElementById("showWeather").style.color = "red";
//     }

document.getElementById("search").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.getElementById("enterInput").click();
    }
})
const Display = (weather, city) => {
    document.getElementById("showWeather").innerHTML = "Weather in " + city + " is " + weather;
    document.getElementById("showWeather").style.color = "black";
}

// const searchCity = () => {
    
//     const key = "8f16b352e77f08690bb935e424b3f5b8";
//     const city = document.getElementById("search").value; 
//     const units = GetUnits();



//     // apiCall()
//     // .then(data => {
//     //     Display(data.main.temp, "Denver");
//     // })
//     // .catch((error) => {
//     //     console.error("Error: there is an error", error);
//     // }) 




//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=8f16b352e77f08690bb935e424b3f5b8&units=${units}`)
//     .then(response => {
//         response.json()
//         .then(data => {
//             Display(`${data.main.temp} degrees ${document.getElementById("tempUnits").value}`, data.name);
//         })
//         .catch((error) => {
//             console.error("Error here please enter a valid input");
//             document.getElementById("showWeather").innerHTML = "Enter valid input";
//             document.getElementById("showWeather").style.color = "red";
//         })
//     })
//     .catch((error) => {
//         console.error("Error: there is an error", error);
//     })

// }

    
    