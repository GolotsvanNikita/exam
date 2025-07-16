import {Navigation} from "./components/Navigation.jsx";
import {SideMenu} from "./components/SideMenu.jsx";
import VideoPage from "./components/VideoPage.jsx"
import Comments from "./components/Comments.jsx"
import './App.css';

function App()
{
  return (
      <div className="app">
          <Navigation />
          <div className="layout">
              <SideMenu />
              <main className="mainContent">
                    <VideoPage/>
                    <Comments></Comments>
              </main>
          </div>
      </div>

  );
}

export default App
