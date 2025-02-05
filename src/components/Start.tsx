import { setStartGame } from "../redux/gameSlice";
import { useAppDispatch } from "../redux/hooks";

export const Start = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="max-w-sm mx-auto bg-gray-200 p-4 rounded-lg shadow-md text-center">
            <div>Click to begin</div>

            <button
                className="  m-2 p-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
                onClick={() => dispatch(setStartGame())}
            >Start Game</button>
        </div>
    )
}