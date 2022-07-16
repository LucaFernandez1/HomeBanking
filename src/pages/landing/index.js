let valores = document.querySelectorAll(`[id^="valor"]`);
let variacion = document.querySelectorAll(`[id^="variacion"]`);
let jsonData;

fetch((src = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"))
  .then((res) => res.json())
  .then(
    (datos) =>
      (jsonData = datos.filter(
        (valor) =>
          valor.casa.nombre == "Dolar Oficial" ||
          valor.casa.nombre == "Dolar Blue" ||
          valor.casa.nombre == "Dolar Contado con Liqui" ||
          valor.casa.nombre == "Dolar turista"
      ))
  );

setTimeout(function () {
  console.log(valores);
  console.log(jsonData);
  valores[0].innerHTML = `$${jsonData[0].casa.compra}`;
  valores[1].innerHTML = `$${jsonData[0].casa.venta}`;
  valores[2].innerHTML = `$${jsonData[1].casa.compra}`;
  valores[3].innerHTML = `$${jsonData[1].casa.venta}`;
  valores[4].innerHTML = `$${jsonData[2].casa.venta}`;
  valores[5].innerHTML = `$${jsonData[3].casa.venta}`;
  variaciones();
}, 2000);

function variaciones() {
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].casa.variacion < 0) {
      variacion[
        i
      ].innerHTML = `<i class="fa fa-caret-down" style="color:red"></i>VARIACION -${jsonData[i].casa.variacion}%`;
    } else {
      variacion[
        i
      ].innerHTML = `<i class="fa fa-caret-up" style="color:green"></i>VARIACION +${jsonData[i].casa.variacion}%`;
    }
  }
}
