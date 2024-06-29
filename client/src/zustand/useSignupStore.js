import create from 'zustand';

const useSignupStore = create((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  formErrors: {},
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setFormErrors: (formErrors) => set({ formErrors }),
  setError : (error) => set({ error }),
  resetForm: () => set({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    formErrors: {},
  }),
}));

export default useSignupStore;