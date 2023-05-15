import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import Groups from "../../picdump/2.png";
import Market from "../../picdump/3.png";
import Watch from "../../picdump/4.png";
import Memories from "../../picdump/5.png";
import Events from "../../picdump/6.png";
import Gaming from "../../picdump/7.png";
import Gallery from "../../picdump/8.png";
import Videos from "../../picdump/9.png";
import Messages from "../../picdump/10.png";
import Tutorials from "../../picdump/11.png";
import Courses from "../../picdump/12.png";
import Fund from "../../picdump/13.png";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper style={{ position: "sticky", top: 89, zIndex: 100 }}>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
      <Divider />

      {/* Fifth Row */}
      <Box p="1rem 0">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Groups} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ textTransform: "uppercase" }}>Groups</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Market} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ textTransform: "uppercase" }}>Marketplace</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Watch} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ textTransform: "uppercase" }}>Watch</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Memories} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ textTransform: "uppercase" }}>Memories</span>
        </div>
      </Box>
      <hr />
      <div className="menu">
        <span style={{ fontWeight: "bold", marginLeft: "6rem" }}>
          Your shortcuts
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Events} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ marginLeft: "0.5rem" }}>Events</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Gaming} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ marginLeft: "0.5rem" }}>Gaming</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Gallery} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ marginLeft: "0.5rem" }}>Gallery</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Videos} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ marginLeft: "0.5rem" }}>Videos</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Messages} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ marginLeft: "0.5rem" }}>Messages</span>
        </div>
      </div>
      <div className="menu">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <img src={Tutorials} alt="" style={{ marginRight: "0.5rem" }} />
          <span style={{ marginLeft: "0.5rem" }}>Tutorials</span>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default UserWidget;
