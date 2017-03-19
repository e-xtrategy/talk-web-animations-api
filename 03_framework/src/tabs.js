import {getShowKeyframes} from './tabsKeyframes'

export default element => {
  const links = element.querySelectorAll('.tablinks')
  const tabContents = element.querySelectorAll('.tabcontent')

  const animationDuration = element.dataset.animationDuration ? parseInt(element.dataset.animationDuration) : 500
  const startIndex = element.dataset.startIndex ? parseInt(element.dataset.startIndex) : 0

  let activeIndex = -1
  const changeListners = []
  let animationType = 'swipe-left'

  const timing = {
    duration: animationDuration,
    fill: 'forwards',
    easing: 'ease-in-out'
  }

  const setActiveTab = indexToShow => {
    if (indexToShow !== activeIndex) {
      links.forEach((link, index) => {
        if (index === indexToShow) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })

      showTab(activeIndex, indexToShow)

      activeIndex = indexToShow
    }
  }

  const showTab = (indexToHide, indexToShow) => {
    const showKeyframes = getShowKeyframes(animationType)
    const sequenceEffects = []
    if (indexToHide > -1) {
      const hideKeyframes = [...showKeyframes].reverse()
      sequenceEffects.push(new KeyframeEffect(tabContents[indexToHide], hideKeyframes, timing))
    }

    sequenceEffects.push(new KeyframeEffect(tabContents[indexToShow], showKeyframes, timing))

    const effect = new SequenceEffect(sequenceEffects)

    const animation = new Animation(effect, document.timeline)

    animation.onfinish = () => {
      changeListners.forEach(cb => cb(indexToShow))
    }

    animation.play()
  }

  links.forEach((link, index) => {
    link.addEventListener('click', () => setActiveTab(index))
  })

  const addChangeListener = cb => {
    changeListners.push(cb)
  }

  const setAnimationType = type => {
    animationType = type
  }

  setActiveTab(startIndex)

  return {
    setActiveTab,
    addChangeListener,
    setAnimationType
  }
}
