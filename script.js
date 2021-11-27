const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const menu = document.querySelector('.card-group');

const breakfast = document.querySelector('.breakfast');
const lunch = document.querySelector('.lunch');
const dinner = document.querySelector('.dinner');
const drinks = document.querySelector('.drinks');
const fastfood = document.querySelector('.fastfood');

const markup = (name, img, text, price) => {
	const html =  `
	<div class="card m-2 rounded">
        <img src="images/${img}" class="card-img-top cImg" alt="...">
        <div class="price">$${price}</div>

        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text para">${text}</p>

        </div>
        <button class="btnOrd m-3"><a href="">Order now!</a></button>
    </div>
	`;
	menu.insertAdjacentHTML('beforeend', html)

}

 markup('Pasta', 'f1.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 80)

 markup('Pizza Burger', 'f2.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 30)

 markup('Sandwich', 'f3.webp', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 40)

breakfast.addEventListener('click', () => {
	menu.innerHTML = '';

	// breakfast.classList.add('active')

	 markup('Pasta', 'f1.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 80)

	 markup('Pizza Burger', 'f2.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 30)

	 markup('Sandwich', 'f3.webp', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 40)
})

lunch.addEventListener('click', () => {
	menu.innerHTML = '';

	// lunch.classList.add('active')

	 markup('Rajma Chawal', 'f1.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 180)

	 markup('Biryani', 'f2.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 130)

	 markup('veg-Biryani', 'f3.webp', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 140)
})

dinner.addEventListener('click', () => {
	menu.innerHTML = '';

	// dinner.classList.add('active')

	 markup('Chhole Chawal', 'f1.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 800)

	 markup('Beans', 'f2.jpg', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 830)

	 markup('Batata Vada', 'f3.webp', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 640)
})
