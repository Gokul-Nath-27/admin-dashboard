import './newuser.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const NewUser = () => {
    return (
        <div className="new-user">
            <Sidebar />
            <Navbar />
            <div className="new-user-container">
                new
            </div>
        </div>
    )
}

export default NewUser
