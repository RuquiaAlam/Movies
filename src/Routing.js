import { BrowserRouter, Route, Link } from "react-router-dom";

import Details from "./component/details/Details";
import VideoStream from "./component/details/VideoStream.js";

import App from "./App.js";
const Routing = () =>
{
    return(
<>
<BrowserRouter>
<Route exact path ="/" component = {App }/>
<Route path="/data" component= {Details} />
{/* <Route path="https://api.themoviedb.org/3/movie/${this.state.movieId}/videos?api_key=a2aa49efe8d37044c7ffabc6f89958bb&language=en-US"  component={VideoStream} />  */}

</BrowserRouter>

</>
    );
}

export default Routing;
