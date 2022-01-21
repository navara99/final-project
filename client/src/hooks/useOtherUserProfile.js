import axios from 'axios';
import {useState, useEffect} from 'react';

const useOtherUserProfile = () => {
  const [otherUser, setOtherUser] = useState();
  useEffect(() => {
    axios.get("/api/users/:id")
         .then(res => {
           console.log(res.data);
         }).catch(err => {
            console.log(err.response.data.error)
         })
  })
  return [otherUser, setOtherUser];
}

export default useOtherUserProfile;