import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

import MenuRutas from './components/MenuRutas'
import Home from './components/Home'
import Serie from './components/Serie';

export default class Router extends Component {
    render() {
        // Función para componentes que reciben parámetros por URL
        function SeriesComponent() {
            let { id } = useParams();
            return <Serie idSerie={id} />
        }
        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/serie/:id" element={<SeriesComponent />} />
                </Routes>
            </BrowserRouter>
        )
    }
}