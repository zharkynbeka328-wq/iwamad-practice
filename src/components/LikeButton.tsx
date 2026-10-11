import { useLikes } from "../context/LikesContext";
import Button from "./ui/Button";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button id="likeButton" type="button" onClick={addLike}>
      ♡ Like ({likes})
    </Button>
  );
}

export default LikeButton;
