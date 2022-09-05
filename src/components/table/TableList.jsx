import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableList = () => {

    const rows = [
        {
            id:101,
            product:"Acer Nitro 5",
            img: "https://www.gizbot.com/images/2019-10/acer-nitro-5_157008541470.jpg",
            customer: "Ashana",
            date: "7 March",
            amount: 700,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id:102,
            product:"Play Station 5",
            img: "https://cdn.vox-cdn.com/thumbor/nEmwnn3PJyXqoKcr37D3T1o8AiQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21991383/vpavic_4261_20201023_0058.jpg",
            customer: "Zysing Chen",
            date: "27 January",
            amount: 700,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id:103,
            product:"Iphone 13 pro",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLZVdOGNZgJ7FF-hCDgniTzpFUaZCJfOzIwzH2hZGDLZI3iUyYMeA&usqp=CAE&s",
            customer: "Chirid",
            date: "6 April",
            amount: 700,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id:104,
            product:"Samsung Led TV",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzgRZgTpxm_yARkC_blPEabyohAhodazefRt61mPGVA_8PF7786Jf&usqp=CAE&s",
            customer: "Jonas Mathew",
            date: "4 June",
            amount: 700,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id:105,
            product:"Lamp",
            img: "https://images.unsplash.com/photo-1573676386604-78f8ed228e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGUlMjBsYW1wfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            customer: "Diotron Steff",
            date: "8 Feburary",
            amount: 700,
            method: "Online Payment",
            status: "Approved"
        },
        {
            id:106,
            product:"TWS Headset",
            img: "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000",
            customer: "Jhon Doe",
            date: "24 May",
            amount: 700,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id:107,
            product:"Stylus",
            img: "https://images.unsplash.com/photo-1629973700222-4da8780086d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R5bHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            customer: "Cofrein Stena",
            date: "30 July",
            amount: 700,
            method: "Online Payment",
            status: "Approved"
        }
    ]
    
    return (
            <TableContainer className="table"component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-cell">Tracking ID</TableCell>
                            <TableCell className="table-cell">Product</TableCell>
                            <TableCell className="table-cell">Customer</TableCell>
                            <TableCell className="table-cell">Date</TableCell>
                            <TableCell className="table-cell">Amonut</TableCell>
                            <TableCell className="table-cell">Payment Method</TableCell>
                            <TableCell className="table-cell">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell className="table-cell">
                                    <div className="cell-wrapper">
                                        <img src={row.img} className="image" alt=""/>
                                        {row.product }
                                    </div>
                                </TableCell>
                                <TableCell className="table-cell">{row.customer}</TableCell>
                                <TableCell className="table-cell">{row.date}</TableCell>
                                <TableCell className="table-cell">{row.amount}</TableCell> 
                                <TableCell className="table-cell">{row.method}</TableCell>
                                <TableCell className="table-cell">
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default TableList
