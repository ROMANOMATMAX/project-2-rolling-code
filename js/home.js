const gamesCarousel = document.getElementById("games-carousel");
const gamesCards = document.getElementById("games-cards");

// Creo array de games para simular localStorage
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
    categoria2: "Cooperativo",
    categoria3: "Violencia",
    compatibilidad1: '<i class="fab fa-windows me-2">',
    compatibilidad2: '<i class="fab fa-apple"></i>',
    //datos para cards
    src: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628380011/Video%20Games/spotlight_image_english_kivm2z.jpg",
    fechaLimite: "19/8/21",
    descuento: "-50%",
    nuevoPrecio: "750.00",
  },
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
    categoria2: "Cooperativo",
    categoria3: "Violencia",
    compatibilidad1: '<i class="fab fa-windows me-2">',
    compatibilidad2: '<i class="fab fa-apple"></i>',
    //datos para cards
    src: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628380011/Video%20Games/spotlight_image_english_kivm2z.jpg",
    fechaLimite: "19/8/21",
    descuento: "-50%",
    nuevoPrecio: "750.00",
  },  {
    //datos para usuario
    id: "1",
    titulo: "DBZ Kakarot",
    precio: "1500.00",
    url: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628382772/Video%20Games/dbz1_dlrgll.jpg",
    // datos para carrusel
    src1: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628383101/Video%20Games/wp5117132_pvxabh.jpg",
    src2: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628382791/Video%20Games/wallpapersden.com_dragon-ball-z-kakarot-game-poster_1920x1080_trerme.jpg",
    categoria1: "Acción",
    categoria2: "Cooperativo",
    categoria3: "Violencia",
    compatibilidad1: '<i class="fab fa-windows me-2">',
    compatibilidad2: '<i class="fab fa-apple"></i>',
    //datos para cards
    src: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1628380011/Video%20Games/spotlight_image_english_kivm2z.jpg",
    fechaLimite: "19/8/21",
    descuento: "-50%",
    nuevoPrecio: "750.00",
  },
];

//para simular que verdaderamente viene de local storage pusheamos y luego traemos
localStorage.setItem("games", JSON.stringify(newGamesHarcodeados));
const gamesJSON = localStorage.getItem("games");
let games = JSON.parse(gamesJSON) || [];
//Estoy tomando estos games de LS
console.log(games);


// ESTA FUNCION SOLO ESTA ESTATICA
// funcion que me renderice los games para mostrar al usario en carousel
function mostrarCarouselGames() {
  const contenido = games.map((game) => {
    // console.log(usuario.id);
    return `  
        <div class="row justify-content-center">
        <div id="main-image" class="col-10 col-md-8 game-image"
            data-default-image=${game.url}>
            <button><b>BUY NOW</b></button>
        </div>
        <div class="d-md-flex col-10 col-md-3 game-description row">
            <div class="mt-2 col-12">
                <h1>${game.titulo}</h1>
            </div>
            <div class="d-none col-5 d-md-flex col-md-12 flex-md-column">
                <img id="image-1"
                    src=${game.src1}
                    alt="img-pugb">
                <img id="image-2"
                    src=${game.src2}
                    alt="img-pugb">
            </div>
            <div class="d-none d-md-flex">
                <h4>Ya disponible</h4>
            </div>
            <div class="flex-wrap d-md-flex mt-1">
                <span>${game.categoria1}</span>
                <span>${game.categoria2}</span>
                <span>${game.categoria3}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <p><i>ARS$ ${game.precio}</i></p>
                <h5><i class="fab fa-apple me-2"></i><i class="fab fa-windows"></i></h5>
            </div>
        </div>
    </div>
       `;
  });
  console.log(contenido.join(""));
  const allHtmlcontent = contenido.join("");
  gamesCarousel.innerHTML = allHtmlcontent;
}
// mostrarCarouselGames();

// cuando no este hover en ninguna de las imagenes, la imagen mainImage continue de background.
// si el estado de hover es fals, etonces la imagen mostrada es mainImage

function cambiarImagen() {
  const mainImage = document.getElementById("main-image");
  const image1 = document.getElementById("image-1");
  const image2 = document.getElementById("image-2");

  image1.addEventListener("mouseover", () => {
    mainImage.style.backgroundImage = `url(${image1.src})`;
  });
  image1.addEventListener("mouseleave", () => {
    console.log(mainImage.dataset.defaultImage);
    mainImage.style.backgroundImage = `url(${mainImage.dataset.defaultImage})`;
  });
  image2.addEventListener("mouseover", () => {
    mainImage.style.backgroundImage = `url(${image2.src})`;
  });
  image2.addEventListener("mouseleave", () => {
    console.log(mainImage.dataset.defaultImage);
    mainImage.style.backgroundImage = `url(${mainImage.dataset.defaultImage})`;
  });
}
cambiarImagen();

// CARDS DE VIDEO GAMES

// funcion que me renderice los games para mostrar al usario en cards
function mostrarCardsGames() {
  const contenido = games.map((game) => {
    // console.log(usuario.id);
    return `  
    <div class="card-game">
          <div>
              <img src="${game.src}"
                  class="card-img-top" alt="game-img">
          </div>
          <div class="card-description">
              <div class="d-flex flex-column justify-content-center align-items-start mx-2 py-2 ">
                  <h3>Oferta del mes</h3>
                  <h5>¡ Fecha limite ${game.fechaLimite}!</h5>
              </div>
              <div class="m-0 row  ">
                  <div class="col-3 card-oferta d-flex justify-content-center align-items-center">
                      <span>${game.descuento}</span>
                  </div>
                  <div class="col-9 card-precio">
                      <span><s>ARS$ ${game.precio}</s></span>
                      <span><i>ARS$ ${game.nuevoPrecio}</i></span>
                  </div>
              </div>
          </div>
      </div>
       `;
  });
  console.log(contenido.join(""));
  const allHtmlcontent = contenido.join("");
  gamesCards.innerHTML = allHtmlcontent;
}
mostrarCardsGames();