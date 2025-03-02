import burger from '../assets/projects/burger.jpg';
import custom from '../assets/projects/custom.png';
import focus from '../assets/projects/focus.png';
import html from '../assets/projects/html.png';
import larek from '../assets/projects/larek.png';
import mesto from '../assets/projects/mesto.jpg';
import movies from '../assets/projects/movies.jpg';
import okno from '../assets/projects/okno.png';
import ono from '../assets/projects/ono.png';
import rick from '../assets/projects/rick.png';
import russia from '../assets/projects/russia.png';
import teach from '../assets/projects/teach.jpg';

import cert1en from '../assets/images/cert1_eng.jpg';
import cert1ru from '../assets/images/cert1_ru.jpg';
import cert2en from '../assets/images/cert2_eng.jpg';
import cert2ru from '../assets/images/cert2_ru.jpg';

export const config = {
  stack: [
    'JavaScript',
    'HTML5',
    'CSS3',
    'React',
    'Redux',
    'TypeScript',
    'Figma',
    'npm',
    'Git',
    'GitHub',
    'Gitlab',
    'Webpack',
    'Postman',
    'Sass',
    'Scss',
    'BEM',
    'Grid',
    'Babel',
    'Eslint',
    'Flexbox',
    'Express.js',
    'MongoDB',
    'Perfect Pixel',
    'Node.js',
    'Jest',
    'Cypress',
    'Storybook',
    'REST API',
    'Gulp',
    'ООП'
  ]
};

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  img: string;
  github: string[];
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Библиотека героев мультфильма',
    description:
      'С нуля написана Frontent часть. На сайте реализованы запросы к стороннему Api. Настроена пагинация с возвожностью поисковых запросов. Настроена маршрутизация по страницам сайта. Настроено хранение статичных данных в localstorage. Настроено хранилище Redux.',
    stack: 'React, Typescript, Redux, Webpack, RestApi',
    img: rick,
    github: ['https://github.com/Nevedomskiy/Rick-and-Morty']
  },
  {
    id: '02',
    title: 'Поиск фильмов',
    description:
      'Приложение для поиска фильмов. Написаны с нуля Frontend и Backend. Реализованы регистрастрация, авторизация(с хранением jwt токена), кастомная валидация форм, главная страница, страница поиска и сохранения фильмов в избранное, личный кабинет пользователя. После чего проект был собран, развернут на сервере.',
    stack: 'React, Webpack, RestApi, Express.js, MongoDB, Postman',
    img: movies,
    github: [
      'https://github.com/Nevedomskiy/movies-explorer-frontend',
      'https://github.com/Nevedomskiy/movies-explorer-api'
    ]
  },
  {
    id: '03',
    title: 'Онлайн заказы',
    description:
      'Приложение для создания онлайн заказов. Реализована регистрации, авторизации по access/refresh токену. Написаны формирование и редактирования заказа. Отслеживание степени готовности. Редактирование данных пользователя и получение информациии о предыдущих заказах. Часть машрутов покрыта Jest и Сypress тестами.',
    stack:
      'React, Typescript, Redux, Webpack, RestApi, Jest и Сypress тесты, Storybook',
    img: burger,
    github: ['https://github.com/Nevedomskiy/stellar-burgers']
  },
  {
    id: '04',
    title: 'Социальная сеть',
    description:
      'Приложение было написано на JavaScript с использованием классовых компоненотов, после чего проведён рефакторинг на React. Написаны с нуля Frontend и Backend. Реализованы авторизация, регистрация, редактирование профиля, создание и удаление карточек, кастомная валидация форм.',
    stack:
      'React, Webpack, RestApi, Express.js, MongoDB, Postman, JavaScript, HTML5, CSS3',
    img: mesto,
    github: ['https://github.com/Nevedomskiy/react-mesto-api-full-gha']
  },
  {
    id: '05',
    title: 'Мониторинг городов',
    description:
      'Приложение для взаимодествия с сторонним api. Позволяет найти интересующий город и посмотреть на него в любое время суток. Написано для знакомства с встраиваемым медиаплеером html, формой запросов и получения данных от api.',
    stack: 'JavaScript, HTML5, CSS3, RestApi',
    img: okno,
    github: ['https://github.com/Nevedomskiy/posmotri_v_okno']
  },
  {
    id: '06',
    title: 'Шуточный магазин',
    description:
      'Приложение написано по принципам объектно-ориентированное программирования(ООП) с разделением отображения/хранения данных/экшенов.',
    stack: 'JavaScript, Typescript, HTML5, SCSS, RestApi, ОПП',
    img: larek,
    github: ['https://github.com/Nevedomskiy/web-larek-frontend']
  },
  {
    id: '07',
    title: 'Внешняя кастомизация',
    description:
      'Приложение написано на React. Его основная фишка - возможность редактировать страницу по вкусу пользователя. Изменять шрифты, размер и цвет текста, цвет фона, ширину контентной части.',
    stack: 'React, Typescript,  Webpack',
    img: custom,
    github: ['https://github.com/Nevedomskiy/blog-customizer']
  },
  {
    id: '08',
    title: 'Внешняя кастомизация',
    description:
      'Приложение написано на JavaScript. Основным функционалом является автоматический подбор темы под устройство пользователя с возможность смены в верхней части экрана. Так же для сборки проекта удалось пощупать Gulp.',
    stack: 'JavaScript, CSS5, HTML5, Gulp',
    img: focus,
    github: ['https://github.com/Nevedomskiy/slozhno-sosredotochitsya']
  },
  {
    id: '09',
    title: 'Лендинг',
    description:
      'В данном проекте отработаны методы семантической адаптивной верстки с использованием grid и flex контейнеров. Для верстки использовалась технология PixelPerfect по макетам Figma.',
    stack: 'CSS5, HTML5,  БЭМ',
    img: russia,
    github: ['https://github.com/Nevedomskiy/Travel-to-Russia']
  },
  {
    id: '10',
    title: 'Лендинг',
    description:
      'В данном проекте отработаны методы семантической адаптивной верстки с использованием grid и flex контейнеров. Для верстки использовалась технология PixelPerfect по макетам Figma.',
    stack: 'CSS5, HTML5,  БЭМ',
    img: ono,
    github: ['https://github.com/Nevedomskiy/ono-tebe-nado']
  },
  {
    id: '11',
    title: 'Лендинг c анимациями',
    description:
      'В данном проекте отработаны методы семантической адаптивной верстки с использованием grid и flex контейнеров. Применены несложные анимации, которые добавили интерактивности приложению. Для верстки использовалась технология PixelPerfect по макетам Figma.',
    stack: 'CSS5, HTML5, БЭМ',
    img: teach,
    github: ['https://github.com/Nevedomskiy/ono-tebe-nado']
  },
  {
    id: '12',
    title: 'Внешняя кастомизация',
    description:
      'Приложение написано на JavaScript. Основным функционалом является автоматический подбор темы под устройство пользователя с возможность смены в верхней части экрана. Применены несложные анимации и css кастомизация изображений. Для верстки использовалась технология PixelPerfect по макетам Figma.',
    stack: 'JavaScript, CSS5, HTML5',
    img: html,
    github: ['https://github.com/Nevedomskiy/zakrivayuschiy-teg-f']
  }
];

export interface Certificate {
  name: string;
  url: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    name: 'CertificateRu1',
    description: 'Скан сертификата на русском языке - 1 страница',
    url: cert1ru
  },
  {
    name: 'CertificateRu2',
    url: cert2ru,
    description: 'Скан сертификата на русском языке - 2 страница'
  },
  {
    name: 'CertificateEn1',
    url: cert1en,
    description: 'Скан сертификата на английском языке - 1 страница'
  },
  {
    name: 'CertificateEn2',
    url: cert2en,
    description: 'Скан сертификата на английском языке - 2 страница'
  }
];
