import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { Link } from 'react-router-dom';

import { addBusinessFinance } from '../features/quesitionSlice';

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

const BusinessFinance = () => {
  const dispatch = useDispatch();
  const [sales, setSales] = React.useState('50000');
  const [payroll, setPayroll] = React.useState('50000');
  const [hasData, setHasData] = React.useState(false);

  const handleSalesInput = (e) => {
    setSales(e.target.value);
  };

  const handlePayrollInput = (e) => {
    setPayroll(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      sales,
      payroll,
    };
    dispatch(addBusinessFinance(data));
    setHasData(true);
  };

  const classes = useStyles();

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete='off'>
        <h1>Annual Sales</h1>
        <FormLabel component='legend'>Sales</FormLabel>
        <RadioGroup
          aria-label='sales'
          name='sales'
          value={sales}
          onChange={handleSalesInput}
        >
          <FormControlLabel value='50000' control={<Radio />} label='50K' />
          <FormControlLabel value='75000' control={<Radio />} label='75K' />
          <FormControlLabel value='100000' control={<Radio />} label='100K' />
          <FormControlLabel value='150000' control={<Radio />} label='150K' />
          <FormControlLabel value='200000' control={<Radio />} label='200K' />
        </RadioGroup>

        <h1>Annual Payroll</h1>
        <FormLabel component='legend'>Payroll</FormLabel>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={payroll}
          onChange={handlePayrollInput}
        >
          <FormControlLabel value='50000' control={<Radio />} label='50K' />
          <FormControlLabel value='75000' control={<Radio />} label='75K' />
          <FormControlLabel value='100000' control={<Radio />} label='100K' />
          <FormControlLabel value='150000' control={<Radio />} label='150K' />
          <FormControlLabel value='200000' control={<Radio />} label='200K' />
        </RadioGroup>
        <div />

        <Button variant='outlined' color='primary' onClick={handleSubmit}>
          Save
        </Button>
      </form>

      <section className={classes.root}>
        <Link to='/BusinessBasics'>
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
            Get Quote
          </Button>
        ) : (
          <Link to='/results'>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<ArrowForwardIcon />}
            >
              Get Quote
            </Button>
          </Link>
        )}
      </section>
    </Container>
  );
};

export default BusinessFinance;

const Container = styled.section`
  display: grid;
  place-items: center;
  padding: 20px;
`;
