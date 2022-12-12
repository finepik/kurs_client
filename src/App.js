import logo from './logo.svg';
import './App.css';
import img from './img.png';
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import Server1 from "./components/Server1";
import Server2 from "./components/Server2";
import menu from "./components/Menu";
import Menu from "./components/Menu";

function App() {
    const menuData = [
        {
            id: 1,
            title: 'Server 1',
            link: 'server1'
        },
        {
            id: 2,
            title: 'Server 2',
            link: 'server2'
        },

    ]

    const menu = menuData.map( el => (
        <Menu key={el.id} title={el.title} link={el.link}/>
    ))

    return (
      <>
          <BrowserRouter>
              <header className="header">

                  <ul class="menu">
                      {menu}
                  </ul>
              </header>
            <div style={{ backgroundImage: `url(${img})`, height: "100vh"}}>
              <Routes >
                  <Route path='/server1' element={<Server1/>}/>
                  <Route path='/server2' element={<Server2/>}/>

              </Routes>
            </div>
          </BrowserRouter>
      </>
  );
}

export default App;
