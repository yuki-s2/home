const itemWrapper = document.querySelector('.side-scroll__itemOuter');
const itemInner = document.querySelector('.side-scroll__itemInner');

//gsap.to(itemInner, {
//  x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
//  ease: 'none',
//  scrollTrigger: {
//    trigger: '.side-scroll__section', 
//    start: 'top top',
//    end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
//    markers: true,
//    scrub: true, 
//    pin: true,  
//    invalidateOnRefresh: true, 
//    anticipatePin: 1, 
//  },
//});



$(function(){
  $("div .target").hover(
    function() {
      $(this).css({transform: 'rotateY(-180deg)', transition: ".3s"});
    },
    function() {
      $(this).css({transform: 'rotateY(0deg)', transition: ".3s"});
    }
  );
});


/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);