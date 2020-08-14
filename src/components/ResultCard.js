import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ResultCard = ({ quotes }) => {
  const classes = useStyles();

  const { applicationId } = quotes.application;

  const policies = [
    'General Liability',
    'Professional Liability',
    'Business Owners Policy',
  ];
  return (
    <section>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            ID: {applicationId}
          </Typography>
          <Typography variant='h5' component='h2'>
            Available PolicyTypes:
          </Typography>

          {quotes.availablePolicyTypes.map((item, index) => {
            return (
              <div key={item}>
                <Typography variant='body2' component='p'>
                  {item} - {policies[index]}
                </Typography>
              </div>
            );
          })}
        </CardContent>
        <CardActions>
          <a
            href='https://quote.coterieinsurance.com/getquote'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button size='small'>Learn More</Button>
          </a>
        </CardActions>
      </Card>
      <Link to='/'>
        <Button variant='outlined' color='secondary'>
          Back to Homepage
        </Button>
      </Link>
    </section>
  );
};

export default ResultCard;
