import { useAppSelector } from "../redux/hooks";
import { selectGameResult } from "../redux/selectors";

export const Results = () => {

    const results = useAppSelector(selectGameResult);


    return (
        
    
        
        <div className="bg-lime-400 max-w-sm aspect-auto mx-auto p-4 rounded-md shadow-md text-center">


            <ul className="text-5xl">
                <li> {results?.result}</li>
                <li className="text-2xl"> {results?.reason}</li>


            </ul>

        </div>
    )
}