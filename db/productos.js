export const productos = [

{
    id: 1,
    nombre: "Bordeaux",
    bpm: 137,
    imagen: "./assets/image-(1).png",
    precio:29
},
{
    id: 2,
    nombre: "2010",
    bpm: 116,
    imagen: "./assets/image-(2).png",
    precio:29                                                                
},
{
    id: 3,
    nombre: "Outside the club",
    bpm: 131,
    imagen: "./assets/image-(3).png",
    precio:29
},

];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));


