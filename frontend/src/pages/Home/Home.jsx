import * as React from "react";
import Post from "../../components/home/Post/Post";
import SearchBar from "../../components/home/SearchBar/SearchBar";
import "./home.css";
import "../../components/home/Filter/filter.css";
import Sidebar from "../../components/common/Sidebar";
import { useState, useEffect } from "react";

function Home() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homeContainer">
      <Sidebar/>

      <div className="mainSpace">
        <SearchBar />
        {postData.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
