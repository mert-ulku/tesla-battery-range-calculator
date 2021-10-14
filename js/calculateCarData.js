function calculateCarData(oldState, carData, carModels) {

  const oldStateCopy = { ...oldState }

  const acTypeMap = {
    'on': true,
    'off': false,
  }

  const { speed, temperature, acStatus, wheel } = oldStateCopy.carState

  return Object.keys(carModels).reduce((acc, model) => {

    const foundConfig = carData[model].find(({ temp, ac, wheelsize }) => {

      return temp === temperature &&
        acStatus === acTypeMap[ac] &&
        wheelsize === wheel

    })

    const foundSpeed = foundConfig.hwy.find(item => {
      return speed === item.kmh
    })

    return {
      ...acc,
      [model]: foundSpeed.kilometers
    }
  }, {})

};
