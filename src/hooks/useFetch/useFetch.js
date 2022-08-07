import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const fetchData = async () => {
        try{
            const {data:response} = await axios.get(url)
            setData(response)
            setLoading(false)
        } catch (err) {
            setError(err.message);
            setLoading(false)
        }
    }
    useEffect( () => {
        fetchData()
    },[])
    return {error, loading, data }
}

export default useFetch;