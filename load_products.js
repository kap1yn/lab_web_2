let products = [
    {
        id: 1,
        name: "HP laptop",
        category: "laptop",
        description: "super puper laptop",
        image: "media/fire.jpeg"
    },
    {
        id: 2,
        name: "Samsung phone",
        category: "phone",
        description: "super puper phone",
        image: "media/fire.jpeg"
    },
    {
        id: 3,
        name: "Lenovo laptop",
        category: "laptop",
        description: "super puper laptop",
        image: "media/fire.jpeg"
    },
    {
        id: 4,
        name: "Iphone phone",
        category: "phone",
        description: "super puper phone",
        image: "media/fire.jpeg"
    },
    {
        id: 5,
        name: "Mac laptop",
        category: "laptop",
        description: "super puper laptop",
        image: "media/fire.jpeg"
    },
    {
        id: 6,
        name: "Xiaomi phone",
        category: "phone",
        description: "super puper phone",
        image: "media/fire.jpeg"
    },
    {
        id: 7,
        name: "Legion laptop",
        category: "laptop",
        description: "super puper laptop",
        image: "media/fire.jpeg"
    },
    {
        id: 8,
        name: "Nokia phone",
        category: "phone",
        description: "super puper phone",
        image: "media/fire.jpeg"
    }
];

function loadProducts(category) {
    let filterFunction;
    filterFunction = category ? (product) => product.category === category : () => true;

    let productsFiltered = products.filter(filterFunction);
    let productsHtml = '<div class="container">';

    for (let i = 0; i < productsFiltered.length; i++) {
        productsHtml += `<div class='card-elem' id='${productsFiltered[i].id}'><h2>${productsFiltered[i].name}</h2> <img width='50%' src='${productsFiltered[i].image}'/>  <p><button class="active_desc">INFO</button></p> <p class="description">${productsFiltered[i].description}</p></div>`;

        if ((i + 1) % 3 === 0 && i !== productsFiltered.length - 1) {
            productsHtml += '</div><div class="container">';
        }
    }

    productsHtml += '</div>'; 

    let productsContainer = document.getElementById('container-id');
    productsContainer.innerHTML = productsHtml;
}

loadProducts();

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('active_desc')) {
        
        let description = event.target.parentElement.nextElementSibling;
        let close = document.createElement('button');

        makeModalDescription(description);
        makeCloseButton(close);

        close.addEventListener('click', function () {
            description.style.display = 'none';
        });
        
        description.appendChild(close);
    }
});

function makeModalDescription(description) {
    description.style.display = 'block';
    description.style.position = 'fixed';
    description.style.top = '50%';
    description.style.left = '50%';
    description.style.transform = 'translate(-50%, -50%)';
    description.style.backgroundColor = 'white';
    description.style.padding = '30px';
    description.style.border = '1px solid black';
    description.style.borderRadius = '10px';
    description.style.zIndex = '1000';
}

function makeCloseButton(close){
    close.innerHTML = `X`;
    close.style.position = 'fixed';
    close.style.top = '0';
    close.style.right = '0';
    close.style.color = 'red';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.background = 'none';
    close.style.width = '30px';
}




