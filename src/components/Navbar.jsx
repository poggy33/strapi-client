import React from "react";
import { Box, Typography, Badge } from "@mui/material";
import { shades } from "../theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../state";

const MyIconButton = styled(IconButton)(() => ({
  color: "white",
  "&:hover": {
    color: shades.secondary[500],
  },
}));

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  // const isCartOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();
  const navigate= useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: shades.primary[500],
        padding: "20px 30px",
      }}
    >
      <Box onClick={()=>navigate("/")}>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textShadow: "1px 1px 1px white",
            marginLeft: "10px",
            "&:hover": {
              color: shades.secondary[500],
              cursor: "pointer",
            },
          }}
        >
          ESHOP
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-betweeen" }}>
        <Badge
          badgeContent={cart.length}
          color="secondary"
          invisible={cart.length === 0}
          sx={{
            "& .MuiBadge-badge": {
              right: 5,
              top: 5,
              padding: "0 4px",
              height: "14px",
              minWidth: "13px",
              fontWeight: "bold",
            },
          }}
        >
          <MyIconButton onClick={() => dispatch(setIsCartOpen(true))}>
            <ShoppingCartIcon sx={{ fontSize: "20px" }} />
          </MyIconButton>
        </Badge>
      </Box>
    </Box>
  );
};
export default Navbar;
