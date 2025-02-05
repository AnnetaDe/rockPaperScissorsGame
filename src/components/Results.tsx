import { useAppSelector } from "../redux/hooks";
import { selectGameResult } from "../redux/selectors";

export const Results = () => {

    const results = useAppSelector(selectGameResult);


    return (
        <div className="bg-lime-400">


            <ul className="text-5xl">
                <li> {results?.result}</li>
                <li> {results?.reason}</li>


            </ul>

        </div>
    )
}