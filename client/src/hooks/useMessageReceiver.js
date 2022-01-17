import { useState } from "react"
const useMessageReceiver = () => {
  const [receiverId, setReceiverId ] = useState(null);

  const handleOnClick = (e) => {
    setReceiverId(e.target.value)
  }
  return [receiverId, setReceiverId,handleOnClick]
}

export default useMessageReceiver;