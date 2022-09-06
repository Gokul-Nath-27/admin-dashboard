import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRow, userColumns } from '../../dataSource';
import { Link } from "react-router-dom"


const DataTable = () => {
    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 260, renderCell: () => {
                return (
                    <div className="cell-action">
                        <Link to="id" style={{textDecoration: "none"}}> 
                            <div className="viewButton">view</div>
                        </Link>
                        <div className="deleteButton">delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className="data-table">
            <DataGrid
                rows={userRow}
                columns={userColumns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable
