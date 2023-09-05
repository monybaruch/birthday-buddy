import { useState } from 'react';
import data from './data';
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3> Today we have {people.length} lucky coworkers that have a birthday:</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
