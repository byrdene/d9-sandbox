!function(i,t){function e(i,e){var s=t(i),l=t(e);s.each(function(){var i=l.length;4<i&&(t(this).hasClass("slick-initialized")||t(this).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]})),i<5&&(992<t(window).width()?t(this).hasClass("slick-initialized")&&t(this).slick("unslick"):t(this).hasClass("slick-initialized")||t(this).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]})),i<4&&(768<t(window).width()?t(this).hasClass("slick-initialized")&&t(this).slick("unslick"):t(this).hasClass("slick-initialized")||t(this).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:"unslick"},{breakpoint:768,settings:"unslick"},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]})),i<3&&(480<t(window).width()?t(this).hasClass("slick-initialized")&&t(this).slick("unslick"):t(this).hasClass("slick-initialized")||t(this).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:"unslick"},{breakpoint:768,settings:"unslick"},{breakpoint:480,settings:"unslick"}]}))})}function s(i,e){var s=t(i),l=t(e);s.each(function(){var i=l.length;3<i&&(t(this).hasClass("slick-initialized")||t(this).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,centerMode:!1,arrow:!0,cssEase:"linear",infinite:!1,useCSS:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,centerMode:!1,arrow:!0}}]})),i<4&&t(this).slick("unslick")})}var l;l=".field__item",t(".section--type-gallery-carousel .field--name-field-images.field__items").each(function(){1<t(l,this).length&&t(this).slick({arrows:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,touchMove:!0,centerPadding:0,autoplay:!1,autoplaySpeed:5e3,speed:750,zIndex:40,fade:!0,cssEase:"linear",useCSS:!0})}),e(".section--type-gallery-slider .field--name-field-images.field__items",".section--type-gallery-slider .field--name-field-images.field__items .field--name-field-images.field__item"),s(".section--type-card-deck .field--name-field-cards.field__items",".section--type-card-deck .field--name-field-cards.field__items .field--name-field-cards.field__item"),t(window).on("resize orientationchange",function(i){setTimeout(function(i){e(".section--type-gallery-slider .field--name-field-images.field__items",".section--type-gallery-slider .field--name-field-images.field__items .field--name-field-images.field__item"),s(".section--type-card-deck .field--name-field-cards.field__items",".section--type-card-deck .field--name-field-cards.field__items .field--name-field-cards.field__item")},100)})}(Drupal,jQuery);
//# sourceMappingURL=tofu-carousel.js.map
