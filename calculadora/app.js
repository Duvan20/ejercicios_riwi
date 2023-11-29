num1.oninput = function(){document.getElementById('num1').classList.add('is-valid')}; 
num2.oninput = function(){document.getElementById('num2').classList.add('is-valid')};
operacion.oninput = function(){document.getElementById('operacion').classList.add('is-valid')};
function operaciones() {
    let operacion = document.getElementById('operacion').value
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
   
    

    if (operacion == '') {
        alert('Debes de elegir una opcion')
        document.getElementById('operacion').focus()
        document.getElementById('operacion').classList.add('is-invalid')
    } else if (num1 == '') {
        document.getElementById('num1').focus()
        document.getElementById('num1').classList.add('is-invalid')
    } else if (num2 == '') {
        document.getElementById('num2').focus()
        document.getElementById('num2').classList.add('is-invalid')
    } else if (operacion == 'suma') {
        console.log('deberias hacer una suma ')
        console.log('el resultado de', parseInt(num1) + parseInt(num2))
        document.getElementById('num1').value = ''
        document.getElementById('num2').value = ''
        document.getElementById('operacion').value = ''
        document.getElementById(
            'resultado'
        ).innerHTML = `tu resultado es: ${parseInt(num1)}  +  ${parseInt(
            num2
        )} =  ${parseInt(num1) + parseInt(num2)} `

        //num 1 + num2// */
    } else if (operacion == 'resta') {
        console.log('Deberias hacer una resta ')
        console.log('EL resultado de', parseInt(num1) - parseInt(num2))
        document.getElementById('num1').value = ''
        document.getElementById('num2').value = ''
        document.getElementById('operacion').value = ''
        document.getElementById(
            'resultado'
        ).innerHTML = `tu resultado es: ${parseInt(num1)}  -  ${parseInt(
            num2
        )} =  ${parseInt(num1) - parseInt(num2)} `

        //num1- num2//
    } else if (operacion == 'multi') {
        console.log('Deberias hacer una multiplicaion')
        console.log('EL resultado de', parseInt(num1) * parseInt(num2))
        document.getElementById('num1').value = ''
        document.getElementById('num2').value = ''
        document.getElementById('operacion').value = ''
        document.getElementById(
            'resultado'
        ).innerHTML = `tu resultado es: ${parseInt(num1)}  x  ${parseInt(
            num2
        )} =  ${parseInt(num1) * parseInt(num2)} `

        //num1 * num2//
    } else if (operacion == 'divi') {
        console.log('Deberias hacer una division ')
        console.log('EL resultado de', parseInt(num1) / parseInt(num2))
        document.getElementById('num1').value = ''
        document.getElementById('num2').value = ''
        document.getElementById('operacion').value = ''
        document.getElementById(
            'resultado'
        ).innerHTML = `tu resultado es: ${parseInt(num1)}  /  ${parseInt(
            num2
        )} =  ${parseInt(num1) / parseInt(num2)} `

        //num 1 / num2//
    } else if (operacion == 'expo') {
        console.log('Deberias elevar ')
        console.log('EL resultado de', parseInt(num1) ** parseInt(num2))
        document.getElementById('num1').value = ''
        document.getElementById('num2').value = ''
        document.getElementById('operacion').value = ''
        document.getElementById(
            'resultado'
        ).innerHTML = `tu resultado es: ${parseInt(num1)}  **  ${parseInt(
            num2
        )} =  ${parseInt(num1) ** parseInt(num2)} `
    }
    document.getElementById('operacion').classList.remove('is-valid')
    document.getElementById('num1').classList.remove('is-valid')
    document.getElementById('num2').classList.remove('is-valid')

    
}


/* num1.oninput = function(){document.getElementById('num1').classList.add('is-valid')}; 
num2.oninput = function(){document.getElementById('num2').classList.add('is-valid')};
operacion.oninput = function(){document.getElementById('operacion').classList.add('is-valid')}; 
 */

