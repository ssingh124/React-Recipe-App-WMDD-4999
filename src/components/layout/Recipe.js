import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const getStyles = makeStyles({
  root: {
    marginTop: '20em'
  }
})

const Recipe = ({ label, image, source, url }) => {
  const classes = getStyles()

  return (
    <Container fixed className={classes.root}>
      {label && (
        <Card>
          <CardMedia
            alt={label}
            component='img'
            height='140'
            image={image}
            title={label}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {label}
            </Typography>
            <Typography
              gutterBottom
              variant='body2'
              color='textSecondary'
              component='p'
            >
              Source: {source}
            </Typography>
            <Typography
              gutterBottom
              variant='body2'
              color='textSecondary'
              component='p'
            >
              Website: {url}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              <Link
                to={{
                  pathname: '/'
                }}
              >
                Go Back Home
              </Link>
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  )
}

export default Recipe
