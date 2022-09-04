import "./sidebar.css"
import FeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionIcon from '@mui/icons-material/HelpOutline';
import JobIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import CourseIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FeedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <JobIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <CourseIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Jane Doe</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}
