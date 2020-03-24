// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import dummy from '../../dummy-data'
const LikeSection = props => {
  // console.log(props)
  const likes = props.likes;
  const setLikes = props.setLikes;


  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <i className="far fa-heart" onClick={() => setLikes(likes + 1)} />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">

        {likes} Likes</p>
    </div>
  )
};

export default LikeSection;
