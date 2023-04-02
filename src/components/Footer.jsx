import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { shades } from "../theme";

const FooterBox = styled(Box)(() => ({
  padding: "20px 0",
  width: "100%",
  marginTop: "30px",
  color: "white",
  backgroundColor: shades.primary[500],
}));

const SocialIconBox = styled(Box)(() => ({
  width: "65px",
  display: "flex",
  justifyContent: "center",
}));

const Footer = () => {
  return (
    <FooterBox>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <SocialIconBox sx={{ borderRight: "1px solid white" }}>
            <FacebookIcon
              sx={{
                fontSize: 25,
                "&:hover": {
                  color: shades.secondary[500],
                  cursor: "pointer",
                },
              }}
            />
          </SocialIconBox>
          <SocialIconBox sx={{ borderRight: "1px solid white" }}>
            <InstagramIcon
              sx={{
                fontSize: 25,
                "&:hover": {
                  color: shades.secondary[500],
                  cursor: "pointer",
                },
              }}
            />
          </SocialIconBox>
          <SocialIconBox sx={{ borderRight: "1px solid white" }}>
            <TelegramIcon
              sx={{
                fontSize: 25,
                "&:hover": {
                  color: shades.secondary[500],
                  cursor: "pointer",
                },
              }}
            />
          </SocialIconBox>
          <SocialIconBox>
            <LinkedInIcon
              sx={{
                fontSize: 25,
                "&:hover": {
                  color: shades.secondary[500],
                  cursor: "pointer",
                },
              }}
            />
          </SocialIconBox>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10px", marginTop:"10px" }}>
        <CopyrightIcon
          sx={{
            marginTop: "2px",
            fontSize: 12,
          }}
        />
        <Typography
          sx={{
            marginLeft: "2px",
          }}
        >
          2023 Ihor Pohaidak
        </Typography>
      </Box>
    </FooterBox>
  );
};

export default Footer;
