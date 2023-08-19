
export const voiceOptions = {
    man: { label: "גבר" },
    woman: { label: "אישה" },
};

export const manWomanOptions = [
    voiceOptions.man,
    voiceOptions.woman,
];

export const placeInWordOp = {
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
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "מ-נ",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
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
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ת,ט-צ",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
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
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "כ,ק-ג",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
        ],
    },
];
