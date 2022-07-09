import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import DescriptionIcon from '@mui/icons-material/Description';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top"><span className="logo">lamadmin</span></div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <PersonOutlineIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <FeaturedPlayListIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <FavoriteIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <DescriptionIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Log Out</span>
                    </li>
                    <p className="title">THEME</p>

                </ul>
            </div> 
            <div className="bottom">
                <div className="colorTheme"></div>
                <div className="colorTheme"></div>
            </div>
        </div>
    )
}

export default Sidebar
