import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Redirect from './redirect';

export default function Routers() {

    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Redirect' element={<Redirect />} />

        </Routes>
    )
}