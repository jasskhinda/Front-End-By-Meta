let hour = 0;
const endOfDay = 24;

while (hour < endOfDay) {
    if (hour < 7) {
        console.log(`Hour ${hour}: Dreaming of becoming a coding ninja`);
    } else if (hour < 8) {
        console.log(`Hour ${hour}: Frantically searching for socks`);
    } else if (hour < 15) {
        console.log(`Hour ${hour}: Trying to stay awake in class`);
    } else if (hour < 17) {
        console.log(`Hour ${hour}: Procrastinating on homework`);
    } else if (hour < 19) {
        console.log(`Hour ${hour}: Pretending to be productive`);
    } else if (hour < 21) {
        console.log(`Hour ${hour}: Eating everything in sight`);
    } else {
        console.log(`Hour ${hour}: Binge-watching TV shows`);
    }
    hour++;
}