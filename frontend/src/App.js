import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [number, setNumber] = useState("")
  const [data, setData] = useState([])

  const Print = () => {
    window.print()
    Parchi()
  }

  useEffect(() => {
    getAll()
  }, [])

  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  const getAll = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/getAll`)
      // console.log(response.data)
      setData(response.data.chanda);
      // console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  }

  const Parchi = async () => {
    try {
      const parchi = await axios.post(`${process.env.REACT_APP_SERVER}/create`, { name, amount, number })
      alert("Parchi kat gayi")
      setName("")
      setAmount(0)
      setNumber("")
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App text-center ">
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
          <div>
            <input placeholder='PHONE NUMBER' value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
        </div>
        <div className='text-center'>
          <button  id='btn' onClick={Print}>PRINT</button>
          <button  id='btn' onClick={Parchi}>CLICK</button>
        </div>
      </div>
      {/* <div>
        {data?.map((i, index) => (
          <div key={index}>
            <h1>{i.name}</h1>
            <h1>{i.amount}</h1>
            <h1>{i.number}</h1>
          </div>
        ))}
      </div> */}
      <div className='voucher'>
        <h1>NAME:{name}</h1>
        <h1>AMOUNT:{amount}</h1>
      </div>
    </div>
  );
}

export default App;
