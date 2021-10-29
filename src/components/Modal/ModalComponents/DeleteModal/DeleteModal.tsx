import React, {FC, memo} from "react";
import style from './DeleteModal.module.scss'
import {ItemNameType} from "../../../../app/app-types";

type DeleteModalType = {
    title: string
    itemName: ItemNameType | null | undefined
    onClose: () => void
    deleteAction: () => void
}

export const DeleteModal: FC<DeleteModalType> = memo(props => {
    const {title, itemName, onClose, deleteAction} = props

    const personName = itemName && `${itemName.firstName} ${itemName.lastName}`

    return (
        <>
            <div className={style.header}>
                <p className={style.title}>{`${title} ${personName}?`}</p>
                <span className={style.close} onClick={onClose}/>
            </div>
            <div className={style.buttons}>
                <button onClick={onClose}>Close</button>
                <button onClick={deleteAction} className={style.btnDelete}>Delete</button>
            </div>
        </>
    )
});