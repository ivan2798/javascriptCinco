//funciones asincronicas

//1 - Callbacks

//peticion de datos a un servidor

/*
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
*/


/*
const encargarPizza = (callback) => { //callback = cenar()
    setTimeout(()=>{
    console.log("Llega la pizza ")
    callback()
    }, 5000)   

}


const ponerMesa = () => setTimeout(()=>console.log("Mesa puesta"), 2000);
const abrirVino = () => setTimeout(()=>console.log("Abrir vino"), 1000);
const cenar = () => console.log("Estamos cenando");

const completarCena = () =>{
    encargarPizza(cenar);
    ponerMesa();
    abrirVino();
}

completarCena(); //si no ponemos solucion, comenzariamos a cenar antes que la pizza llegue, con lo cual cenaremos aire

*/

//promesas

let p = new Promise((resolve,reject)=>{
    const succes = true;
    if(succes){
        resolve("Esto ha funcionado");
    } else {
        reject("Esto ha fallado");
    }

});

p.then(message=>console.log(message)).catch(err=>console.log(err));


console.log(p);


//promises con el ejemplo de la pizza

const encargarPizza = new Promise(resolve=>{
    setTimeout(()=>resolve("Llega la pizza"), 5000)
})

const ponerMesa = new Promise(resolve=>{
    setTimeout(()=>resolve("Mesa puesta"), 2000)
})

const abrirVino = new Promise(resolve=>{
    setTimeout(()=>resolve("Abrir vino"), 1000)
})

const cenar = new Promise(resolve=>{
    resolve("Ya esmaos comiendo")
})

encargarPizza.then((result)=>{
    console.log(result)
    return ponerMesa.then(result=>{
        console.log(result)
        return abrirVino.then((result)=>{
            console.log(result)
            return cenar.then(result=>console.log(result))
        })
    })
})