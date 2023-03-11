var swiper = new Swiper(".mySwiper", {

  breakpoints:{
    0:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    991:{
      slidesPerView:3,
    },

  },
  loop: true,
  spaceBetween: 20,
  autoplay:true,

});



var swiper = new Swiper(".mSwiper", {
  breakpoints:{
    0:{
      slidesPerView:2,
    },
    486:{
      slidesPerView:2,
    },
    650:{
      slidesPerView:3,
    },
    900:{
      slidesPerView:4,
    },
    1050:{
      slidesPerView:5,
    },
    1200:{
      slidesPerView:6,
    },

  },
  spaceBetween: 20,
  loop: true,

 
  
  //  autoplay:true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

    navigation: {
      nextEl: ".d-button-next",
      prevEl: ".d-button-prev",
    },
  });
 





// fruits and vagitables ---------------------------

var swiper = new Swiper(".vSwiper", {
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    486:{
      slidesPerView:2,
    },
    778:{
      slidesPerView:3,
    },
    1000:{
      slidesPerView:4,
    },
  },
  spaceBetween: 30,
  loop: true,
  
  //  autoplay:true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

    navigation: {
      nextEl: ".vegetable-button-next",
      prevEl: ".vegetable-button-prev",
    },
  });
// payments offersection
  
var swiper = new Swiper(".paymentSwiper", {
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    978:{
      slidesPerView:2,}
   

  },
  spaceBetween: 20,
  loop: true,
  
  //  autoplay:true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

    navigation: {
      nextEl: ".payment-button-next",
      prevEl: ".payment-button-prev",
    },
  });

// special offer section js --------------------------------------
 
   
var swiper = new Swiper(".offerSwiper", {
  slidesPerView: 1,
 
  loop: true,
  
  //  autoplay:true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".offer-button-next",
    prevEl: ".offer-button-prev",
  },
  
  });
// top selling section js --------------------------------------

var swiper = new Swiper(".specilSwiper", {
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    540:{
      slidesPerView:2,
    },
    1200:{
      slidesPerView:3,}
   

  },

  spaceBetween: 20,

 
  loop: true,
  
   autoplay:true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  
  });

  // stopwatch----------------------------------------------------------------
  // Set the date we're counting down to
var countDownDate = new Date("july 8, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d - " + hours + "h:"
  + minutes + "m:" + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// brakfast and  -------------------------------
var swiper = new Swiper(".breakfastSwiper", {

  breakpoints:{
    0:{
      slidesPerView:1,
    },
    486:{
      slidesPerView:2,
    },
    778:{
      slidesPerView:3,
    },
    1000:{
      slidesPerView:4,
    },
  },
  loop: true,
  spaceBetween: 20,
  
  navigation: {
    nextEl: ".breakfast-button-next",
    prevEl: ".breakfast-button-prev",
  },

});


// chemiststore-----------------------------------------------------

var swiper = new Swiper(".chemiststoreSwiper", {

  breakpoints:{
    0:{
      slidesPerView:1,
    },
    486:{
      slidesPerView:2,
    },
    778:{
      slidesPerView:3,
    },
    1000:{
      slidesPerView:4,
    },
  },
  loop: true,
  spaceBetween: 20,
  
  navigation: {
    nextEl: ".chemiststore-button-next",
    prevEl: ".chemiststore-button-prev",
  },

});

var swiper = new Swiper(".chocolateSwiper", {
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    1000:{
      slidesPerView:2,}
   

  },
  spaceBetween: 20,
 
  });

  // Drinks -----------------------
 
  var swiper = new Swiper(".drinksSwiper", {
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      486:{
        slidesPerView:2,
      },
      778:{
        slidesPerView:3,
      },
      1000:{
        slidesPerView:4,
      },
    },
    spaceBetween: 20,
    loop: true,
    
    //  autoplay:true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  
      navigation: {
        nextEl: ".drinks-button-next",
        prevEl: ".drinks-button-prev",
      },
    });

    //  grocccccc
 

    var swiper = new Swiper(".grocerySwiper", {
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        486:{
          slidesPerView:2,
        },
        778:{
          slidesPerView:3,
        },
        1000:{
          slidesPerView:4,
        },
      },
      spaceBetween: 20,
      loop: true,
      
      //  autoplay:true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    
        navigation: {
          nextEl: ".grocery-button-next",
          prevEl: ".grocery-button-prev",
        },
      });


    // personalcare     /

    var swiper = new Swiper(".personalcareSwiper", {
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        486:{
          slidesPerView:2,
        },
        778:{
          slidesPerView:3,
        },
        1000:{
          slidesPerView:4,
        },
      },
      spaceBetween: 20,
      loop: true,
      
      //  autoplay:true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    
        navigation: {
          nextEl: ".personalcare-button-next",
          prevEl: ".personalcare-button-prev",
        },
      });


       //Kitchen & Dining Needs-------------------------     /

      var swiper = new Swiper(".kitchenSwiper", {
        breakpoints:{
          0:{
            slidesPerView:1,
          },
          486:{
            slidesPerView:2,
          },
          778:{
            slidesPerView:3,
          },
          1000:{
            slidesPerView:4,
          },
        },
        spaceBetween: 20,
        loop: true,
        
        //  autoplay:true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      
          navigation: {
            nextEl: ".kitchen-button-next",
            prevEl: ".kitchen-button-prev",
          },
        });

        // BLOG ---------------------------------
    var swiper = new Swiper(".blogSwiper", {
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        976:{
          slidesPerView:2,
        },
     
      },
      spaceBetween: 20,
      loop: true,
      
      //  autoplay:true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    
        navigation: {
          nextEl: ".blog-button-next",
          prevEl: ".blog-button-prev",
        },
      });

      //  bloG   