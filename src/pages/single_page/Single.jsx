import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <Navbar />
            <div className="single-container">
                Single
            </div>
        </div>
    )
}

export default Single
