console.log('Metodo fetch promise');
let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json';
const peticion = 
fetch(url)
.then(response =>
    response.json()
    // JSON: cuyo nombre corresponde a las siglas JavaScript Object Notation 
    // o Notación de Objetos de JavaScript, 
    // es un formato ligero de intercambio de datos, 
    // que resulta sencillo de leer y escribir 
    // para los programadores y simple de interpretar y generar para las máquinas.
)
.then(
    data => console.log(data)
);
peticion;