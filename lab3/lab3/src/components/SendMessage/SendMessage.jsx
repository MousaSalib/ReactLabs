// import axios from 'axios';
// import { useFormik } from 'formik';
// import React from 'react'
// import { Link, useParams } from 'react-router-dom'



// export default function SendMessage() {
//   let x = useParams();
//   async function addMessages(values) {
//     let data = {
//       ...values,
//       receivedId: x.userId
//     }
    
//     let res = await axios.post("https://sara7aiti.onrender.com/api/v1/message", data)
//     console.log(res);
//   }

//   let formik = useFormik({
//     initialValues: {
//       messageContent: ""
//     },
//     onSubmit: (values) => {
//       addMessages(values)
//     }
//   })
  
//   return (
//     <>
//     <div className='container text-center py-5 my-5 text-center'>
//       <div className='card pt-5'>
//       <Link/>
//        <div className='container w-50 m-auto'>
//       <form onSubmit={formik.handleSubmit}>
//         <textarea className='form-control' name="messageContent" value={formik.values.messageContent} onChange={formik.handleChange} cols={10} rows={10} placeholder='send message'></textarea>
//         <button type='submit' className='btn btn-outline-info m-3'>Send</button>
//       </form>
//     </div>
//       </div>
//     </div>

//     </>
//   )
// }

import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMessageContent, resetMessageContent, selectMessageContent } from '../../Redux/messageReducer';

export default function SendMessage() {
  const dispatch = useDispatch();
  const messageContent = useSelector(selectMessageContent);
  const x = useParams();

  async function addMessages(values) {
    const data = {
      ...values,
      receivedId: x.userId,
    };

    const res = await axios.post('https://sara7aiti.onrender.com/api/v1/message', data);
    console.log(res);
  }

  const formik = useFormik({
    initialValues: {
      messageContent: messageContent || '',
    },
    onSubmit: (values) => {
      dispatch(setMessageContent(values.messageContent));
      addMessages(values);
      dispatch(resetMessageContent());
    },
  });

  return (
    <>
      <div className="container text-center py-5 my-5 text-center">
        <div className="card pt-5">
          <Link />
          <div className="container w-50 m-auto">
            <form onSubmit={formik.handleSubmit}>
              <textarea
                className="form-control"
                name="messageContent"
                value={formik.values.messageContent}
                onChange={formik.handleChange}
                cols={10}
                rows={10}
                placeholder="send message"
              ></textarea>
              <button type="submit" className="btn btn-outline-info m-3">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

