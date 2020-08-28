import React, { FunctionComponent } from 'react';
import moment from 'moment';
import {
    makeStyles,
    createStyles,
    Box,
    IconButton,
    List,
    ListItem,
    Chip,
    Divider,
    Grid,
    Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

/* Dummy data import */
import { caseList } from '../../../../assets/mock/DummyData';


type EntriesProps = {};

const useStyles = makeStyles(() =>
    createStyles({
        chip: {
            backgroundColor: '#9e9e9e',
            color: '#fff',
            borderRadius: '4px',
            textTransform: 'uppercase',
        },
        dateStamp: {
            color: '#565756',
            fontSize: '14px',
            lineHeight: '2rem'

        },
        entryDetails: {
            fontSize: '12px'
        },
        chipContainer: {
            textAlign: 'center'
        }
    }),
);

const Entries: FunctionComponent<EntriesProps> = (props) => {

    const classes = useStyles();

    return (
        <List className="case-entries-container">
            {caseList.map((item, index) =>
                <Box key={index}>
                    <ListItem>
                        <Grid container alignItems="center" justify="space-between" >
                            <Grid item xs={7} >
                                <Typography className={classes.dateStamp}>
                                    {moment(item.dateOpened).format("MMMM DD, YYYY hh:mm a")}
                                </Typography>
                                <Typography className={classes.entryDetails}>
                                    {item.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.chipContainer} >
                                <Chip size="small" className={classes.chip}
                                    label={item.additionalData ? item.additionalData.tag : 'Generic'} />
                            </Grid>
                            <Grid item xs={1} >
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider />
                </Box>
            )}
        </List>
    )
}

export default Entries
