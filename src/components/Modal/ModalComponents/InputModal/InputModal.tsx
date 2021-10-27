import React, {FC} from "react";
import style from './InputModal.module.scss'

interface InputModal {
    title: string
    onClose: () => void
}

export const InputModal: FC<InputModal> = props => {
    const {title, onClose} = props

    return (
        <>
            <div className={style.header}>
                <p className={style.title}>{title}</p>
                <span className={style.close}/>
            </div>
            <div className={style.inputs}>
                <input type="text"/>
                <input type="text"/>
            </div>
            <div className={style.buttons}>
                <button onClick={onClose}>Close</button>
                <button>Save</button>
            </div>
        </>
    )
};