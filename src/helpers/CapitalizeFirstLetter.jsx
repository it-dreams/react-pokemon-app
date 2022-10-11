// Text Transform with Titlecase 
export default function CapitalizeFirstLetter(string) {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
}