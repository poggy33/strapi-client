import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "calc(100vh - 210px)" }}>
      <Box sx={{ padding: "100px 10% 0 10%" }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      </Box>
    </Box>
  );
};

export default Confirmation;
