import createTimelineEffects from './timeline'
import createBodyEffects from './body'
import createTitleEffects from './title'

const NOOP = () => {}

export default ({timeLineItems, titles, descriptionBoxes, imageBoxes, detailsBoxes, onFinish = NOOP}) => {
  const items = timeLineItems.length

  let effects = []

  const generateSequenceStep = (activeIndex, newIndex) => {
    return [
      ...createTimelineEffects({
        toActivate: timeLineItems[newIndex],
        toDeactivate: timeLineItems[activeIndex]
      }),
      ...createTitleEffects({
        toFadeIn: titles[newIndex],
        toFadeOut: titles[activeIndex]
      }),
      ...createBodyEffects({
        inDescriptionBox: descriptionBoxes[newIndex],
        inImageBox: imageBoxes[newIndex],
        inDetailsBox: detailsBoxes[newIndex],
        outDescriptionBox: descriptionBoxes[activeIndex],
        outImageBox: imageBoxes[activeIndex],
        outDetailsBox: detailsBoxes[activeIndex]
      })
    ]
  }

  for (var index = 0; index < items - 1; index++) {
    effects = effects.concat(generateSequenceStep(index, index + 1))
  }

  const animation = new window.Animation(new window.SequenceEffect(effects), document.timeline)

  animation.onfinish = onFinish

  return animation
}
