import React, {FC, memo, MouseEvent, useCallback} from 'react';
import {useGetPersonsQuery} from "../api/persons-api";
import {PersonType} from "../api/types";
import {ModalContainer} from "../components/Modal/ModalContainer";
import {Toast} from "../components/Toast/Toast";
import {useModal} from "./utils/app-utils";

export const App: FC = memo(() => {
    const {data, isLoading} = useGetPersonsQuery('');

    const changeModalStatus = useModal();

    const deleteButtonHandler = useCallback((e: MouseEvent<HTMLButtonElement>, param: PersonType) => {
        changeModalStatus(e, param.id, {firstName: param.firstName, lastName: param.lastName})
    }, [changeModalStatus])

    const updateButtonHandler = useCallback((e: MouseEvent<HTMLButtonElement>, id: number) => {
        changeModalStatus(e, id)
    }, [changeModalStatus])

    if (isLoading) {
        return <h1>...Loading</h1>
    }

    return (
        <div>
            <button onClick={e => changeModalStatus(e)} data-button={'add-person'}>Add Person</button>
            <div>
                {
                    data && data.map((p: PersonType) => {
                        return (
                            <div key={p.id}>
                                <span>{`${p.firstName} ${p.lastName}`}</span>
                                <button
                                    onClick={e => deleteButtonHandler(e, p)}
                                    data-button={'delete-person'}
                                >
                                    Delete Person
                                </button>
                                <button
                                    onClick={e => updateButtonHandler(e, p.id)}
                                    data-button={'update-person'}
                                >
                                    Update Person
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <ModalContainer/>
            <Toast/>
        </div>
    )
});
