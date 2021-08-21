let input = document.getElementsByTagName("input")
    
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('keypress', (event) => {
      event.preventDefault()
      let valor_tecla = String.fromCharCode(event.keyCode)
      let valor_parseado = parseInt(valor_tecla)
      if(valor_parseado) {
          valorStr = input[i].value + valor_parseado
          valorOtro = parseInt(valorStr)
          input[i].value = parseInt(valorStr)
      } 
  })
}

function Calcular(){
  var valores = (a.value, b.value, c.value, d.value, e.value, f.value, g.value, h.value, i.value, j.value)

  let error = $("#error").append('<h5 style= "display: none; color: red; position: fixed; margin-left: 79%; font-family: Montserrat, sans-serif; font-weight: bolder; margin-top: 17%; background-color: #a4a8b0; border-radius: 40px; padding: 0.1%; font-size: 18px; width: 16%; text-align: center;">Debe completar todos los campos.</h5>')
  
  $("h5").fadeIn(250)


  if (valores != "" || NaN || undefined){
  window.location.href = "resultado.html";
        
  //Preguntas
  let a = parseFloat($("#a").val())
  let b = parseFloat($("#b").val())
  let c = parseFloat($("#c").val())
  let d = parseFloat($("#d").val())
  let e = parseFloat($("#e").val())
  let f = parseFloat($("#f").val())
  let g = parseFloat($("#g").val())
  let h = parseFloat($("#h").val())
  let i = parseFloat($("#i").val())
  let j = parseFloat($("#j").val())


  //Calculos
  var calculo_inodoro = ((a*8)*7);
  //Cantidad de descargas diarias * 8L(cada descarga) * 7 dias de la semana
  var calculo_ducha = ((c*20)*b);
  //Tiempo que pasas en la ducha * 20L(por minuto) * 7 dias de la semana
  var calculo_dientes = ((e / 60)*(d*6)*7);
  //Segundos que pasaron con la canilla abierta, pasados a minutos * cepilladas diaria * 6L(por minuto)* 7 dias de la semana
  var calculo_manos = ((g / 60)*(f*6)*7);
  //Segundos que pasaron con la canilla abierta, pasados a minutos * lavados de mano diarios * 6L(por minuto)* 7 dias de la semana
  var calculo_lavarropas = ((h*52));
  //Uso semanal del lavarropas * 52L(aproximado)
  var calculo_platos = ((j / 60)*(i*11)*7);
  //Segundos que pasaron con la canilla abierta, pasados a minutos * la cantidad de veces que se lavan los platos * 11L(por minuto) * 7 dias de la semana
  

  var total_diario  = ((calculo_inodoro + calculo_ducha + calculo_dientes + calculo_manos + calculo_lavarropas + calculo_platos) / 7).toFixed(1);
  var total_semanal = ((calculo_inodoro + calculo_ducha + calculo_dientes + calculo_manos + calculo_lavarropas + calculo_platos)).toFixed(1);
  var total_mensual = ((calculo_inodoro + calculo_ducha + calculo_dientes + calculo_manos + calculo_lavarropas + calculo_platos) * 4).toFixed(1);
  

  localStorage.setItem("tot1", total_diario)
  localStorage.setItem("tot2", total_semanal)
  localStorage.setItem("tot3", total_mensual)
  }
  
  else{
  error
  }
}
