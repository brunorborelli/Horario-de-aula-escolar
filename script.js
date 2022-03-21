const adicionar = document.getElementById('adicionar-button');
const remover = document.getElementById('remover-button');

//variaveis de professores

//segunda feira
let segunda1 = document.getElementById('segunda1').value;
let segunda2 = document.getElementById('segunda2').value;
let segunda3 = document.getElementById('segunda3').value;
let segunda4 = document.getElementById('segunda4').value;
let segunda5 = document.getElementById('segunda5').value;
let segunda6 = document.getElementById('segunda6').value;
let segunda7 = document.getElementById('segunda7').value;

    
    
function display_hidden_fields()
{
    
    
    document.getElementById("tabela-horarios-hiden").style.display = 'table-row';   
   
    
}

function hide_fields()
{
    
    
    document.getElementById("tabela-horarios-hiden").style.display = 'none';   
   
    
}

adicionar.addEventListener('click', display_hidden_fields); 
remover.addEventListener('click', hide_fields); 