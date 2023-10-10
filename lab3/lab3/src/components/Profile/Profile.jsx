import React, { useEffect, useState } from 'react'
import styles from "./Profile.module.css"
import avater from "../../images/avatar.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { tokenContext } from '../../context/tokenContext';
import jwtDecode from 'jwt-decode';

export default function Profile() {
  let [userId, setUserId] = useState("")

  let [allMessages, setAllMessages] = useState([]);
  async function getAllMessages() {
    let {data} = await axios.get('https://sara7aiti.onrender.com/api/v1/message', {
      headers: {
        token:localStorage.getItem("userToken")
      }
    });
    console.log(data)
    setAllMessages(data.allMessages)
  }

  function getUserId () {
    let decoded = jwtDecode(localStorage.getItem("userToken"))
    console.log(decoded);
    setUserId(decoded.id)
  }
  useEffect(() => {
    getAllMessages();
    getUserId()
  }, [])
 
  return (
    <>
    <div className='container text-center py-5 my-5 text-center'>
      <div className='card pt-5'>
      <Link/>
       <img src={avater} className={`${styles.im} avater mx-auto`} alt=''/>
       <h3 className='py-2'>Mousa Khairy</h3>
       <div className='container w-50 m-auto'>
      <form action='' method='post'>
        <textarea className='form-control' name='' id='' cols={10} rows={10} placeholder='send message'></textarea>
        <button className='btn btn-outline-info m-3'>Send</button>
      </form>
    </div>
       <Link className='btn btn-dark w-25 mx-auto mb-2' to={"/send/" + userId}>Share Profile</Link>
      </div>
    </div>



    {allMessages.length ==0 ? 
    <div className='container text-center my-5 text-center'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card py-5'>
          <p>You don't have any messages...</p>
          </div>
        </div>
      </div>
    </div>
    :
    ""
  }
  {allMessages.map((ele) => <div key={ele._id} className='col-md-12 mb-5'>
  <div className='card py-5'>
  
  <p>{ele.messageContent}</p>
  
  </div>
    
    
    
    </div>)}
    </>
  )
}
