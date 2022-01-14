import { useState } from "react"

const useCurrentUser = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleValueChange];
}

export default useCurrentUser;