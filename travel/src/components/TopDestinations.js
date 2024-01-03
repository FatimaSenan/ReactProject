
import { Reveal } from "react-reveal";
import TopDestinationsCardsContainer from "./TopDestinationsCardsContainer";
import './topdestinations.css';
export default function TopDestinations(){

    return(
        <Reveal>
        <div className="top-destinations">
            
            <div className="top-destinations-title">Top Destinations</div>
            <div className="top-destinations-subtitle">TAKE A LOOK AT THESE OFFERS</div>
            <TopDestinationsCardsContainer/>
            
        </div>
        </Reveal>
        
        
    );
}