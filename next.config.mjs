/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_NAME: "partner-app",
    AWS_REGION: "us-west-2",
    AWS_SECRET_MANAGER_NAME: "---SECRET-KEY-NAME---",
  },
  // logging: {
  //   fetches: { fullUrl: true },
  // },
};

export default nextConfig;
