import './newuser.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
const NewUser = () => {
    return (
        <div className="new-user">
            <Sidebar />
            <Navbar />
            <div className="new-user-container">
                <h1 className="title">Add New Post.</h1>
                <div className="main">
                    <div className="left">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU" alt="preview-img" className="img" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="form-input">
                                <label htmlFor="file">
                                    Image:
                                    <DriveFolderUploadOutlined className="icon"/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username"/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="name">Name and Surname</label>
                                <input type="text" id="name"placeholder="John doe"/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="jhondoe@gmail.com"/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" placeholder="+1 432 473 68"/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password"/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address"/>
                            </div>
                            <div className="form-input">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" placeholder="USA"/>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser
