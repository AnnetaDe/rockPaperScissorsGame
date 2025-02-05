import { resetGame } from "../redux/gameSlice";
import { useAppDispatch } from "../redux/hooks";

export const Reset = () => {
    const dispatch = useAppDispatch();

    return (

        <button
            className="  m-2 p-2 border border-white text-white rounded-lg  hover:bg-pink-600"
            onClick={() => dispatch(resetGame())}
        >Reset </button>

    )
}