import React, { FunctionComponent } from 'react';
import { List } from '@material-ui/core';

/* Custom import */
import {caseList, modalData} from '../../../../assets/mock/DummyData';
import CaseEntry from '../../../../components/CaseEntry';
import Modal from '../../../../components/Modal';
import CaseEntryDialog from '../../../../components/CaseEntryDialog'
import DeleteDialog from '../../../../components/DeleteDialog'


type EntriesProps = {
    isOpen: boolean;
    editModal: boolean;
    handleEditCase: () => void;
    deleteModal: boolean;
    handleDeleteCase: () => void;
    addModal: boolean;
    onSave: () => void;
    onDelete: () => void;
    onClose: () => void;
};

const Entries: FunctionComponent<EntriesProps> = (props) => {

    const { isOpen,
        editModal,
        handleEditCase,
        deleteModal,
        handleDeleteCase,
        addModal,
        onSave,
        onDelete,
        onClose
    } = props;
    // console.log(deleteModal);
    return (
        <>
            <List className="case-entries-container">
                {caseList.map((item, index) => {
                    return (
                        <CaseEntry
                            key={index}
                            caseItem={item}
                            handleEditCase={handleEditCase}
                            handleDeleteCase={handleDeleteCase}
                        />
                    )
                })}
            </List>
            <Modal
                open={isOpen}
                maxWidth={modalData[0].maxWidth}
                fullWidth={modalData[0].fullWidth}
                minHeight="20vh"
            >
                {editModal && <CaseEntryDialog
                    isEdit={editModal}
                    data={caseList[0]}
                    onClose={onClose}
                    onSave={onSave}
                />}
                {addModal && <CaseEntryDialog
                    isEdit={editModal}
                    data={caseList[0]}
                    onClose={onClose}
                    onSave={onSave}
                />}
                {deleteModal && <DeleteDialog
                    onClose={onClose}
                    onDelete={onDelete}
                    contentTitle="Permanently delete this entry ?"
                    content=""
                 />}
            </Modal>
        </>
    )
}

export default Entries
