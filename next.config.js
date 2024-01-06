/** @type {import('next').NextConfig} */

const DB_HOST = process.env.STRAPI_ROOT

const nextConfig = {
  env: {
    ROOT_URL: process.env.STRAPI_ROOT
  },
  images: {
    domains: [ DB_HOST, 'localhost' ]
  }
}

module.exports = nextConfig
