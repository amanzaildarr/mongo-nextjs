"use client";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import "./shopping.scss";

const ShoppingCartList = ({ cart }) => {
  const handleRemove = () => {
    alert("call api here to remove");
  };
  const handlePurchase = () => {
    alert("call api here to remove");
  };

  const sumValues = (key) =>
    cart.data.travelItems.reduce((acc, item) => acc + parseFloat(item[key]), 0);

  const totalSubTotal = sumValues("subTotal").toFixed(2);
  const totalTaxes = sumValues("taxes").toFixed(2);
  const totalTotal = sumValues("total").toFixed(2);

  return (
    <div className="shopping-cart-layout">
      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-2 col-sm-4 col-4">
                <a target="_blank" className="display-6 float-start">
                  Logo
                </a>
              </div>

              <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                <div className="d-flex float-end">
                  <a
                    href=""
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    {" "}
                    <FaUser className="m-1 me-md-2" />
                    {/* <i className="fas fa-user-alt m-1 me-md-2"></i> */}
                    <p className="d-none d-md-block mb-0">Sign in</p>
                  </a>
                  <a
                    href=""
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    <FaHeart className="m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">Wishlist</p>
                  </a>
                  <a
                    href=""
                    className="border rounded py-1 px-3 nav-link d-flex align-items-center"
                    target="_blank"
                  >
                    <FaCartShopping className="m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">My cart</p>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-12">
                <div className="input-group float-center">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                    <label
                      className="form-label"
                      htmlFor="form1"
                      style={{ marginLeft: "0px" }}
                    >
                      Search
                    </label>
                    <div className="form-notch">
                      <div
                        className="form-notch-leading"
                        style={{ width: "9px" }}
                      ></div>
                      <div
                        className="form-notch-middle"
                        style={{ width: "47.2px" }}
                      ></div>
                      <div className="form-notch-trailing"></div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary shadow-0">
                    <BiSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container py-4">
            <nav className="d-flex">
              <h6 className="mb-0">
                <a href="" className="text-white-50">
                  Home
                </a>
                <span className="text-white-50 mx-2"> &gt; </span>
                <a href="" className="text-white">
                  <u>Shopping cart</u>
                </a>
              </h6>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>

                  {cart.data.travelItems.map((item) => (
                    <div className="row gy-3" key={item.cartId}>
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            {/* <img
                              src="./img/shopping/tshirt2.jpeg"
                              className="border rounded me-3"
                              style={{ width: "96px", height: "96px" }}
                            /> */}
                            <div className="">
                              <a href="#" className="nav-link">
                                {item.type}
                              </a>
                              <p className="text-muted">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="">
                          <select
                            style={{ width: "100px" }}
                            className="form-select me-4"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="">
                          <span className="h6">${item.total}</span> <br />
                          <small className="text-muted text-nowrap">
                            $460.00 / per item
                          </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <button className="btn btn-light border px-2 icon-hover-primary">
                            <FaHeart className="display-1 text-secondary" />
                          </button>
                          <button
                            className="btn btn-light border text-danger icon-hover-danger"
                            onClick={handleRemove}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i className="fas fa-truck text-muted fa-lg"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card mb-3 border shadow-0">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button className="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">${totalSubTotal} </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">-$00.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">${totalTaxes}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">${totalTotal}</p>
                  </div>

                  <div className="mt-3">
                    <button
                      className="btn btn-success w-100 shadow-0 mb-2"
                      onClick={handlePurchase}
                    >
                      Make Purchase
                    </button>
                    <button className="btn btn-light w-100 border mt-2">
                      Back to shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-wrapper text-center text-lg-start text-white mt-3">
        <section className="">
          <div className="container text-center text-md-start pt-4 pb-4">
            <div className="row mt-3">
              <div className="col-12 col-lg-3 col-sm-12 mb-2">
                <a
                  href="https://therichpost.com/"
                  target="_blank"
                  className="display-6 text-white h2"
                >
                  Ecommerce
                </a>
                <p className="mt-1 text-white">© 2023</p>
              </div>

              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Store
                </h6>
                <ul className="list-unstyled mb-4">
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      About us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Find store
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Categories
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Information
                </h6>
                <ul className="list-unstyled mb-4">
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Help center
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Money refund
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Shipping info
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Refunds
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-4 col-lg-2">
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Support
                </h6>
                <ul className="list-unstyled mb-4">
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Help center
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Documents
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      Account restore
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-white-50" href="#">
                      My orders
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-12 col-lg-3">
                <h6 className="text-uppercase text-white fw-bold mb-2">
                  Newsletter
                </h6>
                <p className="text-white">
                  Stay in touch with latest updates about our products and
                  offers
                </p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control border"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-light border shadow-0"
                    type="button"
                    id="button-addon2"
                    data-mdb-ripple-color="dark"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="">
          <div className="container">
            <div className="d-flex justify-content-between py-4 border-top">
              <div>
                <i className="fab fa-lg fa-cc-visa text-white"></i>
                <i className="fab fa-lg fa-cc-amex text-white"></i>
                <i className="fab fa-lg fa-cc-mastercard text-white"></i>
                <i className="fab fa-lg fa-cc-paypal text-white"></i>
              </div>

              <div className="dropdown dropup">
                <a
                  className="dropdown-toggle text-white"
                  id="Dropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="flag-united-kingdom flag m-0 me-1"></i>English{" "}
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="Dropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-united-kingdom flag"></i>English{" "}
                      <i className="fa fa-check text-success ms-2"></i>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-poland flag"></i>Polski
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-china flag"></i>中文
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-japan flag"></i>日本語
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-germany flag"></i>Deutsch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-france flag"></i>Français
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-spain flag"></i>Español
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-russia flag"></i>Русский
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flag-portugal flag"></i>Português
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default ShoppingCartList;
