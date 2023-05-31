$(document).ready(function() {
  $('.drawer').drawer();
});




const itemWrapper = document.querySelector('.side-scroll__itemOuter');
const itemInner = document.querySelector('.side-scroll__itemInner');

gsap.to(itemInner, {
  x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll__section', 
    start: 'top top',
    end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
    scrub: true, 
    pin: true,  
    invalidateOnRefresh: true, 
    anticipatePin: 1, 
  },
});




// document.querySelectorAllでli要素を全て取得する。
let contents = document.querySelectorAll('.information__text');
// liは2つあるのでcontentsという変数に格納しました。

// contentsをforEachで一つずつ取得、引数が一つの場合は()を省略できる。(content) => {}の()を省略している。
contents.forEach(content => {
  content.textContent = omittedContent(content.textContent);
  // content.textContentで文字列を取得できる（loop1回目の場合は"テストの文章1です"が入っている)
});

// 引数でcontent.textContentをstringという変数名で受け取る。
function omittedContent(string) {
  // 定数で宣言
  const MAX_LENGTH = 150;

  // もしstringの文字数がMAX_LENGTH（今回は10）より大きかったら末尾に...を付け足して返す。
  if (string.length > MAX_LENGTH) {

    // substr(何文字目からスタートするか, 最大値);
    return string.substr(0, MAX_LENGTH) + '...';
  }
  //　文字数がオーバーしていなければそのまま返す
  return string;
}





new WOW().init();

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);





//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});








//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

lightbox.option({
  'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
  'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})

//ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用

function fadeAnime(){
// flipLeft
$('.gallery li').each(function(){ 
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
    }else{
        $(this).removeClass('flipLeft');
    }
});
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまでページが読み込まれたらすぐに動かしたい場合の記述




  

 
