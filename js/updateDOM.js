function updateDOM(state, carModels) {

  const speedIndicator = document.getElementById('speedIndicator')
  const heatIndicator = document.getElementById('heatIndicator')
  const acText = document.getElementById('ac-text')
  const acImage = document.getElementById('ac-image')
  const acToggle = document.getElementById('ac-toggle')
  const wheelSizeNormal = document.getElementById('wheel-select-19')
  const wheelSizeLarge = document.getElementById('wheel-select-21')
  const carImage = document.getElementById('car-image')
  const speedIncreaseButton = document.getElementById('speed-increase')
  const speedDecreaseButton = document.getElementById('speed-decrease')
  const heatIncreaseButton = document.getElementById('heat-increase')
  const heatDecreaseButton = document.getElementById('heat-decrease')

  Object.keys(carModels).forEach(model => {
    carModels[model].element.textContent = state.kmState[model]
  })

  speedIndicator.textContent = state.carState.speed
  heatIndicator.textContent  = state.carState.temperature


  if(state.carState.wheel === 19) {
    wheelSizeLarge.classList.remove('selected-wheel-size')
    wheelSizeNormal.classList.add('selected-wheel-size')
    carImage.classList.remove('size-21')
  } else {
    wheelSizeNormal.classList.remove('selected-wheel-size')
    wheelSizeLarge.classList.add('selected-wheel-size')
    carImage.classList.add('size-21')
  }

  if([-10, 0, 10].includes(state.carState.temperature)) {
    acToggle.classList.remove('tesla-cool')
    acText.innerText = 'HEAT ON'
    acImage.setAttribute('src','assets/images/icon-wave-gray.svg')

    if(!state.carState.acStatus) {
      acText.innerText = 'HEAT OFF'
      acToggle.classList.remove('tesla-heat')
    } else {
      acImage.setAttribute('src', 'assets/images/icon-wave-white.svg')
      acToggle.classList.add('tesla-heat')
    }

  } else {
    acToggle.classList.remove('tesla-heat')
    acText.innerText = 'AC ON'
    acImage.setAttribute('src','assets/images/icon-fan-gray.svg')

    if(!state.carState.acStatus) {
      acText.innerText = 'AC OFF'
      acToggle.classList.remove('tesla-cool')
    } else {
      acImage.setAttribute('src', 'assets/images/icon-fan-white.svg')
      acToggle.classList.add('tesla-cool')
    }
  }


  speedIncreaseButton.disabled = state.carState.speed === 140 ? true : false
  speedDecreaseButton.disabled = state.carState.speed === 70 ? true : false

  heatIncreaseButton.disabled = state.carState.temperature === 40 ? true : false
  heatDecreaseButton.disabled = state.carState.temperature === -10 ? true : false

};
