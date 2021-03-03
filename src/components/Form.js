import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
export default function BasicTextFields() {
    const classes = useStyles();

    const [livro, setLivro] = useState("");
    const [autor, setAutor] = useState("");
    const [data, setData] = useState("");

    const [list, setList] = useState([]);

    useEffect(() => {

        setList([
            { livro: 'João', autor: 'Pedro', data: '10/05/1998' },

        ])


    }, []);


    function addAction(e) {
        e.preventDefault();
        let newList = [...list, { livro: livro, autor: autor, data: data }];
        setList(newList);

    }

    function updateLivro({ target }, index) {
        const itensCopy = Array.from(list);
        itensCopy.splice(index, 1, { livro: livro, autor: autor, data: data });
        setList(itensCopy);
    }

    function deleteLivro(index) {
        const itensCopy = Array.from(list);
        itensCopy.splice(index, 1);
        setList(itensCopy);
    }

    return (
        <Container >
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Livro" onChange={e => setLivro(e.target.value)} />
            <TextField id="standard-basic" label="Autor" onChange={e => setAutor(e.target.value)} />
            <TextField id="standard-basic" label="Data Entrada" onChange={e => setData(e.target.value)} />
            <Button variant="outlined" onClick={addAction}>Cadastrar</Button>
        </form><br/><br/>
        <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Livro</TableCell>
                            <TableCell align="right">Autor</TableCell>
                            <TableCell align="right">Data</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.livro}
                                </TableCell>
                                <TableCell align="right">{row.autor}</TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color="primary" size="small" onClick={updateLivro}>
                                        Editar
                                </Button>
                                </TableCell>
                                <TableCell align="right"><Button variant="outlined" color="secondary" size="small" onClick={deleteLivro}>
                                    Excluir
                                </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
