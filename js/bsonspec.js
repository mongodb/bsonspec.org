function show_home() {
    jQuery("div.button a").removeClass("selected");
    jQuery(".info").hide("fast");
    jQuery(".intro").show("fast");
}

function show_section(section) {
    jQuery("div.button a").removeClass("selected");
    jQuery(".intro").hide("fast");
    jQuery(".info").hide("fast");
    jQuery("#" + section).show("fast");
    jQuery("a." + section).addClass("selected");
}

jQuery(function() {
           jQuery(".info").hide();
           jQuery.address.change(function(event) {
                                     switch (event.path) {
                                     case "/":
                                         show_home();
                                         break;
                                     case "/specification":
                                         show_section("spec");
                                         break;
                                     case "/implementation":
                                         show_section("lib");
                                         break;
                                     case "/discussion":
                                         show_section("contrib");
                                         break;
                                     default:
                                         jQuery.address.value("/");
                                     }
                                 });
           jQuery(".tt").tooltip({delay: 0, fade: 100, track: true, showBody: " - "});
           jQuery(".hl").mouseover(function() {
                                       var cls = "." + jQuery(this).attr("class").substring(3, 4);
                                       jQuery(cls).addClass("highlight");
                                   });
           jQuery(".hl").mouseout(function() {
                                      var cls = "." + jQuery(this).attr("class").substring(3, 4);
                                      jQuery(cls).removeClass("highlight");
                                  });
});
