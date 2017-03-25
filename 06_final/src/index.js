import createTimelineEffects from './timeline'
import createBodyEffects from './body'
import createTitleEffects from './title'

const NOOP = () => {}

const timeLineItems = document.querySelectorAll('.timeline__list__item')
const titles = document.querySelectorAll('.main_article__title')
const descriptionBoxes = document.querySelectorAll('.description_box')
const imageBoxes = document.querySelectorAll('.image_box')
const detailsBoxes = document.querySelectorAll('.details_box')

const playSequence = (sequence, cb = NOOP) => {
  const animation = new Animation(new SequenceEffect(sequence), document.timeline)

  animation.onfinish = cb

  animation.play()

  return animation
}

let activeIndex = 0

const goTo = newIndex => {
  const sequence = [
    ...createTimelineEffects({
      toActivate: timeLineItems[newIndex],
      toDeactivate: timeLineItems[activeIndex]
    }),
    ...createBodyEffects({
      inDescriptionBox: descriptionBoxes[newIndex],
      inImageBox: imageBoxes[newIndex],
      inDetailsBox: detailsBoxes[newIndex],
      outDescriptionBox: descriptionBoxes[activeIndex],
      outImageBox: imageBoxes[activeIndex],
      outDetailsBox: detailsBoxes[activeIndex]
    }),
    ...createTitleEffects({
      toFadeIn: titles[newIndex],
      toFadeOut: titles[activeIndex]
    })
  ]

  playSequence(sequence, () => { activeIndex = newIndex })
}

const next = () => {
  if (activeIndex < timeLineItems.length - 1) {
    goTo(activeIndex + 1)
  }
}

const previous = () => {
  if (activeIndex > 0) {
    goTo(activeIndex - 1)
  }
}

document.querySelector('[data-next]').addEventListener('click', next, false)
document.querySelector('[data-previous]').addEventListener('click', previous, false)
timeLineItems.forEach((node, index) => {
  node.addEventListener('mouseenter', () => {
    if (index !== activeIndex) {
      const sequence = [
        ...createTimelineEffects({
          toActivate: node
        })
      ]

      playSequence(sequence)
    }
  }, false)

  node.addEventListener('mouseleave', () => {
    if (index !== activeIndex) {
      const sequence = [
        ...createTimelineEffects({
          toDeactivate: node
        })
      ]

      playSequence(sequence)
    }
  }, false)

  node.addEventListener('click', () => {
    if (index !== activeIndex) {
      const sequence = [
        ...createTimelineEffects({
          toDeactivate: timeLineItems[activeIndex]
        }),
        ...createBodyEffects({
          inDescriptionBox: descriptionBoxes[index],
          inImageBox: imageBoxes[index],
          inDetailsBox: detailsBoxes[index],
          outDescriptionBox: descriptionBoxes[activeIndex],
          outImageBox: imageBoxes[activeIndex],
          outDetailsBox: detailsBoxes[activeIndex]
        }),
        ...createTitleEffects({
          toFadeIn: titles[index],
          toFadeOut: titles[activeIndex]
        })
      ]

      playSequence(sequence, () => { activeIndex = index })
    }
  }, false)
})

const init = () => {
  const sequence = [
    ...createTimelineEffects({
      toActivate: timeLineItems[0]
    }),
    ...createBodyEffects({
      inDescriptionBox: descriptionBoxes[0],
      inImageBox: imageBoxes[0],
      inDetailsBox: detailsBoxes[0]
    }),
    ...createTitleEffects({
      toFadeIn: titles[0]
    })
  ]

  playSequence(sequence)
}

init()
