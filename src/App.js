import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';
import './App.css';

import Stores from './Stores';
import User from "./User";

function App() {
    return (
        <Provider stores={Stores}>
            <BrowserRouter>
                <header className="app-header">
                    <ul className="menu-bar">
                        <li><Link to="/">HOME</Link></li>
                        {/*<li><Link to="/">회원정보변경</Link></li>
                        <li><Link to="/">고객센터</Link></li>
                        <li><Link to="/">장바구니</Link></li>
                        <li><Link to="/">배송조회</Link></li>
                        <li><Link to="/">마일리지</Link></li>
                        <li><Link to="/">이용안내</Link></li>*/}
                    </ul>
                </header>
                
                <section className="app-body">
                    <Route path="/" exact component={User}/>
                    <Route path="/login" exact component={User}/>
                </section>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
