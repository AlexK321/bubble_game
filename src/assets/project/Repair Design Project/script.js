
// Кнопка перехода на мобильную-дектопную версию

const mobileVersion = document.getElementById('buttons_mobile_version');
const wrapper = document.getElementById('wrapper');
mobileVersion.addEventListener("click", function() {
  if (mobileVersion.innerText == "Mobile")  {
    mobileVersion.textContent = "Desctop";
    document.getElementById("mystyle").href="css/style_mobile.css"
  }
  else { mobileVersion.textContent = "Mobile"
  document.getElementById("mystyle").href="css/style.css" 
  }
}
);




                                          

