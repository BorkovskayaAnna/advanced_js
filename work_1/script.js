const URL = "https://jsonplaceholder.typicode.com/posts";
const table = document.getElementById("posts-table");
const spinner = document.getElementById('spinner');

function queryApi() {
    return fetch(URL)
        .then(result => result.ok ? result.json() : Promise.reject('Fetch error'))
}

queryApi()
    .then(posts => {
        // console.log(posts)
        for( let i = 0; i < 10; i++ ){
            let post = `<tr>
                            <td>${posts[i].id}</td>
                            <td>${posts[i].title}</td>
                            <td>${posts[i].body}</td>
                        </tr>`
            table.querySelector('tbody').innerHTML += post
        }
    })
