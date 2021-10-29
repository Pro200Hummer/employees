import React, {FC} from 'react';
import style from './Toast.module.scss'
import {useAppSelector} from "../../app/hooks/app-hooks";

export const Toast: FC = () => {

    const toast = useAppSelector(state => state.app.toast)

    const setToast = () => {
        switch (toast.toastStatus) {
            case "succeed":
                return <div className={style.success}>
                    {toast.toastMessage}
                </div>
            case "error":
                return <div className={style.error}>
                    {toast.toastMessage}
                </div>
            case "info":
                return <div className={style.info}>
                    {toast.toastMessage}
                </div>
        }
    }

    /*const triggerButtons = <div>
                <button onClick={() => showHandler('succeed')}>Show Succeed</button>
                <button onClick={() => showHandler('error')}>Show Error</button>
                <button onClick={() => showHandler('info')}>Show Info</button>
            </div>*/


    return (
        <>
            {toast.isShow ? setToast() : null}
        </>
    )
};