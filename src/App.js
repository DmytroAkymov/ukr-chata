import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Events';
import NoPage from './pages/NoPage';
import Services from './pages/Services';
import Forum from './pages/Forum';
import Contacts from './pages/Contacts';
import MainLayout from './layouts/MainLayout';
import NewsList from './pages/NewsList';
import SingleNewsPost from './pages/SingleNewsPost';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/news" element={<NewsList />} />
                    <Route path="/news/:titleId" element={<SingleNewsPost />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
