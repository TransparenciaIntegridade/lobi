(function(e){e.fn.menumaker=function(t){var n=e(this),r=e.extend({title:"Menu",format:"dropdown",sticky:false},t);return this.each(function(){n.prepend('<div id="menu-button">'+r.title+"</div>");e(this).find("#menu-button").on("click",function(){e(this).toggleClass("menu-opened");var t=e(this).next("ul");if(t.hasClass("open")){t.hide().removeClass("open")}else{t.show().addClass("open");if(r.format==="dropdown"){t.find("ul").show()}}});n.find("li ul").parent().addClass("has-sub");multiTg=function(){n.find(".has-sub").prepend('<span class="submenu-button"></span>');n.find(".submenu-button").on("click",function(){e(this).toggleClass("submenu-opened");if(e(this).siblings("ul").hasClass("open")){e(this).siblings("ul").removeClass("open").hide()}else{e(this).siblings("ul").addClass("open").show()}})};if(r.format==="multitoggle")multiTg();else n.addClass("dropdown");if(r.sticky===true)n.css("position","fixed");resizeFix=function(){if(e(window).width()>768){n.find("ul").show()}if(e(window).width()<=768){n.find("ul").hide().removeClass("open")}};resizeFix();return e(window).on("resize",resizeFix)})}})(jQuery);(function(e){e(document).ready(function(){e("#cssmenu").menumaker({title:"Menu",format:"multitoggle"})})})(jQuery)