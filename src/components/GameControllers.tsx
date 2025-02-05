import { Finish } from "./Finish"
import { Reset } from "./Reset"

export const GameControllers = () => {
    return (
        <div className="flex gap-2  justify-end">
            <Reset />
            <Finish />
        </div>


    )
}