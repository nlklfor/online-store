import '../../App.scss'

function contact() {
    return (
        <>
            <div className="hero_area">
                {/*header section strats */}
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                            <a className="navbar-brand mr-5" href="index.html">
            <span>
              Sglass
            </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item ">
                                            <a className="nav-link" href="index.html">Home <span
                                                className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html"> About </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="shop.html"> Shop </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="glass.html"> Glasses </a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="contact.html">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="quote_btn-container ">
                                    <a href="">
                                        Log in
                                    </a>
                                    <a href="">
                                        <img src="images/cart.png" alt=""/>
                                    </a>
                                    <form className="form-inline">
                                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/*end header section */}
            </div>

            {/*contact section */}

            <section className="contact_section layout_padding">
                <div className="container">
                    <h2>
                        Request A call back
                    </h2>
                    <div className="">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <form action="">
                                    <div className="contact_form-container">
                                        <div>
                                            <div>
                                                <input type="text" placeholder="Name"/>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Phone Number"/>
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email"/>
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder="Message" className="message_input"/>
                                            </div>
                                            <div className="mt-5 d-flex justify-content-center ">
                                                <button type="submit">
                                                    Send
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*end contact section*/}

            {/*info section */}

            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h6>
                                Subscribe Now
                            </h6>
                            <form action="">
                                <input type="text" placeholder="Enter your email"/>
                                <div className="d-flex justify-content-end">
                                    <button>
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <h6>
                                Links
                            </h6>
                            <ul>
                                <li>
                                    <a href="">
                                        Lorem ipsum dolor sit
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        amet, consectetur adipis
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        cing elit, sed do
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>
                                Contact us
                            </h6>
                            <ul>
                                <li>
                                    <a href="">
                                        Lorem ipsum dolor sit
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        amet, consectetur adipis
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        cing elit, sed do
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/*end info section */}

            {/*footer section */}
            <section className="container-fluid footer_section">
                <p>
                    Copyright &copy; <span id="displayYear"></span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </section>
            {/*footer section */}
        </>
    )

}

export default contact()