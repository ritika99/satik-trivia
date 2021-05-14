import {Quiz} from "./index";

export const quizlist: Quiz[] = [
    {
        quizName: "Makeup Kit",
        questions: [
            {
                name: "Where should you test foundation to get the best color match for your skin?",
                options: [
                    {
                        text: "Cheek, forehead, and neck",
                        isRight: true,
                    },
                    {
                        text: "Cheek, neck, and wrist",
                        isRight: false,
                    },
                    {
                        text: "Cheek, and jaw",
                        isRight: false,
                    },
                    {
                        text: "Nowhere,just buy it and hope for the best",
                        isRight: false,
                    }
                ],
                product: "foundation"
            },
            {
                name: "Where should you test foundation to get the best color match for your skin?",
                image: "https://www.qcmakeupacademy.com/wp-content/uploads/2016/03/shutterstock_126884261-1_ed.jpg",
                options: [
                    {
                        text: "Smokey eye",
                        isRight: false,
                    },
                    {
                        text: "Cat eye",
                        isRight: true,
                    },
                    {
                        text: "Lizard eye",
                        isRight: false,
                    },
                    {
                        text: "Sharp eye",
                        isRight: false,
                    }
                ],
                product: "eyeliner"
            },
            {
                name: "What order should these products go on?",
                options: [
                    {
                        text: "Primer, foundation, concealer, blush",
                        isRight: false,
                    },
                    {
                        text: "Concealer, primer, foundation, blush",
                        isRight: false,
                    },
                    {
                        text: "Blush, foundation, primer, concealer",
                        isRight: false,
                    },
                    {
                        text: "Primer, concealer, foundation, blush",
                        isRight: true,
                    }
                ],
                product: "blush"
            },
            {
                name: "What is this process called?",
                image: "https://static0.thequizimages.com/wordpress/wp-content/uploads/2018/05/7744afb3d538611e6a33c20c047cec56.png?q=50&fit=crop&w=963&h=481&dpr=1.5",
                options: [
                    {
                        text: "Highlighting",
                        isRight: false,
                    },
                    {
                        text: "Lightning",
                        isRight: false,
                    },
                    {
                        text: "Contouring",
                        isRight: true,
                    },
                    {
                        text: "Bronzing",
                        isRight: false,
                    }
                ],
                product: "contour"
            },
            {
                name: "How often should you be washing your makeup brushes?",
                options: [
                    {
                        text: "Every week",
                        isRight: true,
                    },
                    {
                        text: "Every month",
                        isRight: false,
                    },
                    {
                        text: "Every 6 weeks",
                        isRight: false,
                    },
                    {
                        text: "Every 3 months",
                        isRight: false,
                    }
                ],
                product: "brush"
            },
            {
                name: "Which of these makeup steps should be last?",
                options: [
                    {
                        text: "Eyeshadow",
                        isRight: false,
                    },
                    {
                        text: "Bronzer",
                        isRight: false,
                    },
                    {
                        text: "Setting Spray",
                        isRight: true,
                    },
                    {
                        text: "Lip liner",
                        isRight: false,
                    }
                ],
                product: "lipstick"
            },
            {
                name: "Which one of these products even out the skin?",
                options: [
                    {
                        text: "Foundation",
                        isRight: true,
                    },
                    {
                        text: "Toner",
                        isRight: false,
                    },
                    {
                        text: "Mascara",
                        isRight: false,
                    },
                    {
                        text: "Eyeliner",
                        isRight: false,
                    }
                ],
                product: "eyeshadow"
            },
            {
                name: "Which skin type is better not to use Face Powder?",
                options: [
                    {
                        text: "Oily skin",
                        isRight: false,
                    },
                    {
                        text: "Normal skin",
                        isRight: false,
                    },
                    {
                        text: "Combination Spray",
                        isRight: false,
                    },
                    {
                        text: "Dry skin",
                        isRight: true,
                    }
                ],
                product: "facepowder"
            },
            {
                name: "What is this makeup tool?",   
                image: "https://www.quizexpo.com/wp-content/uploads/2019/08/61YdNB0e-dL._SL1000_.jpg",    
                options: [
                    {
                        text: "Blush",
                        isRight: false,
                    },
                    {
                        text: "Lipstick",
                        isRight: false,
                    },
                    {
                        text: "Eyeshadow",
                        isRight: true,
                    },
                    {
                        text: "Gel Eyeliner",
                        isRight: false,
                    }
                ],
                product: "kajal"
            }
        ]
    }
];
