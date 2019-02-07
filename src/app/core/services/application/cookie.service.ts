// // TODO: This class should be injectable to allow for DI.
// export class CookieService {
//     /**
//      * Gets cookie
//      * @param cname
//      * @returns {any}
//      */
//     static get(cname: string): string {
//         const name = cname + '=';
//         const decodedCookie = decodeURIComponent(document.cookie);
//         const ca = decodedCookie.split(';');

//         for(const i = 0; i < ca.length; i++) {
//             let c = ca[i];

//             while (c.charAt(0) === ' ') {
//                 c = c.substring(1);
//             }

//             if (c.indexOf(name) === 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }

//         return '';
//     }

//     /**
//      * Sets cookie
//      * Expiry time is week by default
//      * @param name
//      * @param value
//      * @param expiryDays
//      */
//     static set(name: string, value: string, expiryDays: number = 7) {
//         const date = new Date(new Date().getTime() + (expiryDays * 24 * 3600 * 1000));

//         document.cookie = `${name}=${value}; path=/; expires=` + date.toUTCString();
//     }

//     /**
//      * Deletes cookie
//      * @param {string} name
//      */
//     static unset(name: string) {
//         CookieService.set(name, '', -1);
//     }
// }
