import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function Home() {

  const [result, setResult] = useState([])

  axios.get("https://api.spacexdata.com/v4/launchpads")
  .then((response)=>{
    setResult(response.data)
  })
  return (
    <>
          <Navbar Headertitle="All SpaceX Launchpads" Headerleft="Home" />
          <div className="container">
            <div className="row">
              {
                result.map((value)=>{
                  return(
                    <div className="col-sm-6">
                      <div className="card my-3" style={{ width: "35rem" , height:"28rem"}}>
                        <div className="card-body">
                          <h5 className="card-title">{value.full_name}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{value.status}</h6>
                          <p className="card-text">{value.details}</p>
                          {value.launches.length===0 ? <h5>No Launches</h5> : value.launches.slice(0,3).map((launchResult,index)=>{
                            return(
                              <a href={`http://localhost:3000/launches/${launchResult}`} className="card-link">Launch{index+1}</a>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="own" style={{color:"white", textAlign:"center", fontFamily:"Orbitron, sans-serif", marginTop:"5px", marginBottom:"20px"}}><h3>Developed by - Priyank Mistry</h3></div>
    </>
  )
}