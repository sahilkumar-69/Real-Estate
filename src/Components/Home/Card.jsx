import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="border-[1px] p-3 rounded-sm flex flex-col justify-between items-center border-black">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Link to={"#"}>
          <h3>Connect with a specialist</h3>
          <MoveUpRight />
        </Link>
        <p>
          Access our dedicated team of over 400+ expert agents ready to assist
          you.
        </p>
      </div>
    </div>
  );
};

export default Card;
