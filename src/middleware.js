export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/search/:path*', '/test-api/:path*', '/akun/:path*', '/reset-password/:path/:path'],
};
