import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (title) return document.title = title + " • vCareer";
    document.title = "vCareer";
  }, [title]);
};

export default useTitle;