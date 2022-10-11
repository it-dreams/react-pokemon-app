// Print Id into 3 digits
export default function ShowNumberIntoThreeDigits(n, length) {
    var len = length - ('' + n).length;
    return (len > 0 ? new Array(++len).join('0') : '') + n
}