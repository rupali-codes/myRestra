const markupHeader = `
	<nav class="navbar navbar-light navbar-expand-lg p-4" style="z-index: 1; background-color: #fff4f2;" id="top">

        <div class="container">
            <a class="navbar-brand fw-bold fs-4" href="index.html"><img src="images/logo.webp" alt=""></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="fw-bold">MENU</span>  <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center text-md-start" id="navmenu">
                <ul class="navbar-nav fw-bold fs-5">
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="index.html" class="nav-link fw-bold text-dark">Home</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="menu.html" class="nav-link fw-bold text-dark">Menu</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="about.html" class="nav-link fw-bold text-dark">About</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="#" class="nav-link fw-bold text-dark">Blog</a>
                    </li>
                    <li class="nav-item mx-lg-2  p-2 p-lg-0 hover-border">
                        <a href="contact.html" class="nav-link fw-bold text-dark">Contact</a>
                    </li>
                </ul>

            </div>
            <ul class="navbar-nav  ms-auto fw-bold fs-5">
                <li class="nav-item mx-lg-2  p-2 p-lg-0 ">
                    <div class="btn-dark border-0 nav-item fw-bold rounded-pill btn btn-light  btn-lg position-relative" style="background-color: #f86011;">
                        +1023682802
                        <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>
                    </div>
                </li>
                <li class="nav-item mx-lg-2  mt-2 p-2 p-lg-0 text-center">
                    <div class="nav-item hover-border" id="book-table">
                        Book a Table
                    </div>
                </li>
            </ul>
        </div>
    </nav>
`;

const header = document.querySelector('.header');
header.innerHTML = markupHeader;