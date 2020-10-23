let fontawesome = document.createElement("script");

fontawesome.setAttribute("src", "https://kit.fontawesome.com/a92211bf3b.js");
document.head.appendChild(fontawesome);
     
let length = document.getElementsByTagName("i").length;
let icon;

for (let i = 0; i < length; i++) {

  icon = document.getElementsByTagName("i")[i]

  if (icon.hasAttribute("menu-toggle") == true) {

    icon.setAttribute("class", "fas fa-bars");
    icon.setAttribute("onclick", "burger(this)");

  }

}
     
function burger(icon) {

  let icon_attr = icon.getAttribute("menu-toggle");
  let id_submenu = document.getElementById(icon_attr);
  

  switch(icon.getAttribute("class")){

  	case "fas fa-bars":

  	  icon.setAttribute("class", "fas fa-times")

  	  showSubmenu(id_submenu);

  	break;

  	case "fas fa-times":

  	  icon.setAttribute("class", "fas fa-bars")

      hideSubmenu(id_submenu);

  	break;
  	
  }

}

function showSubmenu(id_submenu) {
  id_submenu.style.display = "block";   
}

function hideSubmenu(id_submenu) {
  id_submenu.removeAttribute("style");
}