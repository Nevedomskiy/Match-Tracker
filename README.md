# Проектная работа Match Tracker

Данный проект выполнен как тестовое задание
Размещёно на github-pages по ссылке: https://nevedomskiy.github.io/Rick-and-Morty/

Чтобы запустить проект локально:

- скопируйте репозиторий git clone https://github.com/Nevedomskiy/Match-Tracker.git
- установите зависимости npm i
- удалите приставку .example с файла .env
- запустите проект командой npm run start

В проекте так же резмещён файл swagger.yaml. Если вам нужно узнать какие данные возвращает api перейдите на https://editor.swagger.io/ и скопируйте содержимое файла в playground

## ТЗ:

Разработать простое веб-приложение "Матч-трекер",которое:
Загружает список матчей с API.
Показывает названия команд, счет, статус матча.
Позволяет обновлять данные по нажатию кнопки "Обновить".
Отображает индикатор загрузки при запросе данных.
Показывает сообщение об ошибке, если API недоступно.

💡 Использование Next.js допустимо, но не обязательно. Если вы используете Next.js, то:

- Можно применять `getServerSideProps` или `getStaticProps`, если считаете это уместным.
- Разрешено использовать SWR / React Query для работы с API.
- НЕ использовать API Routes (`pages/api`), так как серверная часть уже реализована.

1️⃣ API-запрос
Загрузить список матчей
swagger: https://drive.google.com/file/d/1p4Y9-8KL0eCQXh2HZoGgFRK05z_Vz62U/view?usp=sharing

baseUrl - https://app.ftoyd.com/fronttemp-service

Ошибка API (если сервер недоступен) должна показывать текст "Ошибка: не удалось загрузить информацию".
2️⃣ UI (Figma)
Figma макет:

https://www.figma.com/design/W16WfB86EgqtcuuqLCYjgF/Test-assignment?node-id=113-741&t=hBEv4NU9JHRNcUKm-4
