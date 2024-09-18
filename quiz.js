const quiz = [
    {
        subject: "Adição",
        exercises: [
            {
                question: "21 + 2",
                answers: [
                    {option: "24", correct: false},
                    {option: "23", correct: true},
                    {option: "25", correct: false},
                    {option: "22", correct: false}
                ]
            },
            {
                question: "20 + 14",
                answers: [
                    {option: "34", correct: true},
                    {option: "35", correct: false},
                    {option: "37", correct: false},
                    {option: "36", correct: false}
                ]
            },
            {
                question: "9 + 21",
                answers: [
                    {option: "31", correct: false},
                    {option: "29", correct: false},
                    {option: "30", correct: true},
                    {option: "28", correct: false}
                ]
            },
            {
                question: "-28 + 21",
                answers: [
                    {option: "-6", correct: false},
                    {option: "-7", correct: true},
                    {option: "-5", correct: false},
                    {option: "-4", correct: false}
                ]
            },
            {
                question: "-9 + 13",
                answers: [
                    {option: "2", correct: false},
                    {option: "4", correct: true},
                    {option: "3", correct: false},
                    {option: "5", correct: false}
                ]
            }
        ]
    },
    {
        subject: "Subtração",
        exercises: [
            {
                question: "13 - 9",
                answers: [
                    {option: "3", correct: false},
                    {option: "4", correct: true},
                    {option: "6", correct: false},
                    {option: "5", correct: false}
                ]
            },
            {
                question: "90 - 57",
                answers: [
                    {option: "33", correct: true},
                    {option: "35", correct: false},
                    {option: "37", correct: false},
                    {option: "38", correct: false}
                ]
            },
            {
                question: "120 - 20",
                answers: [
                    {option: "108", correct: false},
                    {option: "90", correct: false},
                    {option: "100", correct: true},
                    {option: "101", correct: false}
                ]
            },
            {
                question: "290 - 127",
                answers: [
                    {option: "163", correct: true},
                    {option: "165", correct: false},
                    {option: "167", correct: false},
                    {option: "153", correct: false}
                ]
            },
            {
                question: "490 - 170",
                answers: [
                    {option: "330", correct: false},
                    {option: "320", correct: true},
                    {option: "220", correct: false},
                    {option: "390", correct: false}
                ]
            }
        ]
    },
    {
        subject: "Divisão",
        exercises: [
            {
                question: "20 / 4",
                answers: [
                    {option: "3", correct: false},
                    {option: "5", correct: true},
                    {option: "2", correct: false},
                    {option: "4", correct: false}
                ]
            },
            {
                question: "49 / 7",
                answers: [
                    {option: "7", correct: true},
                    {option: "5", correct: false},
                    {option: "6", correct: false},
                    {option: "8", correct: false}
                ]
            },
            {
                question: "81 / 3",
                answers: [
                    {option: "29", correct: false},
                    {option: "30", correct: false},
                    {option: "27", correct: true},
                    {option: "28", correct: false}
                ]
            },
            {
                question: "100 / 20",
                answers: [
                    {option: "5", correct: true},
                    {option: "6", correct: false},
                    {option: "3", correct: false},
                    {option: "4", correct: false}
                ]
            },
            {
                question: "210 / 6",
                answers: [
                    {option: "30", correct: false},
                    {option: "33", correct: false},
                    {option: "35", correct: true},
                    {option: "40", correct: false}
                ]
            }
        ]
    },
    {
        subject: "Multiplicação",
        exercises: [
            {
                question: "3 * 9",
                answers: [
                    {option: "24", correct: false},
                    {option: "27", correct: true},
                    {option: "18", correct: false},
                    {option: "26", correct: false}
                ]
            },
            {
                question: "20 * 3",
                answers: [
                    {option: "60", correct: true},
                    {option: "57", correct: false},
                    {option: "66", correct: false},
                    {option: "63", correct: false}
                ]
            },
            {
                question: "100 * 100",
                answers: [
                    {option: "100000", correct: false},
                    {option: "1000", correct: false},
                    {option: "10000", correct: true},
                    {option: "1000000", correct: false}
                ]
            },
            {
                question: "220 * 2",
                answers: [
                    {option: "440", correct: true},
                    {option: "420", correct: false},
                    {option: "400", correct: false},
                    {option: "444", correct: false}
                ]
            },
            {
                question: "300 * 4",
                answers: [
                    {option: "1400", correct: false},
                    {option: "900", correct: false},
                    {option: "1200", correct: true},
                    {option: "1080", correct: false}
                ]
            },
        ]
    },
    {
        subject: "Potenciação",
        exercises: [
            {
                question: "3 ^ 3",
                answers: [
                    {option: "33", correct: false},
                    {option: "27", correct: true},
                    {option: "9", correct: false},
                    {option: "12", correct: false}
                ]
            },
            {
                question: "7 ^ 2",
                answers: [
                    {option: "49", correct: true},
                    {option: "42", correct: false},
                    {option: "14", correct: false},
                    {option: "48", correct: false}
                ]
            },
            {
                question: "2 ^ 4",
                answers: [
                    {option: "14", correct: false},
                    {option: "8", correct: false},
                    {option: "16", correct: true},
                    {option: "18", correct: false}
                ]
            },
            {
                question: "4 ^ 4",
                answers: [
                    {option: "256", correct: true},
                    {option: "16", correct: false},
                    {option: "240", correct: false},
                    {option: "216", correct: false}
                ]
            },
            {
                question: "9 ^ 3",
                answers: [
                    {option: "720", correct: false},
                    {option: "27", correct: false},
                    {option: "729", correct: true},
                    {option: "810", correct: false}
                ]
            }
        ]
    },
    {
        subject: "Raiz Quadrada",
        exercises: [
            {
                question: "√9",
                answers: [
                    {option: "2", correct: false},
                    {option: "3", correct: true},
                    {option: "5", correct: false},
                    {option: "4", correct: false}
                ]
            },
            {
                question: "√81",
                answers: [
                    {option: "9", correct: true},
                    {option: "5", correct: false},
                    {option: "7", correct: false},
                    {option: "8", correct: false}
                ]
            },
            {
                question: "√64",
                answers: [
                    {option: "9", correct: false},
                    {option: "7", correct: false},
                    {option: "8", correct: true},
                    {option: "6", correct: false}
                ]
            },
            {
                question: "√4",
                answers: [
                    {option: "2", correct: true},
                    {option: "3", correct: false},
                    {option: "1", correct: false},
                    {option: "4", correct: false}
                ]
            },
            {
                question: "√121",
                answers: [
                    {option: "13", correct: false},
                    {option: "10", correct: false},
                    {option: "11", correct: true},
                    {option: "12", correct: false}
                ]
            }
        ]
    }
]

export default quiz;
