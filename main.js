function mostrar() {
  const identificacion = document.getElementById("identificacion").value;
  const nombre = document.getElementById("nombre").value;
  const estaturaCm = parseFloat(document.getElementById("estatura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (!identificacion || !nombre || isNaN(estaturaCm) || isNaN(peso) || estaturaCm <= 0) {
    alert("Por favor ingresa todos los datos correctamente.");
    return;
  }

  const estatura = estaturaCm / 100;
  const imc = peso / (estatura * estatura);

  alert(
    "***********************************************" +
      "\n  La identificación del paciente es: " + identificacion +
      "\n  El nombre del paciente es: " + nombre +
      "\n  La estatura del paciente es: " + estatura + " metros" +
      "\n  El peso del paciente es: " + peso + " kilos" +
      "\n  ***********************************************" +
      "\n  La masa corporal del paciente es: " + imc.toFixed(2) +
      "\n  ***********************************************"
  );
}
 