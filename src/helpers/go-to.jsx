import getNavbarHeight from './get-navbar-height'

const goTo = (elementID) => {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = document.getElementById(elementID).getBoundingClientRect()
  const positionTop = elemRect.top - bodyRect.top - getNavbarHeight()

  window.scroll({
    top: positionTop > 0 ? positionTop : 0,
    behavior: 'smooth',
  })
}

export default goTo
