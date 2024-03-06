/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "majheojjtbirbfshihfu.supabase.co",
      },
    ],
  },
};

export default nextConfig;
