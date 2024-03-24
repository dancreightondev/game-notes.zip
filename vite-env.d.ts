/// <reference types="vite/client" />

interface ImportMetaEnv {
    // Firebase
    readonly FIREBASE_API_KEY: string;
    readonly FIREBASE_AUTH_DOMAIN: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_STORAGE_BUCKET: string;
    readonly FIREBASE_MSG_SENDER_ID: string;
    readonly FIREBASE_APP_ID: string;

    // Giantbomb
    readonly VITE_GIANTBOMB_API_KEY: string;

    // App details
    readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
