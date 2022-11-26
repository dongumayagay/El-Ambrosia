import type { User } from 'firebase/auth';
// const FORMATTER = new Intl.RelativeTimeFormat('en')

// export const relativeTimeFormatter = (value: number, unit: Intl.RelativeTimeFormatUnit) => FORMATTER.format(value, unit)
export const test = {}

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
