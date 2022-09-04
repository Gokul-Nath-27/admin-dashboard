import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'
// This is for fireship Navbar.
// import { ReactComponent as BellIcon } from '../../icons/bell.svg'
// import { ReactComponent as CaretIcon } from '../../icons/caret.svg'
// import { ReactComponent as PlusIcon } from '../../icons/plus.svg'
// import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg'
const Home = () => {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <Navbar />
                <div className="home_container">
                    <div className="widgets">
                        <Widget type="user"/>
                        <Widget type="order"/>
                        <Widget type="earnings"/>
                        <Widget type="balance"/>
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chart />
                    </div>  
                    <div className="list-container">
                        <div className="list-title">Latest Transaction</div>
                        <TableList />
                    </div>              
                </div>
            </div>


        </>
    )
}

export default Home
