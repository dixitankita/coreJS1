function checkWeatherCondition(temperature) {
    const condition = temperature > 30 ? "Hot" : "Moderate";
    console.log(`The weather condition is: ${condition}`);
}

// Example usage:
checkWeatherCondition(32);
checkWeatherCondition(25);
