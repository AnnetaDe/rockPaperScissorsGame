import { FaRegGrinWink } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks"
import { selectSessionResults } from "../redux/selectors"
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineEmojiSad } from "react-icons/hi";


export const SessionResults = () => {
    const sessionResults = useAppSelector(selectSessionResults)
    console.log(sessionResults)

    return (
        <div className=" min-h-dvh px-6 py-4 bg-dots">
            <h2 className="text-xl font-semibold mb-4">Results</h2>

            <ul className="h-[90dvh] overflow-y-auto  min-w-full   p-2 rounded-lg  text-xs scrollable-list  opacity-90 sm: min-w-xxs">
                <AnimatePresence>

                    {
                        sessionResults.map((result) => {
                            return (
                                <motion.li key={result.id} className="mb-2 p-3 bg-gray-100 rounded-lg max-w-" initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 1 }}>
                                    <div className="text-xs ">
                                        {result.result === "You won!" ? <div className="text-purple-600 flex items-center gap-1">
                                            <span><FaRegGrinWink />
                                            </span>
                                            You Won!</div> : result.result === "You lost!" ? <div className="text-sky-700 flex items-center gap-1 "><span><HiOutlineEmojiSad /></span>You Lost!
                                            </div> : <p className="text-lime-600">It's a draw! </p>}

                                        <p>My Choice: {result.computer.choice}</p>
                                        <p>Your Choice: {result.user.choice}</p>
                                        <p> {result.result}</p>
                                        <p> {result.reason}</p>
                                    </div>
                                </motion.li>

                            )
                        })
                    }</AnimatePresence>
            </ul>
        </div>
    )
}