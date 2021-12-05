const dishes = document.querySelector('.dishes');
const searchFoods = document.querySelector('#searchFoods');

//food menu object
const searchMenu = [
    {
        price: 120,
        img: 'images/f2.jpg',
        food: 'chilla',
        desc: 'A short description'
    },
    {
        price: 20,
        img: 'images/f3.webp',
        food: 'laddu',
        desc: 'A short description'
    }, 
    {
        price: 50,
        img: 'images/f1.jpg',
        food: 'hot water',
        desc: 'A short description'
    },
    {
        price: 35,
        img: 'images/f2.jpg',
        food: 'cold water',
        desc: 'A short description'
    },
    {
        price: 35,
        img: 'images/f2.jpg',
        food: 'Juice',
        desc: 'A short description'
    }
];


//generating markup
const generateMarkup = (menu) => {
   return `
        <div class="dish">
            <div class="price">$${menu.price}</div>
            <img src="${menu.img}">

            <div class="desc">
                <h3 class="title heading">${menu.food}</h3>
                <p class="para">${menu.desc}</p>
            </div>
            <button class="btnOrd m-3"><a href="">Order now!</a></button>
        </div>
    `;
}

//rendering results
const render = (menu) => {
    dishes.innerHTML = '';
    menu.map(dish => dishes.insertAdjacentHTML('beforeend',  generateMarkup(dish)))
}

//default
render(searchMenu);

//searching
searchFoods.addEventListener('input', () => {
    const input = (searchFoods.value).toLowerCase();
    const searchFood = searchMenu.filter(menu => menu.food.includes(input));

    if(searchFood.length === 0){
        return dishes.innerHTML = `
            <h1 class='m-auto text-center'>No Results</h1>
            `
    }else if(input === ''){
        render(searchMenu);
    }else{
        render(searchFood);
    }
})


