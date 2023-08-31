
export const voiceOptions = {
    man: { label: "גבר" },
    woman: { label: "אישה" },
};

export const manWomanOptions = [
    voiceOptions.man,
    voiceOptions.woman,
];

export const placeInWordOp = {
    end: { label: "סוף", value: "end" },
    middle: { label: "אמצע", value: "middle" },
    start: { label: "התחלה", value: "start" },
    all: { label: "הכל", value: "הכל" },
};

export const options = [
    {
        label: "מקום חיתוך",
        letterOptions: [
            {
                label: "הכל",   
                sounds: "",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ש-ס",
                sounds: "S-SH",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ש-ף",
                sounds: "F-SH",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.end
                ],
            },
            {
                label: "ס-ף",
                sounds: "F-S",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.end
                ],
            },
            {
                label: "ס-ח",
                sounds: "X-S",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.middle,
                ],
            },
            {
                label: "פ-ת,ט",
                sounds: "T-P",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                ],
            },
            {
                label: "ת,ט-ק,כ",
                sounds: "K-T",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ג-ד",
                sounds: "D-G",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "מ-נ",
                sounds: "N-M",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ר-ב,ו",
                sounds: "V-R",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "פ-ק,כ",
                sounds: "K-P",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                ],
            },
            {
                label: "ח-ף",
                sounds: "F-X",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.end,
                ],
            },
            {
                label: "ש-ח",
                sounds: "X-SH",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                ],
            },
            
        ],
    },
    {
        label: "אופן חיתוך",
        value: "אופן",
        letterOptions: [
            {
                label: "הכל",
                sounds: "",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ת,ט-צ",
                sounds: "TS-T",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                ],
            },
            {
                label: "ס-צ",
                sounds: "TS-S",
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
        label: "קוליות",
        letterOptions: [
            {
                label: "הכל",
                sounds: "",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ס-ז",
                sounds: "Z-S",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ו-ף",
                sounds: "F-V",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ח-ר",
                sounds: "R-X",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ב-פ",
                sounds: "F-B",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                ],
            },
            {
                label: "ט,ת-ד",
                sounds: "D-T",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "כ,ק-ג",
                sounds: "G-K",
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