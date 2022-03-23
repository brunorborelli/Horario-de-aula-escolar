const adicionar = document.getElementById('adicionar-button');
const remover = document.getElementById('remover-button');

//variaveis de professores (tabela de restrições)





//segunda feira - Class Schedule
let segunda1 = document.getElementById('segunda1').value;
let segunda2 = document.getElementById('segunda2').value;
let segunda3 = document.getElementById('segunda3').value;
let segunda4 = document.getElementById('segunda4').value;
let segunda5 = document.getElementById('segunda5').value;
let segunda6 = document.getElementById('segunda6').value;
let segunda7 = document.getElementById('segunda7').value;

//terca feira - Class Schedule
let terca1 = document.getElementById('segunda1').value;
let terca2 = document.getElementById('segunda2').value;
let terca3 = document.getElementById('segunda3').value;
let terca4 = document.getElementById('segunda4').value;
let terca5 = document.getElementById('segunda5').value;
let terca6 = document.getElementById('segunda6').value;
let terca7 = document.getElementById('segunda7').value;

//quarta feira - Class Schedule
let quarta1 = document.getElementById('segunda1').value;
let quarta2 = document.getElementById('segunda2').value;
let quarta3 = document.getElementById('segunda3').value;
let quarta4 = document.getElementById('segunda4').value;
let quarta5 = document.getElementById('segunda5').value;
let quarta6 = document.getElementById('segunda6').value;
let quarta7 = document.getElementById('segunda7').value;

//quinta feira - Class Schedule
let quinta1 = document.getElementById('segunda1').value;
let quinta2 = document.getElementById('segunda2').value;
let quinta3 = document.getElementById('segunda3').value;
let quinta4 = document.getElementById('segunda4').value;
let quinta5 = document.getElementById('segunda5').value;
let quinta6 = document.getElementById('segunda6').value;
let quinta7 = document.getElementById('segunda7').value;

//sexta feira - Class Schedule
let sexta1 = document.getElementById('segunda1').value;
let sexta2 = document.getElementById('segunda2').value;
let sexta3 = document.getElementById('segunda3').value;
let sexta4 = document.getElementById('segunda4').value;
let sexta5 = document.getElementById('segunda5').value;
let sexta6 = document.getElementById('segunda6').value;
let sexta7 = document.getElementById('segunda7').value;






    
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