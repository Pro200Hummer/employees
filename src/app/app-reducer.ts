import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppInitialStateType, ModalType, ToastType} from "./app-types";

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
        toast: {
            isShow: false,
            toastStatus: 'no-status',
            toastMessage: ''
        }
    } as AppInitialStateType,
    reducers: {
        setModalStatus: (state, action: PayloadAction<ModalType>) => {
            state.modal = action.payload
        },
        setToastStatus: (state, action: PayloadAction<ToastType>) => {
            state.toast = action.payload
        }
    }
});

export const appReducer = appSlice.reducer;
export const {setModalStatus, setToastStatus} = appSlice.actions;