const btns = document.querySelectorAll('.btn');
const menu = document.querySelector('.card-group');

const breakfast = document.querySelector('.breakfast');
const lunch = document.querySelector('.lunch');
const dinner = document.querySelector('.dinner');
const drinks = document.querySelector('.drinks');
const fastfood = document.querySelector('.fastfood');

const testimonials = document.querySelector('.testimonials')

const markup = (name, img, price) => {
	const html =  `
	<div class="card m-2 rounded">
        <img src="images/${img}" class="card-img-top cImg rounded-circle" alt="...">
				<h4 class="price w-50"><i class="fas fa-rupee-sign"></i>.${price}</h4>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
      
        </div>
        <button class="btnOrd m-auto mb-3">Order now!</button>
    </div>
	`;
	menu.insertAdjacentHTML('beforeend', html)

}

const removeActive = () => {
	btns.forEach(btn => {
		btn.classList.remove('active')
	})
}
const Breakfast = () => {
	 markup('Pasta Rolls', 'br1.jpg', 80)
	 markup('Tost', 'br2.jpg', 30)
	 markup('Omelatte', 'br3.jpg', 40)
}

Breakfast()

breakfast.addEventListener('click', () => {
	menu.innerHTML = '';
	removeActive()
	breakfast.classList.add('active')

	Breakfast();
})

lunch.addEventListener('click', () => {
	menu.innerHTML = '';

	removeActive()
	lunch.classList.add('active')

	 markup('Chhole Bhatoore', 'ln1.jpg', 180)
	 markup('Chhole Chwala', 'ln2.jpg', 140)
	 markup('Rajma Chawal', 'ln3.jpg', 130)
})

dinner.addEventListener('click', () => {
	menu.innerHTML = '';

	 removeActive()
	 dinner.classList.add('active')

	 markup('Chilli Potatoes', 'dn1.jpg', 800)
	 markup('Chilli pasta', 'dn2.jpg', 640)
	 markup('Chow-mein', 'dn3.jpg', 830)
})

drinks.addEventListener('click', () => {
	menu.innerHTML = '';

	removeActive()
	drinks.classList.add('active')
	
	markup('Orange Juice', 'dr1.jpg', 640)
	markup('Banana Shake', 'dr2.jpeg', 830)
	markup('Apple Juice', 'dr3.jpg', 800)

})

fastfood.addEventListener('click', () => {
	menu.innerHTML = '';

	removeActive()
	fastfood.classList.add('active')
	
	markup('Kachodi', 'jf1.jpg', 640)
	markup('Samosa', 'jf2.jpg', 830)
	markup('Dosa', 'jf3.jpg', 800)

})

/*comments*/
//markup
const testimonialMarkup = (comment) => {
	return `
		<div class="d-sm-flex">
	      <div>
	          <img src="images/unknown.jpg" height="110" class="rounded my-2">
	      </div>
	      <div class="mx-sm-4 my-3">
	          <h6 class=""><span style="color: #f86011;">${comment.name}</span></h6>
	          <p class="text-muted px-sm-2">${comment.msg}</p>
	      </div>
	  </div>
	`
}

const renderTestimonials = (comments) => {
    testimonials.innerHTML = '';
    comments.map(comment => testimonials.insertAdjacentHTML('afterbegin',  testimonialMarkup(comment)))
}

//fetching data
let threeComments = []
fetch('/readTestimonials')
	.then(res => res.json())
	.then(data => {
		//fetching last three results
		threeComments = data.slice(0).slice(-3)
		renderTestimonials(threeComments)
	})
	.catch(err => {
		console.log("TESTIMONIAL ERROR: ",err)
	})
