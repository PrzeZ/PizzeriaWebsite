function save_settings(){al();
localStorage.setItem("text_size", $("#text_size").val());
}
function apply_preferences_to_page(){
$("body").css("fontSize", $("#text_size").val() + "px");
}
function load_settings(){
var text_size = localStorage.getItem("text_size");
$("#text_size").val(text_size);
apply_preferences_to_page();
}