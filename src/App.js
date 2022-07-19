import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {

  const [events, setEvents] = useState([
    {title: "Mariann's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  const [showEvents, setShowEvent] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const handleClick = (id) => {
    setEvents(prevEvents =>{
      return prevEvents.filter(event => id !== event.id)
  })
  }

  const handleClose = () => {
    setShowModal(false)
  }


  const subtitle = "All the latest events in Marioland"
  
  return (
    <div className="App">
      <Title title="Marioland Events" subtitle={subtitle} />
      {showEvents && (<div>
        <button onClick={() => setShowEvent(false)}>hide events</button>
      </div>)}
      {!showEvents && (<div>
       <button onClick={() => setShowEvent(true)}>show events</button>
      </div>)}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}
      {/* <Modal>
        <h2>10% Off Coupon Code</h2>
        <p>Use the code TENOFF at the checkout</p>
      </Modal> */}
        <div>
        <button onClick={() =>{setShowModal(true)}}>Show Terms and condition</button>
        </div>
      {showModal && (<Modal handleClose={handleClose}>
        <h2>Terms and Condition</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit nam et reprehenderit quibusdam temporibus officia dolorum quo sint nemo quis, laborum, quasi nisi fugit praesentium debitis repudiandae! Sapiente, omnis.</p>
      </Modal>)}
    </div>
  );
}

export default App;
