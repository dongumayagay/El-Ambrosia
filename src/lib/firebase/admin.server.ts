import { initializeApp, cert, type ServiceAccount, getApp, getApps } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"
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
export const adminAuth = getAuth(admin)
export const adminDB = getFirestore(admin)