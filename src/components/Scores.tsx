import { useAppSelector } from "../redux/hooks"
import { selectSessionResults } from "../redux/selectors"
import { AnimatedNumber } from "./AnimatedScore"


export const Scores = () => {
    const sessionResults = useAppSelector(selectSessionResults)
    console.log(sessionResults)

    const score = sessionResults.reduce((acc, result) => {
        return {
            user: acc.user + (result.user.score ?? 0),
            computer: acc.computer + (result.computer.score ?? 0)
        }
    }, { user: 0, computer: 0 })




    return (
        <div className="">
            <div className="flex gap-6 justify-center items-center  px-2 py-4 text-gray-700    bg-gray-200 rounded-lg shadow-md ">
                <div className="flex flex-col items-center gap-2">
                    <h3>You</h3>
                    <AnimatedNumber value={score.user} />

                </div>
                <div className="flex flex-col items-center gap-2">
                    <h3>Me</h3>
                    <AnimatedNumber value={score.computer} />

                </div>
            </div>
        </div>
    )
}