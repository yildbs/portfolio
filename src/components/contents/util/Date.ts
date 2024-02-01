

export function convertYYYYMMDDToTimestamp(yyyymmdd: string): number {
    // Check if the input is valid
    if (yyyymmdd.length !== 8 || !/^\d{8}$/.test(yyyymmdd)) {
        throw new Error("Invalid date format");
    }

    // Extract year, month, day from the string
    const year = parseInt(yyyymmdd.substring(0, 4), 10);
    const month = parseInt(yyyymmdd.substring(4, 6), 10) - 1; // month is 0-indexed in JavaScript
    const day = parseInt(yyyymmdd.substring(6, 8), 10);

    // Create a new date object
    const date = new Date(year, month, day);

    // Return the timestamp in milliseconds
    return date.getTime();
}

export function convertTimestampToYYYYMMDD(timestamp: number): string {
    // Create a new date object from the timestamp
    const date = new Date(timestamp);

    // Extract year, month, and day and format them
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, add 1
    const day = date.getDate().toString().padStart(2, '0');

    // Combine and return the formatted string
    return `${year}${month}${day}`;
}

export function convertTimestampToYYYYMM(timestamp: number): string {
    // Create a new date object from the timestamp
    const date = new Date(timestamp);

    // Extract year, month, and day and format them
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, add 1
    const day = date.getDate().toString().padStart(2, '0');

    // Combine and return the formatted string
    return `${year}. ${month}. `;
}