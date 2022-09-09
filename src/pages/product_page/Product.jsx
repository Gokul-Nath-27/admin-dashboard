import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './product.scss'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
const Product = () => {
    return (
        <div className="product">
            <Sidebar />
            <Navbar />
            <div className="product-container">
                <div className="header">
                    ADD NEW EXCLUSIVE
                    <Typewriter
                        onInit={((typewriter) => {
                            typewriter.typeString("Products / Groceries / Others.").start()
                        })}
                    />
                    <Link to="new" style={{textDecoration:"none"}}>
                        <button className="btn">Add Product</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
