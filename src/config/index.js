import dotenv from "dotenv";
// Set the NODE_ENV to 'development' by default
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error(envFound.error);
}

const {
    PORT,
} = process.env;

export default {
    port: PORT,
};