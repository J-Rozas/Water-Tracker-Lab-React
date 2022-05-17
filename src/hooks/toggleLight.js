import { useState } from "react";

const useToggleLight = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    }

    return (
    {isDarkMode, toggleDarkMode}
  )
}

export default useToggleLight;
