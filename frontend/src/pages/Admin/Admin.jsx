import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Status from "../../components/admin/Status";
import Verification from "../../components/admin/Verification";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { users } from "../../DummyUsers";
import Users from "../../components/admin/Users";
import Payment from "../../components/admin/Payment";
import { Payments } from "../../DummyPayment";

const TOTAL_PAYMENT = `Total paymentS (last Month)`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", height: 400 }}>
        <AppBar
          position="static"
          sx={{ width: "20%", height: "450%", pt: "3%" }}
        >
          <Typography variant="h4">Admin 01</Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            orientation="vertical"
            aria-label="vertical tabs example"
          >
            <Tab
              label="Status"
              {...a11yProps(0)}
              sx={{ textTransform: "none", marginLeft: "0" }}
            />
            <Tab
              label="Verification"
              {...a11yProps(1)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Payment"
              {...a11yProps(2)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Users"
              {...a11yProps(2)}
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        </AppBar>

        <Box sx={{ width: "80%", pl: "1%" }}>
          {/*Status */}

          <TabPanel value={value} index={0}>
            <Status />
          </TabPanel>

          {/*Verification */}

          <TabPanel value={value} index={1}>
            <Card
              sx={{
                boxShadow: "0 4px 8px #4A4A4A",
                marginBottom: "3%",
                border: "1px solid #0069c4",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ marginLeft: "1%" }}
                >
                  New Users - 26
                </Typography>
              </CardContent>
            </Card>

            {users.map((user) => (
              <Verification key={user.id} user={user} />
            ))}
          </TabPanel>

          {/*Payment*/}

          <TabPanel value={value} index={2}>
            <Card
              sx={{
                boxShadow: "0 4px 8px #4A4A4A",
                marginBottom: "3%",
                border: "1px solid #0069c4",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ marginLeft: "1%" }}
                >
                  {TOTAL_PAYMENT} - 350000.00 LKR
                </Typography>
              </CardContent>
            </Card>

            {Payments.map((pay) => (
              <Payment key={pay.id} pay={pay} />
            ))}
          </TabPanel>

          {/*Users*/}

          <TabPanel value={value} index={3}>
            {users.map((user) => (
              <Users key={user.id} user={user} />
            ))}
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
}

export default Admin;
