import { create } from "zustand";

export const useSession = create ((set)=>({
    user: null,
    isLoggedIn: false,
    login: (newUser) => set({user: newUser, isLoggedIn: true}),
    logout: ()=>set({user:null, isLoggedIn:false}),
    loadUser: (userData) => set({ user: userData, isLoggedIn: true }),
    clearUser: () => set({user:null}),

}))

