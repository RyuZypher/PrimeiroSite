function calcular()
{
    //eae
    let numAnos = parseInt(document.getElementById('input').value)
    document.getElementById('input').value = ""
    
    let result = document.getElementById('result')
    let calculo = numAnos * 365
    
    if(isNaN(calculo))
    {
        result.innerHTML = 'Digite um número. '
    }
    else
    {
        result.innerHTML = 'Resultado: ' + calculo
    }
}

function limpar()
{	
    document.getElementById('input').value = ""
    
    let result = document.getElementById('result')
    result.innerHTML = 'Resultado: '
}
