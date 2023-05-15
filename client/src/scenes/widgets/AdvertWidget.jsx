import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Techno India University</Typography>
        <Typography color={medium}>technoindiauniversity.ac.in</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Expending Horizons of Education & Research Through Innovation, Dynamism
        & Entrepreneurism.
      </Typography>

      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Latest News
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main} variant="h6" fontWeight="400">
          Kolkata Meets The 1st Robot Citizen "SOPHIA"
        </Typography>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
