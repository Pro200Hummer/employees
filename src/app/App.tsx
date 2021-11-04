import React, {FC, memo, MouseEvent, useCallback} from 'react';
import style from './Main.module.scss';
import {useGetPersonsQuery} from "../api/persons-api";
import {PersonType} from "../api/types";
import {ModalContainer} from "../components/Modal/ModalContainer";
import {Toast} from "../components/Toast/Toast";
import {useModal} from "./utils/app-utils";
import {MdDelete, MdModeEditOutline} from "react-icons/all";

export const App: FC = memo(() => {
    const {data, isLoading} = useGetPersonsQuery('');

    const changeModalStatus = useModal();

    const deleteButtonHandler = useCallback((e: MouseEvent<SVGElement>, param: PersonType) => {
        changeModalStatus(e, param.id, {firstName: param.firstName, lastName: param.lastName})
    }, [changeModalStatus])

    const updateButtonHandler = useCallback((e: MouseEvent<SVGElement>, id: number) => {
        changeModalStatus(e, id)
    }, [changeModalStatus])

    if (isLoading) {
        return <h1>...Loading</h1>
    }

    return (
        <div className={style.wrapper}>
            <button
                className={style.btnAdd}
                onClick={e => changeModalStatus(e)}
                data-button={'add-person'}
            >
                ADD PERSON
            </button>
            <div className={style.container}>
                <div className={style.tableHeader}>
                    <p>First Name</p>
                    <p>Last Name</p>
                </div>
                <div className={style.table}>
                    {
                        data && data.map((p: PersonType) => {
                            return (
                                <div key={p.id} className={style.tableRow}>
                                    <div className={style.personInfo}>
                                        <p>{p.firstName}</p>
                                        <p>{p.lastName}</p>
                                    </div>
                                    <div className={style.buttons}>
                                        <MdModeEditOutline
                                            className={style.btnEdit}
                                            onClick={e => updateButtonHandler(e, p.id)}
                                            data-button={'update-person'}
                                        />
                                        <MdDelete
                                            className={style.btnDelete}
                                            onClick={e => deleteButtonHandler(e, p)}
                                            data-button={'delete-person'}
                                        />
                                        {/*<button
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
                                        </button>*/}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <ModalContainer/>
            <Toast/>
        </div>
    )
});
