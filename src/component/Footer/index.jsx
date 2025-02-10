import FooterList from "./FooterList";
import SubscribeForm from "../Subscribe";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-area p-relative">
      <div className="homec-shape">
        <div className="homec-shape-single homec-shape-10">
          <img src="/img/anim-shape-6.svg" alt="Decorative shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Subscribe Form */}
            <SubscribeForm />
            {/* End Subscribe Form */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-top-inner pd-top-30 pd-btm-100">
              <div className="row">
                {/* Footer About Widget */}
                <div className="col-lg-4 col-md-3 col-12">
                  <div className="footer-about-widget">
                    <div className="footer-logo homec-header__logo">
                      <Link className="logo" to="/">
                        <img src="/img/logo-footer.svg" alt="Rent4Students Logo" />
                      </Link>
                    </div>
                    <p className="footer-about-text">
                      Rent4Students conectează studenții cu oferte de locuințe accesibile și adaptate nevoilor lor, pentru o experiență de trai fără stres.
                    </p>
                    {/* Social Media */}
                    <ul className="homec-social homec-social__v2">
                      <li>
                        <Link to="https://facebook.com/rent4students" target="_blank" rel="noopener noreferrer">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_fb)">
                              <path d="M3.24 0.200195C2.36002 0.200195 1.56 0.520211 0.96 1.12021C0.320016 1.7602 0 2.56016 0 3.40016C0 4.28015 0.36 5.08016 0.96 5.68016C1.56 6.28016 2.4 6.64016 3.20002 6.60018C3.20002 6.60018 3.24 6.60018 3.28003 6.60018C4.08005 6.60018 4.84003 6.28016 5.44003 5.68016C6.04003 5.08016 6.40003 4.28015 6.40003 3.40016C6.44002 2.56016 6.08002 1.76015 5.48002 1.16015C4.88002 0.520164 4.08 0.200195 3.24 0.200195ZM4.88002 5.1202C4.44 5.56021 3.84 5.8402 3.20002 5.80021C2.60002 5.80021 1.96003 5.56021 1.52002 5.1202C1.04002 4.68018 0.800016 4.0402 0.800016 3.40021C0.800016 2.76023 1.04002 2.16023 1.52002 1.68023C1.96003 1.24021 2.56003 1.00021 3.24 1.00021C3.84 1.00021 4.44 1.24021 4.88002 1.68023C5.36002 2.16023 5.60002 2.76023 5.60002 3.40021C5.60002 4.0402 5.36002 4.68018 4.88002 5.1202Z" />
                            </g>
                            <defs>
                              <clipPath id="clip0_fb">
                                <rect width="24" height="24" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://instagram.com/rent4students" target="_blank" rel="noopener noreferrer">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0.472992 19.5949C2.69499 21.0049 5.28099 21.7499 7.95099 21.7499C11.861 21.7499 15.444 20.2479 18.041 17.5209C20.526 14.9109 21.893 11.4039 21.825 7.84489C22.767 7.03889 23.875 5.49989 23.875 3.99989C23.875 3.42489 23.251 3.05989 22.745 3.35289C21.86 3.87289 21.053 4.00889 20.223 3.77589C18.528 2.12389 16.005 1.77589 13.879 2.92189C12.021 3.92189 10.988 5.75189 11.081 7.75189C7.94199 7.36889 5.04199 5.79489 3.01999 3.34889C2.68799 2.94989 2.05799 2.99689 1.79399 3.44889C0.819992 5.11689 0.829992 7.04989 1.67699 8.61089C1.27399 8.68189 1.02499 9.02089 1.02499 9.38789C1.02499 10.9569 1.73099 12.3989 2.86799 13.3829C2.65599 13.5869 2.58599 13.8899 2.67599 14.1599C3.17599 15.6619 4.30799 16.8359 5.72299 17.4239C4.18399 18.1589 2.48199 18.4039 0.966992 18.2179C0.182992 18.1119 -0.204008 19.1659 0.472992 19.5949ZM8.15599 17.6809C8.71699 17.2499 8.41899 16.3519 7.71499 16.3369C6.47499 16.3109 5.34599 15.6999 4.64299 14.7389C4.98199 14.7169 5.33299 14.6649 5.66699 14.5749C6.42799 14.3689 6.39199 13.2709 5.61899 13.1159C4.21599 12.8339 3.11499 11.8119 2.70199 10.4959C3.07899 10.5889 3.46299 10.6409 3.84599 10.6479C4.60499 10.6519 4.89199 9.67889 4.27299 9.27189C2.87799 8.35289 2.28299 6.72989 2.67699 5.20389C5.11299 7.67189 8.41799 9.15889 11.914 9.32689C12.415 9.35789 12.791 8.88689 12.681 8.40989C12.206 6.35089 13.356 4.90789 14.591 4.24289C15.813 3.58289 17.775 3.37689 19.279 4.95489C19.726 5.42589 21.234 5.44389 22.001 5.26489C21.657 5.91289 21.128 6.52789 20.633 6.87389C20.422 7.02189 20.301 7.26789 20.314 7.52489C20.475 10.8099 19.251 14.0759 16.956 16.4849C14.644 18.9119 11.447 20.2489 7.95199 20.2489C6.56199 20.2489 5.19899 20.0229 3.91099 19.5869C5.45099 19.2889 6.91399 18.6369 8.15599 17.6809Z" />
                          </svg>
                        </Link>
                      </li>
                      {/* Alte rețele sociale pot fi adăugate aici */}
                    </ul>
                    {/* End Social Media */}
                  </div>
                </div>
                {/* Footer Link Widgets */}
                <div className="col-lg-8 col-md-9">
                  <div className="row">
                    {/* Prima coloană: Listing */}
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="single-widget footer-useful-links">
                        <h3 className="widget-title">Listing</h3>
                        <ul className="f-useful-links-inner list-none">
                          <FooterList link="/rentals" title="Locuințe" />
                          <FooterList link="/submit-rental" title="Adaugă anunț" />
                          <FooterList link="/student-listings" title="Anunțuri studențești" />
                          <FooterList link="/login" title="Autentificare" />
                          <FooterList link="/signup" title="Înregistrează-te" />
                        </ul>
                      </div>
                    </div>
                    {/* A doua coloană: Informații */}
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="single-widget footer-need-helps">
                        <h3 className="widget-title">Informații</h3>
                        <ul className="f-need-helps-inner list-none">
                          <FooterList link="/about" title="Despre Noi" />
                          <FooterList link="/pricing" title="Tarife" />
                          <FooterList link="/blog" title="Blog" />
                          <FooterList link="/faq" title="FAQ" />
                          <FooterList link="/contact" title="Contact" />
                        </ul>
                      </div>
                    </div>
                    {/* A treia coloană: Contact */}
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="single-widget footer-contact">
                        <h3 className="widget-title">Contactează-ne</h3>
                        <div className="f-contact__form-top">
                          <ul className="f-contact-list list-none">
                            <li>
                              <img src="/img/footer-phone.svg" alt="Telefon" />
                              <a href="tel:+401234567890">+40 123 456 7890</a>
                            </li>
                            <li>
                              <img src="/img/footer-message.png" alt="Email" />
                              <a href="mailto:contact@rent4students.com">
                                contact@rent4students.com
                              </a>
                            </li>
                            <li>
                              <img src="/img/footer-location.png" alt="Locație" />
                              <p>Bd. Studenților, Nr. 10, București, România</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End coloane Link Widgets */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <p className="copyright-text">
                  &copy; {new Date().getFullYear()} Rent4Students. Toate drepturile rezervate.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                <ul className="footer-pages list-none">
                  <li>
                    <Link to="/about">Despre Companie</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Copyright */}
      </div>
    </footer>
  );
}

export default Footer;
