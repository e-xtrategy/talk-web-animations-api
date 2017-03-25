const NOOP = () => {}
const DURATION = 100

const TIMING = {
  duration: DURATION,
  fill: 'forwards'
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

export const activate = ({toActivate, onFinish = NOOP}) => {
  const group = createActivateEffects(toActivate)

  const animation = new Animation(group, document.timeline)

  animation.onfinish = () => {
    toActivate.classList.add('m-active')
    onFinish()
  }

  animation.play()

  return animation
}

export const deactivate = ({toDeactivate, onFinish = NOOP}) => {
  const group = createDeactivateEffects(toDeactivate)

  const animation = new Animation(group, document.timeline)

  animation.onfinish = () => {
    toDeactivate.classList.remove('m-active')
    onFinish()
  }

  animation.play()

  return animation
}

export const createChangeIndexAnimation = ({toActivate, toDeactivate, onFinish = NOOP}) => {
  const effects = [
    createDeactivateEffects(toDeactivate),
    createActivateEffects(toActivate)
  ]

  const group = new SequenceEffect(effects)

  const animation = new Animation(group, document.timeline)

  animation.onfinish = () => {
    toDeactivate.classList.remove('m-active')
    toActivate.classList.add('m-active')
    onFinish()
  }

  animation.play()

  return animation
}
