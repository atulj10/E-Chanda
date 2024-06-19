import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Button, Divider, Input } from 'antd';

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([])
  const date = new Date();

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
    <>
      <div className="App text-center ">
        <div className='counter'>
          <div className='my-4 print-head'>
            <p>|| ॐ नमः शिवाय ||</p>
            <h1>बाबा खगेश्वरनाथ महादेवमंदिर न्यास समिति</h1>
          </div>
          <div className='my-4 print-content'>
            <div className='input'>
              <Input size="large" placeholder='NAME' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='select'>
              <select name='amount' style={{ width: "30%", padding: "10px", borderRadius: "10px" }} onChange={(e) => setAmount(e.target.value)}>
                <option value="">Select a puja</option>
                <optgroup label='1. वर-वधु निरीक्षण - 225 रू0 प्रति पक्ष'>
                  <option value={"वर-वधु निरीक्षण केवल वर या वधू पक्ष - 225"}>केवल वर या वधू पक्ष</option>
                  <option value={"वर-वधु निरीक्षण वर और वधु दोनों पक्ष - 500"}>वर और वधु दोनों पक्ष</option>
                </optgroup>
                <option value={"लखाउरी - 451 रू0"}>2. लखाउरी - 451 रू0</option>
                <option value={"रूद्राभिषेक - 321 रू0"}>3. रूद्राभिषेक - 321 रू0</option>
                <option value={"महामृत्युंजय यज्ञ - 321 रू0"}>4. महामृत्युंजय यज्ञ - 321 रू0</option>
                <option value={"सत्यनारायण पूजा - 111 रू0"}>5. सत्यनारायण पूजा - 111 रू0</option>
                <option value={"दो चक्का गाड़ी पूजा - 201 रू0"}>6. दो चक्का गाड़ी पूजा - 201 रू0</option>
                <option value={"तीन चक्का गाड़ी पूजा - 251 रू0"}>7. तीन चक्का गाड़ी पूजा - 251 रू0</option>
                <option value={"चार चक्का गाड़ी पूजा - 321 रू0"}>8. चार चक्का गाड़ी पूजा - 321 रू0 </option>
                <option value={"४ चक्का गाड़ी पूजा - 451 रू0"}>9. ४ चक्का गाड़ी पूजा - 451 रू0</option>
                <option value={"अष्ट्‌याम यज्ञ दो दिन (24 घंटा) - 551 रू0"}>10. अष्ट्‌याम यज्ञ दो दिन (24 घंटा) - 551 रू0</option>
                <option value={"मुख्य धर्मशाला का उपयोग 1 दिन - 805 रू0"}>11. मुख्य धर्मशाला का उपयोग 1 दिन - 805 रू0</option>
                <option value={"जेनरेटर चार्ज प्रतिघंटा - 201 रू0"}>12. जेनरेटर चार्ज प्रतिघंटा - 201 रू0</option>
                <option value={"महादेव शिवपार्थिव पूजा - 31 रू0"}>13. महादेव शिवपार्थिव पूजा - 31 रू0</option>
                <option value={"शिवचर्चा - 125 रू०"}>14. शिवचर्चा - 125 रू० </option>
                <option value={"मुण्डन संस्कार -  101 रू0 प्रति बच्चा ।"}>15. मुण्डन संस्कार -  101 रू0 प्रति बच्चा ।</option>
                <option value={"अन्य संस्कार - 205 रू0 "}>अन्य संस्कार - 205 रू0 </option>
              </select>
            </div>
            <div className='input'>
              <Input size="large" placeholder='PHONE NUMBER' value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className='input'>
              <Input size="large" placeholder='ADDRESS' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className='text-center'>
            <Button id='btn' onClick={Print}>PRINT</Button>
            <Button id='btn' onClick={Parchi}>CLICK</Button>
          </div>
        </div>
        <div className='voucher'>
          <div className='heading'>
            <h1>|| ॐ नमः शिवाय ||</h1>
            <h1>बाबा खगेश्वरनाथ महादेवमंदिर न्यास समिति</h1>
            <h3>मतलुपुर , मुज़फ़्फ़रपुर ( बिहार )</h3>
            <h3>बी0 रा0 घ0 न्यास प0 , निबन्धन संखिया-1982</h3>
            <h3>मंदिर विकास और अन्य सेवाकार्य हेतु विविध सुल्को का निर्धारण</h3>
          </div>
          <hr />
          <div className='details'>
            <h1 style={{ fontWeight: "300", fontSize: "1.15rem" }}>दिनांक : &nbsp;{date.toLocaleDateString()}</h1>
            <h1>दाता का नाम:{name}</h1>
            <h1>पता:{address}</h1>
            <div className='amount'>
              <div>
                <h1 className='amount-rupee'><span>पूजा : </span>{amount}</h1>
              </div>
              <div className='sign'>
                <h5>दाता का हस्ताक्षर</h5>
              </div>
            </div>
          </div>
          <div className='footer'>
            <Divider style={{ color: "#C40C0C", borderColor: "#C40C0C" }}>पूजा</Divider>
            <div className='puja-info'>
              <p>1. वर-वधु निरीक्षण : 225 . वर-वधु निरीक्षण-225 रू0 प्रति पक्ष</p>
              <p>2. लखाउरी-451 रू0</p>
              <p>3. रूद्राभिषेक-321 रू0</p>
              <p>4. महामृत्युंजय यज्ञ-321 0</p>
              <p>5. सत्यनारायण पूजा-111 रुपए</p>
              <p>6. दो चक्का गाड़ी पूजा-201 रू0</p>
              <p>7. तीन चक्का गाड़ी पूजा-251 रू0</p>
              <p>8. चार चक्का गाड़ी पूजा-321 50 9. ४ चक्का गाड़ी पूजा-451 रू0</p>
              <p>10. अष्ट्‌याम यज्ञ दो दिन (24 घंटा)-551 रू0</p>
              <p>11. मुख्य धर्मशाला का उपयोग 1 दिन-805 रू0</p>
              <p>12. जेनरेटर चार्ज प्रतिघंटा-20150</p>
              <p>13. महादेव शिवपार्थिव पूजा-31 रू0</p>
              <p>14. शिवचर्चा-125 रू०  अन्य संस्कार-205 रू0 </p>
              <p>15. मुण्डन संस्कार- 101 रू0 प्रति बच्चा ।</p>
            </div>
            <div className='mt-5'>
              <p><b>नोट : बिना रसीद प्राप्त किये किसी भी प्रकार का संस्कार करना वर्जित है।</b> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
