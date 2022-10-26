import './Custom.scss';
import dataAegis from './dataAegis';
import { useState } from 'react';
import SearchComponent from './components/search.component';
import CardComponent from './components/card.component';
import DateComponent from './components/date.component';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <h1>Praktikum PRLBK Kelompok 1</h1>
      <DateComponent />
      <SearchComponent dataAegis={dataAegis} setData={setData} />
      <CardComponent filterData={data} />
    </>
  );
}

export default App;
