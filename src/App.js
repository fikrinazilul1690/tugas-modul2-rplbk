import './Custom.scss';
import dataAegis from './dataAegis';
import { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue) return setData([]);
    setData(
      dataAegis
        .filter((data) => {
          if (Number(inputValue)) {
            return data.nim.toString().includes(inputValue);
          }
          return (
            data.nama_lengkap
              .toLowerCase()
              .includes(inputValue.toLowerCase()) ||
            data.nama_panggilan.toLowerCase().includes(inputValue.toLowerCase())
          );
        })
        .slice(0, 10)
    );
  };

  return (
    <>
      <h1>Praktikum PRLBK Kelompok 1</h1>
      <div class='Card'>
        <div class='CardInner'>
          <label>Tugas Modul 2 Kelompok 1</label>
          <div class='container'>
            <button onClick={handleClick}>
              <div class='Icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#657789'
                  stroke-width='3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-search'
                >
                  <circle cx='11' cy='11' r='8' />
                  <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
              </div>
            </button>
            <div class='InputContainer'>
              <input placeholder='Find Aegis' type='text' ref={inputRef} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'block' }}>
        {data.map((value, index) => (
          <div key={index}>
            <h2 style={{ textAlign: 'center' }}>{value.nama_lengkap}</h2>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>Nama Lengkap</td>
                  <td>:</td>
                  <td>{value.nama_lengkap || '-'}</td>
                </tr>
                <tr>
                  <td>Nama Panggilan</td>
                  <td>:</td>
                  <td>{value.nama_panggilan || '-'}</td>
                </tr>
                <tr>
                  <td>NIM</td>
                  <td>:</td>
                  <td>{value.nim || '-'}</td>
                </tr>
                <tr>
                  <td>Nomor Telepon</td>
                  <td>:</td>
                  <td>{value.nomor_telepon || '-'}</td>
                </tr>
                <tr>
                  <td>ID Line</td>
                  <td>:</td>
                  <td>{value.id_line || '-'}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{value.email || '-'}</td>
                </tr>
                <tr>
                  <td>Hobi</td>
                  <td>:</td>
                  <td>{value.hobi || '-'}</td>
                </tr>
                <tr>
                  <td>Tanggal Lahir</td>
                  <td>:</td>
                  <td>{value.tanggal_lahir || '-'}</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
