export const addToast = (text, toastAction) => {
  return {
    type: 'APP_ADD_TOAST',
    text,
    toastAction,
  };
};
export const dismissToast = () => {
  return {
    type: 'APP_DISMISS_TOAST',
  };
};
export const setLoading = (loading, loadingText) => {
  return {
    type: 'APP_SET_LOADING',
    loading,
    loadingText,
  };
};
export const resetLoading = (reset) => {
  return {
    type: 'APP_RESET_LOADING',
    reset,
  };
};