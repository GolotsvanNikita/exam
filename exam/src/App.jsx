import {Navigation} from "./components/Navigation.jsx";
import {SideMenu} from "./components/SideMenu.jsx";
import './App.css';
import {MainPage} from "./components/MainPage.jsx";

function App()
{
  return (
      <div className="app">
          <Navigation />
          <div className="layout">
              <SideMenu />
              <main className="mainContent">
                  <MainPage/>
              </main>
          </div>
      </div>
  );
}

export default App;
