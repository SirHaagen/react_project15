
import './App.css'
import { NavBar } from './NavBar'
import { FormCard } from './FormCard'
import { Success } from './Success'
import React from 'react';

function App() {

  const access = (value) => {
    if (value === "true") setPage(<Success />)
  }
  const [page, setPage] = React.useState(<FormCard access={access} />);

  const routing = (route) => {
    if (route === "page 1") setPage(<FormCard access={access} />)
    else setPage(<Success />)
  }


  return (<>
    <NavBar routing={routing} />
    {page}
  </>)
}

export default App
