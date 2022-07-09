import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="home_container"> 
                <Navbar />
                main content
            </div>
        </div>
    )
}

export default Home