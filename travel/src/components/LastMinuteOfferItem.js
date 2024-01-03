import { useNavigate } from "react-router-dom";
export default function LastMinuteOfferItem({name, discount}){
    const navigate = useNavigate(); 
    const goToOffersPage = () =>{
        navigate("/Offers", { state: { discount} });
          // Scroll to the top of the page
         window.scrollTo(0, 0);
    }
    return(
<div className="last-item-container" >
    <div className="last-item">
        <div className="last-item-content">
        <div className="last-subtitle">{name}</div>
        <div className="last-percent">{discount}</div>
        <div className="last-title">Last Minute Offer</div>
        <div className="last-text">"Embark on a Journey of Savings! 🌍✈️ Our curated selection of discounted travel packages ensures that every adventure is not only memorable but also budget-friendly. Click now and let the voyage begin with discounts that make every mile more magical! Bon voyage!"</div>
        <button className="see-offer-btn" onClick={goToOffersPage}>See Offer</button>
        </div>
    </div>
</div>
    );
}