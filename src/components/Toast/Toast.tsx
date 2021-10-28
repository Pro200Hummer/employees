import React, {FC} from 'react';
import style from './Toast.module.scss'
import {useAppDispatch, useAppSelector} from "../../app/hooks/app-hooks";
import {setToastStatus} from "../../app/app-reducer";
import {ToastStatusType} from "../../app/app-types";

export const Toast: FC = () => {

    const toast = useAppSelector(state => state.app.toast)
    const dispatch = useAppDispatch();

    const showHandler = (toastStatus: ToastStatusType) => {
        dispatch(setToastStatus({isShow: true, toastStatus: toastStatus, toastMessage: 'Message'}))
        setTimeout(() => {
            dispatch(setToastStatus({isShow: false, toastStatus: 'no-status', toastMessage: ''}))
        }, 5000)
    }

    const setToast = () => {
        switch (toast.toastStatus){
            case "succeed":
                return  <div className={style.success}>
                    {toast.toastMessage}
                </div>
            case "error":
                return  <div className={style.error}>
                    {toast.toastMessage}
                </div>
            case "info":
                return  <div className={style.info}>
                    {toast.toastMessage}
                </div>
        }
    }

    if(!toast.isShow){
        return (
            <>
                <button onClick={() => showHandler('succeed')}>Show Succeed</button>
                <button onClick={() => showHandler('error')}>Show Error</button>
                <button onClick={() => showHandler('info')}>Show Info</button>
            </>
        )
    }

    return (
        <>
            {setToast()}
        </>
    )
};