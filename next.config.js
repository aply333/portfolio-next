/** @type {import('next').NextConfig} */

const DB_HOST = process.env.STRAPI_ROOT

const nextConfig = {
  images: {
    domains: [ DB_HOST, 'localhost' ]
  }
}

module.exports = nextConfig
