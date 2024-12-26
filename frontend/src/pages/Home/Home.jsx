import * as React from "react";
import Post from "../../components/home/Post/Post";
import SearchBar from "../../components/home/SearchBar/SearchBar";
import Sidebar from "../../components/home/SideBar/Sidebar";
import { postData } from "../../dummyData";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../redux/action/jobPostsAction";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const jobs = useSelector((state) => state.jobPosts.jobs);
  return (
    <div>
      <Grid container p={4}>
        <Grid lg={3} md={3} sm={12} xs={12}>
          <SearchBar />
          <Sidebar />
        </Grid>

        <Grid container lg={9} md={9} sm={12} xs={12}>
          {jobs.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
