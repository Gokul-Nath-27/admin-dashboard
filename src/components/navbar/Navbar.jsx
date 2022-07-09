import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Navbar = () => {
    return (
        <div className='navbar'>
           <div className="wrapper">
               <div className="search">
                  <input type="text" placeholder='Search'/>
                  <SearchIcon />
               </div>
               <div className="items">
                  <div className="item">
                     English 
                     <LanguageIcon className="icon"/>
                  </div>
                  <div className="item">
                     <DarkModeOutlinedIcon className="icon" />
                  </div>
                  <div className="item">
                     <FullscreenExitOutlinedIcon  className="icon"/>
                  </div>
                  <div className="item" data-count="5">
                     <NotificationsNoneOutlinedIcon className="icon" />
                  </div>
                  <div className="item" data-count="8">
                     <ChatBubbleOutlineOutlinedIcon className="icon" />
                  </div>
                  <div className="item">
                     <ListOutlinedIcon className='icon'/>
                  </div>
                  <div className="item" >
                     <SettingsOutlinedIcon className="icon" />
                  </div>
                  <div className="avatar"></div>
               </div>
           </div>
        </div>
    )
}

export default Navbar
