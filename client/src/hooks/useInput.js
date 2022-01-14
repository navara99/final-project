import { useState } from "react"

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return { value, setValue, handleValueChange };
}

export default useInput