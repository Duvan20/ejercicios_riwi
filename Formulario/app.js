var allPersons =[] 

let contado = 0;
nombres.oninput = function(){
    document.getElementById('nombres').classList.remove('is-invalid')
    document.getElementById('nombres').classList.add('is-valid')
}; 
apellidos.oninput = function(){
    document.getElementById('apellidos').classList.remove('is-invalid')
    document.getElementById('apellidos').classList.add('is-valid')
};
correo.oninput = function(){
    document.getElementById('correo').classList.remove('is-invalid')
    document.getElementById('correo').classList.add('is-valid')
};


function guardarUsuario(){
    console.log(allPersons);
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    color();

    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    console.log(persona)
    allPersons = []    
    allPersons.push(persona);

    if  ( nombres != "" && apellidos != "" && correo != ""){
        console.log("entro aki")
        listarUsuarios();
    }
    else{
        color();
    }

    
};

function listarUsuarios(){
    allPersons.forEach(function(person){
        document.getElementById('tabla').innerHTML +=`<tr id="IdReferencia${contado}">
        <td id="resnombre">${person.nombres}</td>
        <td id="resapellido">${person.apellidos}</td>
        <td id="rescorreo">${person.correo}</td>
        <td>
            <button type="button" onclick="eliminarUsuario('IdReferencia${contado}')"  class="btn btn-danger btn-sm">Eliminar</button>
        </td>
        
    </tr> `
    limpiar();
    removerfinal();
    contado++;
})    
}




function limpiar(){
    document.getElementById('nombres').value = ""
    document.getElementById('apellidos').value = ""
    document.getElementById('correo').value = ""
  
} 
function color(){
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;  
    if(nombres ==""){
        document.getElementById('nombres').focus()
        document.getElementById('nombres').classList.add('is-invalid')
    }
    else if( apellidos ==""){
        document.getElementById('apellidos').focus()
        document.getElementById('apellidos').classList.remove('is-valid')
        document.getElementById('apellidos').classList.add('is-invalid')

    }
    else if(correo ==""){
        document.getElementById('correo').focus()
        document.getElementById('correo').classList.remove('is-valid')
        document.getElementById('correo').classList.add('is-invalid')


    }

} 
function removerfinal(){
    document.getElementById('nombres').classList.remove('is-valid')
    document.getElementById('apellidos').classList.remove('is-valid')
    document.getElementById('correo').classList.remove('is-valid')
}
function eliminarUsuario(idReferencia){
    document.getElementById(idReferencia).innerHTML = ""
}