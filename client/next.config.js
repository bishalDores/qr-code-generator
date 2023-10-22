/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL_DEV: "http://localhost:5000/api/v1",
    GOOGLE_CLIENT_ID: "429886614856-bq5kvc5ra9gs5p9t7h354ehutup1789q.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
