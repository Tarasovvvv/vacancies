# Задание

## Разработать функционал просмотра вакансий и отклика на нее

- Реализовать отображение списка вакансий и страницу детального просмотра
- Ссылка на макет figma https://www.figma.com/design/PdjS8FWdo45hvBGFg40gx8/%D0%A2%D0%97-Frontend?node-id=0-1&p=f&t=7DMggYRgfYsyHX5E-0
- Данные нужно получить по адресу https://670558dd031fd46a830f9fda.mockapi.io/vacancies (GET)
- Адрес для получения данных вакансии для страницы детального просмотра https://670558dd031fd46a830f9fda.mockapi.io/vacancies?id={id} (GET)
- Разработать форму для подачи заявки (react hook form)
- Форма должна иметь схему валидации
- Отображать всплывающее сообщение, если при отправке форма не валидна
- При подтверждении формы в консоли должен быть объект вида:

  ```
  {
    id,
    jobTitle,
    fullName,
    email,
    phoneNumber,
    currentDate, // ISO 8601 (yyyy-MM-dd)
    vsc: [
      gitHub: {
        nickname,
        subscribers,
      },
      gitLab: {
        nickname,
        subscribers,
      },
    ]
  };
  ```

Разработать согласно принципам FSD, соблюдая декомпозицию и переиспользуемость компонентов.

# Обязательный стек технологий

- Core: React и TypeScript
- Remote State: RTK Query
- Роутинг: react-router-dom
- Формы: React Hook Form
- Стилизация: Sass + scss-модули
- Методология: FSD
- API: https://670558dd031fd46a830f9fda.mockapi.io/vacancies
