import { FaAngry } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks";
import { selectGameResult } from "../redux/selectors";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { CiFaceMeh, CiFaceSmile } from "react-icons/ci";
import { div } from "framer-motion/client";

export const Results = () => {

    const results = useAppSelector(selectGameResult);


    return (




        <div className=" max-w-sm aspect-auto mx-auto p-4   text-center text-5xl">
            {results?.result === "You won!" ? <div className=" flex items-center gap-1 bg-lime-300 rounded-lg">
                <span><CiFaceSmile />
                </span>  <ul className="text-5xl">
                    <li> {results?.result}</li>
                    <li className="text-2xl"> {results?.reason}</li>
                </ul>
            </div>
                : results?.result === "You lost!" ? <div className="flex items-center gap-1 bg-gray-200 rounded-lg  "><span> <HiOutlineEmojiSad /></span>  <ul className="text-5xl">
                    <li> {results?.result}</li>
                    <li className="text-2xl"> {results?.reason}</li>
                </ul>
                </div > : <div className="flex items-center gap-1 bg-cyan-400 rounded-lg"><span><CiFaceMeh /> </span>
                    <ul className="text-5xl">
                        <li> {results?.result}</li>
                        <li className="text-2xl"> {results?.reason}</li>
                    </ul>
                </div>
            }






        </div>
    )
}