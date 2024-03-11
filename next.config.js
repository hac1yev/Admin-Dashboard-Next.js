/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ]
    }
}

module.exports = nextConfig

module.exports = {
    images: {
        domains: ['qph.cf2.quoracdn.net', 'i.pinimg.com', 'www.bmw.com.tr'],
    },
};
