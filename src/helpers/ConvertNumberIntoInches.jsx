// Convert Number in to inches
export default function ConvertNumberIntoInches(decimal) {
    return Math.floor(decimal) +
        "' " +
        (12 * (decimal - Math.floor(decimal))) +
        '"';
}