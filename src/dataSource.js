export const userRow = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "active",
        email: "snaow1@gmail.com",
        age: 26
    },
    {
        id: 2,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "passive",
        email: "snaow1@gmail.com",
        age: 33
    },
    {
        id: 3,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "active",
        email: "snaow1@gmail.com",
        age: 28
    },
    {
        id: 4,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "active",
        email: "snaow1@gmail.com",
        age: 35
    },
    {
        id: 5,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "pending",
        email: "snaow1@gmail.com",
        age: 42
    },
    {
        id: 6,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "active",
        email: "snaow1@gmail.com",
        age: 35
    },
    {
        id: 7,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "active",
        email: "snaow1@gmail.com",
        age: 35
    },
    {
        id: 8,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "passive",
        email: "snaow1@gmail.com",
        age: 35
    },
    {
        id: 9,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "active",
        email: "snaow1@gmail.com",
        age: 35
    },
    {
        id: 10,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        status: "pending",
        email: "snaow1@gmail.com",
        age: 35
    }
]

export const userColumns =[
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'User', width: 260, renderCell: (params) => {
        return (
            <div className="cell-with-img">
                <img className="cell-img" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},
    { field: 'email', headerName: 'Email', width: 260 },
    { field: 'age', headerName: 'Age', width: 260 },
    { field: 'status', headerName: 'Status', width: 260 , renderCell: (params) => {
        return(
            <div className={`status ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    }},



]