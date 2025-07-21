import React, { useState } from 'react';
import CitySelector from '../CitySelector/CitySelector';
import CityCard from '../CityCard/CityCard';
import items from '../CitySelector/items.js';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = items.find((city) => city.name === cityName);
    setSelectedCity(city);
  };

  return (
    <>
      <CitySelector cities={items} onSelect={handleCitySelect} />
      <CityCard city={selectedCity} />
    </>
  );
}

export default App;
