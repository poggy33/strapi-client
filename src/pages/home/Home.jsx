import Carousel from "./Carousel";
import { Box } from "@mui/material";
import { shades } from "../../theme";
import ShoppingList from "./ShoppingList";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "65vh",
          backgroundColor: shades.neutral[500],
          paddingTop: "50px",
        }}
      >
        <Carousel />
      </Box>
      <ShoppingList/>
    </Box>
  );
};
export default Home;
