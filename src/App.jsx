import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleRefactorClick = () => {
    // Menghapus karakter non-digit dari nomor telepon
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Menambahkan kode negara "62" jika tidak ada
    const formattedNumber = cleanedNumber.startsWith('62')
      ? cleanedNumber
      : '62' + cleanedNumber;

    setFormattedNumber(formattedNumber);
  };

  return (
    <div className="App card card-body" style={{borderRadius:"20px"}}>
      <h5>WhatsApp Link Formatter</h5>
      <small><a href="https://github.com/11Dwiwijaya">created by :  Dwi wijaya <li className="fa-brands fa-github"> </li>  </a></small>
      <hr />
      <div className="input-group mb-3">
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handleInputChange}
        className='form-control'
      />
      <button className='btn text-white' style={{backgroundColor:"#3faf81"}} onClick={handleRefactorClick}><li className="fa fa-link"></li> &nbsp;Format</button>
      </div>
      {formattedNumber && (
        <div>
          <a
            href={`https://wa.me/${formattedNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{color:"#3faf81"}}
          >
            <li className="fa fa-link"></li> wa.me/{formattedNumber}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

