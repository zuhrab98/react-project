import './App.scss';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Profile} from './components/Profile/Profile';
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";

import {Route, Routes} from "react-router-dom";
import React from "react";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


function App({store}) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper__content'>
                <Routes>

                    <Route exact path='/profile'
                           element={
                               <Profile/>
                           }>

                    </Route>

                    <Route exact path='/dialogs'
                           element={
                               <DialogsContainer/>
                           }>
                    </Route>

                    <Route exact path={'/users'}
                           element={
                               <UsersContainer/>
                           }>
                    </Route>

                    <Route exact path='/news'
                           element={
                               <News/>
                           }>
                    </Route>

                    <Route exact path='/music'
                           element={
                               <Music/>
                           }>
                    </Route>

                    <Route exact path='/setting'
                           element={
                               <Setting/>
                           }>
                    </Route>

                </Routes>
            </div>
        </div>
    )
}

export default App;
