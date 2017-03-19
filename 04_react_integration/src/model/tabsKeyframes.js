const KEYFRAMES_VALUES = {
  'swipe-left': {
    property: 'left',
    startValue: '-100%',
    endValue: '0%'
  },
  'swipe-right': {
    property: 'right',
    startValue: '-100%',
    endValue: '0%'
  },
  'zoom': {
    property: 'transform',
    startValue: 'scale(0.001)',
    endValue: 'scale(1)'
  },
  'flip': {
    property: 'transform',
    startValue: 'rotateY(180deg)',
    endValue: 'rotateY(0deg)'
  },
  'rotate': {
    property: 'transform',
    startValue: 'rotateZ(180deg)',
    endValue: 'rotateZ(0deg)'
  }
}

export const getShowKeyframes = animationType => {
  const {property, startValue, endValue} = KEYFRAMES_VALUES[animationType]

  return [
    {
      opacity: 0,
      [property]: startValue
    },
    {
      opacity: 1,
      [property]: startValue
    },
    {
      opacity: 1,
      [property]: endValue
    }
  ]
}
