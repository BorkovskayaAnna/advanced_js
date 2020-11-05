const URL = "https://jsonplaceholder.typicode.com/";
const out = document.getElementById("blog-list");

function queryApi(endPoint) {
    return fetch(URL + endPoint)
        .then(result => result.ok ? result.json() : Promise.reject('Fetch error'))
}

queryApi('posts')
    .then((posts) => {
        queryApi('users')
            .then((users) => {
                for( let i = 0; i < 10; i++ ){
                    let data = `<div class="post">
                        <h2>${posts[i].title}</h2>
                        <p>${posts[i].body}</p>
                        <a href="#" class="post-author">View author info</a>
                        <div class="post-author_info">
                            <strong>Name</strong>: ${users[i].name} | 
                            <strong>UserName</strong>: ${users[i].username} | 
                            <strong>E-mail</strong>: ${users[i].email}
                        </div>
                    </div><hr>`
                out.innerHTML += data
                }
            })
    })

document.addEventListener('click',function(e){
    e.preventDefault();
    const current = e.target;

    current.classList.contains('post-author') && current.classList.toggle('open')
});

