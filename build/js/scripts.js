// Custom Scripts
// Custom scripts


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();


function heroBg() {
  const container = document.querySelector('.hero');

  if (!container) {
    return null
  }

  const link1 = document.querySelector('.hero__link--green');
  const link2 = document.querySelector('.hero__link--transparent');
  const link3 = document.querySelector('.hero__link--transparent span');

  link1.addEventListener('mouseenter', () => {
    container.classList.add('green')
  })

  link1.addEventListener('mouseout', () => {
    container.classList.remove('green')
  })

  link2.addEventListener('mouseenter', () => {
    container.classList.add('transparent')
  })

  link2.addEventListener('mouseout', () => {
    container.classList.remove('transparent')
  })

  link3.addEventListener('mouseenter', () => {
    container.classList.add('transparent')
  })

  link3.addEventListener('mouseout', () => {
    container.classList.remove('transparent')
  })


}

heroBg();

AOS.init({
  disable: 'phone',
});
