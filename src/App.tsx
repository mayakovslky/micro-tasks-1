import React from 'react';
import './App.css';
import {Header} from "./Site/Header";
import {Body} from "./Site/Body";
import {Footer} from "./Site/Footer";

function App() {
    return (
        <>
            <Header titleForHeader={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
        </>
)
}

export default App;
