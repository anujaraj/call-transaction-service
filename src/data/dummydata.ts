export const callData = [
    { day: "Mon", calls: 120 },
    { day: "Tue", calls: 210 },
    { day: "Wed", calls: 150 },
    { day: "Thu", calls: 280 },
    { day: "Fri", calls: 320 },
];

// Call Duration Analysis Data
export const callDurationData = [
    { time: "00:00", duration: 3.2 },
    { time: "04:00", duration: 2.8 },
    { time: "08:00", duration: 4.5 },
    { time: "12:00", duration: 6.8 },
    { time: "16:00", duration: 5.2 },
    { time: "20:00", duration: 3.9 },
];

// Sad Path Analysis Data (reasons for call failures)
export const sadPathData = [
    { name: "User intent not clarified", value: 28 },
    { name: "Caller Identification", value: 18 },
    { name: "Incorrect caller identity", value: 15 },
    { name: "Assistant did not speak French", value: 12 },
    { name: "Customer Hostility", value: 10 },
    { name: "Unsupported Language", value: 9 },
    { name: "Network Issues", value: 8 },
];
