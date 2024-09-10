import React, { createContext, useState } from 'react'



export const loginContext = createContext({})
export const editResponseContext = createContext({})


//export const sample = createContext({})



function DataShare({ children }) {
  const [login, setLogin] = useState({})
  const [editResponse, setEditResponse] = useState({})





  return (
    //access value of the context
    <loginContext.Provider value={{ login, setLogin }}>

      <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
        {children}
      </editResponseContext.Provider>                                                                      {/* <sample>{children}</sample> */}

    </loginContext.Provider>
  )
}

export default DataShare