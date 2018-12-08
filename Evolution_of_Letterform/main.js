

//FIXED HEADER
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;

//     if (prevScrollpos < currentScrollPos) {
//         document.getElementById("fixedHeader").style.top = "-150px";
//     } else {
//         document.getElementById("fixedHeader").style.top = "0";
//     }
//     prevScrollpos = currentScrollPos;
// }

//  MENU
//fade in after title
$(window).scroll(function(){ 
    if ($(this).scrollTop() > 800) {
    $(".menu").fadeIn(1000)
}else{$(".menu").fadeOut(1000);}
});

//click to scroll
$("#menuHeader").click(function() {
    $('html,body').animate({
        scrollTop: $(".header").offset().top},
        'slow');
});

$("#section01").click(function() {
    $('html,body').animate({
        scrollTop: $(".box01").offset().top},
        'slow');
});

$("#section02").click(function() {
    $('html,body').animate({
        scrollTop: $(".box02").offset().top},
        'slow');
});


$("#section03").click(function() {
    $('html,body').animate({
        scrollTop: $(".box03").offset().top},
        'slow');
});

$("#section04").click(function() {
    $('html,body').animate({
        scrollTop: $(".box04").offset().top},
        'slow');
});

$("#section05").click(function() {
    $('html,body').animate({
        scrollTop: $(".box05").offset().top},
        'slow');
});

$("#section06").click(function() {
    $('html,body').animate({
        scrollTop: $(".box06").offset().top},
        'slow');
});

$("#section07").click(function() {
    $('html,body').animate({
        scrollTop: $(".box07").offset().top},
        'slow');
});

$("#section08").click(function() {
    $('html,body').animate({
        scrollTop: $(".box08").offset().top},
        'slow');
});

$("#section09").click(function() {
    $('html,body').animate({
        scrollTop: $(".box09").offset().top},
        'slow');
});

$("#section10").click(function() {
    $('html,body').animate({
        scrollTop: $(".box10").offset().top},
        'slow');
});

// HOVER FUNCTIONS
//OLD STYLE

//I
$("#hover01").hover(function() {
    $("#oldHoverI").fadeIn(250);
}, function() {
    $("#oldHoverI").fadeOut(250);
})

//II
$("#hover02").hover(function() {
    $("#oldHoverII").fadeIn(250);
}, function() {
    $("#oldHoverII").fadeOut(250);
})
//III
$("#hover03").hover(function() {
    $("#oldHoverIII").fadeIn(250);
}, function() {
    $("#oldHoverIII").fadeOut(250);
})

//IV
$("#hover04").hover(function() {
    $("#oldHoverIV").fadeIn(250);
}, function() {
    $("#oldHoverIV").fadeOut(250);
})

//V
$("#hover05").hover(function() {
    $("#oldHoverV").fadeIn(250);
}, function() {
    $("#oldHoverV").fadeOut(250);
})

//VI
$("#hover06").hover(function() {
    $("#oldHoverVI").fadeIn(250);
}, function() {
    $("#oldHoverVI").fadeOut(250);
})

//TRANSITIONAL

//I
$("#hover07").hover(function() {
    $("#transitionalHoverI").fadeIn(250);
}, function() {
    $("#transitionalHoverI").fadeOut(250);
})
//II
$("#hover08").hover(function() {
    $("#transitionalHoverII").fadeIn(250);
}, function() {
    $("#transitionalHoverII").fadeOut(250);
})
//III
$("#hover09").hover(function() {
    $("#transitionalHoverIII").fadeIn(250);
}, function() {
    $("#transitionalHoverIII").fadeOut(250);
})
//IV
$("#hover10").hover(function() {
    $("#transitionalHoverIV").fadeIn(250);
}, function() {
    $("#transitionalHoverIV").fadeOut(250);
})
//MODERN

//I
$("#hover11").hover(function() {
    $("#modernHoverI").fadeIn(250);
}, function() {
    $("#modernHoverI").fadeOut(250);
})
//II
$("#hover12").hover(function() {
    $("#modernHoverII").fadeIn(250);
}, function() {
    $("#modernHoverII").fadeOut(250);
})
//III
$("#hover13").hover(function() {
    $("#modernHoverIII").fadeIn(250);
}, function() {
    $("#modernHoverIII").fadeOut(250);
})
//IV
$("#hover14").hover(function() {
    $("#modernHoverIV").fadeIn(250);
}, function() {
    $("#modernHoverIV").fadeOut(250);
})

// SANS-SERIF

$("#hover15").hover(function() {
    $("#sansHoverI").fadeIn(250);
}, function() {
    $("#sansHoverI").fadeOut(250);
})
//II
$("#hover16").hover(function() {
    $("#sansHoverII").fadeIn(250);
}, function() {
    $("#sansHoverII").fadeOut(250);
})
//III
$("#hover17").hover(function() {
    $("#sansHoverIII").fadeIn(250);
}, function() {
    $("#sansHoverIII").fadeOut(250);
})
//IV
$("#hover18").hover(function() {
    $("#sansHoverIV").fadeIn(250);
}, function() {
    $("#sansHoverIV").fadeOut(250);
})

// WEB TYPE

// I
$("#hover19").hover(function() {
    $("#webHoverI").fadeIn(250);
}, function() {
    $("#webHoverI").fadeOut(250);
})
// II
$("#hover20").hover(function() {
    $("#webHoverII").fadeIn(250);
}, function() {
    $("#webHoverII").fadeOut(250);
})


//sticky.js

"use strict";
!function(e) {
    "function" == typeof define && define.amd ? define(e) : "undefined" != typeof module && module.exports ? module.exports = e() : window.enterView = e.call(this)
}(function() {
    var e = function(e) {
        function n() {
            g = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                return setTimeout(e, 1e3 / 60)
            }
        }
        function t() {
            if (h && "number" == typeof h) {
                var e = Math.min(Math.max(0, h), 1);
                return q - e * q
            }
            return q
        }
        function i() {
            var e = document.documentElement.clientHeight
              , n = window.innerHeight || 0;
            q = Math.max(e, n)
        }
        function o() {
            y = !1;
            var e = t();
            A = A.filter(function(n) {
                var t = n.getBoundingClientRect()
                  , i = t.top
                  , o = i < e;
                if (o && !n.__enter_view) {
                    if (m(n),
                    _)
                        return !1
                } else
                    !o && n.__enter_view && w && w(n);
                return n.__enter_view = o,
                !0
            }),
            A.length || window.removeEventListener("scroll", r, !0)
        }
        function r() {
            y || (y = !0,
            g(o))
        }
        function u() {
            i(),
            o()
        }
        function f(e) {
            for (var n = e.length, t = [], i = 0; i < n; i += 1)
                t.push(e[i]);
            return t
        }
        function c(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e ? f(n.querySelectorAll(e)) : e instanceof NodeList ? f(e) : e instanceof Array ? e : void 0
        }
        function d() {
            A = c(l)
        }
        function a() {
            window.addEventListener("resize", u, !0),
            window.addEventListener("scroll", r, !0),
            u()
        }
        function s() {
            var e = l && m;
            e || console.error("must set selector and enter options"),
            n(),
            d(),
            a(),
            o()
        }
        var l = e.selector
          , m = e.enter
          , w = e.exit
          , v = e.offset
          , h = void 0 === v ? 0 : v
          , p = e.once
          , _ = void 0 !== p && p
          , g = null
          , y = !1
          , A = []
          , q = 0;
        s()
    };
    return e
});

//control video on scroll taken from https://codepen.io/ollieRogers/pen/lfeLc/

enterView({
    selector: 'section',
    enter: function(el) {
        el.classList.add('entered');
    }
})

var frameNumber = 0
  , // start video at frame 0
// lower numbers = faster playback
playbackConst = 450
  , // get page height from video duration
setHeight = document.getElementById("set-height")
  , // select video element         
vid = document.getElementById('v0');
// var vid = $('#v0')[0]; // jquery option
// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});
// Use requestAnimationFrame for smooth playback
function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}
window.requestAnimationFrame(scrollPlay);
