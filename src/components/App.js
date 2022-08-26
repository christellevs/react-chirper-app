import { useEffect } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard.js";
import NewTweet from "./NewTweet.js";
import TweetPage from "./TweetPage.js";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : (
        <TweetPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
