import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, []);
};

export default useTitle;