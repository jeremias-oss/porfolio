//window.alert("js funciona")
//button behavior

/*
const boton = document.getElementById("boton_logo");
const sectionLogo = document.getElementById("logo");
const prueba = document.getElementById("prueba");
const lineLogo = document.getElementById("line_logo");


const changeColor = () => {
    boton.style.color = "#ceb370";
};

const changeColorBack = () => {
    boton.style.color = "#F5EFE0";
};

const goToLogo = () => {
    sectionLogo.scrollIntoView({behavior: 'smooth'});

};

const lineLogoDisappear = () => {
    lineLogo.style.display = "none";
};

boton.addEventListener("mouseover", changeColor);
boton.addEventListener("mouseout", changeColorBack);
//boton.addEventListener("click", goToLogo);
*/

//----------------------------------------

const cvButton = document.getElementById("CV_button_container");

const changeColorCV = () => {
    cvButton.style.backgroundColor = "#ceb370";
};

const changeColorBackCV = () => {
    cvButton.style.backgroundColor = "#F5EFE0";
};

cvButton.addEventListener("mouseover", changeColorCV);
cvButton.addEventListener("mouseout", changeColorBackCV);






const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});



