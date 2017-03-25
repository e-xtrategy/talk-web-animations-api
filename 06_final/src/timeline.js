const DURATION = 100

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const toDeactivateKeyframes = [
  {
    top: '-11px'
  },
  {
    top: '-25px'
  }
]

const toDeactivateTextKeyframes = [
  {
    fontSize: '36px'
  },
  {
    fontSize: '24px'
  }
]

const toDeactivateEmKeyframes = [
  {
    backgroundColor: '#FA5A5A'
  },
  {
    backgroundColor: '#E8F1FF'
  }
]

const toActivateKeyframes = [...toDeactivateKeyframes].reverse()
const toActivateTextKeyframes = [...toDeactivateTextKeyframes].reverse()
const toActivateEmKeyframes = [...toDeactivateEmKeyframes].reverse()

const createActivateEffects = toActivate => {
  const toActivateSpan = toActivate.querySelector('span')
  const toActivateEm = toActivate.querySelector('em')

  const effects = [
    new KeyframeEffect(toActivate, toActivateKeyframes, TIMING),
    new KeyframeEffect(toActivateSpan, toActivateTextKeyframes, TIMING),
    new KeyframeEffect(toActivateEm, toActivateEmKeyframes, TIMING)
  ]

  return new GroupEffect(effects)
}

const createDeactivateEffects = toDeactivate => {
  const toDeactivateSpan = toDeactivate.querySelector('span')
  const toDeactivateEm = toDeactivate.querySelector('em')

  const effects = [
    new KeyframeEffect(toDeactivate, toDeactivateKeyframes, TIMING),
    new KeyframeEffect(toDeactivateSpan, toDeactivateTextKeyframes, TIMING),
    new KeyframeEffect(toDeactivateEm, toDeactivateEmKeyframes, TIMING)
  ]

  return new GroupEffect(effects)
}

export default ({toActivate, toDeactivate}) => {
  let effects = []

  if (toDeactivate) {
    effects.push(createDeactivateEffects(toDeactivate))
  }

  if (toActivate) {
    effects.push(createActivateEffects(toActivate))
  }

  return effects
}
