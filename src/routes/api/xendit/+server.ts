import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import Xendit from 'xendit-node';

const x = new Xendit({
    secretKey: 'xnd_development_9ik4N66LENd36lIiTaVFqHYYwFEuW8Cqp0V7x9BE9wXQdB2spk5TmkjjknEiJ',
});

const { Invoice } = x

const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);


export const POST: RequestHandler = async () => {
    const resp = await i.createInvoice({
        externalID: 'example',
        amount: 250,
        payerEmail: "dngumayagay@gmail.com",
        currency: 'PHP',
        customer: {
            given_names: "Mc Don",
            surname: "Gumayagay",
            email: "dngumayagay@gmail.com",
            mobile_number: '09559575117',
            address: [
                {
                    city: 'San Pedro',
                    country: 'Philippines',
                    postal_code: '4023',
                    state: 'Laguna',
                    street_line1: 'Sitio Crossing',
                    street_line2: 'Magsaysay rd'
                }
            ]
        },
        customerNotificationPreference: {
            invoice_created: ['sms', 'email'],
            invoice_reminder: [],
            invoice_paid: ['sms', 'email'],
            invoice_expired: [],
        },
        description: 'testing',
        locale: 'en',
        items: [
            {
                name: 'test',
                quantity: 2,
                price: 100
            }
        ],
        fees: [
            {
                type: 'shipping',
                value: 50
            }
        ],
        successRedirectURL: "http://localhost:5173/",
        failureRedirectURL: "http://localhost:5173/",

    });
    console.log(resp);
    // console.log("test")
    // return json({ test: 'hello  ' })
    return json(resp)
}