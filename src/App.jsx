import './App.css'
import {useNavigate} from 'react-router-dom'


const App = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate(`/order`)
  }


  return (
    <div className="main-body">
      <p>honeyroad.store</p>
      <p>smolgrrr's organic metaverse honey</p>
      <p>200k sats</p>
      <p>🐻🍯</p>
      <button 
        className='main-order-button'
        onClick={handleClick}
      >place order</button>
    </div>
  )
}

export default App
