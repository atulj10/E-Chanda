import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")

  const Print = () => {

    window.print()
  
  }

  return (
    <div className="App text-center p-5">
      <div className='counter'>
        <div className='my-4 head'>HEY</div>
        <div className='my-4 print-head'>This is the print Header</div>
        <div className='my-4 print-content'>
          <div>
            <input placeholder='NAME' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <input placeholder='AMOUNT' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>
        <button onClick={Print}>PRINT</button>
      </div>
      <div className='voucher'>
        <h1>NAME:{name}</h1>
        <h1>AMOUNT:{amount}</h1>
      </div>
    </div>
  );
}

export default App;
