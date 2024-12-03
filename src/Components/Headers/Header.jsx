import React, { useContext } from "react";

import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { DataContext } from "../DataProviders/DataProvider";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { PiCaretDownLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { auth } from "../../Utility/firebase";
import classes from "./header.module.css";

const Header = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="categories" id="categories">
              <option value="">All</option>
              {/* Add more options as needed */}
            </select>
            <input type="text" placeholder="Search product" />
            <BsSearch size={37} />
          </div>

          {/* right side link / other section */}
          <div className={classes.order__container}>
            <Link to="#" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="Language flag"
              />
              <select name="language" id="language">
                <option value="">EN</option>
              </select>
              <PiCaretDownLight size={20} />
            </Link>
            {/* user account section */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
              <p>Cart</p>
            </Link>
          </div>
        </div>
        <LowerHeader />
      </section>
    </>
  );
};
export default Header;
