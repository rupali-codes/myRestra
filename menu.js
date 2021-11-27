const fullMenu = document.querySelector('.full-menu');
const dishes = document.querySelector('.dishes');

const genMarkup = (price, imgs, title, desc) => {
    const markup = `
	<div class="dishes">
    		 <div class="dish">
    			<div class="price position-relative rounded-pill">
				                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>

				$${price[0]}</div>
    			<img src="images/${imgs[0]}">

    			<div class="desc">
    				<h3 class="title heading">${title[0]}</h3>
            		<p class="para">${desc}</p>
    			</div>
    			<button class="btnOrd m-3"><a href="">Order now!</a></button>
    		</div>

    		<div class="dish">
    			<div class="price position-relative rounded-pill">
				                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>

				$${price[1]}</div>
    			<img src="images/${imgs[1]}">
    			<div class="desc">
    				<h3 class="title heading">${title[1]}</h3>
            		<p class="para">${desc}</p>
    			</div>
    			<button class="btnOrd m-3"><a href="">Order now!</a></button>
    		</div>

    		<div class="dish">
    			<div class="price position-relative rounded-pill">
				                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>

				$${price[2]}</div>
    			<img src="images/${imgs[2]}">

    			<div class="desc">
    				<h3 class="title heading">${title[2]}</h3>
            		<p class="para">${desc}</p>
    			</div>
    			<button class="btnOrd m-3"><a href="">Order now!</a></button>
    		</div>

    		<div class="dish">
    			<div class="price position-relative rounded-pill">
				                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>

				$${price[3]}</div>
    			<img src="images/${imgs[3]}">

    			<div class="desc">
    				<h3 class="title heading">${title[3]}</h3>
            		<p class="para">${desc}</p>
    			</div>
    			<button class="btnOrd m-3"><a href="">Order now!</a></button>
    		</div> 
    	</div> 
	`;

    fullMenu.insertAdjacentHTML('beforeend', markup);
}

const desc = 'Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.';

genMarkup(
    [120, 234, 145, 67], ['f2.jpg', 'f1.jpg', 'f3.webp', 'f2.jpg'], ['Pasta', 'Samosa', 'Burger', 'Pizza'],
    desc
);
genMarkup(
    [120, 234, 145, 67], ['f2.jpg', 'f1.jpg', 'f3.webp', 'f2.jpg'], ['Momos', 'Batata Vada', 'Pow Bhaji', 'Rice'],
    desc
);