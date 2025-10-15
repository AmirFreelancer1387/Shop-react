import { Button, ButtonGroup, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
// import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Signin from "../pages/form/Signin";
import Signup from "../pages/form/Signup";
import { ShopContext } from "../context/shopContext";
// import logoBrand from "../assets/logoBrand.jpg";
import logo from "../assets/logo.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const itemCart = cartItems.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <>
      <div className="container-fluid bg-dark sticky-top">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex text-light h3 text-decoration-none"
            >
              <img src={logo} alt="Shapzon" width="60" height="60" role="img" className="bg-warning rounded-circle p-1"/>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-link px-2">
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <IconButton aria-label="cart" className="me-4">
              <StyledBadge
                badgeContent={itemCart > 0 && itemCart}
                color="secondary"
              >
                <Link to="/Cart">
                  <ShoppingCartIcon color="primary" />
                </Link>
              </StyledBadge>
            </IconButton>
            <div className="btn-group"
              // disableElevation
              // variant="contained"
              // aria-label="Disabled button group"
            >
              <Link element={<Signup />} to="/Signup" className="btn btn-primary">
                Sign-up
              </Link>
              <Link
                element={<Signin />}
                to="/Signin"
                className="btn btn-outline-primary me-2"
              >
                Sign-in
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
