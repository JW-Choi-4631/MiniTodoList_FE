import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="detail" element = {<Detail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;