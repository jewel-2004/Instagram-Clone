import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <span onClick={() => setLiked(!liked)} style={{ cursor: "pointer", fontSize: "22px" }}>
      {liked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart style={{ color: "white" }} />}
    </span>
  );
}

export default LikeButton;
