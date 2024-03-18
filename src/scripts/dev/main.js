(function () {
  "use strict";

  const root = document.documentElement;

  const navToggle = document.querySelector("#js-navToggle");
  navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
  });

  const eventPP = document.querySelector("#js-eventPP");
  const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
  if (eventPP && eventOpenBtn) {
    const closeEventPP = function (event) {
      function close() {
        document.removeEventListener("keyup", closeEventPP);
        eventPP.removeEventListener("click", closeEventPP);
        root.classList.remove("show-event-popup");
      }
      switch (event.type) {
        case "keyup":
          if (event.key === "Escape" || event.keyCode === 27) close();
          break;
        case "click":
          if (
            event.target === this ||
            event.target.classList.contains("js-ppCloseBtn")
          )
            close();
          break;
      }
    };
    eventOpenBtn.addEventListener("click", function () {
      root.classList.add("show-event-popup");
      document.addEventListener("keyup", closeEventPP);
      eventPP.addEventListener("click", closeEventPP);
    });
  }

  const swipers = document.querySelectorAll(".js-swiper");

  swipers.forEach(function (swpr) {
    new Swiper(swpr, {
      updateOnWindowResize: true,
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 0,
      speed: 500,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "arrow--disabled",
      },
    });
  });
  const contactsMap = document.querySelector("#js-contactsMap");

  if (contactsMap) {
    const mapStyles = [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#242f3e",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#746855",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#242f3e",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#263c3f",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6b9a76",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#38414e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#212a37",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9ca5b3",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#746855",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#1f2835",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#f3d19c",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#2f3948",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#17263c",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#515c6d",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#17263c",
          },
        ],
      },
    ];

    const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
    const mapOptions = {
      center: mapCenter,
      disableDefaultUI: true,
      draggable: true,
      gestureHandling: "cooperative",
      scrollwheel: false,
      styles: mapStyles,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    };
    const point = new google.maps.LatLng(56.49385, 84.96274);
    const map = new google.maps.Map(contactsMap, mapOptions);
    const mapPin = new google.maps.MarkerImage(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABHCAMAAABf/MtLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAADAUExURUdwTK8wILwyJL0zI70yJbwyI79AIL0yJL8wILs0JLw0JLsyJL0zJbwyJbwzJB8eHv///3Nycjs6OldWVsRMP4+OjsRNP8fHx+Pj492ZkUlISOazrauqqu7MyMfGxsBAMS0sLMlZTc1mW/vy8sBAMvvy8WVkZMVMQPbl48lZTtmMg81mWtmMhMxmW4+Pj/fm4/fl5OGmnvHx8Z2cnMVNQPLZ1tWAdt6ZktBzaHNzc9V/duq/u+Gmn8hZTNFzabm5uYZR+N4AAAAOdFJOUwAQz9/f3xB/EIDPz9/ftWbT5QAAAWxJREFUWMPt1VlTwjAQAGDEaluPJiQhYGjtAeUQxPu+/v+/cpO2DC+OI7PRYcw+JOlO55vMdpO2WmtBNo3W9+FsZzvb2c529l/Y45hXi/iG6yA8fuKMkGUMqS5X1RvLONvA7tJOtaD9au5AginSo5A6hUem3+hRhmUTwhubjNFttbKzDwT7GqqtGpv0G5vE2Ptes9FrsvqW/9FmXDGIjHCuZwYJc0wUHCn9aYlJKO7uKmf/sh39LJxtxx7lObJ9e1emMA1oISN5OUmFmNMrIQSGnd/TM2M/w3iRwCDpCdK+i9EwMfY5jMkU056l0SvNtf0GT0PUfT9K+a6tAYUKP0wFpl3oSpTansuXchIh2jM9LKDWet/SlATNLkxjg2lqsjAtg9cnOqCbU1Ev9Ji6+wTTdv/LLbJdbHnsh160GwZW6ANz+Ns28LC+WXwL9lFt71mwv7gSUcKzuG/fYr2DtqEPd2w0YeAfR55vg/4EpN3f8dlAXnoAAAAASUVORK5CYII=",
      new google.maps.Size(91, 71), //size
      new google.maps.Point(0, 0),  //origin point
      new google.maps.Point(0, 71)  //offset point
    );
    new google.maps.Marker({
      position: point,
      map: map,
      icon: mapPin,
      title: "TAGREE digital"
    });
   
  };

  const jsSelectric = $(".js-selectric");
  if (jsSelectric.length) {
    jsSelectric.selectric({
      nativeOnMobile: false
    });
};
const mobileMask = $('.js-mobileMask');
if (mobileMask.length) {
  mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
};

const dateField = $(".js-dateField");
if (dateField.length) {
  const pickerInit = function (pick) {
    const dateInput = pick.find(".js-dateInput");
    const dateDay = pick.find(".js-dateDay");
    const dateMonth = pick.find(".js-dateMonth");
    const dateYear = pick.find(".js-dateYear");
    const dateConfig = {
      autoClose: true,
      minDate: new Date(),
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      onSelect: function ({ date }) {
        dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
        dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
        dateYear.val(date ? date.getFullYear() : "");
      }
    };
    new AirDatepicker(dateInput[0], dateConfig);
  };
  $.each(dateField, function (i) {
    pickerInit($(this));
  });
};
const subscribeForm = $("#js-subscribeForm");
if (subscribeForm.length) {
  const subscribeAction = subscribeForm.attr("action");
  const subscribeEmail = subscribeForm.find("#js-subscribeEmail");
  subscribeForm.validate({
    errorElement: "span",
    submitHandler: function (form, event) {
      event.preventDefault();
      fetch(subscribeAction, {
        method: 'POST',
        body:{
          email:subscribeEmail.val(),

        },
      }).then(()=>{
        subscribeEmail.val("");
        subscribeEmail.blur();
        toastr.success('Вы успешно подписались на рассылку новостей', "");
      }).catch(()=>{
        toastr.error('Попробуйте еще раз', "");
      });
    },
  });
};

const scene = document.querySelector('.js-scene').children; //svg scene

const checks = document.querySelectorAll('.js-check');//label class="reserve__check"
let color_check='#bc3324';//цвет чекбокса

let red_price;//переменная для хранения цены красных столов
let black_price;//переменная для хранения цены черных столов

const price_item = document.querySelectorAll('.js-price'); //div с ценой

//считываение цен
price_item.forEach((price)=>{
  if(price.classList.contains('reserve__price-item--red'))
    red_price = price.textContent;
  else
    black_price = price.textContent;
});

const tickets = document.querySelectorAll('.js-tickets');//div class="reserve__tickets"

const sum = document.querySelector('.js-sum');//div с общей суммой

//подсчет цены и количества при checked
const sum_plus = (color_check)=>{
    if (color_check === '#bc3324'){
        tickets[0].children[0].textContent = +tickets[0].children[0].textContent + 1;
        tickets[0].children[1].textContent = +tickets[0].children[1].textContent + +red_price;
        
    }
      else{
        tickets[1].children[0].textContent = +tickets[1].children[0].textContent + 1;
        tickets[1].children[1].textContent = +tickets[1].children[1].textContent + +black_price;
      }
    sum.textContent = +tickets[0].children[1].textContent + +tickets[1].children[1].textContent
};

//подсчет цены и количества при unchecked
const sum_minus = (color_check)=>{
  if (color_check === '#bc3324'){
    tickets[0].children[0].textContent = +tickets[0].children[0].textContent - 1;
    tickets[0].children[1].textContent = +tickets[0].children[1].textContent - +red_price;
    
}
  else{
    tickets[1].children[0].textContent = +tickets[1].children[0].textContent - 1;
    tickets[1].children[1].textContent = +tickets[1].children[1].textContent - +black_price;
  }
sum.textContent = +tickets[0].children[1].textContent + +tickets[1].children[1].textContent
}


//определение цвета чекбокса
const check_class = (check_obj, cls) =>{
  if (check_obj.classList.contains(cls)){
    color_check = '#bc3324';
  }
  else color_check='#1f1e1e';
  return color_check;
};

//отметка чекбоксами
for(let i = 0;i<checks.length;i++){
  checks[i].children[0].addEventListener('change', function() {
    if (this.checked){
      check_class(checks[i], 'check--red');
      const child = scene[i+1].children;
      
      const figure = child[0].children;
     
      //покраска столов
      for (let f of figure){
        f.style.fill = color_check;
      }

      child[1].style.fill = 'white';
      sum_plus(color_check);
    }
    if (!this.checked){
      check_class(checks[i], 'check--red');
      const child = scene[i+1].children;
      
      const figure = child[0].children;
     
      for (let f of figure){
        f.style.fill = '';
        
      }
      child[1].style.fill = color_check;
      sum_minus(color_check);
    }

  });
}

//отметка столами
for(let i = 1;i<scene.length;i++){
  scene[i].addEventListener('click', function(){
    if (checks[i-1].children[0].checked == false && checks[i-1].children[0].disabled == false){
      check_class(scene[i], 'scene__table--red');
      const child = scene[i].children;
        
      const figure = child[0].children;

      child[1].style.fill = 'white';
      
      for (let f of figure){
        f.style.fill = color_check;
      }
      checks[i-1].children[0].checked = true;
      sum_plus(color_check);
  }
  else{
    check_class(scene[i], 'scene__table--red');
    const child = scene[i].children;
      
    const figure = child[0].children;

    child[1].style.fill = color_check;
    
    for (let f of figure){
      f.style.fill = '';
    }
    checks[i-1].children[0].checked = false;
    sum_minus(color_check);
  }
  });
}



})();
