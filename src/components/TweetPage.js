import { connect } from "react-redux";

const TweetPage = (props) => {
  console.log(props);
  return <div>TWEET PAGE</div>;
};

const mapStateToProps = ({ authedUser, tweets, users }, props) => {
  const { id } = props.match.params;

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
  };
};

export default connect(mapStateToProps)(TweetPage);
