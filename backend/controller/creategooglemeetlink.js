function createGoogleMeetLink() {
    // Base URL for Google Meet
    const baseURL = "https://meet.google.com/";

    // Generate a random meeting ID if not provided
    const meetingID = generateRandomMeetingID();

    // Construct the Google Meet link
    const meetLink = baseURL + meetingID;

    return meetLink;
}

// Function to generate a random meeting ID
function generateRandomMeetingID() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let meetingID = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        meetingID += characters.charAt(randomIndex);
    }

    return meetingID;
}

// Example usage


const googleMeetLink = createGoogleMeetLink();
console.log("Google Meet Link:", googleMeetLink);
