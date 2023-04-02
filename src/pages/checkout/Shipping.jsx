import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  // console.log(values.shippingAddress.isSameAddress);
  return (
    <Box sx={{ margin: "30px auto" }}>
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              // onChange={() =>
              //   setFieldValue(
              //     "shippingAddress.isSameAddress",
              //     !values.shippingAddress.isSameAddress
              //   )
              // }
              onChange={(e) => {
                if (e.target.checked) {
                  setFieldValue("shippingAddress.isSameAddress", true);
                } else {
                  setFieldValue("shippingAddress.isSameAddress", false);
                }
              }}
            />
          }
          label="Same for Shipping Address"
        />
      </Box>

      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
