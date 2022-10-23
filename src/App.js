import './App.css';
import dataAegis from './dataAegis';
import { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState(dataAegis.slice(0, 10));
  const inputRef = useRef(null);

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue) return setData(dataAegis.slice(0, 10));
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
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
      {data.map((value, index) => (
        <div key={index}>
          <h2>{value.nama_lengkap}</h2>
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
    </>
  );
}

export default App;
