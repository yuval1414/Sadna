
export const voice = {
    man: { label: "גבר" },
    woman: { label: "אישה" },
};

export const manWomanOptions = [
    voice.man,
    voice.woman,
];

export const placeInWord = {
    end: { label: "סוף" },
    middle: { label: "אמצע" },
    start: { label: "התחלה" },
    all: { label: "הכל" },
};

export const options = [
    {
        label: "מקום חיתוך",
        letterOptions: [
            {
                label: "הכל",
                placeInWordOptions: [
                    placeInWord.all,
                    placeInWord.start,
                    placeInWord.middle,
                    placeInWord.end
                ],
            },
            {
                label: "מ-נ",
                placeInWordOptions: [
                    placeInWord.all,
                    placeInWord.start,
                    placeInWord.middle,
                    placeInWord.end
                ],
            },
        ],
    },
    {
        label: "אופן חיתוך",
        letterOptions: [
            {
                label: "הכל",
                placeInWordOptions: [
                    placeInWord.all,
                    placeInWord.start,
                    placeInWord.middle,
                    placeInWord.end
                ],
            },
            {
                label: "ת,ט-צ",
                placeInWordOptions: [
                    placeInWord.all,
                    placeInWord.start,
                    placeInWord.middle,
                ],
            },
        ],
    },
    {
        label: "קוליות",
        letterOptions: [
            {
                label: "הכל",
                placeInWordOptions: [
                    placeInWord.all,
                    placeInWord.start,
                    placeInWord.middle,
                    placeInWord.end
                ],
            },
            {
                label: "כ,ק-ג",
                placeInWordOptions: [
                    placeInWord.all,
                    placeInWord.start,
                    placeInWord.middle,
                    placeInWord.end
                ],
            },
        ],
    },
];
