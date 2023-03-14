let isiKartu = ''
const tempatKartu = document.getElementById('tempatKartu')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Hasil => Hasil.json())
    .then(Hasil => {
        Hasil.forEach(element => {
            isiKartu += `<div class="card">
            <h2> 
                ${element.title}
            </h2>
            
            <div class="tulisandes"> ${element.body} </div>
            </div>`
        });
        tempatKartu.innerHTML = isiKartu
    }
)

