
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
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ש-ס",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ש-ף",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.end
                ],
            },
            {
                label: "ס-ף",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.end
                ],
            },
            {
                label: "ס-ח",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.middle,
                ],
            },
            {
                label: "פ-ת,ט",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                ],
            },
            {
                label: "ת,ט-ק,כ",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ג-ד",
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
            {
                label: "ר-ב,ו",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "פ-ק,כ",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                ],
            },
            {
                label: "ח-ף",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.end,
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
            {
                label: "ס-צ",
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
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ס-ז",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ו-ף",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ח-ר",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.middle,
                    placeInWordOp.end
                ],
            },
            {
                label: "ב-פ",
                placeInWordOptions: [
                    placeInWordOp.all,
                    placeInWordOp.start,
                    placeInWordOp.middle,
                ],
            },
            {
                label: "ט,ת-ד",
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
