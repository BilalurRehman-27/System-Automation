import React, { FunctionComponent } from "react";
import { barChartData, histogramData } from '../../assets/mock/DummyData';

import {
  Box,
  Grid,
  Card,
  CardContent,
  makeStyles,
  createStyles,
  Typography
} from "@material-ui/core";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from 'recharts';

type DashboardProps = {};

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '2%'
    },
    barGraph: {
      height: '40vh',
      '& p': {
        color: '#757575',
        fontWeight: 'bold',
      }
    },
    histogram: {
      height: '35vh',
      '& p': {
        color: '#757575',
        fontWeight: 'bold',
      }
    },
    cardContainer: {
      height: '35vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#3492CA',
      '& h2': {
        fontWeight: 'bold',
        color: '#fff'
      },
    },
    text: {
      flexGrow: 1,
      color: '#fff'
    },
  }),
);

const Dashboard: FunctionComponent<DashboardProps> = (props) => {

  const classes = useStyles();

  return (
    <Box className={classes.container} component="div">
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Card>
            <CardContent className={classes.cardContainer}>
              <Typography variant="body2" className={classes.text} align="center">
                Open Cases
              </Typography>
              <Typography variant="h2" className={classes.text} align="center">
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={9}>
          <Card>
            <CardContent className={classes.histogram}>
              <Typography variant="body2" className={classes.text} align="center">
                Average Number of Days to Close Investigation
              </Typography>
              <ResponsiveContainer>
                <BarChart
                  layout="vertical"
                  data={barChartData}
                  margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <XAxis tick={false} stroke="#bdbdbd" type="number" dataKey="value" />
                  <YAxis tick={false} stroke="#bdbdbd" type="category" dataKey="name" />
                  <Bar barSize={40} dataKey="value" fill="#4fc3f7" fillOpacity="0.4" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent className={classes.barGraph}>
              <Typography variant="body2" className={classes.text} align="center">
                Average Number of Days to Close Investigation
              </Typography>
              <ResponsiveContainer>
                <BarChart
                  data={histogramData}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <XAxis tickLine={false} type="category" dataKey="name" />
                  <YAxis tick={false} stroke="#bdbdbd" type="number" dataKey="value" />
                  <Bar dataKey="value" fill="#3492CA" fillOpacity="0.9" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
