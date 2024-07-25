import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProd = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottm: 10 }}>
            <span> $ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>

          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProd;
