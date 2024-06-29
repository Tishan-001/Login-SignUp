import create from 'zustand';

const useAuthStore = create((set) => ({
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setEmailError: (emailError) => set({ emailError }),
  setPasswordError: (passwordError) => set({ passwordError }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  resetForm: () => set({ email: '', password: '', emailError: '', passwordError: '', error: null }),
}));

export default useAuthStore;