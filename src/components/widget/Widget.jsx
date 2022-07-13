import './widget.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type}) => {
    let data; 
    let amount = 200;
    let diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isCurrency: false,
                link: "See all users",
                icon: <PersonOutlineIcon  className="icon" style={{color: "crimson", backgroundColor:"rgba(225, 0, 0, 0.2)"}}/>

            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isCurrency: false,
                link: "See all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" style={{color: "goldenrod", backgroundColor:"rgba(218, 165, 32, 0.3)"}}/>

            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isCurrency: true,
                link: "View net earnings",
                icon: <PaidOutlinedIcon className="icon" style={{color: "green", backgroundColor:"rgba(0, 128, 0, 0.2)"}}/>

            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isCurrency: true,
                link: "See net balance",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color: "purple", backgroundColor:"rgba(128, 0, 128, 0.2)"}}/>

            }
            break;
    
        default:
            break;
    }
    return (        
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <span className="percent positive">^ {diff} %</span>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
