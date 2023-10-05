const ejercicio = () =>{
    const request = fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((response) => response.forEach(person => {
      console.log("Nombre: " + person.name + " - Email: " + person.email)
    }));
}
ejercicio();