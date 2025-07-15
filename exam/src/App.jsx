import {Navigation} from "./components/Navigation.jsx";
import {SideMenu} from "./components/SideMenu.jsx";
import './App.css';

function App()
{
  return (
      <div className="app">
          <Navigation />
          <div className="layout">
              <SideMenu />
              <main className="mainContent">
                  {/* ..... */}
              </main>
          </div>
      </div>
  );
}

export default App
