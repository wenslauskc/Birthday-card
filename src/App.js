import React, { useState } from 'react';
import Card from './Card';
import data from './data'

function App() {
   const [people, setPeople] = useState(data);
   return(
       <main>
            <section className="container">
                 <h3>{people.length} birthdays today</h3>
                 <Card people={people} />
                 {people.length === 0 ? 
                 <button className="btn" onClick={()=> setPeople(data)}>Show Again</button>:
                 <button className="btn" onClick={()=> setPeople([])}>Clear All</button>
                 }
            </section>
       </main>
   );
}

export default App
