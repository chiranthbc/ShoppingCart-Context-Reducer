import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import { CartState } from "../context/Context";
const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id="inline-1"
        onChange={() => {
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          });
        }}
        checked={sort === "lowToHigh" ? true : false}
      />

      <Form.Check
        inline
        label="Descending"
        name="group1"
        type="radio"
        id="inline-2"
        onChange={() => {
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          });
        }}
        checked={sort === "highToLow" ? true : false}
      />
      <Form.Check
        inline
        label="Include out of stock"
        name="group2"
        type="checkbox"
        id="inline-3"
        onChange={() => {
          productDispatch({
            type: "FILTER_BY_STOCK",
          });
        }}
        checked={byStock}
      />
      <Form.Check
        inline
        label="Fast Delivery Only"
        name="group2"
        type="checkbox"
        id="inline-4"
        onChange={() => {
          productDispatch({
            type: "FILTER_BY_DELIVERY",
          });
        }}
        checked={byFastDelivery}
      />
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={() => {
          productDispatch({
            type: "CLEAR_FILTERS",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
