import cookie from 'cookie'

export default function parseCookie(req: any) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}