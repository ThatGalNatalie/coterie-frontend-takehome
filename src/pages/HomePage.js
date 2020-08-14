import React from 'react';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CoverImg from '../images/undraw_survey_05s5.svg';

const HomePage = () => {
  return (
    <Container>
      <Grid>
        <Link to='/BusinessInfo'>
          <Button variant='outlined' color='primary'>
            Find My Quote
          </Button>
        </Link>
        <img src={CoverImg} alt='CoverImg Svg' />
      </Grid>
    </Container>
  );
};

export default HomePage;

const Container = styled.section`
  display: grid;
  place-items: center;
  padding: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  img {
    max-width: 100%;
    height auto; 
  }
button {
  margin: 10px;
}
`;
