import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets.js";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState("");

  const TEXT_AREA_MAX = 280;

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(text, id));
    console.log("New Tweet: ", text);
    setText("");
  };

  const tweetLeft = TEXT_AREA_MAX - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/* TODO: Redirect to / if submitted */}
        <textarea
          className="textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          maxLength={TEXT_AREA_MAX}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
