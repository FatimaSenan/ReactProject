import { useState } from "react";


export default function FindContainerForm(){
   const [departureInput, setDepartureInput] = useState('');
   const [destinationInput, setDestinationInput] = useState('');
   const handleDepartureChange = (e)=>{
      setDepartureInput(e.target.value);
   }
   const handleDestinationChange = (e)=>{
    setDestinationInput(e.target.value);
 }
    return(
        <form className="find-container-form">
             <div className="form-group">
                <label htmlFor="departureInput">Departure:</label>
                        <input id="departureInput" className="departure-input" type="text" placeholder="Departure" onChange={handleDepartureChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="destinationInput">Destination:</label>
                        <input id="destinationInput"className="destination-input" type="text" placeholder="Destination" onChange={handleDestinationChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="minPrice">Min Price:</label>
                    <select id="minPrice" className="min-price-select">
                        <option value=""></option>
                        <option value="0">0</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="maxPrice">Max Price:</label>
                <select id="maxPrice" className="max-price-select">
                    <option value=""></option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                </select>
            </div>
            <button type="submit" className="find-button">Find</button>
        </form>
    );
}