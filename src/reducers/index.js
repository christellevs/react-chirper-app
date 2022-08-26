import { combinedReducers } from "redux";
import authedUser from "./authedUser.js";
import users from "./users.js";
import tweets from "./tweets.js";

export default combineReducers({
  authedUser,
  users,
  tweets,
});
