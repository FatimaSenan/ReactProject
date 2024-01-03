

export default function TopDestinationsCardContent({destination}){

    return(
        <div className="top-destinations-card-content">
            <div className="top-destinations-card-price">{destination.price}</div>
            <div className="top-destinations-card-place">{destination.name}</div>
        </div>
    );
}