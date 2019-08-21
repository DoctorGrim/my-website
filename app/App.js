import React, { Component, useState } from 'react';
import './App.css';
import Card from './Card';
import data from './data'
// import logo from './assets/logo.svg';


function App() {
const [properties, setProperties] = useState(data.properties)
const [property, setProperty] = useState(data.properties[1])

  
  const nextProperty = () => {
    let newIndex = property.index+1;
    setProperty( data.properties[newIndex])
  }

const prevProperty = () => {
    const newIndex = property.index-1;
    setProperty(data.properties[newIndex]
    )
  }
    console.log(property.index)

    return (
      <div className="App">
        <p>test{`${data.properties[0]}`}</p>
        <button 
          onClick={() => nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>
        <button 
          onClick={() => prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>

        <div className="page">
            <section>
                <h1>Projects</h1>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>

        </div>
      </div>
    );
}

export default App;