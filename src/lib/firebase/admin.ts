import { initializeApp, cert, type ServiceAccount } from 'firebase-admin/app';
// import serviceAccount from "../../../serviceAccount.json"
import { env } from "$env/dynamic/private"

const serviceAccount: ServiceAccount = {
    clientEmail: env.CLIENT_EMAIL,
    privateKey: env.PRIVATE_KEY,
    projectId: env.PROJECT_ID,
}

export const admin = initializeApp({ credential: cert(serviceAccount) }, 'ADMIN');
