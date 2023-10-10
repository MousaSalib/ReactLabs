import { createContext, useState } from "react";

export let CrounterContext = createContext();

function CrounterContextProvider ({children}) {
    let [counter, setCounter] = useState(0);
    return <CrounterContext.Provider value={{counter, setCounter}}>{children}</CrounterContext.Provider>
}

export default CrounterContextProvider

