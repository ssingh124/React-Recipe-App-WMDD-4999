import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const Form = props => {
  const classes = getStyles()
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <TextField
        className={classes.textField}
        label='Secret Ingredients'
        margin='normal'
        name='recipeName'
        onChange={e => props.onInputChange(e.target.value)}
        variant='outlined'
      />
      <Button variant='outlined' className={classes.button} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form
