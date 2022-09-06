import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <Navbar />
            <div className="single-container">
                <div className="top">
                    <div className="left">
                        <button className="edit-button">edit</button>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="profile" className="item-img" />
                            <div className="details">
                                <h1 className="user-name">Jane doe</h1>
                                <div className="detail-item">
                                    <span className="key">Email:</span>
                                    <span className="value">janedoe@gmail.com</span>
                                </div>
                                <div className="detail-item">
                                    <span className="key">Phone:</span>
                                    <span className="value">+1 256 18 243</span>
                                </div>
                                <div className="detail-item">
                                    <span className="key">Address:</span>
                                    <span className="value">Elton St. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detail-item">
                                    <span className="key">Country:</span>
                                    <span className="value">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 0.7} title="User Spending (Last 6 Month)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <TableList />
                </div>
            </div>
        </div>
    )
}

export default Single
