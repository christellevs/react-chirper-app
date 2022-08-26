import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

  const TEXT_AREA_MAX = 280;

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Tweet: ", text);
    setText("");
    // TODO: Add Tweet to store
  };

  const tweetLeft = TEXT_AREA_MAX - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
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

export default NewTweet;
