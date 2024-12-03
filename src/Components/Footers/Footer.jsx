import React, { useState } from "react";

import { Link } from "react-router-dom";
import classes from "./footer.module.css";

const Footer = () => {
  // State to manage which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  // Toggle function for each section
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <footer className={classes.footer_container}>
        <div>
          {/* col-1 */}
          <div
            className={classes.title}
            onClick={() => toggleSection("section1")}
            style={{ cursor: "pointer" }}
          >
            Get to know Us {expandedSections.section1 ? "(-)" : "(+)"}
          </div>
          {expandedSections.section1 && (
            <ul>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">About Amazon</Link>
              </li>
              <li>
                <Link to="#">Investor Relations</Link>
              </li>
              <li>
                <Link to="#">Amazon Devices</Link>
              </li>
              <li>
                <Link to="#">Amazon Science</Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          {/* col-2 */}
          <div
            className={classes.title}
            onClick={() => toggleSection("section2")}
            style={{ cursor: "pointer" }}
          >
            Make Money with Us {expandedSections.section2 ? "(-)" : "(+)"}
          </div>
          {expandedSections.section2 && (
            <ul>
              <li>
                <Link to="#">Sell products on Amazon</Link>
              </li>
              <li>
                <Link to="#">Sell on Amazon Business</Link>
              </li>
              <li>
                <Link to="#">Sell apps on Amazon</Link>
              </li>
              <li>
                <Link to="#">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="#">Advertise Your Products</Link>
              </li>
              <li>
                <Link to="#">Self-Publish with Us</Link>
              </li>
              <li>
                <Link to="#">Host an Amazon Hub</Link>
              </li>
              <li>
                <Link to="#">›See More Make Money with Us</Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          {/* col-3 */}
          <div
            className={classes.title}
            onClick={() => toggleSection("section3")}
            style={{ cursor: "pointer" }}
          >
            Amazon Payment Products {expandedSections.section3 ? "(-)" : "(+)"}
          </div>
          {expandedSections.section3 && (
            <ul>
              <li>
                <Link to="#">Amazon Business Card</Link>
              </li>
              <li>
                <Link to="#">Shop with Points</Link>
              </li>
              <li>
                <Link to="#">Reload Your Balance</Link>
              </li>
              <li>
                <Link to="#">Amazon Currency Converter</Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          {/* col-4 */}
          <div
            className={classes.title}
            onClick={() => toggleSection("section4")}
            style={{ cursor: "pointer" }}
          >
            Let Us Help You {expandedSections.section4 ? "(-)" : "(+)"}
          </div>
          {expandedSections.section4 && (
            <ul>
              <li>
                <Link to="#">Amazon and COVID-19</Link>
              </li>
              <li>
                <Link to="#">Your Account</Link>
              </li>
              <li>
                <Link to="#">Your Orders</Link>
              </li>
              <li>
                <Link to="#">Shipping Rates & Policies</Link>
              </li>
              <li>
                <Link to="#">Returns & Replacements</Link>
              </li>
              <li>
                <Link to="#">Manage Your Content and Devices</Link>
              </li>
              <li>
                <Link to="#">Amazon Assistant</Link>
              </li>
              <li>
                <Link to="#">Help</Link>
              </li>
            </ul>
          )}
        </div>
      </footer>
      <hr />
    </>
  );
};

// export default Footer;
<hr />;
{
  /* <section className={classes.logo}> */
}
{
  /* logo */
}
{
  /* <Link to={'/auth'}>
        <img src='https://pngimg.com/uploads/amazon/amazon_PNG2.png'/>
      </Link> <Link to={'/'}>
      English
      </Link>
      <Link to={'/'}>
       $ USD-U.S Dollar 
      </Link>
      <Link to='#' className={classes.language}>
                    <img src='https://pngimg.com/uploads/flags/flags_PNG14592.png' alt=''/>
                    <section name= '' id= ''>
                        <option value=''>United State</option>
                    </section>
                   

                </Link>

     
       </section> */
}
{
  /* <div  className="my-apple-wrapper"> 
				More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
			</div>
			<div  className="copyright-wrapper row">
				<div  className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
					Copyright &copy; 2020 Apple Inc. All rights reserved.
				</div>
				<div  className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
					<ul>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Terms of Use</a></li>
						<li><a href="#">Sales and Refunds</a></li>
						<li><a href="#">Legal</a></li>
						<li><a href="#">Site Map</a></li>
					</ul>
				</div>
				<div  className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
					<div  className="flag-wrapper"><img src=""/></div> <div  className="footer-country-name">United States</div> 
				</div>
// 			</div> */
}
//     </>
//   );
// };

export default Footer;
