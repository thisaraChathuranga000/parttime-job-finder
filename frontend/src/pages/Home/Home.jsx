import * as React from "react";
import Post from "../../components/home/Post/Post";
import SearchBar from "../../components/home/SearchBar/SearchBar";
import Sidebar from "../../components/home/SideBar/Sidebar";
import { postData } from "../../dummyData";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div>
      <Grid container p={4}>
        <Grid lg={3} md={3} sm={12} xs={12}>
          <SearchBar />
          <Sidebar />
        </Grid>

        <Grid container lg={9} md={9} sm={12} xs={12}>
          {postData.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
