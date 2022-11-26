import { derived, readable, writable } from "svelte/store";
import { onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "./firebase/client";
import { browser } from "$app/environment";
import type { CartItem } from "./types";


const getItemFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
}

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

    const cartItems = writable<CartItem[]>(browser && (getItemFromLocalStorage('cartItems') ?? []))
    const { set: cartItemsSet, update: cartItemsUpdate } = cartItems
    const addCartItem = (newItem: CartItem) =>
        cartItemsUpdate((currentCartItems) => {
            // check if newItem is already in cartItems
            const resultCartItem = currentCartItems.find((cartItem) => JSON.stringify(cartItem) === JSON.stringify(newItem))
            if (!resultCartItem) return [...currentCartItems, newItem]
            resultCartItem.quantity += newItem.quantity
            return currentCartItems
        })
    const clearCart = () => cartItemsSet([])
    const removeCartItem = (item: CartItem) => cartItemsUpdate((values) => values.filter((value => JSON.stringify(value) !== JSON.stringify(item))))
    cartItems.subscribe(currentCartItems => browser && localStorage.setItem('cartItems', JSON.stringify(currentCartItems))
    )
    // const cartTotal = derived()


    return {
        isSideCartOpen,
        toggleShowSideCart,
        cartItems,
        addCartItem,
        removeCartItem,
        clearCart,
    }
}
