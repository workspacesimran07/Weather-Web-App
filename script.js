function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiKey = "b9685788ec577e36a0b9da58e4dd604d";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found!");
                return;
            }

            document.getElementById("cityName").innerText =
                data.location.name + ", " + data.location.country;

            document.getElementById("temperature").innerText =
                "Temperature: " + data.current.temp_c + "°C";

            document.getElementById("condition").innerText =
                "Condition: " + data.current.condition.text;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong!");
        });
}