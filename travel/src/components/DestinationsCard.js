
import TopDestinationsCardContent from "./TopDestinationsCardContent"
import { useNavigate } from 'react-router-dom';

export default function DestinationsCard({destination}){
 const navigate = useNavigate(); 
const goToOfferPage = () =>{
    navigate("/Offer", { state: { destination } });
    // Scroll to the top of the page
    window.scrollTo(0, 0);
}
    return(
        <div className="top-destinations-card" onClick={goToOfferPage}>
            <img src={destination.image} className="top-destinations-card-img"/>
            <TopDestinationsCardContent destination={destination}/>
                
            
            
        </div>
    );
}