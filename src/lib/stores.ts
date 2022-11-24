import { derived, readable, writable } from "svelte/store";
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "./firebase/client";
import { browser } from "$app/environment";
import type { CartItem } from "./types";

export const userStore = readable<User | null | undefined>(undefined, set => {
    const unsubscribe = onAuthStateChanged(
        auth,
        (user) => browser && set(user)
    )
    return () => unsubscribe()
})


export const cartStore = createCartStore()


function createCartStore() {
    const isSideCartOpen = writable<boolean>()
    const {
        set: setShowSideCart,
        update: updateShowSideCart
    } = isSideCartOpen
    const toggleShowSideCart = (toggle?: boolean) => {
        if (toggle === undefined) updateShowSideCart(value => !value)
        else setShowSideCart(toggle)
    }



    const cartItems = writable<CartItem[]>([])
    const { set: cartItemsSet, update: cartItemsUpdate } = cartItems
    // const cartTotal = derived()
    const addCartItem = (item: CartItem) =>
        cartItemsUpdate((values) => ([...values, item]))
    const clearCart = () => cartItemsSet([])
    const removeCartItem = (item: CartItem) => cartItemsUpdate((values) => values.filter((value => value.name !== item.name)))



    return {
        isSideCartOpen,
        toggleShowSideCart,
        cartItems,
        addCartItem,
        removeCartItem,
        clearCart,
    }
}