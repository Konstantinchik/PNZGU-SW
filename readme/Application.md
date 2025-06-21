# Applications API

## Методы

---

### 1. `GET /applications`
#### Описание:
Получение списка заявок.

#### Принимает:
- **`status`** (int, optional) — Фильтр по статусу (`-1`, `0`, `1`).

#### Возвращает:
- Массив объектов заявок:
  ```json
  [
      {
          "id": 1,
          "title": "Application 1",
          "status": 1,
          "direction_id": 2,
          "created_at": "2024-11-29T12:00:00Z"
      }
  ]


 ### 2. `POST /applications`

#### Описание:
Создание новой заявки.

#### Принимает:
- **`title`** (string, required)  
  Название заявки.
- **`file`** (file, required)  
  Загружаемый файл. Допустимые форматы: `pdf`, `doc`, `docx`.
- **`direction_id`** (integer, required)  
  Идентификатор направления.
- **`users`** (array, required)  
  Список пользователей. Каждый пользователь содержит:
    - **`name`** (string, required) — Имя пользователя.
    - **`phone`** (string, required) — Телефон пользователя.
    - **`place`** (string, required) — Место работы.
    - **`position`** (string, required) — Должность.
    - **`email`** (string, required) — Электронная почта.
    - **`status`** (integer, required) — Статус пользователя (`0` или `1`).

#### Возвращет:
Возвращает объект созданной заявки:
```json
{
    "id": 3,
    "title": "New Application",
    "status": 0,
    "direction_id": 2,
    "created_at": "2024-11-29T12:30:00Z"
}


## PUT /applications/{application}

### Описание:
Обновление существующей заявки.

### Входные параметры:
- **`title`** (string, optional)  
  Новое название заявки.  
- **`status`** (integer, optional)  
  Новый статус заявки. Допустимые значения:  
  - `-1` — Отклонено  
  - `0` — В процессе  
  - `1` — Принято  
- **`direction_id`** (integer, optional)  
  Новый идентификатор направления.  

### Выходные данные:
Возвращает объект обновленной заявки:
```json
{
    "id": 3,
    "title": "Updated Application",
    "status": 1,
    "direction_id": 3,
    "updated_at": "2024-11-29T13:00:00Z"
}
