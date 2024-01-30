import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    onClick();
  };
  if (isLiked)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggleLike}></AiFillHeart>
    );
  return <AiOutlineHeart size={20} onClick={toggleLike}></AiOutlineHeart>;
};

export default Like;
