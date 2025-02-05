import { Finish } from "./Finish"
import { Reset } from "./Reset"

export const GameControllers = () => {
    return (
        <div className="flex justify-center">
            <Reset />
            <Finish />
        </div>


    )
}