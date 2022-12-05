import type { Product, Variant, CityOption } from "$lib/types"

export const SHAWARMAS: Product[] = [
    {
        name: 'underdog 6"',
        description: '6" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic Sauce.',
        image: "/images/underdog.jpg",
        variants: [
            { name: 'chicken', price: 69, },
            { name: 'steak', price: 85 }
        ],
    },
    {
        name: 'big honcho 8"',
        description: '8" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic Sauce.',
        image: "/images/big honcho.jpg",
        variants: [
            { name: 'chicken', price: 95 },
            { name: 'steak', price: 109 }
        ],
    },
    {
        name: 'bossman 12"',
        description: '12" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic Sauce.',
        image: "/images/bossman.jpg",
        variants: [
            { name: 'chicken', price: 175 },
            { name: 'steak', price: 189 }
        ]
    },
]


export const EXTRA_MEAT: Variant[] =
    [
        {

            name: "chicken",
            price: 25,
        },
        {
            name: 'steak',
            price: 35
        }
    ]

export const GARLIC_SAUCE: Variant = {
    name: "Garlic sauce",
    price: 20
}

export const FRIES: Variant[] = [
    { name: 'medium', price: 29 },
    { name: 'xtra large', price: 55 }

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