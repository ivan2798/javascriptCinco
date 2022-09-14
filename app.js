//funciones asincronicas

//1 - Callbacks

//peticion de datos a un servidor
const encargarPizza = () => setTimeout(()=>console.log("Llega pizza"), 5000);
const ponerMesa = () => setTimeout(()=>console.log("Mesa puesta"), 2000);
const abrirVino = () => setTimeout(()=>console.log("Abrir vino"), 1000);
const cenar = () => console.log("Estamos cenando");

const completarCena = () =>{
    encargarPizza();
    ponerMesa();
    abrirVino();
    cenar();
}

completarCena(); //si no ponemos solucion, comenzariamos a cenar antes que la pizza llegue, con lo cual cenaremos aire



