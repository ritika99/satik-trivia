export type Option = {
    text: string;
    isRight: boolean;
}

export type Question = {
    name: string;
    image?: string;
    options: Option[]
    product: string; //this will be my points
}

export type Quiz = {
    quizName: string;
    questions: Question[];
}
