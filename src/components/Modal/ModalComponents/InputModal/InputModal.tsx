import React, {ChangeEvent, FC, memo, useState} from "react";
import style from './InputModal.module.scss'
import {AddPersonRequestType} from "../../../../api/types";

type InputModalType = {
    title: string
    onClose: () => void
    actionCallback: (params: AddPersonRequestType) => void
}

export const InputModal: FC<InputModalType> = memo(props => {
    const {title, onClose, actionCallback} = props

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const firstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.currentTarget.value)
    }

    const lastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value)
    }

    const actionCallbackHandler = () => {
        actionCallback({firstName: firstName, lastName: lastName})
    }

    return (
        <>
            <div className={style.header}>
                <p className={style.title}>{title}</p>
                <span className={style.close} onClick={onClose}/>
            </div>
            <div className={style.inputs}>
                <label htmlFor='first name'>First Name:</label>
                <input
                    type="text"
                    name={'first name'}
                    placeholder={'First Name'}
                    className={style.firstName}
                    value={firstName}
                    onChange={firstNameHandler}
                />
                <label htmlFor='last name'>Last Name:</label>
                <input
                    type="text"
                    name={'last name'}
                    placeholder={'Last Name'}
                    className={style.lastName}
                    value={lastName}
                    onChange={lastNameHandler}
                />
            </div>
            <div className={style.buttons}>
                <button onClick={onClose} className={style.btnClose}>Close</button>
                <button onClick={actionCallbackHandler} className={style.btnSave}>Save</button>
            </div>
        </>
    )
});