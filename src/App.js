import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'

function App() {

  const [events, setEvents] = useState([
    {title: "Mariann's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  const [showEvents, setShowEvent] = useState(true)

  const handleClick = (id) => {
    setEvents(prevEvents =>{
      return prevEvents.filter(event => id !== event.id)
  })
  }

  const subtitle = "All the latest events in Marioland"
  
  return (
    <div className="App">
      <Title title="Marioland Events" subtitle={subtitle} />
      <br/>
      <Title title="Another Title" subtitle="Another Subtitle" />
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
    </div>
  );
}

export default App;
