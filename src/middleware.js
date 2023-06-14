export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/search/:path*', '/test-api/:path*'],
};
