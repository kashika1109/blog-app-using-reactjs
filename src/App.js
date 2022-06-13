import Navbar from './navbar';
import Home from './home';
import Create from './create';
import BlogDetails from './blogDetails';
import NotFound from './notfound'; 
import {BrowserRouter as Router ,Route ,Switch,Link} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">  
      <Navbar /> {/*self closing tag */}
        <div className="content">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/create"> {/* path for the homepage named home.js here / vrna jo bhi url ka part hoga jidhr jana h vo ayega eg /about */}
            <Create /> 
            </Route>
            <Route path="/blogs/:id"> 
            <BlogDetails />
            </Route>
            <Route path="*"> 
            {/* * is like a catch all route now routing starts from top to bottom so if from top it doesnt found any matching path then automatically it will come here and go into not-found  */}
              <NotFound />
            </Route>
          </Switch>
      </div>
    </div>
  </Router>
   );
}

export default App;
