/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_NAME: "partner-app",
    AWS_REGION: "us-west-2",
    AWS_SECRET_MANAGER_NAME: "tmp-2-0-pg-dev-app-01",
  },
  // logging: {
  //   fetches: { fullUrl: true },
  // },
};

export default nextConfig;
