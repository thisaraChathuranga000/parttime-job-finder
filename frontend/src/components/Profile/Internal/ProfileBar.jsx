import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StarRateIcon from "@mui/icons-material/StarRate";
import BoxLayout from "../../../layouts/BoxLayout";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authUserSlice";
import { useState } from "react";
import { updateUser } from "../../../redux/action/authUsersAction";

function ProfileBar() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.authUser.userDetails);
  const isLoading = useSelector((state) => state.authUser.isLoading);
  const hasError = useSelector((state) => state.authUser.hasError);
  const [name, setName] = useState(userDetails?.name || "");
  const [email, setEmail] = useState(userDetails?.email || "");
  const [contact, setContact] = useState(userDetails?.contact || "");
  const [address, setAddress] = useState(userDetails?.address || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    const payload = {};
    if (name !== userDetails.name) payload.name = name;
    if (email !== userDetails.email) payload.email = email;
    if (contact !== userDetails.contact) payload.contact = contact;
    if (address !== userDetails.address) payload.address = address;

    if (Object.keys(payload).length > 0) {
      dispatch(updateUser({ id: userDetails._id, body: payload })).then(
        (response) => {
          if (response.meta.requestStatus === "fulfilled") {
            window.location.reload();
          } else {
            console.error("Failed to update user details.");
          }
        }
      );
    } else {
      console.log("No changes to update.");
    }
  };

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <BoxLayout>
        <div style={{ marginLeft: "10px" }}>
          <h3>Your Profile</h3>

          <Avatar
            alt=""
            src={userDetails.imgUrl}
            sx={{ width: 170, height: 170, border: "1px solid blue" }}
          />

          <Stack
            direction="row"
            spacing={0}
            marginTop={2}
            marginBottom={4}
            margin={3}
          >
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
            <StarRateIcon style={{ color: "#e89705" }} />
          </Stack>

          <p>Name</p>
          <input
            type="text"
            style={{ width: "90%" }}
            placeholder={userDetails.name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Email</p>
          <input
            type="text"
            style={{ width: "90%" }}
            placeholder={userDetails.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Contact</p>
          <input
            type="text"
            style={{ width: "90%" }}
            placeholder={userDetails.contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <p>Address</p>
          <input
            type="text"
            style={{ width: "90%" }}
            placeholder={userDetails.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <Stack>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              fontSize: "12px",
              textTransform: "none",
              height: "30px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
            onClick={handleUpdate}
          >
            Update User details
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              fontSize: "12px",
              textTransform: "none",
              height: "30px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </Stack>

        {isLoading && <p>Updating...</p>}

        {hasError && <p>Failed to update user</p>}
      </BoxLayout>
    </div>
  );
}

export default ProfileBar;
