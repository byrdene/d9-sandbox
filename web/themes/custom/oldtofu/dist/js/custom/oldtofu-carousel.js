!function(e,n){function i(e,i){var s=n(e),o=n(i),r=s.children(o).length;4<r&&s.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]}),r<5&&s.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]}),r<4&&s.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:"unslick"},{breakpoint:768,settings:"unslick"},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]}),r<3&&s.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:"unslick"},{breakpoint:768,settings:"unslick"},{breakpoint:480,settings:"unslick"}]})}var s,o,r,l,t,a;l=".gallery-item",t=n(".component--type-gallery-carousel .gallery-wrapper"),a=n(l),1<t.children(a).length&&t.slick({arrows:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,touchMove:!0,centerPadding:0,autoplay:!1,autoplaySpeed:5e3,speed:750,zIndex:40,fade:!0,cssEase:"linear",useCSS:!0}),i(".component--type-gallery-slider .gallery-wrapper",".gallery-item"),s=".card-item",o=n(".component--type-card-deck .card-deck-wrapper"),r=n(s),3<o.children(r).length&&o.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]}),n(window).on("resize orientationchange",function(e){setTimeout(function(e){i(".component--type-gallery-slider .gallery-wrapper",".gallery-item")},100)})}(Drupal,jQuery);
//# sourceMappingURL=oldtofu-carousel.js.map