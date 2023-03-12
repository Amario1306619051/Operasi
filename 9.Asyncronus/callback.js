function getDataMahasiswa (url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 ){
            if(xhr.status == 200){
                success(xhr.response);
            }
        }else if (xhr.status === 404 ) {
            error();
        }
    }

    xhr.open('get', url);
    xhr.send()
}

getDataMahasiswa('https://jsonplaceholder.typicode.com/posts', results => { console.log(results)}, () => {})