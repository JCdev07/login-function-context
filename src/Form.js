import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import { LanguageContext } from './contexts/LanguageContext';

import styles from './styles/FormStyles';

const words = {
   english: {
      signIn: 'Sign in',
      email: 'Email',
      password: 'Password',
      remember: 'Remember Me',
   },
   french: {
      signIn: 'Se Connecter',
      email: 'Adresse Electronique',
      password: 'Mot de Passe',
      remember: 'Souviens-toi De Moi',
   },
   spanish: {
      signIn: 'Registrarse',
      email: 'Correo Electronico',
      password: 'Contrasena',
      remember: 'Recuirdame',
   },
};

class Form extends Component {
   static contextType = LanguageContext;

   render() {
      const { language, changeLanguage } = this.context;
      const { classes } = this.props;
      const { signIn, email, password, remember } = words[language];

      return (
         <main className={classes.main}>
            <Paper className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutLinedIcon />
               </Avatar>
               <Typography variant='h5'>{signIn}</Typography>
               <Select value={language} onChange={changeLanguage}>
                  <MenuItem value='english'>English</MenuItem>
                  <MenuItem value='french'>French</MenuItem>
                  <MenuItem value='spanish'>Spanish</MenuItem>
               </Select>
               <form className={classes.form}>
                  <FormControl margin='normal' required fullWidth>
                     <InputLabel htmlFor='email'>{email}</InputLabel>
                     <Input id='email' name='email' autoFocus></Input>
                  </FormControl>
                  <FormControl margin='normal' required fullWidth>
                     <InputLabel htmlFor='password'>{password}</InputLabel>
                     <Input id='password' name='password' autoFocus></Input>
                  </FormControl>
                  <FormControlLabel
                     control={<Checkbox color='primary' />}
                     label={remember}
                  />
                  <Button
                     variant='contained'
                     type='submit'
                     fullWidth
                     color='primary'
                     className={classes.submit}
                  >
                     Sign In
                  </Button>
               </form>
            </Paper>
         </main>
      );
   }
}

export default withStyles(styles)(Form);
