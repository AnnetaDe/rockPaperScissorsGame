import { playGame } from "../redux/gameSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectShowResults } from "../redux/selectors";
import { GameControllers } from "./GameControllers";
import ModalPortal from "./ModalPortal";
import { Results } from "./Results";
import { motion } from "framer-motion";
import { FaHandPaper, FaHandScissors, FaHandRock } from "react-icons/fa";
import { Scores } from "./Scores";


export const Game = () => {

    const choices = {

        1: { name: "Rock", icon: <FaHandRock /> },
        2: { name: "Paper", icon: <FaHandPaper /> },
        3: {
            name: "Scissors", icon: <FaHandScissors />
        }

    }


    const dispatch = useAppDispatch();
    const showResults = useAppSelector(selectShowResults);




    return (
        <motion.div className="max-w-full content-center mx-auto p-4 sm:p-2 rounded-md text-center  min-h-[100dvh]
       
 ">
            <Scores />


            <div className="text-5xl ">Play...</div>
            <motion.ul
                className="text-2xl sm:text-4xl flex flex-wrap justify-center items-center gap-4 mt-4 mb-4 "
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
            >

                {
                    Object.entries(choices).map(([key, value]) => {
                        return (
                            <motion.li key={key} variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                            }}>
                                <div className="bg-dots min-h-[20dvh] flex items-center justify-center sm: w-30 rounded-lg shadow-md ">
                                    <motion.button
                                        className=" p-4  text-white rounded-lg shadow-md text-6xl btn-grad "
                                        onClick={() => dispatch(playGame(parseInt(key)))}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        initial={{ opacity: 0, y: 20, }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >{value.icon}</motion.button>
                                </div>

                            </motion.li>

                        )
                    }
                    )
                }
            </motion.ul>

            <GameControllers />

            {
                showResults && <ModalPortal title={""}>
                    <Results />

                </ModalPortal>

            }




        </motion.div>

    )
}

