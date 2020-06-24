// ColorBox v1.3.17.2 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function bc(b){if(!U){P=b,_(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1));if(!S){S=T=!0,r.show();if(K.returnFocus)try{P.blur(),a(P).one(l,function(){try{this.focus()}catch(a){}})}catch(c){}q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=Z(K.initialWidth,"x"),K.h=Z(K.initialHeight,"y"),X.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),ba(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()}X.load(!0)}}function bb(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(Q<y.length-1||K.loop)a=setTimeout(X.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(X.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,d),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function ba(b,c){c&&c.call(P),a.event.trigger(b)}function _(b){K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.substring(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function $(a){return K.photo||/\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(a)}function Z(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function Y(c,d,e){e=b.createElement("div"),c&&(e.id=f+c),e.style.cssText=d||"";return a(e)}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} de {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:!1},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=a.browser.msie&&!a.support.opacity,o=n&&a.browser.version<7,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X;X=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{};if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(g)}),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&bc(f[0]);return f},X.init=function(){z=a(c),r=Y().attr({id:e,"class":n?f+(o?"IE6":"IE"):""}),q=Y("Overlay",o?"position:absolute":"").hide(),s=Y("Wrapper"),t=Y("Content").append(A=Y("LoadedContent","width:0; height:0; overflow:hidden"),C=Y("LoadingOverlay").add(Y("LoadingGraphic")),D=Y("Title"),E=Y("Current"),G=Y("Next"),H=Y("Previous"),F=Y("Slideshow").bind(h,bb),I=Y("Close")),s.append(Y().append(Y("TopLeft"),u=Y("TopCenter"),Y("TopRight")),Y(!1,"clear:left").append(v=Y("MiddleLeft"),t,w=Y("MiddleRight")),Y(!1,"clear:left").append(Y("BottomLeft"),x=Y("BottomCenter"),Y("BottomRight"))).children().children().css({"float":"left"}),B=Y(!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(q,r.append(s,B)),t.children().hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}).addClass("hover"),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}).hide(),G.click(function(){X.next()}),H.click(function(){X.prev()}),I.click(function(){X.close()}),J=G.add(H).add(E).add(F),t.children().removeClass("hover"),q.click(function(){K.overlayClose&&X.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),X.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))})},X.remove=function(){r.add(q).remove(),a("."+g).removeData(e).removeClass(g)},X.position=function(a,c){function g(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,C[0].style.height=C[1].style.height=t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var d=0,e=0;z.unbind("resize."+f),r.hide(),K.fixed&&!o?r.css({position:"fixed"}):(d=z.scrollTop(),e=z.scrollLeft(),r.css({position:"absolute"})),K.right!==!1?e+=Math.max(z.width()-K.w-O-M-Z(K.right,"x"),0):K.left!==!1?e+=Z(K.left,"x"):e+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?d+=Math.max(b.documentElement.clientHeight-K.h-N-L-Z(K.bottom,"y"),0):K.top!==!1?d+=Z(K.top,"y"):d+=Math.round(Math.max(b.documentElement.clientHeight-K.h-N-L,0)/2),r.show(),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:d,left:e},{duration:a,complete:function(){g(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",c&&c(),setTimeout(function(){z.bind("resize."+f,X.position)},1)},step:function(){g(this)}})},X.resize=function(a){if(S){a=a||{},a.width&&(K.w=Z(a.width,"x")-O-M),a.innerWidth&&(K.w=Z(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=Z(a.height,"y")-N-L),a.innerHeight&&(K.h=Z(a.innerHeight,"y"));if(!a.innerHeight&&!a.height){var b=A.wrapInner("<div style='overflow:auto'></div>").children();K.h=b.height(),b.replaceWith(b.children())}A.css({height:K.h}),X.position(K.transition==="none"?0:K.speed)}},X.prep=function(b){function h(){K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h;return K.h}function g(){K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w;return K.w}if(!!S){var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Y("LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function o(){n&&r[0].style.removeAttribute("filter")}var b,c,g,h,i=y.length,k,l;!S||(l=function(){clearTimeout(W),C.hide(),ba(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show(),i>1?(typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",i)).show(),G[K.loop||Q<i-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),b=Q?y[Q-1]:y[i-1],g=Q<i-1?y[Q+1]:y[0],K.slideshow&&F.show(),K.preloading&&(h=a.data(g,e).href||g.href,c=a.data(b,e).href||b.href,h=a.isFunction(h)?h.call(g):h,c=a.isFunction(c)?c.call(b):c,$(h)&&(a("<img/>")[0].src=h),$(c)&&(a("<img/>")[0].src=c))):J.hide(),K.iframe?(k=a("<iframe/>").addClass(f+"Iframe")[0],K.fastIframe?l():a(k).one("load",l),k.name=f+ +(new Date),k.src=K.href,K.scrolling||(k.scrolling="no"),n&&(k.frameBorder=0,k.allowTransparency="true"),a(k).appendTo(A).one(m,function(){k.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,o):o())},K.transition==="fade"?r.fadeTo(d,0,function(){X.position(0,c)}):X.position(d,c)}},X.load=function(b){var c,d,e=X.prep;T=!0,R=!1,P=y[Q],b||_(),ba(m),ba(i,K.onLoad),K.h=K.height?Z(K.height,"y")-N-L:K.innerHeight&&Z(K.innerHeight,"y"),K.w=K.width?Z(K.width,"x")-O-M:K.innerWidth&&Z(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=Z(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=Z(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,W=setTimeout(function(){C.show()},100),K.inline?(Y().hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):$(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Y("Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(Q<y.length-1||K.loop)&&(R.style.cursor="pointer",R.onclick=function(){X.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Y("Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},X.next=function(){!T&&y[1]&&(Q<y.length-1||K.loop)&&(Q=Q<y.length-1?Q+1:0,X.load())},X.prev=function(){!T&&y[1]&&(Q||K.loop)&&(Q=Q?Q-1:y.length-1,X.load())},X.close=function(){S&&!U&&(U=!0,S=!1,ba(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),ba(m),A.remove(),setTimeout(function(){U=!1,ba(l,K.onClosed)},1)}))},X.element=function(){return a(P)},X.settings=d,V=function(a){a.button!==0&&typeof a.button!="undefined"||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),bc(this))},a.fn.delegate?a(b).delegate("."+g,"click",V):a("."+g).live("click",V),a(X.init)})(jQuery,document,this);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('a, area, input', context)
      .filter('.colorbox')
      .once('init-colorbox-processed')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxStockholmsyndromeStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_open', function () {
      // Hide close button initially.
      $('#cboxClose', context).css('opacity', 0);
    });
    $(document).bind('cbox_load', function () {
      // Hide close button. (It doesn't handle the load animation well.)
      $('#cboxClose', context).css('opacity', 0);
    });
    $(document).bind('cbox_complete', function () {
      // Show close button with a delay.
      $('#cboxClose', context).fadeTo('fast', 0, function () {$(this).css('opacity', 1)});
    });
  }
};

})(jQuery);
;
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function () {},
            wipeRight: function () {},
            wipeUp: function () {},
            wipeDown: function () {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }
            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }
            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);;
/*------------------------------------------------------------------------
# MD Slider - March 18, 2013
# ------------------------------------------------------------------------
# Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
--------------------------------------------------------------------------*/

jQuery(function ($) {
    $.fn.mdvideobox = function (opt) {
        $(this).each(function() {
            function init() {
                if($("#md-overlay").length == 0) {
                    var  _overlay = $('<div id="md-overlay" class="md-overlay"></div>').hide().click(closeMe);
                    var _container = $('<div id="md-videocontainer" class="md-videocontainer"><div id="md-video-embed"></div><div class="md-description clearfix"><div class="md-caption"></div><a id="md-closebtn" class="md-closebtn" href="#"></a></div></div>');
                    _container.css({'width': options.initialWidth + 'px', 'height': options.initialHeight + 'px', 'display': 'none'});
                    $("#md-closebtn", _container).click(closeMe);
                    $("body").append(_overlay).append(_container);
                }
                overlay = $("#md-overlay");
                container = $("#md-videocontainer");
                videoembed = $("#md-video-embed", container);
                caption = $(".md-caption", container);
                element.click(activate);
            }

            function closeMe()
            {
                overlay.fadeTo("fast", 0, function(){$(this).css('display','none')});
                videoembed.html('');
                container.hide();
                return false;
            }

            function activate()
            {
                options.click.call();
                overlay.css({'height': $(window).height()+'px'});
                var top = ($(window).height() / 2) - (options.initialHeight / 2);
                var left = ($(window).width() / 2) - (options.initialWidth / 2);
                container.css({top: top, left: left}).show();
                videoembed.css({'background': '#fff url(css/loading.gif) no-repeat center', 'height': options.contentsHeight, 'width': options.contentsWidth});
                overlay.css('display','block').fadeTo("fast", options.defaultOverLayFade);
                caption.html(title);
                videoembed.fadeIn("slow",function() { insert(); });
                return false;
            }

            function insert()
            {
                videoembed.css('background','#fff');
                embed = '<iframe src="' + videoSrc + '" width="' + options.contentsWidth + '" height="' + options.contentsHeight + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                videoembed.html(embed);
            }

            var options = $.extend({
                    initialWidth: 640,
                    initialHeight: 400,
                    contentsWidth: 640,
                    contentsHeight: 350,
                    defaultOverLayFade: 0.8,
                    click: function() {}
                }, opt);
            var overlay, container, caption, videoembed, embed;
            var element = $(this);
            var videoSrc = element.attr("href");
            var title = element.attr("title");
            //lets start it
            init();
        });
    }
});;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*------------------------------------------------------------------------
 # MD Slider - March 18, 2013
 # ------------------------------------------------------------------------
 # Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
 --------------------------------------------------------------------------*/

(function ($) {
    effectsIn = [
        'bounceIn',
        'bounceInDown', 
        'bounceInUp', 
        'bounceInLeft', 
        'bounceInRight', 
        'fadeIn', 
        'fadeInUp', 
        'fadeInDown', 
        'fadeInLeft', 
        'fadeInRight', 
        'fadeInUpBig',
        'fadeInDownBig',
        'fadeInLeftBig',
        'fadeInRightBig',
        'flipInX',
        'flipInY',
        'foolishIn', //-
        'lightSpeedIn',
        'rollIn',  
        'rotateIn', 
        'rotateInDownLeft', 
        'rotateInDownRight', 
        'rotateInUpLeft', 
        'rotateInUpRight',
        'twisterInDown', //-
        'twisterInUp', //-
        'swap', //-
        'swashIn',  //-
        'tinRightIn',  //-
        'tinLeftIn',  //-
        'tinUpIn',  //-
        'tinDownIn', //-
    ];
    effectsOut = [
        'bombRightOut',  //-
        'bombLeftOut', //-
        'bounceOut', 
        'bounceOutDown', 
        'bounceOutUp', 
        'bounceOutLeft', 
        'bounceOutRight',
        'fadeOut', 
        'fadeOutUp', 
        'fadeOutDown', 
        'fadeOutLeft', 
        'fadeOutRight', 
        'fadeOutUpBig',
        'fadeOutDownBig',
        'fadeOutLeftBig',
        'fadeOutRightBig',
        'flipOutX',
        'flipOutY', 
        'foolishOut', //-
        'hinge',
        'holeOut', //-
        'lightSpeedOut',
        'puffOut',  //-
        'rollOut',  
        'rotateOut', 
        'rotateOutDownLeft', 
        'rotateOutDownRight',
        'rotateOutUpLeft', 
        'rotateOutUpRight',
        'rotateDown', //-
        'rotateUp', //-
        'rotateLeft', //-
        'rotateRight', //-
        'swashOut', //-
        'tinRightOut', //-
        'tinLeftOut', //-
        'tinUpOut', //-
        'tinDownOut', //-
        'vanishOut' //-
    ];
    var e_in_length = effectsIn.length;
    var e_out_length = effectsOut.length;
    $.fn.mdSlider = function(options) {
        var defaults = {
            className: 'md-slide-wrap',
            itemClassName: 'md-slide-item',
            transitions: 'strip-down-left', // name of transition effect (fade, scrollLeft, scrollRight, scrollHorz, scrollUp, scrollDown, scrollVert)
            transitionsSpeed: 800, // speed of the transition (millisecond)
            width: 990, // responsive = false: this appear as container width; responsive = true: use for scale ;fullwidth = true: this is effect zone width
            height: 420, // container height
            responsive: true,
            fullwidth: true,
            styleBorder: 0, // Border style, from 1 - 9, 0 to disable
            styleShadow: 0, // Dropshadow style, from 1 - 5, 0 to disable
            posBullet: 2, // Bullet position, from 1 to 6, default is 5
            posThumb: 1, // Thumbnail position, from 1 to 5, default is 1
            stripCols: 20,
            stripRows: 10,
            slideShowDelay: 6000, // stop time for each slide item (millisecond)
            slideShow: true,
            loop: false,
            pauseOnHover: false,
            showLoading: true, // Show/hide loading bar
            loadingPosition: 'bottom', // choose your loading bar position (top, bottom)
            showArrow: true, // show/hide next, previous arrows
            showBullet: true,
			videoBox: false,
            showThumb: true, // Show thumbnail, if showBullet = true and showThumb = true, thumbnail will be shown when you hover bullet navigation
            enableDrag: true, // Enable mouse drag
            touchSensitive: 50,
            onEndTransition: function() {  },	//this callback is invoked when the transition effect ends
            onStartTransition: function() {  }	//this callback is invoked when the transition effect starts
        };
        options = $.extend({}, defaults, options);
        var self= $(this), slideItems = [], oIndex, activeIndex = -1, numItem = 0, slideWidth, slideHeight, lock = true,
            wrap,
            hoverDiv,
            hasTouch,
            arrowButton,
            buttons,
            loadingBar,
            timerGlow,
            slideThumb,
            minThumbsLeft = 0,
            touchstart = false,
            isScrolling,
            mouseleft,
            thumbsDrag = false,
            slideShowDelay = 0,
            play = false,
            pause = false,
            timer,
            step = 0;
          var Utils = {
            /**
             * range Get an array of numbers within a range
             * @param min {number} Lowest number in array
             * @param max {number} Highest number in array
             * @param rand {bool} Shuffle array
             * @return {array}
             */
            range: function( min, max, rand ) {
              var arr = ( new Array( ++max - min ) ).join('.').split('.').map(function( v,i ){ return min + i });
              return rand ? arr.map(function( v ) { return [ Math.random(), v ] }).sort().map(function( v ) { return v[ 1 ] }) : arr;
            }
          };

        // init
        function init() {
            self.addClass("loading-image");
            var slideClass = '';
            if (options.responsive)
                slideClass += ' md-slide-responsive';
            if (options.fullwidth)
                slideClass += ' md-slide-fullwidth';
            if (options.showBullet && options.posBullet)
                slideClass += ' md-slide-bullet-' + options.posBullet;
            if (!options.showBullet && options.showThumb && options.posThumb)
                slideClass += ' md-slide-thumb-' + options.posThumb;
            self.wrap('<div class="' + options.className + slideClass + '"><div class="md-item-wrap"></div></div>');
            hoverDiv = self.parent();
            wrap = hoverDiv.parent();
            slideWidth = options.responsive ? self.width() : options.width;
            slideHeight = options.height;
            slideItems = [];
            hasTouch = documentHasTouch();
            if(hasTouch)
                wrap.addClass("md-touchdevice");
            //
            self.find('.' + options.itemClassName).each(function (index) {
                numItem++;
                slideItems[index] = $(this);
                $(this).find(".md-object").each(function() {
                    var top =  $(this).data("y") ? $(this).data("y") : 0,
                        left = $(this).data("x") ? $(this).data("x") : 0,
                        width = $(this).data("width") ? $(this).data("width") : 0,
                        height = $(this).data("height") ? $(this).data("height") : 0;
                    if(width > 0) {
                        $(this).width((width / options.width * 100) + "%");
                    }
                    if(height > 0) {
                        $(this).height((height / options.height * 100) + "%");
                    }
                    var css = {
                        top:(top / options.height * 100) + "%",
                        left:(left / options.width * 100) + "%"
                    };
                    $(this).css(css);
                });
                if(index > 0)
                    $(this).hide();
            });
            initControl();
            initDrag();
            if(options.slideShow) {
                play = true;
            }
            $('.md-object', self).hide();
            if($(".md-video", wrap).size() > 0) {
				if(options.videoBox) {
					$(".md-video", wrap).mdvideobox();
				} else {
					var videoCtrl = $('<div class="md-video-control" style="display: none"></div>');
					wrap.append(videoCtrl);
					$(".md-video", wrap).click(function() {
						var video_ele = $("<iframe></iframe>");
						video_ele.attr('allowFullScreen' , '').attr('frameborder' , '0').css({width:"100%", height: "100%", background: "black"});
						video_ele.attr("src", $(this).attr("href"));
						var closeButton = $('<a href="#" class="md-close-video" title="Close video"></a>');
						closeButton.click(function() {
							videoCtrl.html("").hide();
							play = true;
							return false;
						});
						videoCtrl.html("").append(video_ele).append(closeButton).show();
						play = false;
						return false;
					});
				}
            }
            $(window).resize(function() {
                resizeWindow();
            });
            preloadImages();
            resizeWindow();
        }
        function initControl() {
            // Loading bar
            if(options.slideShow && options.showLoading) {
                var loadingDiv = $('<div class="loading-bar-hoz loading-bar-' + options.loadingPosition + '"><div class="br-timer-glow" style="left: -100px;"></div><div class="br-timer-bar" style="width:0px"></div></div>');
                wrap.append(loadingDiv);
                loadingBar = $(".br-timer-bar", loadingDiv);
                timerGlow  = $(".br-timer-glow", loadingDiv);
            }
            if(options.slideShow && options.pauseOnHover) {
                hoverDiv.hover(function() {
                    pause = true;
                }, function() {
                    pause = false;
                });
            }
            // Border
            if (options.styleBorder != 0) {
                var borderDivs = '<div class="border-top border-style-' + options.styleBorder + '"></div>';
                borderDivs += '<div class="border-bottom border-style-' + options.styleBorder + '"></div>';
                if (!options.fullwidth) {
                    borderDivs += '<div class="border-left border-style-' + options.styleBorder + '"><div class="edge-top"></div><div class="edge-bottom"></div></div>';
                    borderDivs += '<div class="border-right border-style-' + options.styleBorder + '"><div class="edge-top"></div><div class="edge-bottom"></div></div>';
                }
                wrap.append(borderDivs);
            }
            // Shadow
            if (options.styleShadow != 0) {
                var shadowDivs = '<div class="md-shadow md-shadow-style-' + options.styleShadow + '"></div>';
            }
            // Next, preview arrow
            if (options.showArrow) {
                arrowButton = $('<div class="md-arrow"><div class="md-arrow-left"><span></span></div><div class="md-arrow-right"><span></span></div></div>');
                hoverDiv.append(arrowButton);
                $('.md-arrow-right', arrowButton).bind('click', function () {
                    slideNext();
                });
                $('.md-arrow-left', arrowButton).bind('click', function () {
                    slidePrev();
                });
            };
            if (options.showBullet != false) {
                buttons = $('<div class="md-bullets"></div>');
                wrap.append(buttons);
                for (var i = 0; i < numItem; i++) {
                    buttons.append('<div class="md-bullet"  rel="' + i + '"><a></a></div>');
                };
                if (options.showThumb) {
                    var thumbW = parseInt(self.data("thumb-width")),
                        thumbH = parseInt(self.data("thumb-height"));
                    for (var i = 0; i < numItem; i++) {
                        var thumbSrc = slideItems[i].data("thumb");
                        if(thumbSrc) {
                            var thumb = $('<img />').attr("src", thumbSrc).css({top: -(9 + thumbH) + "px", left: -(thumbW/2 - 2) + "px", opacity: 0});
                            $('div.md-bullet:eq(' + i + ')', buttons).append(thumb).append('<div class="md-thumb-arrow" style="opacity: 0"></div>');
                        }
                    }
                    $('div.md-bullet', buttons).hover(function () {
                        $(this).addClass('md_hover');
                        var img = $("img", this);
                        if(img.length) {
                            img.show().animate({'opacity':1},200);
                            $('.md-thumb-arrow', this).show().animate({'opacity':1}, 200);
                        }
                    }, function () {
                        $(this).removeClass('md_hover');
                        $('img', this).animate({'opacity':0}, 200,function(){
                            $(this).hide();
                        });
                        $('.md-thumb-arrow',this).animate({'opacity':0},200,function(){
                            $(this).hide();
                        });
                    });
                }
                $('div.md-bullet', wrap).click(function () {
                    if ($(this).hasClass('md-current')) {
                        return false;
                    };
                    var index = $(this).attr('rel');
                    slide(index);
                });
            } else if (options.showThumb) {
                var thumbDiv = $('<div class="md-thumb"><div class="md-thumb-container"><div class="md-thumb-items"></div></div></div>').appendTo(wrap);
                slideThumb =  $(".md-thumb-items", thumbDiv);
                for (var i = 0; i < numItem; i++) {
                    var thumbSrc = slideItems[i].data("thumb");
                    if(thumbSrc) {
                        var link = $('<a class="md-thumb-item" />').attr("rel", i).append($('<img />').attr("src", thumbSrc));
                        slideThumb.append(link);
                    }
                }
                $("a", slideThumb).click(function() {
                    if ($(this).hasClass('md-current') || thumbsDrag) {
                        return false;
                    };
                    var index = $(this).attr('rel');
                    slide(index);
                });
            }
        }
        function initDrag() {
            if(hasTouch) {
                self.bind('touchstart', function (event) {
                    if(touchstart) return false;
                    event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                    touchstart = true;
                    isScrolling = undefined;
                    self.mouseY = event.pageY;
                    self.mouseX = event.pageX;
                });
                self.bind('touchmove', function (event) {
                    event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                    if (touchstart) {
                        var pageX = (event.pageX || event.clientX);
                        var pageY = (event.pageY || event.clientY);

                        if ( typeof isScrolling == 'undefined') {
                            isScrolling = !!( isScrolling || Math.abs(pageY - self.mouseY) > Math.abs( pageX - self.mouseX ) )
                        }
                        if (isScrolling ) {
                            touchstart = false;
                            return
                        } else {
                            mouseleft = pageX - self.mouseX;
                            return false;
                        }
                    };
                    return ;
                });
                self.bind('touchend', function (event) {
                    if(touchstart) {
                        touchstart = false;
                        if(mouseleft > options.touchSensitive) {
                            slidePrev();
                            mouseleft = 0;
                            return false;
                        } else if(mouseleft < -options.touchSensitive) {
                            slideNext();
                            mouseleft = 0;
                            return false;
                        }
                    }
                });
            } else {
                hoverDiv.hover(function() {
                    if (arrowButton) {
                        arrowButton.stop(true, true).animate({opacity:1},200);
                    }
                }, function() {
                    if (arrowButton) {
                        arrowButton.stop(true, true).animate({opacity:0},200);
                    }
                });
                wrap.trigger("hover");
            }

            if (options.enableDrag) {
                self.mousedown(function (event) {
                    if (!touchstart) {
                        touchstart = true;
                        isScrolling = undefined;
                        self.mouseY = event.pageY;
                        self.mouseX = event.pageX;
                    };
                    return false;
                });
                self.mousemove(function (event) {
                    if (touchstart) {
                        var pageX = (event.pageX || event.clientX);
                        var pageY = (event.pageY || event.clientY);

                        if ( typeof isScrolling == 'undefined') {
                            isScrolling = !!( isScrolling || Math.abs(pageY - self.mouseY) > Math.abs( pageX - self.mouseX ) )
                        }
                        if (isScrolling ) {
                            touchstart = false;
                            return
                        } else {
                            mouseleft = pageX - self.mouseX;
                            return false;
                        }
                    };
                    return ;
                });
                self.mouseup(function (event) {
                    if(touchstart) {
                        touchstart = false;
                        if(mouseleft > options.touchSensitive) {
                            slidePrev();
                        } else if(mouseleft < -options.touchSensitive) {
                            slideNext();
                        }
                        mouseleft = 0;
                        return false;
                    }
                });
                self.mouseleave(function (event) {
                    self.mouseup();
                });
            };

        }
        function resizeThumbDiv() {
            if(slideThumb) {
                slideThumb.unbind("touchstart");
                slideThumb.unbind("touchmove");
                slideThumb.unbind("touchmove");
                slideThumb.css("left", 0);
                var thumbsWidth = $("a", slideThumb).width() * numItem;
                var thumbDiv = slideThumb.parent().parent();

                $(".md-thumb-next", thumbDiv).remove();
                $(".md-thumb-prev", thumbDiv).remove();
                if(thumbsWidth > $(".md-thumb-container", thumbDiv).width()) {
                    minThumbsLeft = $(".md-thumb-container", thumbDiv).width() - thumbsWidth;
                    slideThumb.width(thumbsWidth);
                    thumbDiv.append('<div class="md-thumb-prev"></div><div class="md-thumb-next"></div>');
                    $(".md-thumb-prev", thumbDiv).click(function() {
                        scollThumb("right");
                    });
                    $(".md-thumb-next", thumbDiv).click(function() {
                        scollThumb("left");
                    });

                    checkThumbArrow();
                    if(hasTouch) {
                        thumbsDrag = true;

                        var thumbTouch, thumbLeft;
                        slideThumb.bind('touchstart', function (event) {
                            event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                            thumbTouch = true;
                            this.mouseX = event.pageX;
                            thumbLeft = slideThumb.position().left;
                            return false;
                        });
                        slideThumb.bind('touchmove', function (event) {
                            event.preventDefault();
                            event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                            if (thumbTouch) {
                                slideThumb.css("left", thumbLeft + event.pageX - this.mouseX);
                            };
                            return false;
                        });
                        slideThumb.bind('touchend', function (event) {
                            event.preventDefault();
                            event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                            thumbTouch = false;
                            if(Math.abs(event.pageX - this.mouseX) < options.touchSensitive) {
                                var item = $(event.target).closest('a.md-thumb-item');
                                if(item.length) {
                                    slide(item.attr('rel'));
                                }
                                slideThumb.stop(true, true).animate({left: thumbLeft}, 400);
                                return false;
                            }
                            if(slideThumb.position().left < minThumbsLeft) {
                                slideThumb.stop(true, true).animate({left: minThumbsLeft}, 400, function() {checkThumbArrow()});
                            } else if(slideThumb.position().left > 0) {
                                slideThumb.stop(true, true).animate({left: 0}, 400, function() {checkThumbArrow()});
                            }
                            thumbLeft = 0;
                            return false;
                        });
                    }
                }
            }
        }
        function scollThumb(position) {
            if(slideThumb) {
                if(position == "left") {
                    var thumbLeft = slideThumb.position().left;
                    if(thumbLeft > minThumbsLeft) {
                        var containerWidth = $(".md-thumb-container", wrap).width();
                        if((thumbLeft - containerWidth) > minThumbsLeft) {
                            slideThumb.stop(true, true).animate({left: thumbLeft - containerWidth}, 400, function() {checkThumbArrow()});
                        } else {
                            slideThumb.stop(true, true).animate({left: minThumbsLeft}, 400, function() {checkThumbArrow()});
                        }
                    }
                } else if(position == "right") {
                    var thumbLeft = slideThumb.position().left;
                    if(thumbLeft < 0) {
                        var containerWidth = $(".md-thumb-container", wrap).width();
                        if((thumbLeft + containerWidth) < 0) {
                            slideThumb.stop(true, true).animate({left: thumbLeft + containerWidth}, 400, function() {checkThumbArrow()});
                        } else {
                            slideThumb.stop(true, true).animate({left: 0}, 400, function() {checkThumbArrow()});
                        }
                    }
                } else {
                    var thumbCurrent = $("a", slideThumb).index($("a.md-current", slideThumb));
                    if(thumbCurrent >= 0) {
                        var thumbLeft = slideThumb.position().left;
                        var currentLeft = thumbCurrent * $("a", slideThumb).width();
                        if(currentLeft + thumbLeft < 0) {
                            slideThumb.stop(true, true).animate({left: -currentLeft}, 400, function() {checkThumbArrow()});
                        } else {
                            var currentRight = currentLeft + $("a", slideThumb).width();
                            var containerWidth = $(".md-thumb-container", wrap).width();
                            if (currentRight + thumbLeft > containerWidth) {
                                slideThumb.stop(true, true).animate({left: containerWidth - currentRight}, 400, function() {checkThumbArrow()});
                            }
                        }
                    }
                }
            }
        }
        function checkThumbArrow() {
            var thumbLeft = slideThumb.position().left;
            if(thumbLeft > minThumbsLeft) {
                $(".md-thumb-next", wrap).show();
            } else {
                $(".md-thumb-next", wrap).hide();
            }
            if(thumbLeft < 0) {
                $(".md-thumb-prev", wrap).show();
            } else {
                $(".md-thumb-prev", wrap).hide();
            }
        }

        function slide(index) {
            step = 0;
            slideShowDelay = slideItems[index].data("timeout") ? slideItems[index].data("timeout") : options.slideShowDelay;
            if(loadingBar) {
                var width = step * slideWidth / slideShowDelay;
                loadingBar.width(width);
                timerGlow.css({left: width - 100 + 'px'});
            }
			oIndex = activeIndex;
			activeIndex = index;
			options.onStartTransition.call(self);
			if (slideItems[oIndex]) {
				$('div.md-bullet:eq(' + oIndex + ')', buttons).removeClass('md-current');
                $('a:eq(' + oIndex + ')', slideThumb).removeClass('md-current');
				removeTheCaptions(slideItems[oIndex]);
				var fx = options.transitions;
				//Generate random transition
				if (options.transitions.toLowerCase() == 'random') {
					var transitions = new Array(
						'slit-horizontal-left-top',
						'slit-horizontal-top-right',
						'slit-horizontal-bottom-up',
						'slit-vertical-down',
						'slit-vertical-up',
						'strip-up-right',
						'strip-up-left',
						'strip-down-right',
						'strip-down-left',
						'strip-left-up',
						'strip-left-down',
						'strip-right-up',
						'strip-right-down',
						'strip-right-left-up',
						'strip-right-left-down',
						'strip-up-down-right',
						'strip-up-down-left',
						'left-curtain',
						'right-curtain',
						'top-curtain',
						'bottom-curtain',
						'slide-in-right',
						'slide-in-left',
						'slide-in-up',
						'slide-in-down',
                        'fade');
					fx = transitions[Math.floor(Math.random() * (transitions.length + 1))];
					if (fx == undefined) fx = 'fade';
					fx = $.trim(fx.toLowerCase());
				}

				//Run random transition from specified set (eg: effect:'strip-left-fade,right-curtain')
				if (options.transitions.indexOf(',') != -1) {
					var transitions = options.transitions.split(',');
					fx = transitions[Math.floor(Math.random() * (transitions.length))];
					if (fx == undefined) fx = 'fade';
					fx = $.trim(fx.toLowerCase());
				}

				//Custom transition as defined by "data-transition" attribute
				if (slideItems[activeIndex].data('transition')) {
					var transitions = slideItems[activeIndex].data('transition').split(',');
					fx = transitions[Math.floor(Math.random() * (transitions.length))];
					fx = $.trim(fx.toLowerCase());
				}
				if(!(this.support = Modernizr.csstransitions && Modernizr.csstransforms3d) && (fx == 'slit-horizontal-left-top' || fx == 'slit-horizontal-top-right' || fx == 'slit-horizontal-bottom-up' || fx == 'slit-vertical-down' || fx == 'slit-vertical-up')) {
					fx = 'fade';
				}
				lock = true;
				runTransition(fx);
				if(buttons)
					$('div.md-bullet:eq(' + activeIndex + ')', buttons).addClass('md-current');
				if(slideThumb)
					$('a:eq(' + activeIndex + ')', slideThumb).addClass('md-current');
                scollThumb();
			} else {
				slideItems[activeIndex].css({top:0, left:0}).show();
				animateTheCaptions(slideItems[index]);
				if(buttons)
					$('div.md-bullet:eq(' + activeIndex + ')', buttons).addClass('md-current');
				if(slideThumb)
					$('a:eq(' + activeIndex + ')', slideThumb).addClass('md-current');
                scollThumb();
				lock = false;
			}
        }
        function setTimer() {
            slide(0);
            timer = setInterval(next, 40);
        }
        function next() {
            if(lock) return false;
            if(play && !pause) {
                step += 40;
                if(step > slideShowDelay) {
                    slideNext();
                } else if(loadingBar) {
                    var width = step * slideWidth / slideShowDelay;
                    loadingBar.width(width);
                    timerGlow.css({left: width - 100 + 'px'});
                }
            }
        }

        function slideNext() {
            if(lock) return false;
            var index = activeIndex;
            index++;
            if(index >= numItem && options.loop) {
                index = 0;
                slide(index);
            } else if(index < numItem) {
                slide(index);
            }
        }
        function slidePrev() {
            if(lock) return false;
            var index = activeIndex;
            index--;
            if(index < 0 && options.loop) {
                index = numItem - 1;
                slide(index);
            } else if(index >= 0) {
                slide(index);
            }
        }
        function endMoveCaption(caption) {
            clearTimeout(caption.data('timer-start'));
            if ($.browser.msie && parseInt($.browser.version) <= 9) {
                caption.fadeOut();
            } else {
                caption.removeClass(effectsIn.join(' '));
                var easeout = caption.data("easeout");
                if(easeout) {
                    if(easeout == "random")
                        easeout = effectsOut[Math.floor(Math.random() * e_out_length)];
                    caption.addClass(easeout);

                } else {
                    caption.hide();
                }
            }
        }
        function removeTheCaptions(oItem) {
            oItem.find(".md-object").each(function() {
                var caption = $(this);
                caption.stop(true, true).hide();
                clearTimeout(caption.data('timer-start'));
                clearTimeout(caption.data('timer-stop'));
            });
        }
        function animateTheCaptions(nextItem) {
            $(".md-object", nextItem).each(function (boxIndex) {
                var caption = $(this);
                if(caption.data("easeout"))
                    caption.removeClass(effectsOut.join(' '));
                var easein = caption.data("easein") ? caption.data("easein") : "";
                if(easein == "random")
                    easein = effectsIn[Math.floor(Math.random() * e_in_length)];

                caption.removeClass(effectsIn.join(' '));
                caption.hide();
                if(caption.data("start") != undefined) {
                    caption.data('timer-start', setTimeout(function() {
                        if (easein == "" || ($.browser.msie && parseInt($.browser.version) <= 9)) {
                            caption.fadeIn();
                        } else {
                            caption.show().addClass(easein);
                        }

                    }, caption.data("start")));
                } else {
                    caption.show().addClass(easein);
                }

                if(caption.data("stop") != undefined) {
                    caption.data('timer-stop', setTimeout(function() {
                        endMoveCaption(caption);
                    }, caption.data('stop')));
                }
            });
        }
        //When Animation finishes
        function transitionEnd() {
            options.onEndTransition.call(self);
            $('.md-strips-container', self).remove();
            slideItems[oIndex].hide();
            slideItems[activeIndex].show();
            lock = false;
            animateTheCaptions(slideItems[activeIndex]);
        }

        // Add strips
        function addStrips(vertical, opts) {
            var strip,
                opts = (opts) ? opts : options;;
            var stripsContainer = $('<div class="md-strips-container"></div>');
            var stripWidth = Math.round(slideWidth / opts.strips),
                stripHeight = Math.round(slideHeight / opts.strips),
                $image = $(".md-mainimg img", slideItems[activeIndex]);
            for (var i = 0; i < opts.strips; i++) {
                 var top = ((vertical) ? (stripHeight * i) + 'px' : '0px'),
                     left = ((vertical) ? '0px' : (stripWidth * i) + 'px'),
                     width, height;

                if (i == opts.strips - 1) {
                    width = ((vertical) ? '0px' : (slideWidth - (stripWidth * i)) + 'px'),
                    height = ((vertical) ? (slideHeight - (stripHeight * i)) + 'px' : '0px');
                } else {
                    width = ((vertical) ? '0px' : stripWidth + 'px'),
                    height = ((vertical) ? stripHeight + 'px' : '0px');
                }

                strip = $('<div class="mdslider-strip"></div>').css({
                    width: width,
                    height: height,
                    top: top,
                    left: left,
                    opacity: 0
                }).append($image.clone().css({
                    marginLeft: vertical ? 0 : -(i * stripWidth) + "px",
                    marginTop: vertical ? -(i * stripHeight) + "px" : 0
                }));
                stripsContainer.append(strip);
            }
            self.append(stripsContainer);
        }
        // Add strips
        function addTiles(x, y, index) {
            var tile;
            var stripsContainer = $('<div class="md-strips-container"></div>');
            var tileWidth = slideWidth / x,
                tileHeight = slideHeight / y,
                $image = $(".md-mainimg img", slideItems[index]);
            for(var i = 0; i < y; i++) {
                for(var j = 0; j < x; j++) {
                    var top = (tileHeight * i) + 'px',
                        left = (tileWidth * j) + 'px';
                    tile = $('<div class="mdslider-tile"/>').css({
                        width: tileWidth,
                        height: tileHeight,
                        top: top,
                        left: left
                    }).append($image.clone().css({
                            marginLeft: "-" + left,
                            marginTop: "-" + top
                    }));
                    stripsContainer.append(tile);
                }
            }
            self.append(stripsContainer);
        }
        // Add strips
        function addStrips2() {
            var strip,
                images = [$(".md-mainimg img", slideItems[oIndex]), $(".md-mainimg img", slideItems[activeIndex])];
            var stripsContainer = $('<div class="md-strips-container"></div>');
            for (var i = 0; i < 2; i++) {
                strip = $('<div class="mdslider-strip"></div>').css({
                    width: slideWidth,
                    height: slideHeight
                }).append(images[i].clone());
                stripsContainer.append(strip);
            }
            self.append(stripsContainer);
        }
        // Add strips
        function addSlits(fx) {
            var $stripsContainer = $('<div class="md-strips-container ' + fx + '"></div>'),
                $image = $(".md-mainimg img", slideItems[oIndex]),
                $div1 = $('<div class="mdslider-slit"/>').append($image.clone()),
                position = $image.position();
                $div2 = $('<div class="mdslider-slit"/>').append($image.clone().css("top", position.top - (slideHeight/2) + "px"));
                if(fx == "slit-vertical-down" || fx == "slit-vertical-up")
                    $div2 = $('<div class="mdslider-slit"/>').append($image.clone().css("left", position.left - (slideWidth/2) + "px"));

            $stripsContainer.append($div1).append($div2);
            self.append($stripsContainer);
        }
        function runTransition(fx) {
            switch (fx) {
                case 'slit-horizontal-left-top':
                case 'slit-horizontal-top-right':
                case 'slit-horizontal-bottom-up':
                case 'slit-vertical-down':
                case 'slit-vertical-up':
                    addSlits(fx);
                    $(".md-object", slideItems[activeIndex]).hide();
                    slideItems[oIndex].hide();
                    slideItems[activeIndex].show();
                    var slice1 = $('.mdslider-slit', self).first(),
                        slice2 = $('.mdslider-slit', self).last();
                    var transitionProp = {
                        'transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out',
						'-webkit-transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out',
						'-moz-transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out',
						'-ms-transition' : 'all ' + options.transitionsSpeed + 'ms ease-in-out'
                    };
                    $('.mdslider-slit', self).css(transitionProp);
                    setTimeout( function() {
                        slice1.addClass("md-trans-elems-1");
                        slice2.addClass("md-trans-elems-2");
                    }, 50 );
                    setTimeout(function() {
                        options.onEndTransition.call(self);
                        $('.md-strips-container', self).remove();
                        lock = false;
                        animateTheCaptions(slideItems[activeIndex]);
                    }, options.transitionsSpeed);
                    break;
                case 'strip-up-right':
                case 'strip-up-left':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripCols / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-up-right') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        height: '1px',
                        bottom: '0px',
                        top: "auto"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                height: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-down-right':
                case 'strip-down-left':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripCols / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-down-right') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        height: '1px',
                        top: '0px',
                        bottom: "auto"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                height: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-left-up':
                case 'strip-left-down':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripRows / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-left-up') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        width: '1px',
                        left: '0px',
                        right: "auto"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                width: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-right-up':
                case 'strip-right-down':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripRows / 2,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-left-right-up') strips = $('.mdslider-tile', self).reverse();
                    strips.css({
                        width: '1px',
                        left: 'auto',
                        right: "1px"
                    });
                    strips.each(function (i) {
                        var strip = $(this);
                        setTimeout(function () {
                            strip.animate({
                                width: '100%',
                                opacity: '1.0'
                            }, speed, 'easeInOutQuart', function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-right-left-up':
                case 'strip-right-left-down':
                    addTiles(1, options.stripRows, oIndex);
                    slideItems[oIndex].hide();
                    slideItems[activeIndex].show();
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripRows,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-right-left-up') strips = $('.mdslider-tile', self).reverse();
                    strips.filter(':odd').css({
                        width: '100%',
                        right: '0px',
                        left: "auto",
                        opacity: 1
                    }).end().filter(':even').css({
                            width: '100%',
                            right: 'auto',
                            left: "0px",
                            opacity: 1
                     });;
                    strips.each(function (i) {
                        var strip = $(this);
                        var css = (i%2 == 0) ? {left: '-50%',opacity: '0'} : {right: '-50%', opacity: '0'};
                        setTimeout(function () {
                            strip.animate(css, speed, 'easeOutQuint', function () {
                                if (i == options.stripRows - 1) {
                                    options.onEndTransition.call(self);
                                    $('.md-strips-container', self).remove();
                                    lock = false;
                                    animateTheCaptions(slideItems[activeIndex]);
                                }
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'strip-up-down-right':
                case 'strip-up-down-left':
                    addTiles(options.stripCols, 1, oIndex);
                    slideItems[oIndex].hide();
                    slideItems[activeIndex].show();
                    var strips = $('.mdslider-tile', self),
                        timeStep = options.transitionsSpeed / options.stripCols / 2 ,
                        speed = options.transitionsSpeed / 2;
                    if (fx == 'strip-up-down-right') strips = $('.mdslider-tile', self).reverse();
                    strips.filter(':odd').css({
                        height: '100%',
                        bottom: '0px',
                        top: "auto",
                        opacity: 1
                    }).end().filter(':even').css({
                            height: '100%',
                            bottom: 'auto',
                            top: "0px",
                            opacity: 1
                        });;
                    strips.each(function (i) {
                        var strip = $(this);
                        var css = (i%2 == 0) ? {top: '-50%',opacity: 0} : {bottom: '-50%', opacity: 0};
                        setTimeout(function () {
                            strip.animate(css, speed, 'easeOutQuint', function () {
                                if (i == options.stripCols - 1) {
                                    options.onEndTransition.call(self);
                                    $('.md-strips-container', self).remove();
                                    lock = false;
                                    animateTheCaptions(slideItems[activeIndex]);
                                }
                            });
                        }, i * timeStep);
                    });
                    break;
                case 'left-curtain':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        width = slideWidth / options.stripCols,
                        timeStep = options.transitionsSpeed / options.stripCols / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({left: width * i, width: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                width: width,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'right-curtain':
                    addTiles(options.stripCols, 1, activeIndex);
                    var strips = $('.mdslider-tile', self).reverse(),
                        width = slideWidth / options.stripCols,
                        timeStep = options.transitionsSpeed / options.stripCols / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({right: width * i, left: "auto", width: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                width: width,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripCols - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'top-curtain':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self),
                        height = slideHeight / options.stripRows,
                        timeStep = options.transitionsSpeed / options.stripRows / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({top: height * i, height: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                height: height,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'bottom-curtain':
                    addTiles(1, options.stripRows, activeIndex);
                    var strips = $('.mdslider-tile', self).reverse(),
                        height = slideHeight / options.stripRows,
                        timeStep = options.transitionsSpeed / options.stripRows / 2;
                    strips.each(function (i) {
                        var strip = $(this);
                        strip.css({bottom: height * i, height: 0, opacity: 0});
                        setTimeout(function () {
                            strip.animate({
                                height: height,
                                opacity: '1.0'
                            }, options.transitionsSpeed / 2, function () {
                                if (i == options.stripRows - 1) transitionEnd();
                            });
                        }, timeStep * i);
                    });
                    break;
                case 'slide-in-right':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var left = i * slideWidth;
                        strip.css({
                            left: left
                        });
                        strip.animate({
                            left: left - slideWidth
                        }, options.transitionsSpeed, function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'slide-in-left':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var left = -i * slideWidth;
                        strip.css({
                            left: left
                        });
                        strip.animate({
                            left: slideWidth + left
                        }, (options.transitionsSpeed * 2), function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'slide-in-up':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var top = i * slideHeight;
                        strip.css({
                            top: top
                        });
                        strip.animate({
                            top: top - slideHeight
                        }, options.transitionsSpeed, function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'slide-in-down':
                    var i = 0;
                    addStrips2();
                    var strips = $('.mdslider-strip', self);
                    strips.each(function() {
                        strip = $(this);
                        var top = -i * slideHeight;
                        strip.css({
                            top: top
                        });
                        strip.animate({
                            top: slideHeight + top
                        }, options.transitionsSpeed, function () {
                            transitionEnd();
                        });
                        i++;
                    });
                    break;
                case 'fade':
                default:
                    var opts = {
                        strips: 1
                    };
                    addStrips(false, opts);
                    var strip = $('.mdslider-strip:first', self);
                    strip.css({
                        'height': '100%',
                        'width': slideWidth
                    });
                    if (fx == 'slide-in-right') strip.css({
                        'height': '100%',
                        'width': slideWidth,
                        'left': slideWidth + 'px',
                        'right': ''
                    });
                    else if (fx == 'slide-in-left') strip.css({
                        'left': '-' + slideWidth + 'px'
                    });

                    strip.animate({
                        left: '0px',
                        opacity: 1
                    }, options.transitionsSpeed, function () {
                        transitionEnd();
                    });
                    break;
            }
        }

        // Shuffle an array
        function shuffle(oldArray) {
            var newArray = oldArray.slice();
            var len = newArray.length;
            var i = len;
            while (i--) {
                var p = parseInt(Math.random() * len);
                var t = newArray[i];
                newArray[i] = newArray[p];
                newArray[p] = t;
            }
            return newArray;
        }
        function documentHasTouch() {
            return ('ontouchstart' in window || 'createTouch' in document);
        }
        function resizeWindow() {
            wrap.width();
            slideWidth = options.responsive ? wrap.width() : options.width;
            if(options.responsive && (slideWidth < options.width)) {
                slideHeight =  Math.round(slideWidth / options.width * options.height);

            } else {
                slideHeight = options.height;
            }
            if(!options.responsive && !options.fullwidth)
                wrap.width(slideWidth);
            if(!options.responsive && options.fullwidth)
                wrap.css({"min-width": slideWidth + "px"});
            if (options.fullwidth) {
                $(".md-objects", self).width(options.width);
                var bulletSpace = 20;
                if ((wrap.width() - options.width)/2 > 20)
                    bulletSpace = (wrap.width() - options.width)/2;
                wrap.find(".md-bullets").css({'left':bulletSpace,'right':bulletSpace});
                wrap.find(".md-thumb").css({'left':bulletSpace,'right':bulletSpace});
            }
            if(options.responsive && options.fullwidth && (wrap.width() < options.width))
                $(".md-objects", self).width(slideWidth);
            wrap.height(slideHeight);
            $(".md-slide-item", self).height(slideHeight);
            resizeBackgroundImage();
            resizeThumbDiv();
            resizeFontSize();
            resizePadding();
            setThumnail()
        }
        function resizeBackgroundImage() {
            $(".md-slide-item", self).each(function() {
                var $background = $(".md-mainimg img", this);
                if($background.data("defW") && $background.data("defH")) {
                    var width = $background.data("defW"),
                        height = $background.data("defH");
                    changeImagePosition($background, width, height);

                }
            });
        }
        function preloadImages() {
            var count = $(".md-slide-item .md-mainimg img", self).length;
            self.data('count', count);
            if(self.data('count') == 0)
                slideReady();
            $(".md-slide-item .md-mainimg img", self).each(function() {
                $(this).load(function() {
                    var $image = $(this);
                    if(!$image.data('defW')) {
                        var dimensions = getImgSize($image.attr("src"));
                        changeImagePosition($image, dimensions.width, dimensions.height);
                        $image.data({
                            'defW': dimensions.width,
                            'defH': dimensions.height
                        });
                    }
                    self.data('count', self.data('count') - 1);
                    if(self.data('count') == 0)
                        slideReady();
                });
                if(this.complete) $(this).load();
            });
        }
        function slideReady() {
            self.removeClass("loading-image");
            setTimer();
        }
        function changeImagePosition($background, width, height) {
            var panelWidth = $(".md-slide-item:visible", self).width(),
                panelHeight = $(".md-slide-item:visible", self).height();

            if(height > 0 && panelHeight > 0) {
                if (((width / height) > (panelWidth / panelHeight))) {
                    var left = panelWidth - (panelHeight / height) * width;
                    $background.css({width: "auto", height: panelHeight + "px"});
                    if(left < 0) {
                        $background.css({left: (left/2) + "px", top: 0 });
                    } else {
                        $background.css({left: 0, top: 0 });
                    }
                } else {
                    var top = panelHeight - (panelWidth / width) * height;
                    $background.css({width: panelWidth + "px", height: "auto"});
                    if(top < 0) {
                        $background.css({top: (top/2) + "px", left: 0 });
                    } else {
                        $background.css({left: 0, top: 0 });
                    }
                }
            }
        }
        function resizeFontSize() {
            var fontDiff = 1;
            if (parseInt($.browser.version, 10) < 9)
                fontDiff = 6;
            if (wrap.width() < options.width) {
                $(".md-objects", self).css({'font-size': wrap.width() / options.width * 100 - fontDiff + '%'});
            } else {
                $(".md-objects", self).css({'font-size': 100 - fontDiff + '%'});
            }
        }
        function resizePadding() {
            if (wrap.width() < options.width && options.responsive) {
                $(".md-objects > div", self).each(function() {
                    var objectRatio = wrap.width() / options.width,
                        $_object = $(this),
                        objectPadding = [];
                    if ($_object.data('padding-top')) objectPadding['padding-top'] = $_object.data('padding-top') * objectRatio;
                    if ($_object.data('padding-right')) objectPadding['padding-right'] = $_object.data('padding-right') * objectRatio;
                    if ($_object.data('padding-bottom')) objectPadding['padding-bottom'] = $_object.data('padding-bottom') * objectRatio;
                    if ($_object.data('padding-left')) objectPadding['padding-left'] = $_object.data('padding-left') * objectRatio;
                    if ($_object.find('a').length) {
                        $_object.find('a').css(objectPadding);
                    } else {
                        $_object.css(objectPadding);
                    }

                })
            } else {
                $(".md-objects > div", self).each(function() {
                    var $_object = $(this),
                        objectPadding = [];
                    if ($_object.data('padding-top')) objectPadding['padding-top'] = $_object.data('padding-top');
                    if ($_object.data('padding-right')) objectPadding['padding-right'] = $_object.data('padding-right');
                    if ($_object.data('padding-bottom')) objectPadding['padding-bottom'] = $_object.data('padding-bottom');
                    if ($_object.data('padding-left')) objectPadding['padding-left'] = $_object.data('padding-left');
                    if ($_object.find('a').length) {
                        $_object.find('a').css(objectPadding);
                    } else {
                        $_object.css(objectPadding);
                    }
                })
            }
        }
        function setThumnail() {
            if(options.showThumb && !options.showBullet) {
                thumbHeight = self.data('thumb-height');
                if(options.posThumb == '1') {
                    thumbBottom = thumbHeight / 2;
                    wrap.find(".md-thumb").css({'height': thumbHeight + 10,'bottom': -thumbBottom - 10});
                    wrap.css({'margin-bottom': thumbBottom + 10})
                } else {
                    wrap.find(".md-thumb").css({'height': thumbHeight + 10,'bottom': -(thumbHeight + 40)});
                    wrap.css({'margin-bottom': thumbHeight + 50})
                }
            }
        }
        function getImgSize(imgSrc) {
            var newImg = new Image();
            newImg.src = imgSrc;
            var dimensions = {height: newImg.height, width: newImg.width};
            return dimensions;
        }
        init();
    }
    $.fn.reverse = [].reverse;
    //Image Preloader Function
    var ImagePreload = function (p_aImages, p_pfnPercent, p_pfnFinished) {
        this.m_pfnPercent = p_pfnPercent;
        this.m_pfnFinished = p_pfnFinished;
        this.m_nLoaded = 0;
        this.m_nProcessed = 0;
        this.m_aImages = new Array;
        this.m_nICount = p_aImages.length;
        for (var i = 0; i < p_aImages.length; i++) this.Preload(p_aImages[i])
    };

    ImagePreload.prototype = {
        Preload: function (p_oImage) {
            var oImage = new Image;
            this.m_aImages.push(oImage);
            oImage.onload = ImagePreload.prototype.OnLoad;
            oImage.onerror = ImagePreload.prototype.OnError;
            oImage.onabort = ImagePreload.prototype.OnAbort;
            oImage.oImagePreload = this;
            oImage.bLoaded = false;
            oImage.source = p_oImage;
            oImage.src = p_oImage
        },
        OnComplete: function () {
            this.m_nProcessed++;
            if (this.m_nProcessed == this.m_nICount) this.m_pfnFinished();
            else this.m_pfnPercent(Math.round((this.m_nProcessed / this.m_nICount) * 10))
        },
        OnLoad: function () {
            this.bLoaded = true;
            this.oImagePreload.m_nLoaded++;
            this.oImagePreload.OnComplete()
        },
        OnError: function () {
            this.bError = true;
            this.oImagePreload.OnComplete()
        },
        OnAbort: function () {
            this.bAbort = true;
            this.oImagePreload.OnComplete()
        }
    }
})(jQuery);
;
