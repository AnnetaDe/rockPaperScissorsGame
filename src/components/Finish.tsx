import { setGameOver } from "../redux/gameSlice";
import { useAppDispatch } from "../redux/hooks";

export const Finish = () => {
    const dispatch = useAppDispatch();


    return (
        <div>
            <button onClick={() => { dispatch(() => dispatch(setGameOver())) }} className="  m-2 p-2 border border-white text-white rounded-lg  hover:bg-pink-600">
                Finish
            </button>

        </div>
    )
}