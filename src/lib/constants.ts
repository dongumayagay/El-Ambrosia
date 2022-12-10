import type { Product, Variant, CityOption } from "$lib/types"

export const SHAWARMAS: Product[] = [
    {
        name: 'Underdog 6"',
        description: '6" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic Sauce.',
        image: "/images/underdog.jpg",
        variants: [
            { name: 'Chicken', price: 69, },
            { name: 'Steak', price: 85 }
        ],
    },
    {
        name: 'Big Honcho 8"',
        description: '8" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic Sauce.',
        image: "/images/big honcho.jpg",
        variants: [
            { name: 'Chicken', price: 95 },
            { name: 'Steak', price: 109 }
        ],
    },
    {
        name: 'Bossman 12"',
        description: '12" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic Sauce.',
        image: "/images/bossman.jpg",
        variants: [
            { name: 'Chicken', price: 175 },
            { name: 'Steak', price: 189 }
        ]
    },
]


export const EXTRA_MEAT: Variant[] =
    [
        {

            name: "Chicken",
            price: 25,
        },
        {
            name: 'Steak',
            price: 35
        }
    ]

export const GARLIC_SAUCE: Variant = {
    name: "Garlic sauce",
    price: 20
}

export const FRIES: Variant[] = [
    { name: 'Medium', price: 29 },
    { name: 'Xtra large', price: 55 }

]


export const CITY_OPTIONS: CityOption[] = [
    {
        name: 'GMA, Cavite',
        city: 'GMA',
        state: 'Cavite',
        postal_code: '4117'
    },
    {
        name: 'General Trias, Cavite',
        city: 'General Trias',
        state: 'Cavite',
        postal_code: '4107'
    },
    {
        name: 'Trece Martires, Cavite',
        city: 'Trece Matires',
        state: 'Cavite',
        postal_code: '4109'
    },
    {
        name: 'Dasmariñas, Cavite',
        city: "Dasmariñas",
        state: 'Cavite',
        postal_code: '4114'
    },
    {
        name: 'Imus, Cavite',
        city: "Imus",
        state: 'Cavite',
        postal_code: "4104"
    }
]