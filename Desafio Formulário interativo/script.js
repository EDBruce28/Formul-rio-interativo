function inicializar(){
document.getElementById('criar').addEventListener('click', criarcoisas);
document.getElementById('dialogo').addEventListener('click', dialogo);
document.getElementById('peças').addEventListener('click', peças);
}



function criarcoisas(criarMenu1){
   function tratar(){
      document.getElementById().style.display = 'none'
   }
   function concertar(){
      document.getElementById().style.display = 'none'
   }
   function alinhar(){
      document.getElementById().style.display = 'none'
   }

   var criarMenu1 = document.getElementById('FB').getElementsByTagName('button')
   for(var i=0; i<botoes1.length;i++){
      if (botoes1[i].id =='criar'){
         botoes1[0].innerHTML = 'Adornar, Desenhar, Mexer com layout?'//frontend
         botoes1[1].innerHTML = 'A primeira pergunta junto com lógica, Estruturação, Criação de mecanismos?'//backend'planejar '
         botoes1[2].innerHTML = 'Praticidade e acessibilidade, mecanismo da física, gráfico computacional?'//app para celular e games
         botoes1[3].innerHTML = 'Montar, concertar, ajustar?'//técnico de informática
         
         var pergunta = document.getElementById('pergunta')
         pergunta.innerHTML = '<span style="font-weight: bold;">O que te chama mais atenção?</span>';

      }
     
   }
   
 
}
addEventListener('click', function(){dialogo(this)})
function dialogo(){
   var botoes2 = document.getElementById('botoes').getElementsByTagName('button')
   for(var i=0; i<botoes2.length;i++){
      if (botoes2[i].id =='dialogo'){
         botoes2[0].innerHTML = 'Mexer com documentação'//analista de requisitos 
         botoes2[1].innerHTML = 'Planejar, organizar e supervisionar atividades?'
         botoes2[2].innerHTML =  'Dialogar, documentar requisições'
         botoes2[3].innerHTML = 'teste'
         
         var pergunta = document.getElementById('pergunta')
         pergunta.innerHTML = '<span style="font-weight: bold;">O que te chama mais atenção?</span>';
      }
   }
   
}
function peças(){
   var botoes3 = document.getElementById('botoes').getElementsByTagName('button')
   for(var i=0; i<botoes3.length;i++){
      if (botoes3[i].id !=='peças'){
         botoes3[0].innerHTML = 'teste'//analista de requisitos 
         botoes3[1].innerHTML = 'teste'
         botoes3[2].innerHTML =  'teste'
         botoes3[3].innerHTML = 'teste'
         
         var pergunta = document.getElementById('pergunta')
         pergunta.innerHTML = '<span style="font-weight: bold;">O que te chama mais atenção?</span>';
      }
   }
   
}
window.addEventListener('load', inicializar);
