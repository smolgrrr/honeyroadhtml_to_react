import './order.css'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';

// min and max items per order
const minOrder = 1;
const maxOrder = 5;

// axios base url

const api = axios.create({
    baseURL:`https://us-central1-honeyroad.cloudfunctions.net/app`
})



const Details = (props) => {
    // form info stored in state also 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('')
    const [quantity, setQuantity] = useState(1);
    const [disBut, setDisBut] = useState([true, true]);//disBut: is de/increment button disabled?

    // reset state function
    const clearState = () => {
        setName('')
        setPhone('')
        setCountry('')
        setBuyerEmail('')
        setAddress1('')
        setAddress2('')
        setPostalCode('')
        setCity('')
        setState('')
        setQuantity('')
    }

    // increment / decrement on click
    const handleClick = (e) => {
        if (e.target.name === 'increment') {
            if ((quantity < 5)) {
                setQuantity((prev) => (prev + 1))
            }
        } else if (e.target.name === 'decrement') {
            if ((quantity > 1)) {
                setQuantity((prev) => (prev - 1))
            }
        }
    }
    // handles button disabled status
    useEffect(() => {
        switch(quantity) {
            case minOrder:
                setDisBut([true, false])
                break;
            case maxOrder:
                setDisBut([false, true])
                break;
            default:
                setDisBut([false, false])
        }
    }, [handleClick])

    const redirectToCheckout = (checkoutURL) => {
        window.location.replace(checkoutURL);
        clearState();
    }

    const sendData = async (data) =>{
        try {   
                
                let response = await api.post("/v1/stores/invoices",data, {
                    headers:{'Content-Type': 'application/json'}
                })          
                console.log(response);

                redirectToCheckout(response.data.checkoutLink);

            } catch (error) {
                console.log(error);
            }

    }


    return (
        <>
            <form className='details-form'
                onSubmit={async (event) => {
                    event.preventDefault();
                    const formData = {};
                    for (let i = 0; i < 11; i++) {
                        if (event.target[i].id != '') {
                            formData[event.target[i].id] = event.target[i].value;
                        }   
                    }
                    const formJSON = JSON.stringify(formData);
                    sendData(formJSON)
                    
                   
                    

                }}    
            >
                <ul className='details-flex-ul'>
                    <li>
                        <label htmlFor='name'>name: </label>
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='buyerEmail'>email: </label>
                        <input 
                            type="text"
                            id='buyerEmail'
                            name='buyerEmail'
                            value={buyerEmail}
                            onChange={(e) => setBuyerEmail(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='phone'>phone: </label>
                        <input 
                            type="number"
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='address1'>address 1: </label>
                        <input 
                            type="text"
                            id='address1'
                            name='address1'
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='address2'>address 2: </label>
                        <input 
                            type="text"
                            id='address2'
                            name='address2'
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='postalcode'>postal code: </label>
                        <input 
                            type="text"
                            id='postalCode'
                            name='postalCode'
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='city'>city: </label>
                        <input 
                            type="text"
                            id='city'
                            name='city'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='country'>country: </label>
                        <input
                            type="text"
                            id='country'
                            name='country'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='state'>state: </label>
                        <input
                            type="text"
                            id='state'
                            name='state'
                            value={state}
                            onChange={(e) => setState(e.target.value)}/><br/>
                    </li>
                    <li>
                        <label htmlFor='quantity'>jars:</label>
                            <button 
                                name='decrement'
                                type='button'
                                disabled={disBut[0]}
                                onClick={handleClick}
                            >-</button>
                            <input
                                type='number'
                                readOnly={true}
                                id='quantity'
                                name='quantity'
                                value={quantity}
                            />
                            <button 
                                name='increment'
                                type='button'
                                disabled={disBut[1]}
                                onClick={handleClick}
                            >+</button>
                    </li>
                    <input id='submit' type="submit" value="Submit"></input>
                </ul>
            </form>
        </>
    )
}




const Order = (props) => {
    
    const navigate = useNavigate();
    const returnHome = () => navigate(`/`)

    return (
      <div className="order-body">
        <p>order page</p>
        <p>purchase jars of honey</p>
        <p>📦💸</p>
        
        <Details />
        
        <button
          className='main-order-button'
          onClick={returnHome}
        >return</button>
      </div>
    )
}


export default Order;

