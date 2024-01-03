import OfferContent from "./OfferContent";
export default function OfferContainer({destination}){

    return (
        <div className="offer-container">
            <div className="offer-img">
                <img  src={destination.image} alt={destination.name}/>
            </div>
            <OfferContent destination={destination}/>
        </div>
    );
}