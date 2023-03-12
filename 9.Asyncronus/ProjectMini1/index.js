$.ajax(
    {
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: (data) => {
            console.table(data)
        },
        error: (e) => {
            console.log(e.responseText)
        }
    }
)