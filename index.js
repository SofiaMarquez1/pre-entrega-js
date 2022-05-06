let nombre = prompt ("Ingresa tu nombre")

if(nombre != " "){
    alert("Bienvenido/a " + nombre)
}else{(alert ("No ingresaste ningun nombre"))}


let pregunta = prompt ("¿Necesitas flores para tu jardin?")
    while (pregunta == "si"){

    function Plantas(nombre,precio){
            this.nombre = nombre;
            this.precio = parseFloat(precio);
        }
    
    
    var arrayPlantas = [];    
    const rosa = new Plantas ("rosa", "800");
    const tulipan = new Plantas ("tulipan", "1000");
    const girasol = new Plantas ("girasol", "950")
    const margarita = new Plantas ("Margaritas", "700");

    let producto= prompt ("¿Que flor estas buscando?")

    if(producto == "rosa"){
        alert ("El precio es " + rosa.precio)
    } else if(producto == "tulipan"){
        alert ("El precio es " + tulipan.precio)
    } else if( producto == "girasol"){
        alert ("El precio es " + girasol.precio)
    } else if( producto == "margarita"){
        alert ("El precio es " + margarita.precio)
    } else (alert ( "no tenemos ese producto"))

    pregunta = prompt ("¿Necesitas saber el precio de otra flor?")
    }
