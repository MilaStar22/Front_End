//Хедер скролл sticky
let element = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 53) {
    element.classList.add("header__sticky");
  } else {
    element.classList.remove("header__sticky");
  }
});

// slider about
const about_slider = new Swiper('.about-slider', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// перехід по якорям +  плавний скрол
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

//activeMenu 
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top > offset && top < offset + height){
      navLink.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// галерея каринок
Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options
});


//Слайдер для секції news 

const news_slider = new Swiper('.news-slider', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    860: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});


// google map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 40.6686, lng: -73.8999 },
    zoom: 13.5,
    mapId: '2f084b4895741534',
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981 },
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}
window.initMap = initMap;

// key = AIzaSyDlZQJXVvR26wkXhgi02j3VnPL3DpyfdKI
