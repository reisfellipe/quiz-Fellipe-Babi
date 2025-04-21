import img1 from '../images/singer-icon.webp';
import img2 from '../images/bears-icon.webp';
import img3 from '../images/diamond-heart.webp';
import img4 from '../images/gifts.webp';
import img5 from '../images/songs-icon.webp';
import img6 from '../images/meeting-icon.webp';
import img7 from '../images/love-language-icon.webp';
import img8 from '../images/sad-heart-icon.webp';
import img9 from '../images/bear-polar.webp';
import img10 from '../images/carather-icon.webp'

export type Question = {
    question:string;
    image:string;
    options:string[];
    correctAnswer:number;
};

export const questions: Question[] = [
    {
        question: "Qual é o cantor favorito do Fellipe?",
        image: img1,
        options: ["Luan Santana", "Justin Bieber", "Michael Jackson", "Elijah Woods"],
        correctAnswer: 1,
    },
    {
        question: "O que o Fellipe faz quando está com ciúmes?",
        image:img2,
        options: ["Inicia uma briga exigindo explicação", "Responde seco todas suas mensagens", "Posta indiretas nas redes sociais", "Finge que não está com ciúmes, mas fala na ligação depois."],
        correctAnswer:3
    },
    {
        question: "Qual desses apelidos o Fellipe mais gosta de ser chamado por você?",
        image:img3,
        options: ["Vida", "Amor", "Bebê", "Meu Homem"],
        correctAnswer: 3
    },
    {
        question: "Se o Fellipe fosse te surpreender num encontro, qual desses você acha que ele vai levar?",
        image: img4,
        options:["Um buquê de flores", "Um pacote de bala fini", "Um bilhete escondido num livro", "Um desenho feito à mão"],
        correctAnswer: 0
    },
    {
        question: "Qual dessas músicas mais representa a gente?",
        image: img5,
        options: ["Dona do meu pensamento - Charlie Brown Jr", "Ai Amor - ANAVITORIA","Iris - Goo Goo Dolls ", "A Thousand Years - Christina Perri"],
        correctAnswer: 2
    },
    {
        question: "Qual tipo de date o Fellipe mais amaria fazer com você num dia de frio e chuva?",
        image: img6,
        options: ["Um jantar à luz de velas em um restaurante local", "Netflix, cobertor e amorzinho", "Dormir o dia inteiro", "Ir ao cinema e depois tomar um café"],
        correctAnswer:1
    },
    {
        question:  "Qual dessas linguagens de amor ele mais gosta de receber de você?",
        image: img7,
        options: ["Tempo de qualidade e total atenção", "Mensagens carinhosas", "Ganhar presentes", "De ganhar fotos e vídeos espontâneos exclusivos"],
        correctAnswer: 0
    },
    {
        question: "Continue sendo sincera, qual dessas coisas você acredita que o deixa mais magoado?",
        image:img8,
        options: ["Se eu não responder as mensagens de forma carinhosa", "Se eu não dizer palavras de afirmação durante o dia", "Se eu desrepeitar com xingamentos ofensivos", "Se eu não ver e responder os posts que envia pra mim"],
        correctAnswer: 2
    },
    {
        question: "Qual a reação mais provável que o Fellipe tenha quando te ver pessoalmente conhecendo ele?",
        image:img9,
        options: ["Ficar nervoso e não saber o que fazer", "Ficar gaguejando e com as mãos inquietas", "Estar querendo contato físico o tempo todo até sentado numa mesa", "Olhar para você sem piscar e nem prestar atenção no que está falando"],
        correctAnswer: 2
    },
    {
        question: "Fellipe é o tipo de Homem que no primeiro encontro:",
        image: img10,
        options: ["Vai gostar de falar mais do que ouvir você falar", "Não vai deixar você pagar nem dividir a conta do restaurante", "Vai ficar no celular enquanto fala com você", "Se despedir na porta da saída do lugar de encontro ao invés de te acompanhar até a sua casa"],
        correctAnswer: 1
    }
    

]