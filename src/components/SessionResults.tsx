import { useAppSelector } from "../redux/hooks"
import { selectSessionResults } from "../redux/selectors"
import { motion, AnimatePresence } from "framer-motion";


export const SessionResults = () => {
    const sessionResults = useAppSelector(selectSessionResults)

    return (
        <div className=" min-h-dvh pl-2 py-4 text-gray-700">
            <h2 className="text-xl font-semibold mb-4">Session Results</h2>

            <ul className="h-[90dvh] overflow-y-auto  bg-white p-4 rounded-lg divide-y divide-gray-200 text-xs scrollable-list">
                {
                    sessionResults.map((result, index) => {
                        return (
                            <AnimatePresence>
                                <motion.li key={index} className="mb-2 p-3 bg-gray-100 rounded-lg " initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 1 }}>
                                    <div>
                                        <p>My Choice: {result.computer.choice}</p>
                                        <p>Your Choice: {result.user.choice}</p>
                                        <p> {result.result}</p>
                                        <p> {result.reason}</p>
                                    </div>
                                </motion.li>
                            </AnimatePresence>
                        )
                    })
                }
            </ul>
        </div>
    )
}