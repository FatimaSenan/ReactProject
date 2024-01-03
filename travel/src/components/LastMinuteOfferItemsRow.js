
import { Reveal } from "react-reveal";
import LastMinuteOfferItem from "./LastMinuteOfferItem";


export default function LastMinuteOfferItemsRow(){

    return(
      
        <div className="last-minute-offer-items-row">
          <Reveal >
            <LastMinuteOfferItem name="MALDIVES" discount="50%"/>
            <LastMinuteOfferItem name="BALI" discount="30%"/>
            </Reveal>
        </div>
        
        
    );
}