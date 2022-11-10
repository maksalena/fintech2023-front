import React, {useEffect} from 'react';
import axios from 'axios'

function DataFetching(){
    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/transactions')
        .then (res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

}

export default DataFetching;
