import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { fetchQuotes } from '../features/quotesSlice';

import ResultCard from '../components/ResultCard';
import CircularProgress from '@material-ui/core/CircularProgress';

import WarningImg from '../images/undraw_warning_cyit.svg';

// const testData = {
//   businessName: 'Abc Consulting',
//   contactEmail: 'myemail@gmail.com',
//   grossAnnualSales: 5000000,
//   annualPayroll: 250000,
//   numEmployees: 2,
//   industryId: '10537',
//   locations: [
//     {
//       zip: '45202',
//     },
//   ],
// };

const Result = () => {
  const dispatch = useDispatch();
  const { basics, finance, info } = useSelector((state) => state).questionSlice;
  const { loading, quotes } = useSelector((state) => state).quotesSlice;

  React.useEffect(() => {
    const { employees, zipcode } = basics;
    const { name, email, industryId } = info;
    const { sales, payroll } = finance;

    const data = {
      businessName: name,
      contactEmail: email,
      grossAnnualSales: Number(sales),
      annualPayroll: Number(payroll),
      numEmployees: Number(employees),
      industryId,
      locations: [
        {
          zip: zipcode,
        },
      ],
    };

    dispatch(fetchQuotes(data));
  }, [dispatch]);

  if (loading) {
    return (
      <section>
        <Center>
          <CircularProgress />
        </Center>
      </section>
    );
  } else if (!quotes.isSuccess) {
    return (
      <section>
        <ErrorGrid>
          <Center>
            <h1>Oh No! We ran into an error :(</h1>
            <Link to='/'>
              <Button variant='outlined' color='secondary'>
                Take Me Back :)
              </Button>
            </Link>
          </Center>
          <img src={WarningImg} alt='Warning Svg' />
        </ErrorGrid>
      </section>
    );
  } else {
    return (
      <section>
        <Center>
          <ResultCard quotes={quotes} />
        </Center>
      </section>
    );
  }
};

export default Result;

const Center = styled.div`
  display: grid;
  place-items: center;
`;

const ErrorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  img {
    max-width: 100%;
    height auto; 
  }
`;
