import React, {useState} from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Launches() {

    const {id} = useParams();
    axios.get("https://api.spacexdata.com/v4/launches/" + id)
    .then((response)=> {
        const result = Object.entries(response)

        setLaunchh(response.data)
    })
    const  [launchh, setLaunchh] = useState([])
  return (
    <>
    <Navbar Headertitle="Launch Details" Headerleft="Home"/>
    <div className="container">
    <div className="row d-flex justify-content-center" >
    <div className="col-5">
        <div className="card my-4 mx-auto" style={{ width: "30rem"}}>
          <div className="card-body">
            <h5 className="card-title">{launchh.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{launchh.date_local}</h6>
            {launchh.details===0 ? "No" : <p className="card-text">{launchh.details}</p>}
          </div>
        </div>   
    </div>
    </div>
    </div>
    </>

  )
}
