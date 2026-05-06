import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'uucms.uudoon.in',
        pathname: '/**',
      }
    ],
    unoptimized: true, 
    
  }
};

export default nextConfig;
