/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        domains: ['profile-assets.showwcase.com', 'stack-icons.showwcase.com'],
    },
    experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"] // <-- and this
    },
}

module.exports = nextConfig
