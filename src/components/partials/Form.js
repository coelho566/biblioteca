import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Home from '../../pages/Home'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginBottom: 60
    },
  },

  b: {
    marginTop: 20
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [livro, setLivro] = useState("");
  const [autor, setAutor] = useState("");
  const [data, setData] = useState("");

  const [list, setList] = useState([]);

  function FormataStringData(data) {
    var ano = data.split("-")[0];
    var mes = data.split("-")[1];
    var dia = data.split("-")[2];

    return `${dia}/${mes}/${ano}`;

  }

  function addAction(e) {
    e.preventDefault();

    let date = FormataStringData(data);
    let newList = [...list, { livro: livro, autor: autor, data: date }];
    setList(newList);

  }



  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Titulo" onChange={e => setLivro(e.target.value)} />
        <TextField id="standard-basic" label="Autor" onChange={e => setAutor(e.target.value)} />
        <TextField
          id="date"
          label="Data de lançamento"
          type="date"

          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }} onChange={e => setData(e.target.value)}
        />
        <Button className={classes.b} variant="outlined" color="primary" onClick={addAction}>Cadastrar</Button>
      </form>
      <Home list={list}></Home>
    </>
  );
}