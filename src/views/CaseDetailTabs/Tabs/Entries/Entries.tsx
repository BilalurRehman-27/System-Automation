import React, { FunctionComponent, MouseEvent } from 'react';
import { List } from '@material-ui/core';
/* Custom import */
import { modalData } from '../../../../assets/mock/DummyData';
import CaseEntry from '../../../../components/CaseEntry';
import Modal from '../../../../components/Modal';
import CaseEntryDialog from '../../../../components/CaseEntryDialog';
import DeleteDialog from '../../../../components/DeleteDialog';
import Loader from '../../../../components/Loader';
import { CaseJournalEntryList, CaseEntryJournal, CaseJournalEntry } from '../../../../store/modules/caseEntries/types';
import { CASE_DETAIL_TABS } from '../../../../store/caseManagement.constants';

type EntriesProps = {
    isOpen: boolean;
    editModal: boolean;
    handleEditCase: (e: MouseEvent<HTMLElement>, id: string, type: string) => void;
    deleteModal: boolean;
    handleDeleteCase: (e: MouseEvent<HTMLElement>, id: string) => void;
    addModal: boolean;
    onSave: Function;
    onDelete: (e: MouseEvent<HTMLElement>, type: string) => void;
    onClose: () => void;
    isLoading: boolean;
    data: CaseJournalEntryList;
    selectedCaseEntryJournal: CaseEntryJournal;
    setEntryDate: Function;
    setDescription: Function;
    setType: Function;
};

const Entries: FunctionComponent<EntriesProps> = (props) => {
    const {
        isOpen,
        editModal,
        handleEditCase,
        deleteModal,
        handleDeleteCase,
        addModal,
        onSave,
        onDelete,
        onClose,
        isLoading,
        data,
        selectedCaseEntryJournal,
        setEntryDate,
        setDescription,
        setType,
    } = props;
    if (isLoading) return <Loader />;
    return (
        <>
            <List className="case-entries-container">
                {data.map((item: CaseJournalEntry, index: number) => {
                    return (
                        <CaseEntry
                            key={index}
                            caseItem={item}
                            handleEditCase={handleEditCase}
                            handleDeleteCase={handleDeleteCase}
                        />
                    );
                })}
            </List>
            <Modal open={isOpen} maxWidth={modalData[0].maxWidth} fullWidth={modalData[0].fullWidth} minHeight="20vh">
                {editModal && (
                    <CaseEntryDialog
                        isEdit={editModal}
                        data={selectedCaseEntryJournal}
                        onClose={onClose}
                        onSave={onSave}
                        setEntryDate={setEntryDate}
                        setDescription={setDescription}
                        setType={setType}
                        isLoading={isLoading}
                    />
                )}
                {addModal && (
                    <CaseEntryDialog
                        isEdit={editModal}
                        onClose={onClose}
                        onSave={onSave}
                        setEntryDate={setEntryDate}
                        setDescription={setDescription}
                        setType={setType}
                        isLoading={isLoading}
                    />
                )}
                {deleteModal && (
                    <DeleteDialog
                        onClose={onClose}
                        onDelete={onDelete}
                        contentTitle="Permanently delete this entry ?"
                        content=""
                        type={CASE_DETAIL_TABS.ENTRIES}
                    />
                )}
            </Modal>
        </>
    );
};

export default Entries;
