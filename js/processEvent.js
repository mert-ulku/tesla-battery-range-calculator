function processEvent({type, minValue, maxValue, step}, state, carData, carModels) {

  const newState = { ...state }

  if(step) {

    const nextValue = state.carState[type] + step

    if(nextValue < minValue || nextValue > maxValue) {
      return false
    }

    newState.carState[type] += step
  }

  newState.kmState = calculateCarData(state, carData, carModels)

  updateDOM(newState, carModels)

  return newState

};
