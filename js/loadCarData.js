function loadCarData() {
  return Promise.all(
    [
      fetch('./assets/data/metric-100D.json'),
      fetch('./assets/data/metric-P100D.json')
    ]
  )
  .then(response => Promise.all(response.map(res => res.json())))
  .then(([firstCar, secondCar]) => (
    {
      '100D': firstCar,
      'P100D': secondCar
    }
  ))
};
