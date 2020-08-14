import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addBusinessInfo } from '../features/quesitionSlice';

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

const industryIds = [
  {
    type: 'Plumber',
    id: 10537,
  },
  {
    type: 'Software developer',
    id: 10391,
  },
  {
    type: 'Lawyer',
    id: 10415,
  },
  {
    type: 'Handyman',
    id: 10109,
  },
];

// From StackOverflow: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(mail) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}

const BusinessInfo = () => {
  const [industryValue, setIndustryValue] = React.useState('Plumber');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [hasData, setHasData] = React.useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const { id } = industryIds.filter((item) => item.type === industryValue)[0];

    // If I had more time, I would show which input the user left empty
    if (name.length > 0 && email.length > 0) {
      const data = {
        name,
        email,
        industryId: id,
      };
      dispatch(addBusinessInfo(data));
      setHasData(true);
    }
  };

  const handleIndustryInput = (e) => {
    setIndustryValue(e.target.value);
  };

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete='off'>
        <h1>Name</h1>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          onChange={handleName}
        />
        <h1>Email</h1>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          onChange={handleEmail}
          error={email.length > 0 ? !validateEmail(email) : false}
          helperText={
            email.length > 0 &&
            !validateEmail(email) &&
            'Please enter a valid email'
          }
        />

        <FormLabel component='legend'>Type of Industry</FormLabel>
        <RadioGroup
          aria-label='industry'
          name='industry'
          value={industryValue}
          onChange={handleIndustryInput}
        >
          <FormControlLabel
            value='Plumber'
            control={<Radio />}
            label='Plumber'
          />
          <FormControlLabel
            value='Software developer'
            control={<Radio />}
            label='Software developer'
          />
          <FormControlLabel value='Lawyer' control={<Radio />} label='Lawyer' />
          <FormControlLabel
            value='Handyman'
            control={<Radio />}
            label='Handyman'
          />
        </RadioGroup>

        <Button
          variant='outlined'
          color='primary'
          onClick={handleSubmit}
          disabled={name.length > 0 && validateEmail(email) ? false : true}
        >
          Save
        </Button>
      </form>

      <section className={classes.root}>
        <Link to='/'>
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
          <Link to='/BusinessBasics'>
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

export default BusinessInfo;

const Container = styled.section`
  display: grid;
  place-items: center;
  padding: 20px;
`;
