//let's link from html
let card = document.getElementById("htmlCard");



fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            card.innerHTML +=
                `
            <div class="col-md-6 col-lg-4">
                <div class="card mt-4">
                    <figure class="position-relative">
                        <img class="img-fluid p-3" src="${element.url}" alt="${element.title}">
                    </figure>
                    <a href="#">
                        <img class="position-absolute top-0 start-50 translate-middle-x" src="./img/pin.svg" alt="pin">
                    </a>
                    <div class="card-body">
                        <p class="sometype-mono-regular fs-4 text-danger">${element.date} </p>
                        <p class="edu-tas-beginner-paragraph">${element.title} </p>
                    </div>
            </div>
               
            `
        });
    })
    .catch(error => {

        console.error(error);

    });



