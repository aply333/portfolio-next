/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: [ process.env.STRAPI_ROOT ]
  }
}

module.exports = nextConfig
