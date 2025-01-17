import Quiz from 'react-quiz-component'

import { PageTitle } from '@shared/ui'

import styles from './styles.module.css'

const appLocale = {
  landingHeaderText: '<questionLength> вопросов',
  question: 'Вопрос',
  startQuizBtn: 'Начать',
  resultFilterAll: 'Все',
  resultFilterCorrect: 'Верно',
  resultFilterIncorrect: 'Неверно',
  prevQuestionBtn: 'Назад',
  nextQuestionBtn: 'Дальше',
  resultPageHeaderText:
    'Тестирование завершено. Вы ответили на <correctIndexLength> из <questionLength> вопросов.',
  resultPagePoint: '',
  pauseScreenDisplay: '',
  timerTimeRemaining: '',
  timerTimeTaken: '',
  pauseScreenPause: '',
  pauseScreenResume: '',
  singleSelectionTagText: '',
  multipleSelectionTagText: '',
  pickNumberOfSelection: '',
  marksOfQuestion: '',
}

export const quiz = {
  progressBarColor: '#9de1f6',
  appLocale,
  questions: [
    {
      question: 'В какой части России расположена Ульяновская область?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'В северной части',
        'В южной части',
        'В центральной части европейской России',
        'На Дальнем Востоке',
      ],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'С какими республиками граничит Ульяновская область на севере?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'С республикой Коми и республикой Карелия',
        'С республикой Мордовия и Пензенской областью',
        'С Чувашской Республикой и Республикой Татарстан',
        'С республикой Башкортостан и республикой Марий Эл',
      ],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'С какими республиками граничит Ульяновская область на западе?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'С Чувашской республикой и республикой Татарстан',
        'С республикой Мордовия и Пензенской областью',
        'С Самарской областью и с Саратовской областью',
        'С республикой Башкортостан и республикой Марий Эл',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Какой символ Ульяновской области изображен на гербе?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Золотой орел', 'Серебряная колонна', 'Красный флаг', 'Синий щит'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question:
        'Какова численность населения Ульяновской области по состоянию на 1 января 2022 года?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['1 203 969 человек', '800 000 человек', '1 000 000 человек', '1 500 000 человек'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Какой город является административным центром Ульяновской области?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Ульяновск', 'Димитровград', 'Инза', 'Новоульяновск'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question:
        'Какой процент населения Ульяновской области составляют русские по данным Всероссийской переписи населения 2010 года?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['25%', '50%', '90%', '73,58%'],
      correctAnswer: '4',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Какой климат в Ульяновской области?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Умеренно континентальный',
        'Умеренный',
        'Субарктический и субантарктический',
        'Экваториальный',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Сколько муниципальных образований входит в состав Ульяновской области?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['166', '165', '167', '170'],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Губернатор Ульяновской области:',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Роман Викторович Бусаргин',
        'Олег Мельниченко',
        'Радий Фаритович Хабиров',
        'Русских Алексей Юрьевич',
      ],
      correctAnswer: '4',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'В каком году был основан город Ульяновск?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['1648г.', '1650г.', '1655г.', '1660г.'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Сколько промышленных предприятий в Ульяновской области?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['291', '292', '293', '294'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question:
        'Сколько соглашений заключено Правительством Ульяновской области о сотрудничестве с партнёрами в зарубежных странах?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['10 соглашений', '9 соглашений', '8 соглашений', '7 соглашений'],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question:
        'Ульяновская область – регион с развитой системой образования. Сколько образовательных организаций, реализующие программу дошкольного образования, функционирует в регионе?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['Более 450', 'Более 500', 'Более 400', 'Более 350'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
    {
      question: 'Общая протяжённость сети автомобильных дорог составляет:',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['13,1 тыс.км', '14,1 тыс.км', '15,1 тыс.км', '16,1 тыс.км'],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Верно!',
      messageForIncorrectAnswer: 'Неверно!',
      point: '1',
    },
  ],
}

export const AboutRussia6Page = () => {
  return (
    <>
      <PageTitle text={'Тестирование 2'} />

      <div className={styles.test}>
        <Quiz quiz={quiz} disableSynopsis />
      </div>
    </>
  )
}
