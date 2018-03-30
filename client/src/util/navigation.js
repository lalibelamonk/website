export function isAdminPage() {
    return window.location.pathname.startsWith('/admin');
}