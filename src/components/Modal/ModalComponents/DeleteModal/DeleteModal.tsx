import React, {FC} from "react";
import style from './DeleteModal.module.scss'


export const DeleteModal: FC = () => {
    return(
        <>
            <div className={style.header}>
                <p className={style.title}>title</p>
                <span className={style.close}/>
            </div>
            <div className={style.buttons}>
                <button>Close</button>
                <button>Save</button>
            </div>
        </>
    )
};