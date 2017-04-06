const DURATION = 100

const TIMING = {
  duration: DURATION,
  fill: 'forwards',
  ease: 'ease-out'
}

const toDeactivateTextKeyframes = [
  {
    color: '#FA5A5A',
    fontWeight: 'bold'
  },
  {
    color: 'black',
    fontWeight: 'normal'
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

const toActivateTextKeyframes = [...toDeactivateTextKeyframes].reverse()
const toActivateEmKeyframes = [...toDeactivateEmKeyframes].reverse()

const createActivateEffects = toActivate => {
  const toActivateSpan = toActivate.querySelector('span')
  const toActivateEm = toActivate.querySelector('em')

  const effects = [
    new window.KeyframeEffect(toActivateSpan, toActivateTextKeyframes, TIMING),
    new window.KeyframeEffect(toActivateEm, toActivateEmKeyframes, TIMING)
  ]

  return new window.GroupEffect(effects)
}

const createDeactivateEffects = toDeactivate => {
  const toDeactivateSpan = toDeactivate.querySelector('span')
  const toDeactivateEm = toDeactivate.querySelector('em')

  const effects = [
    new window.KeyframeEffect(toDeactivateSpan, toDeactivateTextKeyframes, TIMING),
    new window.KeyframeEffect(toDeactivateEm, toDeactivateEmKeyframes, TIMING)
  ]

  return new window.GroupEffect(effects)
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
