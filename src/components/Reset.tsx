import { resetGame } from "../redux/gameSlice";
import { useAppDispatch } from "../redux/hooks";

export const Reset = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="group relative flex-col items-center justify-center">
            <button
                className=" p-2  border border-white text-white rounded-lg  hover:bg-pink-600"
                onClick={() => dispatch(resetGame())}
            >Reset </button>
            <div className="absolute hidden group-hover:block p-1 text-xs text-white bg-gray-700 rounded bottom-full mb-1 whitespace-nowrap">
                Reset the game and clear statistics
            </div>
        </div>


    )
}