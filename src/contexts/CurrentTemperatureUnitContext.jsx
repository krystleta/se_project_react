import React from 'react';

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {}
});


export { CurrentTemperatureUnitContext };