//positive reactions
export const positiveReactions = [
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FPositive%2F%D7%90%D7%99%D7%9F%20%D7%9B%D7%9E%D7%95%D7%9B%D7%9D!.wav?alt=media&token=0604af36-52a3-42a3-a47e-10df58e36478",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FPositive%2F%D7%94%D7%9E%D7%A9%D7%99%D7%9B%D7%95%20%D7%9B%D7%9A!.wav?alt=media&token=dc499570-1c5d-4f8c-bbb2-c116f05a21ce",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FPositive%2F%D7%9B%D7%9C%20%D7%94%D7%9B%D7%91%D7%95%D7%93!.wav?alt=media&token=8ed5c4fb-02a2-407f-aafd-be10cd33e48e",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FPositive%2F%D7%9E%D7%A2%D7%95%D7%9C%D7%94!.wav?alt=media&token=96f48720-7175-481d-8412-a6461978fcdf",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FPositive%2F%D7%A2%D7%91%D7%95%D7%93%D7%94%20%D7%98%D7%95%D7%91%D7%94!.wav?alt=media&token=6eb9b387-f9be-4175-bb82-230dfbe2933d",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FPositive%2F%D7%AA%D7%95%D7%AA%D7%97%D7%99%D7%9D!.wav?alt=media&token=72e9fc2f-6855-4c43-ae9d-dc8609384034"
];

export const negativeReactions = [
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FNegative%2F%D7%91%D7%95%D7%90%D7%95%20%D7%A0%D7%A0%D7%A1%D7%94%20%D7%A9%D7%95%D7%91.wav?alt=media&token=fe674cfe-072e-4005-a334-211d16ddb7f0",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FNegative%2F%D7%91%D7%97%D7%A8%D7%95%20%D7%A9%D7%95%D7%91.wav?alt=media&token=9cac48ae-da17-40de-afbb-47175bc0ebfb",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FNegative%2F%D7%94%D7%9E%D7%A9%D7%99%D7%9B%D7%95%20%D7%9C%D7%A0%D7%A1%D7%95%D7%AA.wav?alt=media&token=027a4faf-564e-4182-a32c-7065b40d9ccc",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FNegative%2F%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20%D7%A0%D7%95%D7%A1%D7%A3.wav?alt=media&token=143cf8b1-bbc0-4e1c-8023-ae135330f420",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FNegative%2F%D7%A0%D7%A1%D7%95%20%D7%A9%D7%95%D7%91.wav?alt=media&token=ebc38a89-3f29-419b-b5a4-c350235b6d61",
    "https://firebasestorage.googleapis.com/v0/b/hear-me-out-785e2.appspot.com/o/Sounds%2FReactions%2FMen%2FNegative%2F%D7%A0%D7%A1%D7%95%20%D7%A9%D7%A0%D7%99%D7%AA.wav?alt=media&token=8e784862-77e7-405d-ae57-841ee037043e"
];

export function randomReaction(posReaction) {
    if (posReaction) {
        return positiveReactions[Math.round(Math.random() * 6)];
    }
    else{
        return negativeReactions[Math.round(Math.random() * 6)];
    }

}