import { Reveal } from "react-reveal";
import FindContainer from "./FindContainer";
import "./find.css"

export default function FindBackground(){

    return(
        <Reveal>
        <div className="find-background">
            <FindContainer/>
        </div>
        </Reveal>
    );
}