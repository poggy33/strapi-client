import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart, setIsCartOpen } from "../../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { brand, price, title, image } = item.attributes;

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Box position="relative">
        <img
          alt={item.title}
          width="300px"
          height="300px"
          src={url}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="-12%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
                dispatch(setIsCartOpen(true));
              }}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.7)",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: "55px", cursor: "pointer" }}
        onClick={() => navigate(`/item/${item.id}`)}
      >
        <Typography variant="h3" fontWeight="bold" color={neutral.dark}>
          {brand}
        </Typography>
        <Typography
          sx={{
            marginTop: "5px",
            minHeight: "50px",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {title}
        </Typography>
        <Typography fontWeight="bold" fontSize="16px">
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};
export default Item;
