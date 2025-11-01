


import React from "react";
import "./home.css";
import LikeButton from "./LikeButton";
import  Msgbutton  from "./msgbutton";


import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineMovie } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { SlOptions } from "react-icons/sl"; 
import { FaMeta } from "react-icons/fa6";
import { FaHeart, FaRegComment, FaRegBookmark, FaPaperPlane } from "react-icons/fa"; 
import msgbutton from "./msgbutton";





const storiesData = [
  {
    id: 1,
    username: "Alka...",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    username: "genelia_1...",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    username: "ayshaa__hh_",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id:4,
    username: "haneulxkkkum",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    id: 5,
    username: "annu._",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },


];


const postsData = [
  {
    id: 1,
    username: "aishwarya_r",
    profilePic: "https://www.shutterstock.com/image-photo/beautiful-malayali-girl-wearing-saree-260nw-2511933159.jpg",
    postImage: "https://r1imghtlak.ibcdn.com/d8d6f30831dc11ea81160242ac110002.jpg?&downsize=322:229&crop=322:229;62,0&output-format=jpg",
    likes: "25,405",
    likedBy: "_ann__maria._",
    captionUsername: "aishwarya_r",
    captionText: "❤️❤️❤️",
    commentsCount: 15,
    time: "17h",
    type: "image",
  },
  {
    id: 2,
    username: "Rithika_07",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
    postImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Goblin_Poster.jpg",
    likes: "12,340",
    likedBy: "_annu._",
    captionUsername: "Rithika_07",
    captionText: "Kdrama 🫰💎🫰",
    commentsCount: 8,
    time: "10h",
    type: "image",
  },

  {
    id: 3,
    username: "jackson_paul",
    profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
    postImage: "https://images.nativeplanet.com/ml/img/2024/02/kuttikanam-in-idukki-offbeat-one-day-travel-destination-1706868463.jpg",
    likes: "25,405",
    likedBy: "_alka._",
    captionUsername: "jackson_paul",
    captionText: "kuttikanam 💚💚",
    commentsCount: 15,
    time: "17h",
    type: "image",
  },
  // {

  //  id: 4,
  //   username: "nature_vibes",
  //   profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  //   videoUrl: "https://v.ftcdn.net/14/90/14/19/240_F_1490141993_DYynqjm8oBGV6bm8x8Fk0QXIt5PQrL8S_ST.mp4", 
  //   likes: "32,100",
  //   likedBy: "_meera._",
  //   captionUsername: "nature_vibes",
  //   captionText: "Peaceful waterfalls 🌊💙",
  //   commentsCount: 20,
  //   time: "5h",
  //   type: "video",
  // },
  
  
      
];







const suggestionData = [
  {
    id: 1,
    avatar:
      "https://randomuser.me/api/portraits/men/78.jpg",
    username: "mr_emperor_46",
    followedBy: "Followed by Alka",
  },
  {
    id: 2,
    avatar:
      "https://randomuser.me/api/portraits/women/69.jpg",
    username: "niiichhhaaa",
    followedBy: "Followed by haneulxkkkum",
  },
  {
    id: 3,
    avatar:
      "https://randomuser.me/api/portraits/women/18.jpg",
    username: "_beni_sha__r",
    followedBy: "Followed by Alka+ 2 ...",
  },
  {
    id: 4,
    avatar:
      "https://randomuser.me/api/portraits/women/48.jpg",
    username: "Catherine_07",
    followedBy: "Followed by annu_1 + 5 ...",
  },
  {
    id: 5,
    avatar:
      "https://randomuser.me/api/portraits/men/77.jpg",
    username: "the_real_rocky_07",
    followedBy: "Followed by ayshaa_hh_ + 1 m...",
  },
];

function Home() {
  
  
  return (
    <div className="app">
      
      <aside className="sidebar">
        <h1 className="insta_logo">Instagram</h1>
        <input type="text" className="search-box" placeholder="Search"  style={{display:"none",border: "none", padding: "12px 15px", background: "#2b2626ff",color:'white'}}  />

        <div>
        <ul className="menu" style={{lineHeight: "40px"}}  >
          <li id="homeid"><AiFillHome size={22} /> <span >Home</span></li>
          <li><BiSearch size={22} /> <span>Search</span></li>
          <li><MdOutlineExplore size={22} /> <span>Explore</span></li>
          <li><MdOutlineMovie size={22} /> <span>Reels</span></li>
          <li className="menu-item message-item" id="msgid">
          <div className="icon-wrapper">
            <RiMessengerLine size={22} />
            <span className="badge">1</span>
          </div>
          <span>Messages</span>
          </li>

          <li><FaRegHeart size={22} /> <span>Notifications</span></li>
          <li><FiPlusSquare size={22} /> <span>Create</span></li>
          <li> <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="your-profile" style={{ borderRadius: "50%", width: "35px", height: "35px" }} /> <span>Profile</span></li>
            
        </ul>

        <div className="sidebar-footer">
          <div className="more"><SlOptions size={22} /> <span>More</span></div>
          <div className="meta">
            <FaMeta size={22} />
            <span>Also from Meta</span>
          </div>

        </div>
        </div>
      </aside>
      <div className="sidebar-divider"></div>

  

      
      <main className="main-content" >
        <div className="storiesPost" style={{display: "flex", flexDirection: 'column'}}>
        <div className="stories">
          {storiesData.map((story) => (
            <div key={story.id} className="story">
              <div className="story-border">
                <img src={story.image} alt={story.username} />
              </div>
              <p>{story.username}</p>
            </div>
          ))}
        </div>
        <br /><br />
          {/* POSTS SECTION */}
          
        <div className="posts" >
            {postsData.map((post) => (
            <div className="post"style={{marginRight: "70px"}} key={post.id}>
              
              <div className="post-top">
                <div className="post-user">
                  <img src={post.profilePic} alt={post.username} className="post-profile" style={{ borderRadius: "50%", width: "60px", height: "60px" }} />
                  <div>
                    <span className="post-username">{post.username}</span>
                    <span className="post-time"> • {post.time}</span>
                  </div>
                </div>
                <span className="post-options">⋯</span>
              </div>

              {/* Post Content */}
              <div className="post-media">
                {post.type === "image" && (
                  <img src={post.postImage} alt="post" className="post-img" />
                )}

                {post.type === "video" && (
                  <div className="video-wrapper">
                    <iframe
                      src={post.videoUrl}
                      title={post.captionText}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="post-actions">
                <div className="left-icons">
                  <LikeButton />
                  <FaRegComment className="icon" />
                  <FaPaperPlane className="icon" />
                </div>
                <FaRegBookmark className="icon" />
              </div>

              {/* Likes */}
              <div className="post-likes">{post.likes} likes</div>
              <div className="post-caption">
                <span className="username">{post.captionUsername}</span>&nbsp;
                {post.captionText}
              </div>

              <div className="post-comments">
                View all {post.commentsCount} comments
              </div>

              <input type="text" className="comment-box" placeholder="Add a comment..."  style={{border: "none", padding: "10px 12px", background: "black", outline:'none'}}  />
            </div>
          ))}
        </div>
        </div>
        


            

        <aside className="right-column">
          <div className="profile-row">
            <img
              className="profile-avatar"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="your-profile"
            />
            <div className="profile-info">
              <strong>s_ca_rle_t_</strong>
              <div className="switch">Switch</div>
            </div>
          </div>

          <div className="suggestions-header">
            <div>Suggested for you</div>
            <div className="see-all">See All</div>
          </div>

          <div className="suggestions-list">
            {suggestionData.map((s) => (
              <div key={s.id} className="suggestion-item">
                <img className="suggestion-avatar" src={s.avatar} alt={s.username} />
                <div className="suggestion-texts">
                  <div className="suggestion-username">{s.username}</div>
                  <div className="suggestion-followed">{s.followedBy}</div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            ))}
          </div>

          <div className="links">
            <span>About · Help · Press · API · Jobs · Privacy · Terms</span>
            <span>Locations · Language · Meta Verified</span>
          </div>

          <div className="copyright">© 2025 INSTAGRAM FROM META</div>
            <Msgbutton />
          
        </aside>
      </main>
      
    </div>
  );
}

export default Home;













































































