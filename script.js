const textarea = document.querySelector (".text-area");
const mensaje = document.querySelector (".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    }


function encriptar(stringEncriptada){
    let matrizcodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
       
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = Desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    }


function Desencriptar(stringDesencriptada){
    let matrizcodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++) {
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0])
       
        }
    }
    return stringDesencriptada
}

function copiar(){
    var copiar = document.getElementById("mensaje");
    copiar.select();
    copiar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copiar.value);
    alert("Copiado: " + copiar.value);
}

function borrar(){
    //limpiar  el textarea
    textarea.value = "";
    //limpiar el mensaje
    mensaje.value = "";
    }