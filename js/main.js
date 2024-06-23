(function () {

    // отсюда прелоадер =====================

    if (window.innerWidth >= 1000) {

        window.onload = function () {
            window.setTimeout(function () {
                document.body.classList.add('loaded_hiding')
                window.setTimeout(function () {
                    document.body.classList.remove('preloader--opened')
                    document.body.classList.add('loaded')
                    document.body.classList.remove('loaded_hiding')
                }, 500)
            }, 2000)
        }
    } else {
        document.body.classList.remove('preloader--opened')
        document.body.classList.add('loaded')
    }

    // отсюда переключатель локации===============================

    const changeGeolocation = document.querySelector('.haeder__change-geolocation');

    changeGeolocation.addEventListener('click', (e) => {

        const userGeoActive = e.target.closest('.header__geolocation--active')

        const firstGeo = changeGeolocation.firstElementChild
        const lastGeo = changeGeolocation.lastElementChild

        if (userGeoActive) return

        if (firstGeo.classList.contains('header__geolocation--active')) {
            firstGeo.classList.remove('header__geolocation--active')
            lastGeo.classList.add('header__geolocation--active')

            changeGeolocation.classList.remove('geolocation--Moscow')
            changeGeolocation.classList.add('geolocation--Dubai')

        } else if (lastGeo.classList.contains('header__geolocation--active')) {
            lastGeo.classList.remove('header__geolocation--active')
            firstGeo.classList.add('header__geolocation--active')

            changeGeolocation.classList.remove('geolocation--Dubai')
            changeGeolocation.classList.add('geolocation--Moscow')
        }

    });

    // отсюда дропдавн=========================

    const dropdown = document.querySelector('.header__nav-dropdown')
    const openDropdown = document.querySelector('.header__nav')
    const closeDropdownLinks = document.querySelector('.header__nav-list')

    dropdown.addEventListener('click', () => {

        if (document.documentElement.clientWidth > 1500) return

        if (openDropdown.classList.contains('header__nav-dropdown--open')) {
            openDropdown.classList.remove('header__nav-dropdown--open')
        } else {
            openDropdown.classList.add('header__nav-dropdown--open')
        }

    })

    closeDropdownLinks.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === 'A') {
            openDropdown.classList.remove('header__nav-dropdown--open')
        }
    })

    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) {
            openDropdown.classList.remove('header__nav-dropdown--open');
        }
    })

    // отсюда бургер=======================================

    const burgerWinodw = document.querySelector('.burger-icon')
    const openBurgerMenu = document.body
    const closeWitchLinksBurger = document.querySelector('.header__nav-list ')
    let burgerIsopen = false

    burgerWinodw.addEventListener('click', () => {
        if (document.documentElement.clientWidth > 900) return
        if (burgerIsopen !== true) {
            openBurgerMenu.classList.add('body--opened-menu')
            burgerIsopen = true
        } else {
            openBurgerMenu.classList.remove('body--opened-menu')
            burgerIsopen = false
        }
    })
    closeWitchLinksBurger.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A') {
            openBurgerMenu.classList.remove('body--opened-menu')
            burgerIsopen = false
        }
    })

    // отсюда модалка============================================

    const modal = document.querySelector('.modal')
    const body = document.body

    const openModal = () => {
        body.classList.add('body--opened-modal')
        modal.classList.add('modal--opened')
    }
    const closeModal = () => {
        body.classList.remove('body--opened-modal')
        modal.classList.remove('modal--opened')
    }

    body.addEventListener('click', (e) => {

        if (e.target.closest('.button__open-modal')) {
            e.preventDefault()
            openModal()
        }
    })

    modal.addEventListener('click', (e) => {

        if (e.target && e.target.classList.contains('modal') || e.target.closest('.modal__cancel')) {
            e.preventDefault()
            closeModal()
        }
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
            modal.classList.toggle('modal--opened')
            body.classList.toggle('body--opened-modal')
        }

    })

    // отсюда смена title ===========================================

    const frames = ['BEST | CARS', 'DIZRENTAL']

    setInterval(() => {
        const frame = frames.shift()

        document.title = frame

        frames.push(frame)

    }, 5000)

    // отсюда маска для телефона =========================

    const telInputs = document.querySelectorAll('input[type="tel"]');
    const im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);

    // отсюда свайпер херо =======================

    document.addEventListener('DOMContentLoaded', function () {
        function initSwiper() {
            const swiperHero = new Swiper('.hero__slider', {
                slidesPerView: 'auto',
                spaceBetween: 18,

                breakpoints: {
                    601: {
                        spaceBetween: 48,
                    },
                    501: {
                        spaceBetween: 30,
                    },
                }
            })
        }

        function checkWidth() {
            if (window.innerWidth <= 900) {
                initSwiper()
            }
        }

        checkWidth()
    })

    // отсюда табы актив=============================

    const tabControls = document.querySelector('.product__tabs-list')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {
        const tabControl = event.target.closest('.product__tab-link')
        if (!tabControl) return
        event.preventDefault()

        const activeControl = document.querySelector('.product__tab-link--active')
        if (activeControl) {
            activeControl.classList.remove('product__tab-link--active')
        }
        tabControl.classList.add('product__tab-link--active')
    }

    // отсюда сортировка товара по якорным ссылкам =================

    const footerLinks = document.querySelectorAll('.footer__nav-link')

    footerLinks.forEach(link => {
        link.addEventListener('click', event => {
            const tabId = event.target.dataset.id

            if (tabId) {
                const necessaryTab = document.querySelector(`.product__tab-link[data-id="${tabId}"]`)
                if (necessaryTab) {
                    const activeControl = document.querySelector('.product__tab-link--active')
                    if (activeControl) {
                        activeControl.classList.remove('product__tab-link--active')
                    }
                    necessaryTab.classList.add('product__tab-link--active')
                }
                filterTabsLink(tabId)
            }
        })
    })

    function filterTabsLink(tabId) {
        items.forEach(item => {
            item.style.display = item.classList.contains(tabId) ? 'block' : 'none'
        })
    }

    // отсюда сортировка товара по табам =================

    const productTabs = document.querySelector('.product__tabs-list')
    const items = document.querySelectorAll('.product__grid-card')

    function filterTabs() {
        productTabs.addEventListener('click', e => {

            let target = e.target;

            while (target && target !== productTabs && !target.dataset.id) {
                target = target.parentElement;
            }

            if (target && target.dataset.id) {

                const itemId = target.dataset.id

                switch (itemId) {
                    case 'SUVsСar':
                        getItems(itemId)
                        break
                    case 'BusinessСar':
                        getItems(itemId)
                        break
                    case 'SportsСar':
                        getItems(itemId)
                        break
                    case 'PremiumCar':
                        getItems(itemId)
                        break
                    case 'ComfortCar':
                        getItems(itemId)
                        break
                }
            }
        })
    }
    filterTabs()

    const seeAllCars = document.querySelector('.product__button')
    seeAllCars.addEventListener('click', (e) => {
        e.preventDefault()
        items.forEach(item => {
            item.style.display = 'block'
        })
    })

    function getItems(tabName) {
        items.forEach(item => {
            if (item.classList.contains(tabName)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

    // отсюда сортировка товаров по чекбоксам ==========================

    const productCheckboxes = document.querySelectorAll('.hero__fieldset-checkbox input[type="checkbox"]')

    function filterItems() {
        const activeFilters = []
        productCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                activeFilters.push(checkbox.dataset.id)
            }
        })

        items.forEach(function (item) {
            let shouldShow = activeFilters.length === 0;
            if (!shouldShow) {
                for (let i = 0; i < activeFilters.length; i++) {
                    if (item.classList.contains(activeFilters[i])) {
                        shouldShow = true
                        break
                    }
                }
            }
            if (shouldShow) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

    function applyFilters() {
        filterItems()
    }

    const applyBtn = document.querySelector('.hero__button')
    applyBtn.addEventListener('click', function () {
        applyFilters()
    })

    // отсюда свайпер табы продукт ===============

    document.addEventListener('DOMContentLoaded', function () {

        function initSwiper() {
            const swiperTabs = new Swiper('.product__tabs-swiper', {
                slidesPerView: 1.4,
                freeMode: true,
                spaceBetween: 14,

                breakpoints: {
                    501: {
                        slidesPerView: 2.2,
                    },
                    701: {
                        slidesPerView: 2.8,
                        spaceBetween: 20,
                    },
                    901: {
                        slidesPerView: 3.3,
                        spaceBetween: 20,
                    },
                    1201: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }
            })
        }

        function checkWidthTab() {
            if (window.innerWidth <= 1300) {
                initSwiper()
            }
        }

        checkWidthTab()
    })

    // отсюда свайепер дискаунт ===================

    const swiperDiscount = new Swiper('.discount__slider', {
        slidesPerView: 1,
        spaceBetween: 30,

        pagination: {
            el: '.discount__slider-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.discount__slider-next',
            prevEl: '.discount__slider-prev',
        },
    })

    // отсюда вызов анимации на ширине 1400 ==================

    document.addEventListener('DOMContentLoaded', function () {

        const animationWrapper = document.querySelector('.brands__wrapper')
        const animationList = document.querySelectorAll('.brands__list')

        function initAnimation() {
            animationWrapper.classList.add('brands__wrapper-animation')
            animationList.forEach(list => {
                list.classList.add('brands__list-animation')
            })
        }

        function checkWidthBrands() {
            if (window.innerWidth <= 1400) {
                initAnimation()
            }
        }

        checkWidthBrands()
    })

    // отсюда аккордеоны футер ==================================

    function initAccordion() {

        const accordionLists = document.querySelectorAll('.accordion-list')

        accordionLists.forEach(element => {

            element.addEventListener('click', (event) => {
                const accordionControl = event.target.closest('.accordion-list__control')
                if (!accordionControl) return
                event.preventDefault()
                const accordionItem = accordionControl.parentElement
                const accordionContent = accordionControl.nextElementSibling

                const accordionList = accordionItem.parentElement
                const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
                const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

                if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                    accordionOpenedItem.classList.remove('accordion-list__item--opened')
                    accordionOpenedContent.style.maxHeight = null
                }

                accordionItem.classList.toggle('accordion-list__item--opened')

                if (accordionItem.classList.contains('accordion-list__item--opened')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
                } else {
                    accordionContent.style.maxHeight = null
                }
            })
        })
    }

    // отсюда вызов аккордеонов при ширине 700 ==============

    document.addEventListener('DOMContentLoaded', function () {

        const accordionList = document.querySelector('.footer__nav-top')

        function checkWidthAccordion() {
            if (window.innerWidth <= 700) {
                accordionList.classList.add('accordion-list')
                initAccordion()
            }
        }

        checkWidthAccordion()
    })

    // отсюда кнопка вверх появление ====================

    const btnUp = document.querySelector('.btn-up')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnUp.classList.add('btn-up--show')
        } else {
            btnUp.classList.remove('btn-up--show')
        }
    })

    // отсюда кнопка вверх прокрутка ======================

    btnUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        })
    })

})()

// в будущем сделать свайпер при наведении на картинку продукта или приближение