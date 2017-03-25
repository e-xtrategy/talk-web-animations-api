const DURATION = 100

export const createChangeIndexAnimation = (elements, toDeactivateIndex, toActivateIndex) => {
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

  const toActivate = elements[toActivateIndex]
  const toActivateSpan = toActivate.querySelector('span')
  const toActivateEm = toActivate.querySelector('em')
  const toDeactivate = elements[toDeactivateIndex]
  const toDeactivateSpan = toDeactivate.querySelector('span')
  const toDeactivateEm = toDeactivate.querySelector('em')

  const timing = {
    duration: DURATION,
    fill: 'forwards'
  }

  const effects = [
    new KeyframeEffect(toDeactivate, toDeactivateKeyframes, timing),
    new KeyframeEffect(toDeactivateSpan, toDeactivateTextKeyframes, timing),
    new KeyframeEffect(toDeactivateEm, toDeactivateEmKeyframes, timing),
    new KeyframeEffect(toActivate, toActivateKeyframes, timing),
    new KeyframeEffect(toActivateSpan, toActivateTextKeyframes, timing),
    new KeyframeEffect(toActivateEm, toActivateEmKeyframes, timing)
  ]

  const group = new GroupEffect(effects)

  const animation = new Animation(group, document.timeline)

  return animation
}
