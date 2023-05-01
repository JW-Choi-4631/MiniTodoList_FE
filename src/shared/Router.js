import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Complete from '../pages/Complete'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/detail/:id" element = {<Detail />} />
            <Route path="/complete" element = {<Complete />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;