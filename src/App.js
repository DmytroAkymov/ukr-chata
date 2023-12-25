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
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Provider } from 'react-redux';
import { store } from './store/store'
import UserPanel from './pages/UserPanel';

const App = () => {
    return (
        <Provider store={store}>
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/userpanel" element={<UserPanel />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;
