import React, {FC, memo} from 'react';
import style from './Toast.module.scss'
import {useAppDispatch, useAppSelector} from "../../app/hooks/app-hooks";
import {setToastStatus} from "../../app/app-reducer";

export const Toast: FC = memo(() => {

    const toast = useAppSelector(state => state.app.toast);
    const dispatch = useAppDispatch();

    const onClose = () => {
        dispatch(setToastStatus({isShow: false, toastStatus: 'no-status', toastMessage: ''}))
    }

    const setToast = () => {
        switch (toast.toastStatus) {
            case "succeed":
                return <div className={style.success}>
                    <p>{toast.toastMessage}</p>
                    <span className={style.close} onClick={onClose}/>
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
});