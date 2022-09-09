import './newuser.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'
const NewUser = ({ title, inputs }) => {
    const [file, setFile] = useState(null)
    console.log(file)
    return (
        <div className="new-user">
            <Sidebar />
            <Navbar />
            <div className="new-user-container">
                <h1 className="title">{title}</h1>
                <div className="main">
                    <div className="left">
                        <img 
                            src={ file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU"} 
                            alt="preview-img" 
                            className="img" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="form-input">
                                <label htmlFor="file">
                                    Image:
                                    <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input 
                                    type="file" 
                                    id="file" 
                                    style={{ display: "none" }} 
                                    onChange={(e) => setFile(e.target.files[0])}
                                    />
                            </div>
                            {
                                inputs.map((input) => {
                                    return (
                                        <div className="form-input" key={input.id}>
                                            <label htmlFor={input.label}>{input.label}</label>
                                            <input 
                                                type={input.type} 
                                                id={input.label} 
                                                placeholder={input.placeholder }
                                                />
                                        </div>
                                    )
                                })
                            }
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser
