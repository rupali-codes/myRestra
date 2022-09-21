const logoutMarkup = () => {
	return `
		<li class="nav-item mx-lg-2  p-2 p-lg-0 ">
            <a href="logout">
                <div class="btn-dark border-0 nav-item fw-bold rounded-pill btn btn-light  btn position-relative" style="background-color: #f86011;">
                Logout
                <div class="position-absolute  bg-dark rounded-pill " id="button-bg"></div>
                </div>
            </a>
        </li>
	`
}

module.exports = logoutMarkup