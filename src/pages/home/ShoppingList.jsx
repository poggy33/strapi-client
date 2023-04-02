import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "./Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");
  console.log(items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "https://watches-shop-server.herokuapp.com/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const menItems = items.filter((item) => item.attributes.gender === "men");
  const womenItems = items.filter((item) => item.attributes.gender === "women");

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Best <b>Watches</b> In The World
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="MEN" value="men" />
        <Tab label="WOMEN" value="women" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.title}-${item.id}`} />
          ))}
        {value === "men" &&
          menItems.map((item) => (
            <Item item={item} key={`${item.title}-${item.id}`} />
          ))}
        {value === "women" &&
          womenItems.map((item) => (
            <Item item={item} key={`${item.title}-${item.id}`} />
          ))}
        <Box></Box>
      </Box>
    </Box>
  );
};

export default ShoppingList;
