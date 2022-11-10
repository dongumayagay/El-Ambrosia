import { initializeApp, cert, type ServiceAccount, getApp, getApps } from 'firebase-admin/app';
import { env } from "$env/dynamic/private"

const serviceAccount: ServiceAccount = {
    clientEmail: env.CLIENT_EMAIL,
    privateKey: env.PRIVATE_KEY,
    projectId: env.PROJECT_ID,
}

function getFirebaseAdmin() {
    if (getApps().some((e) => e.name === 'ADMIN')) return getApp('ADMIN')
    return initializeApp({ credential: cert(serviceAccount) }, 'ADMIN');
}
export const admin = getFirebaseAdmin()