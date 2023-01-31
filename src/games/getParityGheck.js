const descripion = 'You need to answer yes if the number is even, or no if it is odd';
const checkParity = (number)=> number % 2 === 0;
const createRound = () => {
    const question = getRandomNumber(1, 100);
    const answer = isParity(question) ? 'yes' : 'no';
    return [question, answer];
};

const gameTurn = () => {
    const rounds = [];
}
