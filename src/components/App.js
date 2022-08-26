import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard.js";
import NewTweet from "./NewTweet.js";
import TweetPage from "./TweetPage.js";
import Nav from "./Nav.js";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {props.loading === true ? null : (
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/tweet/:id" exact element={<TweetPage />} />
              <Route path="/new" exact element={<NewTweet />} />
            </Routes>
          )}
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
