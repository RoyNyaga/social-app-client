import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

// MUI stuff
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    display: 'flex'
  }
}

export default class Scream extends React.Component {
  render () {
    const {
      classes, scream: {
        body, createdAt, userImage,
        userHandle, screamId, likeCount, commentCount
      }
    } = this.props
    console.log(this.props)
    return (
      <div className='card text-center'>
        <img className='card-img-top' src='...' alt='Card image cap' />
        <div className='card-body'>
          <h4 className='card-title'>Card title</h4>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href='#' className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    )
  }
}
