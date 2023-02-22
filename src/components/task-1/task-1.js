import "./task1.scss";
import PropTypes from "prop-types"

function Task1({username,tag,avatar,location,stats}){
return(   
<div>
    <div className="profile1">
        <div className="description1">
            <img
            src={avatar}
            alt="User avatar"
            className="avatar1"
            />
            <p className="name1">{username}</p>
            <p className="tag1">{tag}</p>
            <p className="location1">{location}</p>
        </div> 

        <ul className="stats1">
            <li style={{backgroundColor:"LightGreen"}} className="stat1">
            <span className="label1">Followers</span>
            <span className="quantity1">{stats.followers}</span>
            </li>
            <li style={{backgroundColor:"LightGreen"}} className="stat1">
            <span className="label1">Views</span>
            <span className="quantity1">{stats.views}</span>
            </li>
            <li style={{backgroundColor:"LightGreen"}} className="stat1">
            <span className="label1">Likes</span>
            <span className="quantity1">{stats.likes}</span>
            </li>
        </ul>
    </div>
</div>
)
}

Task1.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
  };


export default Task1;

// ,tag,location,avatar,