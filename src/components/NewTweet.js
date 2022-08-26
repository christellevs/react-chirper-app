import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

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

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          maxLength={280}
        />
      </form>
    </div>
  );
};

export default NewTweet;
