const getNavbarHeight = () => {
  const navbar = document.querySelector('nav.navbar').cloneNode(true)
  navbar.classList.remove('navbar-home')
  navbar.style = 'style:none'
  document.querySelector('#app').appendChild(navbar)
  const height = navbar.offsetHeight
  navbar.remove()

  return height
}

export default getNavbarHeight
