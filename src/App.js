import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";
import UserList from "./compenents/UserList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Info from "./compenents/Info";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from "react-bootstrap";


function App() {
    const [users, setUsers]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        const getUsers=() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((res) => setUsers(res))
                .catch((err) => console.log(err));
        };
        getUsers();
        setLoading(false);
        console.log(users);

    }, []);

    return (<div className="App">
        {loading? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>:<Router>
            <Routes>
                <Route path="/" element={<UserList list={users} />} />
                <Route path="/info/:id" element={<Info />} />
            </Routes>
        </Router>}

    </div>
    );
}

export default App;
