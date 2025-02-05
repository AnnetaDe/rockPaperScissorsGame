import { useAppSelector } from "../redux/hooks"
import { selectSessionResults } from "../redux/selectors"
import { motion, AnimatePresence } from "framer-motion";


export const SessionResults = () => {
    const sessionResults = useAppSelector(selectSessionResults)
    console.log(sessionResults)

    return (
        <div className=" min-h-dvh pl-2 py-4 text-gray-700">
            <h2 className="text-xl font-semibold mb-4">Session Results</h2>

            <ul className="h-[90dvh] overflow-y-auto  bg-white p-4 rounded-lg divide-y divide-gray-200 text-xs scrollable-list">
                <AnimatePresence>

                    {
                        sessionResults.map((result) => {
                            return (
                                <motion.li key={result.id} className="mb-2 p-3 bg-gray-100 rounded-lg " initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 1 }}>
                                    <div>
                                        {result.result === "You won!" ? <p className="text-green-500"><FaRegGrinTongueWink />
You Won!</p> : result.result === "You lost!" ? <p className="text-red-500">You Lost!</p> : <p className="text-yellow-500">It's a draw! </p>}

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