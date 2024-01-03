import FindBackground from "../FindBackground";
import OffersListContainer from "../OffersListContainer";
import { useLocation } from "react-router-dom";
import "../offers.css";
import { Reveal } from "react-reveal";
export default function Offers(){
    const location = useLocation();
    const { discount,destination, minprice, maxprice } = location.state || {};
    
    return (
        <Reveal>
        <div className="offers">
            <FindBackground/>
            <div className="offers-container">
              <h1 className="offers-title">Offers</h1>
              <OffersListContainer discount={discount} destination={destination} minPrice={minprice} maxPrice={maxprice}/>
            </div>
        </div>
        </Reveal>
    );
}