import React, {FC, memo} from 'react';
import style from './Toast.module.scss';
import {ToastType} from "../../app/app-types";
import {FaCheck, FaExclamationCircle, FaInfoCircle, FaRegWindowClose} from "react-icons/all";
import {useAppSelector} from "../../app/hooks/app-hooks";
import {useToast} from "../../app/utils/app-utils";

export const Toast: FC = memo(() => {

    const toast = useAppSelector(state => state.app.toast)
    const {deleteToast} = useToast();

    const generateIcon = (type: ToastType) => {
        switch (type) {
            case 'success':
                return <FaCheck/>
            case 'info':
                return <FaInfoCircle/>
            case 'error':
                return <FaExclamationCircle/>
            default:
                return
        }
    }
    const generateBackgroundColor = (type: ToastType) => {
        switch (type) {
            case 'success':
                return '#2AA80AFF'
            case 'info':
                return '#10b795'
            case 'error':
                return '#CC0707FF'
            default:
                return
        }
    }

    return (
        <div className={style.notificationContainer}>
            {toast.map(t => {
                setTimeout(() => {
                    deleteToast(t.id)
                }, 3000)
                return (
                    <div
                        key={t.id}
                        className={`${style.notification} ${style.toast}`}
                        style={{backgroundColor: generateBackgroundColor(t.toastType)}}
                    >
                        <FaRegWindowClose className={style.closeButton} onClick={() => deleteToast(t.id)}/>
                        <div className={style.notificationImage}>
                            {generateIcon(t.toastType)}
                        </div>
                        <div>
                            <p className={style.notificationTitle}>{t.toastTitle}</p>
                            <p className={style.notificationMessage}>{t.toastMessage}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
});
