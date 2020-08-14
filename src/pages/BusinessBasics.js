import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { Link } from 'react-router-dom';

import { addBusinessBasics } from '../features/quesitionSlice';

import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const BusinessBasics = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = React.useState(0);
  const [zipcode, setZipCode] = React.useState(0);
  const [hasData, setHasData] = React.useState(false);

  const handleEmployee = (e) => {
    setEmployees(e.target.value);
  };
  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };
  const handleSubmit = () => {
    if (employees > 0 && zipcode > 0) {
      const data = {
        employees,
        zipcode,
      };
      dispatch(addBusinessBasics(data));
      setHasData(true);
    }
  };
  const classes = useStyles();

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete='off'>
        <h1>Number of Employees</h1>
        <TextField
          id='outlined-number'
          label='Employees'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          onChange={handleEmployee}
        />

        <h1>Zip Code</h1>
        <TextField
          id='outlined-number'
          label='Zip Code'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          onChange={handleZipCode}
          error={zipcode.length > 5 ? true : false}
          helperText={zipcode.length > 5 && 'Please enter a valid Zip Code'}
        />
        <div />
        <Button variant='outlined' color='primary' onClick={handleSubmit}>
          Save
        </Button>
      </form>

      <section className={classes.root}>
        <Link to='/BusinessInfo'>
          <Button variant='outlined' color='secondary'>
            Back
          </Button>
        </Link>
        {!hasData ? (
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<ArrowForwardIcon />}
            disabled
          >
            Next
          </Button>
        ) : (
          <Link to='/BusinessFinance'>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          </Link>
        )}
      </section>
    </Container>
  );
};

export default BusinessBasics;

const Container = styled.section`
  display: grid;
  place-items: center;
  padding: 20px;
`;
