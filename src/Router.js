import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

import MenuRutas from './components/MenuRutas'
import Home from './components/Home'
import Serie from './components/Serie';
import Personajes from './components/Personajes';
import CreatePersonaje from './components/CreatePersonaje';
import UpdatePersonaje from './components/UpdatePersonaje';

export default class Router extends Component {
    render() {
        function SeriesComponent() {
            let { idSerie } = useParams();
            return <Serie idSerie={idSerie} />
        }
        function PersonajesComponent() {
            let { idSerie } = useParams();
            return <Personajes idSerie={idSerie} />
        }
        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/serie/:idSerie" element={<SeriesComponent />} />
                    <Route path="/personajes/:idSerie" element={<PersonajesComponent />} />
                    <Route path="/create" element={<CreatePersonaje />} />
                    <Route path="/update" element={<UpdatePersonaje />} />
                </Routes>
            </BrowserRouter>
        )
    }
}