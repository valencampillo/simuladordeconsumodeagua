$("#Resultados").append(`<table class="Resultados" id="Resultados" style="width: 100%">
							<tr>
								<td>
									<h4 style= "display: none;">Tu consumo diario promedio es de</h4>
								</td>
								<td style="display: flex;">
									<input class="input_a" type="number" name="total1" id="total1" readonly style= "display: none;"><div style="width: 20%;"></div><h4 style= "display: none;">litros.</h4>
								</td>
							</tr>
							<tr>
								<td>
									<h5 style= "display: none;">Tu consumo semanal promedio es de</h5> 
								</td>
								<td style="display: flex;">
									<input class="input_b" type="number" name="total2" id="total2" readonly style= "display: none;"><div style="width: 20%;"></div><h5 style= "display: none;">litros.</h5>
								</td>
							</tr>
							<tr>
								<td>
									<h6 style= "display: none;">Tu consumo mensual promedio es de</h6>
								</td>
								<td style="display: flex;">
									<input class="input_c" type="number" name="total3" id="total3" readonly style= "display: none;"><div style="width: 20%;"></div><h6 style= "display: none;">litros.</h6>
								</td>
							</tr>
						</table>`)
						

						$("h4").fadeIn(800);
						$("h5").fadeIn(900);
						$("h6").fadeIn(1000);

						$(".input_a").fadeIn(1100);
						$(".input_b").fadeIn(1200);
						$(".input_c").fadeIn(1300);

						$(".datos").fadeIn(1400);

						$(".Reiniciar").fadeIn(1500);
						$(".Dona").fadeIn(1500);

var tot1 = localStorage.getItem("tot1")
var tot2 = localStorage.getItem("tot2")
var tot3 = localStorage.getItem("tot3")

$("#total1").val(tot1)
$("#total2").val(tot2)
$("#total3").val(tot3)

function Reiniciar(){
    window.location.href = "index.html";
}