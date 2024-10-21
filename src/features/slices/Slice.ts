import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lab {
  id: number;
  text: string;
  completed: boolean;
}

interface LabState {
  labs: Lab[];
}

const initialState: LabState = {
  labs: [],
};

const labSlice = createSlice({
  name: 'lab',
  initialState,
  reducers: {
    addLab: (state, action: PayloadAction<string>) => {
      const newLab: Lab = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.labs.push(newLab);
    },

    removeLab: (state, action: PayloadAction<number>) => {
      state.labs = state.labs.filter(lab => lab.id !== action.payload);
    },

    toggleLab: (state, action: PayloadAction<number>) => {
      const lab = state.labs.find(lab => lab.id === action.payload);
      if (lab) {
        lab.completed = !lab.completed;
      }
    },
  },
});

export const { addLab, removeLab, toggleLab } = labSlice.actions;
export default labSlice.reducer;
