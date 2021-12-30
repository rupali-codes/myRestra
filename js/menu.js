const dishes = document.querySelector('#dishes');
const searchFoods = document.querySelector('#searchFoods');
const Footer = document.querySelector('#footer');

const orders = [];

//food menu object
let searchMenu = [
    {
        price: 120,
        img: 'images/f2.jpg',
        food: 'Neapolitan Pizza',
        desc: 'A short description'
    },
    {
        price: 20,
        img: 'images/f3.webp',
        food: 'Chicago Pizza',
        desc: 'A short description'
    },
    {
        price: 50,
        img: 'images/f1.jpg',
        food: 'Sicilian Pizza',
        desc: 'A short description'
    },
    {
        price: 35,
        img: 'images/f2.jpg',
        food: 'Detroit Pizza',
        desc: 'A short description'
    },
    {
        price: 35,
        img: 'images/f2.jpg',
        food: 'California Pizza',
        desc: 'A short description'
    },
    {
        price: 99,
        img: 'images/f2.jpg',
        food: 'Greek Pizza',
        desc: 'Yummy Pizza'
    }
];

//added an id generator
searchMenu = searchMenu.map((item, index) => ({...item, id: index }));

const generateMarkup_menuItem = (menu) => {
   return `
        <div class="col-md-6 col-lg-3">
            <div class="card item" >
                <div class="card-body text-center"> 
                    <h4 class="price">$${menu.price}</h4>
                    <img src="${menu.img}" class="rounded-circle my-3 w-50">

                    <h3 class="card-title title">${menu.food}</h3>
                    <p class="lead card-text text-muted">
                       ${menu.desc} 
                    </p>

                    <input type="text" class="qtty fontAwesome border-0 border-bottom mb-3 text-center form-control" name="qtty" placeholder="&#xf500; Enter Quantity" style="font-family: Arial, 'Font Awesome 5 Pro'" required>
                    <button class="btnOrd" data-fp="${menu.price}" data-fn="${menu.food}">Order Now!</button>
                </div>
            </div>
        </div>
    `;
}

//rendering results
const render = (menu) => {
    dishes.innerHTML = '';
    menu.map(dish => dishes.insertAdjacentHTML('beforeend',  generateMarkup_menuItem(dish)))
}

//default
render(searchMenu);

//searching
searchFoods.addEventListener('input', () => {
    const input = (searchFoods.value).toLowerCase();
    const searchFood = searchMenu.filter(menu => menu.food.toLowerCase().includes(input));
    Footer.style.display = 'block';
    if(searchFood.length === 0){
        Footer.style.display = 'none';
        return dishes.innerHTML = `
            <h1 class='m-auto text-center'>No Results</h1>
            `
    }else if(input === ''){
        render(searchMenu);
    }else{
        render(searchFood);
    }
})


/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@___BILLING___@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


const orderBtns = document.querySelectorAll('.btnOrd');
const bill = document.querySelector('.bill');
const billText = document.querySelector('#bill');


orderBtns.forEach((order) => {
    order.addEventListener('click', e => {
        e.preventDefault();
 
        const parent = e.target.closest('.card');
        const qtty = parent.querySelector('.qtty');
        const food = parent.querySelector('.title');
        const priceOrg = parent.querySelector('.price').textContent;
        const price = +(priceOrg.replace('$', ''))

        if(qtty.value == ''){
            alert("Please enter the qtty");
        }else{
             order.textContent = 'Ordered!';
             orders.push({
                name: food.textContent,
                price: (qtty.value) * price
             })

             parent.classList.add('selected');
             qtty.value = '';
        }
    })
})

//sum of prices
const priceSum = (prices) => {
    const sum = {};
    prices.forEach(price => {
        for(let [key, value] of Object.entries(price)){
            if(sum[key]){
                sum[key] += value;
            }else{
                sum[key] = value;
            }
        }
    });
    return sum.price;
}

bill.addEventListener('click', () => {
    const reducer = (pv, cv) => pv + cv;

    if(orders.length === 0){
        billText.textContent = "Please order something!"
    }else{
         billText.textContent = '$' + priceSum(orders);
    }
   
})

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@___CART___@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

const cart = document.querySelector('#cart');
const ordersList = document.querySelector('.orders-list');
const cancel = document.querySelector('.cancel');

const generateMarkup_orders = (order) => {
    const markup = `
        <li class="list-group-item d-flex justify-content-between align-items-start mb-2  border-left">
          <div class="ms-3 me-auto">
             <h4>${order.name}</h4>
                <span class="text-center">$${order.price}</span>
          </div>
          <button class="btn btn-secondary border-0 bg-orange rounded text-light cancel">
              Cancel
          </button>
      </li>
    `;
    return markup;
}

cart.addEventListener('click', () => {
    if(orders.length === 0){
        ordersList.textContent = 'Please order something :)';
    }else{
        ordersList.innerHTML = '';
        orders.map(order => ordersList.insertAdjacentHTML('afterbegin', generateMarkup_orders(order)));
    }
})


ordersList.addEventListener('click', (e) => {
   const cnl = (e.target.closest('.cancel'))
})


