function ejecutar(){
    let entrada="";
    let codigo=0;
    let binario="";
    entrada=document.getElementById("binar").value[0];
    codigo=entrada.charCodeAt(0)

    for (let i=7;i>=0;i-- ){
        if(codigo>=2**i){
            binario+=1;
            codigo -= 2**i;
        }
        else {
            binario+=0;
        }
    }
    document.getElementById("Respuesta").innerHTML=binario; 
}
function ejecutar2() {
    let binario = document.getElementById("bin").value;
    let caracter="";
    let suma=0;
    for (let i = 7; i >= 0; i--) {
        if (binario[7-i] === "1") {
            suma = suma + 2 ** i;
        }
    }
    caracter = String.fromCharCode(suma);
    document.getElementById("res").innerHTML = caracter;
}

function borrar(){
    document.getElementById("binar").value = "";
    document.getElementById("Respuesta").innerHTML = "";
}
function borrarCar(){
    document.getElementById("bin").value = "";
    document.getElementById("res").innerHTML = "";
}