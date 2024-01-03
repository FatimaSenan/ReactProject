

export default function OfferContent({destination}){

    return(
        <div className="offer-content">
            
            <h1>{destination.name}</h1>
            <div className="offer-text">
            {destination.info}
            </div>
            <button className="reserve-btn">Reserve NOW!</button>
            
        </div>
    );
}