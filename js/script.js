var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // breakpoints
    speed: 800,
    spaceBetween: 30,
    slidesPerView: 4,

});


// меню
function headnavbar() {
    var scrollPrev = 0;

    window.addEventListener('scroll', function() {
        var scrolled = window.scrollY || document.documentElement.scrollTop,
            headerElement = document.querySelector('#header'),
            headerHeight = headerElement ? headerElement.offsetHeight : 0;

        if (headerHeight > 90) {
            headerHeight = 90;
        }

        if (scrolled > headerHeight) {
            document.body.classList.add('hide_menu');
        } else {
            document.body.classList.remove('hide_menu');
        }

        if (scrollPrev > scrolled) {
            document.body.classList.remove('hide_menu');
        }

        scrollPrev = scrolled;
    });
}

// Вызов функции для инициализации
headnavbar();

// для компании или закзачика

// // Получаем элементы по их идентификаторам
document.addEventListener('DOMContentLoaded', function() {
    const switch_title1 = document.getElementById('client-tab');
    const switch_title2 = document.getElementById('company-tab');
    const elis1 = document.getElementById('elis1');
    const elis2 = document.getElementById('elis2');

    // Функция для переключения классов
    function toggleActive(activeElis, inactiveElis) {
        activeElis.classList.add('active');
        inactiveElis.classList.remove('active');
    }

    // Обработчик для события shown.bs.tab
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(event) {
            const target = event.target.getAttribute('data-bs-target');
            if (target === '#for_company') {
                toggleActive(elis1, elis2);
            } else if (target === '#for_client') {
                toggleActive(elis2, elis1);
            }
        });
    });
});

// модалка
function enableFullscreenBlock(formId) {
    document.body.classList.add('no-scroll');
    document.getElementById(formId).style.display = 'flex';
}

function disableFullscreenBlock(formId) {
    document.body.classList.remove('no-scroll');
    document.getElementById(formId).style.display = 'none';
}

// Пример вызова функций (например, по клику на кнопку)
document.getElementById('form_client').addEventListener('click', function() {
    enableFullscreenBlock('form_client_wrap');
});
document.getElementById('close').addEventListener('click', function() {
    disableFullscreenBlock('form_client_wrap');
});

document.getElementById('form_bisnes').addEventListener('click', function() {
    enableFullscreenBlock('form_bisnes_wrap');
});
document.getElementById('close_bisnes').addEventListener('click', function() {
    disableFullscreenBlock('form_bisnes_wrap');
});
document.getElementById('bottom_card_icon').addEventListener('click', function() {
    enableFullscreenBlock('detail_info_card');
});
document.getElementById('close_detal_info').addEventListener('click', function() {
    disableFullscreenBlock('detail_info_card');
});

// выпадающий список

document.getElementById('development_open_list').addEventListener('click', function() {
    document.getElementById('invis').style.display = 'flex';
    document.getElementById('development_open_list').style.display = 'none';
    document.getElementById('visible').style.marginBottom = '20px';
});