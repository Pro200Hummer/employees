import React, {MouseEvent} from 'react';
import {useGetPersonsQuery} from "../api/persons-api";
import {PersonType} from "../api/types";
import {changeModalStatus} from "./utils/app-utils";
import {useAppDispatch} from "./hooks/app-hooks";
import {ModalContainer} from "../components/Modal/ModalContainer";
import {Toast} from "../components/Toast/Toast";

export const App = () => {
    const {data, isLoading} = useGetPersonsQuery('');

    const dispatch = useAppDispatch();

    const deleteButtonHandler = (e: MouseEvent<HTMLButtonElement>, param: PersonType) => {
        changeModalStatus(e, dispatch, param.id, {firstName: param.firstName, lastName: param.lastName})
    }

    const updateButtonHandler = (e: MouseEvent<HTMLButtonElement>, id: number) => {
        changeModalStatus(e, dispatch, id)
    }

    if (isLoading) {
        return <h1>...Loading</h1>
    }

    return (
        <div>
            <button onClick={e => changeModalStatus(e, dispatch)} data-button={'add-person'}>Add Person</button>
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
};
