import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppInitialStateType, ModalType, ToastNotificationType} from "./app-types";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        modal: {
            isShow: false,
            modalTitle: '',
            modalStatus: 'no-status',
            itemId: 0,
            itemTitle: null
        },
        toast: []
    } as AppInitialStateType,
    reducers: {
        setModalStatus: (state, action: PayloadAction<ModalType>) => {
            state.modal = action.payload
        },
        setToast: (state, action: PayloadAction<ToastNotificationType>) => {
            state.toast.push(action.payload)
        },
        deleteToast: (state,action:PayloadAction<string>) => {
            return {...state, toast: state.toast.filter(t => t.id !== action.payload)}
        }
    }
});

export const appReducer = appSlice.reducer;
export const {setModalStatus, setToast, deleteToast} = appSlice.actions;