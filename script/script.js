
let free = false;

const clientes = [];

const validarCliente = () => {
  const cliente = {
    edad: parseInt(prompt("¿Cuál es tu edad?")),
    hora: 0,
    puedePasar: false,
  };

  if (cliente.edad > 18) {
    do {
      cliente.hora = parseInt(prompt("Ingresa la hora actual (0-23):"));
    } while (isNaN(cliente.hora) || cliente.hora < 0 || cliente.hora > 23);

    if (cliente.hora >= 2 && cliente.hora < 7 && !free) {
      cliente.puedePasar = true;
      cliente.mensaje =
        "Podes pasar gratis porque sos la primera persona después de las 2 AM";
      free = true;
    } else {
      cliente.mensaje = `Son las ${cliente.hora}:00hs y podes pasar, pero tenes que pagar la entrada`;
    }
  } else {
    cliente.mensaje = "sos menor de edad, no podes pasar";
  }

  clientes.push(cliente);
};

validarCliente(40);
validarCliente(20);
validarCliente(30);

console.log(clientes);

// Utilizando find
const clienteGratis = clientes.find((cliente) => cliente.puedePasar && cliente.hora >= 2 && cliente.hora < 7);
console.log("Cliente que pueden pasar gratis:", clienteGratis);

// Utilizando filter
const clientesPagando = clientes.filter((cliente) => !cliente.puedePasar || (cliente.puedePasar && (cliente.hora < 2 || cliente.hora >= 7)));
console.log("Clientes que tienen pagar la entrada:", clientesPagando);


