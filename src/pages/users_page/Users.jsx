import './users.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/dataTable/DataTable'
import {Link} from 'react-router-dom'
const Users = () => {

    return (
        <div className="users">
            <Sidebar />
            <Navbar />
            <div className="user-container">
                <div className="add-post">
                    <h1 className="title">Add new user.</h1>
                    <Link to="new" style={{textDecoration:"none"}}>
                        <div className="btn">Add user</div>
                    </Link>
                    
                </div>
                <DataTable className="data-table"/>
            </div>
            Users
        </div>
    )
}

export default Users
