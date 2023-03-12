fetch('https://jsonplaceholder.typicode.com/albums')
    .then( response => console.log(response.json()))
    //.then( response => console.log(response))