import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const Product = ({ data }) => {
  const { id, title, description, images, price } = data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const isInCart = cartItems?.some((item) => item.id === id);
  const count = cartItems?.find((item) => item.id === id)?.count || 0;

  return (
    <>
      <div className="col-6 col-sm-4  mt-3 mx-auto d-block my-2">
        <Card sx={{ maxWidth: 700 , marginInline:2 }}>
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description.slice(0,10)}
        </Typography>
        <Typography variant="price" gutterBottom sx={{ display: 'block', marginTop:2}}>
        ${price}
      </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(id)}>
          <AddShoppingCartIcon/>
        </Button>
        <span className="mx-2" style={{fontSize:'12px',width:'1px'}}>{count}</span>
        {isInCart && (
              <Button size="small" onClick={() => removeFromCart(id)}>
                <RemoveShoppingCartIcon/>
              </Button>
            )}
      </CardActions>
    </Card>
      </div>
    </>
  );
};

export default Product;
