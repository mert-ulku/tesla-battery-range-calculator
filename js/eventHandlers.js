const eventHandlers = {

  speed({ type, step, minMaxValues }, state, carData, carModels) {
    return processEvent(
      {
        type,
        step,
        minValue: minMaxValues.minSpeed,
        maxValue: minMaxValues.maxSpeed
      },
      state,
      carData,
      carModels
    )
  },
  temperature({ type, step, minMaxValues }, state, carData, carModels) {
    return processEvent(
      {
        type,
        step,
        minValue: minMaxValues.minHeat,
        maxValue: minMaxValues.maxHeat
      },
      state,
      carData,
      carModels
    )
  },
  acStatus({ type }, state, carData, carModels) {

    const newState = { ...state }

    newState.carState[type] = !newState.carState[type]

    return processEvent({ type }, newState , carData, carModels)
  },
  wheel({ type, value }, state, carData, carModels) {

    const newState = { ...state }

    newState.carState[type] = value

    return processEvent({ type }, newState , carData, carModels)
  }

};
