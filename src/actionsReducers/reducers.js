const initState = {
  toasts: [],
};
export const handleToast = (state = initState.toasts, action) => {
  if (action.type === 'APP_ADD_TOAST') {
    let add, toastAct;
    add = action.text;
    toastAct = action.toastAction;
    return { ...state, add, toastAct };
  } else if (action.type === 'APP_DISMISS_TOAST') {
    state.slice(0, 1);
    return { ...state };
  } else return { ...state };
};
