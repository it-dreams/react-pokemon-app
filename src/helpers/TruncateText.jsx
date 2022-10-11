// Text Truncate

export default function truncateText(str) {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
}