import DestinationsCard from "./DestinationsCard";
import destinations from "./DestinationsList";

export default function OffersListContainer({discount, destination, minPrice, maxPrice}){
    const filteredDestinationsByDiscount = destinations.filter(destination => destination.discount === discount);
    const filteredDestinations = filteredDestinationsByDiscount.filter((destinationItem) => {
      const destinationMatch =
        !destination || destinationItem.name.toLowerCase().includes(destination.toLowerCase());
  
      const minPriceMatch = !minPrice || destinationItem.price >= parseFloat(minPrice);
      const maxPriceMatch = !maxPrice || destinationItem.price <= parseFloat(maxPrice);
  
      return destinationMatch && minPriceMatch && maxPriceMatch;
    });
    return(
        <div className="offers-list-container">
        {filteredDestinations.map((destination) => (
        <DestinationsCard destination={destination}  key={destination.name}/>
      ))}

        </div>
    );
}