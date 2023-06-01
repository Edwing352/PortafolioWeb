let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//SLIDER DE PORTAFOLIO
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

//VALIDACIÓN DE CAMPOS | CONTACTOS
function validateForm(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var temaInput = document.getElementById("tema");
    var messageInput = document.getElementById("message");

    if (!nameInput.value || !phoneInput.value || !emailInput.value || !temaInput.value || !messageInput.value) {
      alert("Por favor, completa todos los campos antes de enviar el mensaje.");
      return;
    }
    alert("¡Mensaje enviado con éxito!"); 

    document.getElementById("myForm").submit();
  }