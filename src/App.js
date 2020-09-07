import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Pricing from "./pages/Pricing";

// Articles
import PainRelief from './pages/Articles/PainRelief';


import Layout from "./layout";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            path="/services"
            exact={true}
            component={Services}
          />
          <Route
            path="/about-us"
            exact={true}
            component={About}
          />
          <Route
            path="/videos"
            exact={true}
            component={Videos}
          />
          <Route
            path="/pricing"
            exact={true}
            component={Pricing}
          />
          <Route
            path="/pain-treatment"
            exact={true}
            component={PainRelief}
          />

          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
