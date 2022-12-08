import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import Xendit from 'xendit-node';
import { env } from "$env/dynamic/private";

const x = new Xendit({
    secretKey: env.XENDIT_SECRET_KEY,
});

const { Invoice } = x

const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);


export const POST: RequestHandler = async ({ request }) => {
    const invoiceRequest = await request.json()
    const response = await i.createInvoice(invoiceRequest)

    // const resp = await i.createInvoice({
    //     externalID: 'id',
    //     payerEmail: "gumayagay.mcdonpup@gmail.com",
    //     customer: {
    //         given_names: "Mc Don",
    //         surname: "Gumayagay",
    //         email: "gumayagay.mcdonpup@gmail.com",
    //         mobile_number: '09559575117',
    //         address: [
    //             {
    //                 city: 'San Pedro',
    //                 country: 'Philippines',
    //                 postal_code: '4023',
    //                 state: 'Laguna',
    //                 street_line1: 'Sitio Crossing',
    //                 street_line2: 'Magsaysay rd'
    //             }
    //         ]
    //     },
    //     customerNotificationPreference: {
    //         invoice_created: ['sms', 'email'],
    //         invoice_reminder: [],
    //         invoice_paid: ['sms', 'email'],
    //         invoice_expired: [],
    //     },
    //     description: 'El Ambrosia Order',
    //     locale: 'en',
    //     currency: 'PHP',
    //     items: [
    //         {
    //             name: 'test',
    //             quantity: 2,
    //             price: 100
    //         },
    //         {
    //             name: 'test2',
    //             quantity: 1,
    //             price: 50
    //         },
    //     ],
    //     fees: [
    //         {
    //             type: 'shipping',
    //         }
    //     ],
    //     amount: 300,
    //     // successRedirectURL: "http://localhost:5173/",
    //     // failureRedirectURL: "http://localhost:5173/",
    // });
    // console.log("test")
    // return json({ test: 'hello  ' })
    return json(response)
}