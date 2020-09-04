import React, { FunctionComponent, useState } from 'react';
import { List } from '@material-ui/core';

/* Custom import */
import { caseList, modalData } from '../../../../assets/mock/DummyData';
import CaseEntry from '../../../../components/CaseEntry';
import Modal from '../../../../components/Modal';


type EntriesProps = {};

const Entries: FunctionComponent<EntriesProps> = (props) => {


    const [editModal, setEditModal] = useState(false);

    const handleEditCase = (id: number) => {
        setEditModal(!editModal);
        // console.log(editModal, id);
    }

    const onClose = () => {
        console.log('onClose() called');
        setEditModal(false);
    }

    const onSave = () => {
        console.log('onSave() called');
        setEditModal(false);
    }

    return (
        <>
            <List className="case-entries-container">
                {caseList.map((item, index) => {
                    return (
                        <CaseEntry
                            key={index}
                            caseItem={item}
                            handleEditCase={handleEditCase} />
                    )
                })}
            </List>
            <Modal
                open={editModal}
                data={modalData[0]}
                onClose={onClose}
                onSave={onSave}
                maxWidth={modalData[0].maxWidth}
                fullWidth={modalData[0].fullWidth}
             />
        </>
    )
}

export default Entries
