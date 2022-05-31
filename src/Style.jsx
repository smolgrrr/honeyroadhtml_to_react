import './App.css'
import './silkroad.css'

const Style = (props) => {

  return (
    <>
        
        <div className="main-body">
            <img className='logo' alt='honey road logo' src='honey.png'/>
            <div className='content-container-main'>
                <div className='content-container-main-header'>
                    <h3>h3 content container main header</h3>
                </div>
                <p>
                    content container - content goes here. blah blah blah.
                    content container - content goes here. blah blah blah. 
                    content container - content goes here. blah blah blah. 
                </p>
            </div>

            <div className='content-container-body'>
                <div className='content-container-body-header'>
                    <h3>h3 content container body header</h3>
                </div>
                <p>
                    content container - content goes here. blah blah blah.
                    content container - content goes here. blah blah blah. 
                    content container - content goes here. blah blah blah. 
                </p>
            </div>

            <div className='content-container-body'>
                <div className='content-container-body-header'>
                    <h3>content container body header overlapping runoff text will wrap around</h3>
                </div>
                <p>
                    content container - content goes here. blah blah blah.
                    content container - content goes here. blah blah blah. 
                    content container - content goes here. blah blah blah. 
                </p>
            </div>

            <p>
                <a href='12'>here</a> are some example <a href=''>hyperlinks</a>
            </p>

            <label>label: <input placeholder='input'></input></label>

            <button className='main-order-button'>button active</button>
            <button className='main-order-button' disabled>button disabled</button>
        </div>
    </>
  )
}

export default Style