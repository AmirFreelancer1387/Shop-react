import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { ToastContainer } from "react-bootstrap";


const Product = ({ data }) => {
  const { id, title, description, images, price } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // پیدا کردن محصول در سبد خرید
  const existingItem = cartItems.find((item) => item.id === id);
  const count = existingItem ? existingItem.count : 0;


  


  return (
    <div className="col-6 col-sm-4 mt-3 mx-auto d-block my-2">
      <Card sx={{ maxWidth: 700, marginInline: 2 }}>
        {/* عکس */}
        <CardMedia
          className="d-block d-lg-none"
          component="img"
          alt={title}
          height="150"
          src={images[0]}
        />
        <CardMedia
          className="d-none d-lg-block"
          component="img"
          alt={title}
          height="500"
          src={images[0]}
        />

        {/* محتوا */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description.slice(0, 40)}...
          </Typography>
          <Typography
            variant="price"
            gutterBottom
            sx={{ display: "block", marginTop: 2 }}
          >
            ${price}
          </Typography>
        </CardContent>

        {/* دکمه‌ها */}
        <CardActions>
          <Button size="small" onClick={() => addToCart(data)}>
            <AddShoppingCartIcon />
          </Button>
          <span className="mx-2" style={{ fontSize: "12px", width: "1px" }}>
            {count}
          </span>
          {count > 0 && (
            <Button size="small" onClick={() => removeFromCart(id)}>
              <RemoveShoppingCartIcon />
            </Button>
          )}
        </CardActions>
      </Card>
      <ToastContainer/>
    </div>
  );
};

export default Product;
