import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGift } from "../../types/gift"

// Define a type for the slice state
interface IInitialState {
    gift: IGift[]
  }
  
  // Define the initial state using that type
  const initialState: IInitialState = {
    gift: []
  }
//Esatdo global 

const giftSlice = createSlice({
    name: 'giftState',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      //Actions que me permiten modificar 
      setGifts: (state, action: PayloadAction<IGift[]>) => {
        state.gift = action.payload;
      },
      resetGifts : (state) =>{
        state.gift = [];
      }
    },
  });

export const {setGifts,resetGifts} = giftSlice.actions
export default giftSlice.reducer;