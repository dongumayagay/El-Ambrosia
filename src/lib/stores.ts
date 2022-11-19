import { readable } from "svelte/store";
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "./firebase/client";
import { browser } from "$app/environment";

export const userStore = readable<User | null | undefined>(undefined, set => {
    const unsubscribe = onAuthStateChanged(
        auth,
        (user) => browser && set(user)
    )
    return () => unsubscribe()
})