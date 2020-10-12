import React, { FunctionComponent, MouseEvent } from 'react';
import moment from 'moment';
import {
    makeStyles,
    createStyles,
    Box,
    IconButton,
    ListItem,
    Chip,
    Divider,
    Grid,
    Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Delete } from '@material-ui/icons';
import { ModalTypes } from '../../store/caseManagement.constants';

type CaseEntryProps = {
    caseItem: any;
    handleEditCase: (e: MouseEvent<HTMLElement>, id: string, type: string) => void;
    handleDeleteCase: (e: MouseEvent<HTMLElement>, id: string) => void;
};
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '&:hover ': {
                backgroundColor: '#eeeeee',
                transition: 'ease-in 200ms',
                cursor: 'pointer',
                '& button': {
                    opacity: 1,
                    transition: 'ease-in 200ms',
                },
            },
        },
        chip: {
            backgroundColor: '#9e9e9e',
            color: '#fff',
            borderRadius: '4px',
            textTransform: 'uppercase',
        },
        dateStamp: {
            color: '#565756',
            fontSize: '14px',
            lineHeight: '2rem',
        },
        entryDetails: {
            fontSize: '12px',
        },
        chipContainer: {
            textAlign: 'center',
        },
        editIcon: {
            opacity: 0,
        },
    }),
);

const CaseEntry: FunctionComponent<CaseEntryProps> = ({ caseItem, handleEditCase, handleDeleteCase }) => {
    const classes = useStyles();
    return (
        <Box key={caseItem.id}>
            <ListItem
                onClick={(e: MouseEvent<HTMLElement>) => handleEditCase(e, caseItem.id, ModalTypes.CASE_ENTRY_EDIT)}
                className={classes.root}
            >
                <Grid container alignItems="center" justify="space-between">
                    <Grid item xs={7}>
                        <Typography className={classes.dateStamp}>
                            {moment(caseItem.date).format('MMMM DD, YYYY')}
                        </Typography>
                        <Typography className={classes.entryDetails}>{caseItem.description}</Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.chipContainer}>
                        <Chip size="small" className={classes.chip} label={caseItem.type ? caseItem.type : 'Generic'} />
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            name="case-entry-edit"
                            onClick={(e: MouseEvent<HTMLElement>) =>
                                handleEditCase(e, caseItem.id, ModalTypes.CASE_ENTRY_EDIT)
                            }
                            className={classes.editIcon}
                        >
                            <EditIcon name="case-entry-edit" />
                        </IconButton>
                        <IconButton
                            onClick={(e: MouseEvent<HTMLElement>) => handleDeleteCase(e, caseItem.id)}
                            className={classes.editIcon}
                        >
                            <Delete />
                        </IconButton>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider />
        </Box>
    );
};

export default CaseEntry;
