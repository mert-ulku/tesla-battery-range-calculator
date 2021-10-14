(function(
  initialState = {
    kmState: {
      '100D': '798',
      'P100D': '760'
    },
    carState: {
      speed: 80,
      temperature: -10,
      acStatus: false,
      wheel: 19
    }
  },
  minMaxValues = {
    minSpeed: 70,
    maxSpeed: 140,
    minHeat: -10,
    maxHeat: 40
  }
) {

  const eventConfigs = [
    {
      name: 'speedIncrease',
      element: document.getElementById('speed-increase'),
      step: 10,
      type: 'speed'
    },
    {
      name: 'speedDecrease',
      element: document.getElementById('speed-decrease'),
      step: -10,
      type: 'speed'
    },
    {
      element: document.getElementById('heat-increase'),
      step: 10,
      type: 'temperature'
    },
    {
      element: document.getElementById('heat-decrease'),
      step: -10,
      type: 'temperature'
    },
    {
      element: document.getElementById('ac-toggle'),
      type: 'acStatus'
    },
    {
      element: document.getElementById('wheel-select-19'),
      type: 'wheel',
      value: 19
    },
    {
      element: document.getElementById('wheel-select-21'),
      type: 'wheel',
      value: 21
    },


  ]

  const models = {

    '100D': {
      model: '100D',
      element: document.getElementById('100d-speed-indicator')
    },
    'P100D': {
      model: 'P100D',
      element: document.getElementById('p100d-speed-indicator')
    }

  }

  let mergedCars = {}


  updateDOM(initialState, models)

  eventConfigs.forEach(event => {
    event.element.addEventListener('click', (e) => {
      e.preventDefault()
      eventHandlers[event.type]({...event, minMaxValues}, initialState, mergedCars, models)
    })
  })

  loadCarData()
  .then((carData) => {
    mergedCars = carData
  })

})()

