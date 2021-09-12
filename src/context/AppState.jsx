import React, {useState} from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [series,setSeries] = useState(
    [{
      name: 'Y',
      data: [{
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }]
    }]
  )
  return (
    <AppContext.Provider value={{ 
      series,
      setSeries,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState