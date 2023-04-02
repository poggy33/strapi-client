import { Box, Button, IconButton, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart, setIsCartOpen } from "../../state";
import { useDispatch } from "react-redux";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  async function getItem() {
    const item = await fetch(
      `https://watches-shop-server.herokuapp.com/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  useEffect(() => {
    getItem();
  }, [itemId]);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.title}
            width="100%"
            height="100%"
            src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
                color:shades.secondary[500],
                fontSize:"14px"
              }}
            >
             <b>Back to Home</b> 
            </Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3" fontWeight="bold">
              {item?.attributes?.brand}
            </Typography>
            <Typography variant="h4" sx={{ marginTop: "5px" }}>
              {item?.attributes?.title}
            </Typography>
            <Typography sx={{ marginTop: "5px" }}>
              ${item?.attributes?.price}
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography
                sx={{ padding: "0 5px", minWidth: "30px", textAlign: "center" }}
              >
                {count}
              </Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                minWidth: "150px",
                padding: "10px 40px",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
              }}
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
                dispatch(setIsCartOpen(true));
              }}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Typography>Gender: {item?.attributes?.gender}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
