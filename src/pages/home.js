import React from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

import Scream from "../components/Scream"

export default class home extends React.Component {

  state = {
    screams: null
  }

  componentDidMount(){
    axios.get("/screams")
    .then(res => {
      console.log(res.data)
      this.setState({
        screams: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render () {
    console.log(this.state.screams)
    var recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
      ) : <p>Loading...</p>
    return (
     <div className="row">
      <div className="col-md-8">
        {recentScreamsMarkup}
      </div>
      <div className="col-md-4">
        <h1>Other section</h1>
      </div>
     </div>
    )
  }
}
