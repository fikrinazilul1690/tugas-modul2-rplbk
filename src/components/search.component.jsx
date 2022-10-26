import { useState } from 'react';

function SearchComponent({ setData, dataAegis }) {
  const [input, setInput] = useState('');
  const handleClick = () => {
    if (!input) return setData([]);
    setData(
      dataAegis
        .filter((data) => {
          if (Number(input)) {
            return data.nim.toString().includes(input);
          }
          return (
            data.nama_lengkap.toLowerCase().includes(input.toLowerCase()) ||
            data.nama_panggilan.toLowerCase().includes(input.toLowerCase())
          );
        })
        .slice(0, 10)
    );
  };
  return (
    <div className='Card'>
      <div className='CardInner'>
        <label>Tugas Modul 3 Kelompok 1</label>
        <div className='container'>
          <button onClick={handleClick}>
            <div className='Icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#657789'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-search'
              >
                <circle cx='11' cy='11' r='8' />
                <line x1='21' y1='21' x2='16.65' y2='16.65' />
              </svg>
            </div>
          </button>
          <div className='InputContainer'>
            <input
              placeholder='Find Aegis'
              type='text'
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
