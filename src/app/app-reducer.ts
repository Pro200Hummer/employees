import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ModalStatusType = 'no-status' | 'add-person' | 'update-person' | 'delete-person'

export type ModalType = {
    isShow: boolean
    modalStatus: ModalStatusType
    modalTitle: string
    itemId?: number | null
    itemTitle?: string | null
}

export type AppInitialStateType = {
    modal: ModalType
}

export const appSlice = createSlice({
    name: 'app',
    initialState: {
      modal:{
          isShow: false,
          modalTitle: '',
          modalStatus: 'no-status',
          itemId: null,
          itemTitle: null
      }
    } as AppInitialStateType,
    reducers:{
        setModalStatus: (state, action: PayloadAction<ModalType>) => {
            state.modal = action.payload
        }
    }
});

export const appReducer = appSlice.reducer;
export const {setModalStatus} = appSlice.actions;