function show_home() {
    jQuery(".info").hide();
}

function show_section(section) {
    jQuery(".info").hide("fast");
    jQuery("#" + section).show("fast");
}

jQuery(function() {
           show_home();
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
});
