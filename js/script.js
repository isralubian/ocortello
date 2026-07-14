const hero = document.querySelector(".hero-fondo");

const hoy = new Date();

const dia = hoy.getDate();
const mes = hoy.getMonth() + 1;

let estacion = "";

/* ===========================
   ESTACIÓN DEL AÑO
=========================== */

if (
    (mes === 3 && dia >= 21) ||
    mes === 4 ||
    mes === 5 ||
    (mes === 6 && dia < 21)
){

    estacion = "primavera";

}
else if (
    (mes === 6 && dia >= 21) ||
    mes === 7 ||
    mes === 8 ||
    (mes === 9 && dia < 23)
){

    estacion = "verano";

}
else if (
    (mes === 9 && dia >= 23) ||
    mes === 10 ||
    mes === 11 ||
    (mes === 12 && dia < 21)
){

    estacion = "otono";

}
else{

    estacion = "invierno";

}

/* ===========================
   CONFIGURACIÓN
=========================== */

const temas = {

    primavera:{

        imagen:"img/primavera.webp",
        color:"#8DDA4E",
        sombra:"rgba(141,218,78,.35)"

    },

    verano:{

        imagen:"img/verano.webp",
        color:"#D7FF00",
        sombra:"rgba(215,255,0,.35)"

    },

    otono:{

        imagen:"img/otono.webp",
        color:"#FF8C3A",
        sombra:"rgba(255,140,58,.35)"

    },

    invierno:{

        imagen:"img/invierno.webp",
        color:"#74D9FF",
        sombra:"rgba(116,217,255,.35)"

    }

};


const lemas = {

    primavera:[
        "CRECE.",
        "APRENDE.",
        "DESCUBRE."
    ],

    verano:[
        "PIENSA.",
        "COMPRENDE.",
        "SUPÉRATE."
    ],

    otono:[
        "REFLEXIONA.",
        "CONSOLIDA.",
        "AVANZA."
    ],

    invierno:[
        "OBSERVA.",
        "RAZONA.",
        "RESUELVE."
    ]

};

const spans = document.querySelectorAll("#lema span");

spans[0].textContent = lemas[estacion][0];
spans[1].textContent = lemas[estacion][1];
spans[2].textContent = lemas[estacion][2];


/* ===========================
   APLICAR TEMA
=========================== */

hero.style.backgroundImage = `url('${temas[estacion].imagen}')`;

document.documentElement.style.setProperty(
    "--color-principal",
    temas[estacion].color
);

document.documentElement.style.setProperty(
    "--color-sombra",
    temas[estacion].sombra
);