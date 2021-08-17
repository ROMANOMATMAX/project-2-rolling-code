//Definimos las constantes que toman los datos del formulario
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const msjError = document.getElementById('msj-error-login');
//games harcodeados
const newGamesHarcodeados = [
    {
      //datos para usuario
      id: "1",
      titulo: "DBZ Kakarot",
      precio: "1500.00",
      url: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628382772/Video%20Games/dbz1_dlrgll.jpg",
      // datos para carrusel
      src1: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628383101/Video%20Games/wp5117132_pvxabh.jpg",
      src2: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628382791/Video%20Games/wallpapersden.com_dragon-ball-z-kakarot-game-poster_1920x1080_trerme.jpg",
      categoria1: "Acción",
      categoria2: "Anime",
      //datos para cards
      src: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628380011/Video%20Games/spotlight_image_english_kivm2z.jpg",
      fechaLimite: "19/8/21",
      descuento: 50,
    },
    {
      //datos para usuario
      id: "2",
      titulo: "Pubg",
      precio: "500.00",
      url: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628178941/Video%20Games/pugb1_kwch2r.jpg",
      // datos para carrusel
      src1: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628178948/Video%20Games/pugb2_wm9cuj.jpg",
      src2: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628179322/Video%20Games/pugb3_icejl5.jpg",
      categoria1: "Acción",
      categoria2: "Cooperativo",
      //datos para cards
      src: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628534013/Video%20Games/pugb-card_kr0rfo.jpg",
      fechaLimite: "19/8/21",
      descuento: 30,
    },
    {
      //datos para usuario
      id: "3",
      titulo: "Mortal Kombat",
      precio: "2000.00",
      url: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628620290/Video%20Games/mortalkombat/mortalkombaturl_1_kjuf4z.jpg",
      // datos para carrusel
      src1: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628620364/Video%20Games/mortalkombat/mortalkombatSRC1_pe7qit.jpg",
      src2: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628620241/Video%20Games/mortalkombat/mortalkombatSRC2_dhmn0w.jpg",
      categoria1: "Acción",
      categoria2: "Versus",
      //datos para cards
      src: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628619786/Video%20Games/mortalkombat/mortalkombat_cv9q5s.jpg",
      fechaLimite: "19/8/21",
      descuento: 5,
    },
  ];
  
  //para simular que verdaderamente viene de local storage pusheamos y luego traemos
  localStorage.setItem("games", JSON.stringify(newGamesHarcodeados));
//Crearemos un par de usuarios que estaran harcodeados para que la persona que testee no tenga que registrarse
const administradoresHarcodeados = [
    {
        email: "santi@gmail.com",
        fullname: "Santiago Romano",
        id: "1709cd68-9450-4ebb-86e8-b407f4012e6d",
        pass: "santi45",
        role: "admin",
    },
    {
        email: "romanomatias99@gmail.com",
        fullname: "Matias Romano",
        id: "1c9ab0d0-2ea1-46af-8c9b-3713153f5074",
        pass: "romanomatias99",
        role: "basic",
    },
]
localStorage.setItem('usuarios', JSON.stringify(administradoresHarcodeados))
//Traemos a todos los usuarios ya guardados en DB
const usuariosJSON = localStorage.getItem('usuarios');
let usuarios = JSON.parse(usuariosJSON) || [];

console.log(usuarios);

const loginUsuario  = (event) => {
    event.preventDefault();
    console.log("te estas logueando");
    //tomamos los datos ingresados por el user
    const userTryingLoggin = {
        email: emailInput.value,
        pass: passInput.value
    }
    console.log(userTryingLoggin)
    //Verificamos que sea un usuario valido
    let validUser = false;
    usuarios.forEach(user => {
        if(user.email === userTryingLoggin.email && user.pass === userTryingLoggin.pass){
            //Hubo coincidencia
            validUser = true;
            //Tomamos el role del usuario para poder luego elegir que pantalla mostrar
            userTryingLoggin.role = user.role;
            //Guardamos el usuario logueado
            console.log("Estas entrando aqui");
            localStorage.removeItem('usuarioLogueado');
            localStorage.setItem('usuarioLogueado', user.fullname);
        }
    });
    if(validUser){
        if(userTryingLoggin.role === 'admin'){
            //Muestro directamente pantalla de administrador
            window.location.href = "./html/admin.html";
        }else{
            //Muestro pantalla de usuario basico
            window.location.href = "./home.html";
        }
    }else{
        console.log("mostrar mensaje al usuario - credenciales no validas");
        msjError.innerHTML="El email o password es incorrecto"
        msjError.setAttribute('class', 'alert alert-danger');
        setTimeout(()=>{
            msjError.setAttribute('class', 'd-none')
        }, 1500);
    }
}