/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "upload.wikimedia.org",
//         port: "",
//         pathname: "",
//       },
//     ],
//   },
// };
module.exports = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
};
