import axios from 'axios';
import {useState, useEffect} from 'react';

const useOtherUserProfile = (user_id) => {
  const [otherUser, setOtherUser] = useState();
  useEffect(() => {
    axios.get(`/api/users/${user_id}`)
         .then(res => {
           console.log(res.data);
         }).catch(err => {
            console.log(err.response.data.error)
         })
  }, [user_id])
  return [otherUser, setOtherUser];
}

export default useOtherUserProfile;