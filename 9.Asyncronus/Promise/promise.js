// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then( response => console.log()(response.json()))
    //.then( response => console.log(response))

let ditepati = true;
const janji1 = new Promise ((resolve, reject) => {
    if (ditepati){
        resolve('Keren')
    }else(
        reject('gak keren')
    )
});

janji1
    .then(response => console.log('ok'))
