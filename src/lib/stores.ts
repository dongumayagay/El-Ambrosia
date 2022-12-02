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
            resultCartItem.subTotal = resultCartItem.quantity * resultCartItem.price
            return currentCartItems
        })
    const clearCart = () => cartItemsSet([])
    const removeCartItem = (item: CartItem) => cartItemsUpdate((values) => values.filter((value => JSON.stringify(value) !== JSON.stringify(item))))
    const refreshCartItems = () => cartItemsUpdate(values => values)
    // update subtotal when qty changes
    cartItems.subscribe((currentCartItems) => {
        if (!currentCartItems) return
        currentCartItems.forEach(currentCartItem => {
            currentCartItem.subTotal = currentCartItem.quantity * currentCartItem.price
            if (currentCartItem.variant) currentCartItem.variant.subTotal = currentCartItem.variant.price * currentCartItem.quantity
        })
    })
    // save cartItems to localstorage
    cartItems.subscribe(currentCartItems => browser && localStorage.setItem('cartItems', JSON.stringify(currentCartItems))
    )
    const cartTotal = derived(cartItems, (currentCartItems, set) => {
        if (!currentCartItems) return
        const sum = currentCartItems.reduce((accumulator, object) => {
            let temp = 0;
            temp = accumulator + object.subTotal
            if (object.variant) temp += object.variant.subTotal
            return temp
        }, 0);
        set(sum)
    }, 0)


    return {
        isSideCartOpen,
        toggleShowSideCart,
        cartItems,
        addCartItem,
        removeCartItem,
        clearCart,
        refreshCartItems,
        cartTotal
    }
}
