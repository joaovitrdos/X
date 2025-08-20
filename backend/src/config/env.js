import dotenv from 'dotenv';

// Carrega variáveis do arquivo .env para process.env
dotenv.config();

export const ENV = {
    PORT: process.env.PORT,                     // Porta que o servidor irá rodar
    NODE_ENV: process.env.NODE_ENV,             // Ambiente atual (development, production, test)
    MONGO_URI: process.env.MONGO_URI,           // URL de conexão com o banco MongoDB

    // Configurações de autenticação (Clerk)
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,

    // Configurações do Cloudinary (upload de arquivos)
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

    // Chave da API Arcjet (segurança/antifraude)
    ARCJET_KEY: process.env.ARCJET_KEY,
};
