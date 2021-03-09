import React from 'react';
import { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);




const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    const [list, setList] = useState([]);

    useEffect(() => {

        setList([
            { livro: 'João', autor: 'Pedro', data: '10/05/1998' },

        ])


    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Titulo</StyledTableCell>
                        <StyledTableCell align="right">Autor</StyledTableCell>
                        <StyledTableCell align="right">Data</StyledTableCell>
                        <StyledTableCell align="right">Editar</StyledTableCell>
                        <StyledTableCell align="right">Excluir</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.livro}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.autor}</StyledTableCell>
                            <StyledTableCell align="right">{row.data}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Fab size="small" color="primary" aria-label="edit" className={classes.margin}>
                                <EditIcon />
                                </Fab>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                                    <DeleteForeverIcon/>
                                </Fab>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
