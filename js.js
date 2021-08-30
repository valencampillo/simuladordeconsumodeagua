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

  $("#error").append('<h5 style= "display: none; color: red; position: fixed; margin-left: 79%; font-family: Montserrat, sans-serif; font-weight: bolder; margin-top: 17%; background-color: #a4a8b0; border-radius: 40px; padding: 0.1%; font-size: 18px; width: 16%; text-align: center;">Debe completar todos los campos.</h5>')
  $("h5").fadeIn(250)

  var valores = (a.value, b.value, c.value, d.value, e.value, f.value, g.value, h.value, i.value, j.value)

  if (valores != "" || NaN || undefined){
  window.location.href = "resultado.html";
        
  let descargas_inodoro = parseFloat($("#a").val())
  let baños_semanales = parseFloat($("#b").val())
  let tiempo_baño = parseFloat($("#c").val())
  let cepilladas_diarias = parseFloat($("#d").val())
  let tiempo_cepilladas = parseFloat($("#e").val())
  let higiene_manos_diarias = parseFloat($("#f").val())
  let tiempo_higiene_manos = parseFloat($("#g").val())
  let uso_lavarropas_semanal = parseFloat($("#h").val())
  let limpieza_platos_diaria = parseFloat($("#i").val())
  let tiempo_limpieza_platos = parseFloat($("#j").val())


  //Calculos
  var calculo_inodoro = ((descargas_inodoro*8)*7);
  //Cantidad de descargas diarias * 8L(cada descarga) * 7 dias de la semana
  var calculo_ducha = ((tiempo_baño*20)*baños_semanales);
  //Tiempo que pasas en la ducha * 20L(por minuto) * 7 dias de la semana
  var calculo_dientes = ((tiempo_cepilladas / 60)*(cepilladas_diarias*6)*7);
  //Segundos que pasaron con la canilla abierta, pasados a minutos * cepilladas diaria * 6L(por minuto)* 7 dias de la semana
  var calculo_manos = ((tiempo_higiene_manos / 60)*(higiene_manos_diarias*6)*7);
  //Segundos que pasaron con la canilla abierta, pasados a minutos * lavados de mano diarios * 6L(por minuto)* 7 dias de la semana
  var calculo_lavarropas = ((uso_lavarropas_semanal*52));
  //Uso semanal del lavarropas * 52L(aproximado)
  var calculo_platos = ((tiempo_limpieza_platos / 60)*(limpieza_platos_diaria*11)*7);
  //Segundos que pasaron con la canilla abierta, pasados a minutos * la cantidad de veces que se lavan los platos * 11L(por minuto) * 7 dias de la semana
  

  var total_diario  = ((calculo_inodoro + calculo_ducha + calculo_dientes + calculo_manos + calculo_lavarropas + calculo_platos) / 7).toFixed(1);
  var total_semanal = ((calculo_inodoro + calculo_ducha + calculo_dientes + calculo_manos + calculo_lavarropas + calculo_platos)).toFixed(1);
  var total_mensual = ((calculo_inodoro + calculo_ducha + calculo_dientes + calculo_manos + calculo_lavarropas + calculo_platos) * 4).toFixed(1);
  

  localStorage.setItem("tot1", total_diario)
  localStorage.setItem("tot2", total_semanal)
  localStorage.setItem("tot3", total_mensual)
  }
}
