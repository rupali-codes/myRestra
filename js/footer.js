const markupFooter = `
	<footer class="pt-5">
        <div class="container">
            <div class="d-sm-flex flex-wrap justify-content-between text-center text-sm-start">
                <div class="col-sm-12 col-md-4 lead my-5">
                    <a class="navbar-brand fw-bold fs-4 "><img src="images/newLogo.png" class="rounded" height=70 alt=""></a>
                    <p class="my-5 h6">
                        We provides our best and healthy foods because your health is our first priority. If you found any issues then feel free to contact us. 
                    </p>
                    <h3 class="pt-4"><i class="bi bi-twitter mx-2" style="color: #f86011;"></i>
                        <i class="bi bi-facebook mx-2" style="color: #f86011;"></i>
                        <i class="bi bi-linkedin mx-2" style="color: #f86011;"></i>
                        <i class="bi bi-pinterest mx-2" style="color: #f86011;"></i>
                    </h3>

                </div>

                <div class="my-5">
                    <div class="h4 hover-border">Quick Links</div>
                    <ul class="list list-unstyled lead mt-5">

                        <li class="list-item p-2">
                            Home
                        </li>
                        <li class="list-item p-2">
                            About
                        </li>
                        <li class="list-item p-2">
                            Services
                        </li>
                        <li class="list-item p-2">
                            Blog
                        </li>
                        <li class="list-item p-2">
                            Contact
                        </li>
                    </ul>
                </div>

                <div class="my-5">
                    <div class="h4 hover-border">Cakes</div>
                    <ul class="list list-unstyled lead mt-5">

                        <li class="list-item p-2">
                            Blackforest
                        </li>
                        <li class="list-item p-2">
                            Bodhubon
                        </li>
                        <li class="list-item p-2">
                            Rongdhonu
                        </li>

                        <li class="list-item p-2">
                            Megrong
                        </li>
                    </ul>
                </div>
                <div class="lead my-5">
                    <h4 class="hover-border">Contact Us</h2>
                    <div class="mt-5">
                        <p>Near Shakti Chauk Bijnor, <br> Bijnor Uttar Pradesh (India)</p>
                        <p style="color: #f86011" class="fw-bold fs-3">+91 1234554321
                        </p>
                        <p>myrestra@gmail.com</p>
                    </div>
                </div>
                <div class="text-center lead col-12">
                    Designed and Devloped with <i class="bi bi-heart-fill" style="color: #f86011;"></i> by Rupali & Eugene Ishado
                </div>
            </div>

        </div>

    </footer>
    <a href="#top" class="position-fixed btn btn-lg  rounded-circle" id="fixed-button"><i class="bi bi-arrow-90deg-up fs-1"></i></a>
    `;

 const footer = document.querySelector('#footer');
 footer.innerHTML = markupFooter;