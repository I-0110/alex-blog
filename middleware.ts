export { auth as middleware } from '@/app/admin-auth';

export const config = {
    matcher: '/admin/:path*',
};