import DestinationsCard from "./DestinationsCard";
import destinations from "./DestinationsList";

export default function TopDestinationsCardsContainer(){

    

    return(
        <div className="top-destinations-cards-container">
            {destinations.slice(0,4).map((destination) => (
        <DestinationsCard
          key={destination.id}
          destination={destination} // Pass the destination prop here
          />
          ))}
            
        </div>
    );
}