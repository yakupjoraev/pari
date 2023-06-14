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

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#343a40'
    });

    link2.style.color = '#343a40';
    link3.style.color = '#343a40';
  })

  link1.addEventListener('mouseout', () => {
    container.classList.remove('green')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#343a40'
    });

    link2.style.color = '#343a40';
    link3.style.color = '#343a40';
  })

  link2.addEventListener('mouseenter', () => {
    container.classList.add('transparent')
    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#fff'
    });

    link2.style.color = '#fff';
    link3.style.color = '#fff';
  })

  link2.addEventListener('mouseout', () => {
    container.classList.remove('transparent')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#343a40'
    });

    link2.style.color = '#343a40';
    link3.style.color = '#343a40';
  })

  link3.addEventListener('mouseenter', () => {
    container.classList.add('transparent')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#fff'
    });
  })

  link3.addEventListener('mouseout', () => {
    container.classList.remove('transparent')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#343a40'
    });
  })


}

heroBg();




function heroGame() {
  const container = document.querySelector('.hero-game');

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

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#fff'
    });

    link2.style.color = '#fff';
    link3.style.color = '#fff';
  })

  link2.addEventListener('mouseenter', () => {
    container.classList.add('transparent')
    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#fff'
    });
  })

  link2.addEventListener('mouseout', () => {
    container.classList.remove('transparent')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#fff'
    });

    link2.style.color = '#fff';
    link3.style.color = '#fff';
  })

  link3.addEventListener('mouseenter', () => {
    container.classList.add('transparent')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#343a40'
    });

    link2.style.color = '#fff';
    link3.style.color = '#fff';
  })

  link3.addEventListener('mouseout', () => {
    container.classList.remove('transparent')

    document.querySelectorAll('.menu__item-link').forEach(element => {
      element.style.color = '#343a40'
    });
  })


}

heroGame();



// Аккордеон
const accordionItems = document.querySelectorAll('[data-accordion-item]');
let openAccordion = null; // переменная для хранения ссылки на открытый аккордеон

function toggleAccordion(event) {
  // Проверяем, содержит ли кликнутый элемент класс "accordion__header-btn"
  if (event.target.classList.contains('accordion__header-btn')) {
    return; // Прерываем выполнение функции
  }

  if (openAccordion && openAccordion !== this) {
    // Если есть открытый аккордеон, который не совпадает с текущим
    openAccordion.classList.remove('active'); // закрыть его
    const openAccordionContent = openAccordion.nextElementSibling;
    if (openAccordionContent) {
      // если у аккордеона есть содержимое
      openAccordionContent.style.maxHeight = null; // сбросить высоту контента
    }
  }

  this.classList.toggle('active'); // открыть или закрыть текущий аккордеон

  const content = this.nextElementSibling;
  if (content) {
    // если у аккордеона есть содержимое
    if (content.style.maxHeight) {
      // Если контент открыт, закрыть его
      content.style.maxHeight = null;
    } else {
      // Если контент закрыт, открыть его
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  openAccordion = this; // запомнить ссылку на открытый аккордеон
}

accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

function testSlider() {
  const container = document.querySelector('.test__slider');

  if (!container) {
    return null
  }

  var swiper = new Swiper(".test__slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".test__slider-next",
      prevEl: ".test__slider-prev",
    },
  });

}

testSlider()

AOS.init({
  disable: 'phone',
});

