import './users.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/dataTable/DataTable'

const Users = () => {

    return (
        <div className="users">
            <Sidebar />
            <Navbar />
            <div className="home-container">
                <DataTable />
            </div>
            Users
        </div>
    )
}

export default Users
