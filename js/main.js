// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });

{
  var slideIndex = 1;

  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
  }
}

{
  const minutes = document.querySelectorAll("hours");
  const hours = document.querySelectorAll("minutes");
  const seconds = document.querySelectorAll("seconds");

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      yyyy = today.getFullYear(),
      dayMonth = "10/20/",
      sale = dayMonth + yyyy;

    const countDown = new Date(sale).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, 0);
  })();
}

// tab
{
  function openSug(evt, sugName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent__first");
    // tabcontent.style.display = "block";
    tabcontent[0].style.display = "block";
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sugName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // document.getElementById("defaultOpen").click();
}
// let sug = document.querySelector("slug");
// let heightSug = document.querySelector(".sug").offsetTop;
// window.scroll({ top: heightSug });
// addEventListener("click", (event) => {
//   window.scroll({ top: 2400 });
// });
document.getElementById("defaultOpen").addEventListener("click", (event) => {
  window.scrollTo({ top: 2300 });
});

window.addEventListener("DOMContentLoaded", (event) => {
  // slide sale
  {
    $(".sale").slick({
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 6,
    });
    {
      /*  */
    }
    $(".category").slick({
      infinite: false,
      slidesToShow: 10,
      slidesToScroll: 3,
    });
    //
    //
    $(".slide__left").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    //
    //
    $(".sproduct").slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
    });
    //
    // s???n ph???m mua nhi???u
    $(".hot").slick({
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 2,
    });
  }

  {
    // Back to top button
    (function () {
      $(document).ready(function () {
        return (
          $(window).scroll(function () {
            return $(window).scrollTop() > 200
              ? $("#back__top").addClass("show")
              : $("#back__top").removeClass("show");
          }),
          $("#back__top").click(function () {
            return $("html,body").animate({
              scrollTop: "0",
            });
          })
        );
      });
    }.call(this));
  }
  {
    let suggetElement = document.querySelector(".sug__sale--top");
    let suggetElementSpageHeight = suggetElement.offsetTop;
    let heightHeader = document.querySelector("header").offsetHeight;
    let heightSug = document.querySelector(".sug").offsetHeight;
    // alert(heightSug);
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (
        document.documentElement.scrollTop >
          suggetElementSpageHeight - heightHeader &&
        document.documentElement.scrollTop <=
          suggetElementSpageHeight - heightHeader + heightSug
      ) {
        suggetElement.classList.add("active-fixed");

        // alert(heightHeader);
        suggetElement.style.top = heightHeader + "px";
      } else {
        suggetElement.classList.remove("active-fixed");
      }
    }
  }
});
// stick header
// {
//   window.onscroll = function () {
//     myFunction();
//   };

//   var mainHeader = document.getElementById("sug");
//   var header = document.getElementById("myHeader");
//   var sticky = header.offsetTop;

//   var clheader = document.getElementById("footer");
//   var clsticky = clheader.offsetTop;

//   function myFunction() {
//     if (window.pageYOffset >= header.offsetTop) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//     // if (window.pageYOffset >= clsticky) {
//     //   header.classList.remove("sticky");
//     // }
//     // if (window.pageYOffset <= sticky) {
//     //   header.classList.add("sticky");
//     // }
//   }
// }

// {
//   $(function () {
//     var top =
//       $("#menu").offset().top -
//       parseFloat($("#menu").css("marginTop").replace(/auto/, 0));
//     var footTop =
//       $("#footer").offset().top -
//       parseFloat($("#footer").css("marginTop").replace(/auto/, 0));

//     var maxY = footTop - $("#menu").outerHeight();

//     $(window).scroll(function (evt) {
//       var y = $(this).scrollTop();
//       if (y > top) {
//         if (y < maxY) {
//           $("#menu").addClass("fixed").removeAttr("style");
//         } else {
//           $("#menu")
//             .removeClass("fixed")
//             .css({
//               position: "absolute",
//               top: maxY - top + 20 + "px",
//             });
//         }
//       } else {
//         $("#menu").removeClass("fixed");
//       }
//     });
//   });
// }
// sticky

// {
//   (function () {
//     var sug = $(".sug").offset().top;
//     var header = $(".header").height();
//     var hsug = $(".sug").height();
//     var hsugt = $(".sug__sale--parent").height();
//     // alert(sug - header);
//     // alert(sug - header + hsug);
//     $(window).scroll(function () {
//       if (
//         $(window).scrollTop() > sug - header &&
//         $(window).scrollTop() <= sug - header + hsug - 20
//       ) {
//         $(".sug__sale--top").css({
//           position: "fixed",
//           top: header,
//         });
//       } else {
//         $(".sug__sale--top").css({
//           position: "relative",
//           top: "0",
//         });
//       }
//     });
//   }.call(this));
// }
