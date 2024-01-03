
import OfferContainer from "./OfferCotainer";
import { useLocation } from "react-router-dom";
import './offer.css';
import { Reveal } from "react-reveal";

export default function Offer(){
  const location = useLocation();
  const { destination } = location.state;
    return(
      <Reveal>
        <div className="offer">
            
          <OfferContainer destination={destination}/>
        </div>
        </Reveal>
    );
}