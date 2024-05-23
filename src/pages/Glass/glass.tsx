function glass() {
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
                                        <li className="nav-item active">
                                            <a className="nav-link" href="glass.html"> Glasses </a>
                                        </li>
                                        <li className="nav-item">
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

            {/*quality section */}

            <section className="quality_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            <span> Best</span> Quality
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="nav nav-tabs detail-box" id="myTab" role="tablist">
                                <li className="">
                                    <a className=" active" id="QTab1Link" data-toggle="tab" href="#qTab1" role="tab"
                                       aria-controls="qTab1" aria-selected="true">
                                        <h6 id="QTab1Link" data-toggle="tab" role="tab"
                                            aria-controls="qTab1" aria-selected="true">
                                            <span>01</span>
                                            It is a long established fact that a reader will be distracted
                                        </h6>
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" id="QTab2Link" data-toggle="tab" href="#qTab2" role="tab"
                                       aria-controls="qTab2" aria-selected="false">
                                        <h6 id="QTab2Link" data-toggle="tab" role="tab"
                                            aria-controls="qTab2" aria-selected="false">
                                            <span>02</span>
                                            by the readable content of a page when looking at its
                                        </h6>
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" id="QTab3Link" data-toggle="tab" href="#qTab3" role="tab"
                                       aria-controls="qTab3" aria-selected="false">
                                        <h6 id="QTab3Link" data-toggle="tab" role="tab"
                                            aria-controls="qTab3" aria-selected="false">
                                            <span>03</span>
                                            layout. The point of using Lorem Ipsum is that it has a
                                        </h6>
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" id="QTab4Link" data-toggle="tab" href="#qTab4" role="tab"
                                       aria-controls="qTab4" aria-selected="false">
                                        <h6 id="QTab4Link" data-toggle="tab" role="tab"
                                            aria-controls="qTab4" aria-selected="false">
                                            <span>04</span>
                                            more-or-less normal distribution of letters,
                                        </h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 tab-content">
                            <div className="img-container tab-pane  fade show active" id="qTab1" role="tabpanel"
                                 aria-labelledby="QTab1Link">
                                <div className="img-box ">
                                    <img src="images/quality-img.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="img-container tab-pane fade" id="qTab2" role="tabpanel"
                                 aria-labelledby="QTab2Link">
                                <div className="img-box  ">
                                    <img src="images/buy-img.png" alt=""/>
                                </div>
                            </div>
                            <div className="img-container tab-pane fade" id="qTab3" role="tabpanel"
                                 aria-labelledby="QTab3Link">
                                <div className="img-box  ">
                                    <img src="images/quality-img.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="img-container tab-pane fade" id="qTab4" role="tabpanel"
                                 aria-labelledby="QTab4Link">
                                <div className="img-box  ">
                                    <img src="images/buy-img.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*end quality section */}

             {/*offer section */}

            <section className="offer_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7 px-0">
                            <div className="img-box">
                                <img src="images/offer-img.jpg" alt=""/>
                                <div className="price">
                                    <h4>
                                        $60
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <div className="detail-box">
                                <h2>
                                    Book <br/>
                                    our <br/>
                                    special <br/>
                                    offer
                                </h2>
                                <a href="">
                                    See More offer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*end offer section*/}

            {/*buy section */}

            <section className="buy_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
          <span className="s-1">
            Buy
          </span>
                            your stylish
                            <span className="s-2">
            glasses
          </span>
                        </h2>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src="images/buy-img.png" alt=""/>
                        </div>
                        <div className="detail-box">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of
                                letters, <br/>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of
                                letters,
                            </p>
                            <a href="">
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*end buy section */}

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
             {/*footer section*/}
        </>
    )
}

export default glass()