import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = () => {
    return (
        <div className="flex items-center justify-center ">
            <FaPlayCircle className="text-8xl text-green-600" size={50} />
            {/* <FaPauseCircle className="text-4xl text-white" /> */}
        </div>
    );
};

export default PlayPause;
