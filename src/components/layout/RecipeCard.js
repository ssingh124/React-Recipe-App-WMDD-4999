import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

import { Link } from 'react-router-dom'

const getStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16.9
  }
})

const RecipeCard = props => {
  const classes = getStyles()

  const { id, label, image, source, uri } = props
  return (
    <Card key={id}>
      <CardHeader title={label} subheader={source} />
      <CardMedia className={classes.media} image={image} label={label} />
      <CardActions>
        <Button size='small' color='primary'>
          <Link
            to={{
              pathname: `/recipe/${id}`,
              state: {
                uri
              }
            }}
          >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
