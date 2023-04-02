import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";


function Example() {
  const items = [
    {
      image: require("../../assets/carousel/apple_1.jpg"),
    },
    {
      image: require("../../assets/carousel/apple_2.jpg"),
    },
    {
      image: require("../../assets/carousel/apple_3.jpg"),
    },
    {
      image: require("../../assets/carousel/apple_4.jpg"),
    },
    {
      image: require("../../assets/carousel/apple_5.jpg"),
    },
    {
      image: require("../../assets/carousel/apple_6.jpg"),
    },
    {
      image: require("../../assets/carousel/apple_7.jpg"),
    },
  ];

  return (
    <Carousel duration={1500} interval={5000}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props)  {
  return (
    <Box>
      <img
        src={props.item.image}
        alt="item"
        style={{ width: "100%", height: "45vh", objectFit: "cover" }}
      />
    </Box>
  );
}

export default Example;
