import type { User } from 'firebase/auth';
// const FORMATTER = new Intl.RelativeTimeFormat('en')

// export const relativeTimeFormatter = (value: number, unit: Intl.RelativeTimeFormatUnit) => FORMATTER.format(value, unit)

export const DATE_FORMATTER = new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'full',
    timeStyle: 'medium'
});

export const PHP_FORMATTER = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' });

export const isAdmin = (user: User | null | undefined) => {
    if (user === null || user === undefined) return false
    //@ts-ignore
    const customAttributes = user?.reloadUserInfo?.customAttributes
    if (!customAttributes) return false
    const { admin } = JSON.parse(customAttributes)
    if (!admin) return false
    return true
}


export const sendEmail = async (
    mailOptions = {
        to: 'dngumayagay@gmail.com',
        subject: 'Email Subject',
        html: '<h1>Hello World</h1>'
    }
) =>
    await (
        await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({ mailOptions })
        })
    ).json();


export const payment = async () =>
    await (await fetch('/api/xendit', {
        method: 'POST'
    })).json()
