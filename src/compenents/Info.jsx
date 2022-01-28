import {useEffect, useState, } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Info=() => {
    const [user, setUser]=useState("");
    console.Log(user)
    const {id}=useParams();

    useEffect(() => {
        const getUser=async () => {
            try {
                const getOneuser=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(getOneuser.data);

            } catch (error) {

            }


        };
        getUser()
    }, [id]);

    return (
        <h1> {user.name}</h1>
    );
};

export default Info;
