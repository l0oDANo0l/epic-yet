// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Vote } from './pages/vote';
import { Stats } from './pages/stats';
import { Map } from './pages/map';
import { Routes, Route, Outlet, Link  } from "react-router-dom";
import { About } from './pages/about';

export function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Map />} />
          <Route path="map" element={<Map />} />
          <Route path="party" element={<Vote scene="Party" />} />
          <Route path="music" element={<Vote scene="Music" />} />
          <Route path="snow" element={<Vote scene="Snow" />} />
          <Route path="snow/ski" element={<Vote scene="Snow" activity='skiing' />} />
          <Route path="snow/board" element={<Vote scene="Snow" activity='snowboarding' />} />
          <Route path="surf" element={<Vote scene="Surf" />} />
          <Route path="trail" element={<Vote scene="Trail" />} />
          <Route path="trail/run" element={<Vote scene="Trail" activity="run" />} />
          <Route path="trail/bike" element={<Vote scene="Trail" activity="bike"  />} />
          <Route path="river" element={<Vote scene="River" />} />
          <Route path="wind" element={<Vote scene="Wind" />} />
          <Route path="wind/surf" element={<Vote scene="Wind" activity='surf' />} />
          <Route path="wind/kite" element={<Vote scene="Wind" activity='kite' />} />
          <Route path="about" element={<About />} />
          <Route path="stats" element={<Stats />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (<>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/map">Epic Map</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/party">Party</Link>
          </li>
          <li>
            <Link to="/snow">Snow</Link>
          </li>
          <li>
            <Link to="/trail">Trail</Link>
          </li>
          <li>
            <Link to="/river">River</Link>
          </li>
          <li>
            <Link to="/wind">Window</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  </>) 
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
