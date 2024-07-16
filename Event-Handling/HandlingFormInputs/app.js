const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements["name"].value;
  console.log(name);
  if (name.length < 3) {
    alert("El nombre necesita más de 3 letras");
    return;
  }

  const email = form.elements["email"].value;
  console.log(email);
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  alert("Formulario enviado exitosamente!");

  console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);

  const formData = {
    name: name,
    email: email,
  };

  console.log(formData);
});
