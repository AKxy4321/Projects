const apiKey = 'd2622d3d84cde3d2b57325f720cc33cc';

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    // Make a request to the OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Extract relevant information from the API response
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const celcius = temperature - 273.15;
  
        // Update the webpage with the weather information
        document.getElementById('weatherInfo').innerHTML = `
          <h2>${city}</h2>
          <p>Description: ${description}</p>
          <p>Temperature: ${celcius.toFixed(2)} °C</p>
        `;
      })
      .catch(error => {
        console.log('Error:', error);
        document.getElementById('weatherInfo').innerHTML = 'An error occurred.';
      });
  });