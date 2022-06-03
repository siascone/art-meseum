import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import {Route} from 'react-router-dom';
import { Switch } from "react-router-dom";

function App() {
  // console.log(harvardArt);
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>

      <Switch>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>

        <Route exact path="/">
          <div>
            <h2>Harvad Art Meseum</h2>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
          </div>
        </Route>

        <Route>
          <div>
            <h2>Page Not Found</h2>
          </div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
