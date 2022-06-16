fetch((src = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"))
  .then((res) => res.json())
  .then((datos) => {
    console.log(datos);
  });
