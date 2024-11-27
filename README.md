# React Forms with Validation and Local Storage

![alt text](<Screenshot 2024-11-27 123436.png>)

![alt text](<Screenshot 2024-11-27 123447.png>)
## Project Overview

This project demonstrates a React application for form handling with multi-step navigation (`Basics`, `Advanced`, `Submit`) and field validation. The data is dynamically validated using regex patterns and is saved to **Local Storage** for persistence.

---

## Features

- **Multi-Step Form Navigation**: Switch between `Basics`, `Advanced`, and `Submit` sections seamlessly.
- **Dynamic Validation**: Validate user input fields using regex patterns.
- **Local Storage Integration**: Save and retrieve form data from the browser's Local Storage.
- **Error Highlighting**: Display field-specific errors dynamically based on validation.
- **Real-Time Updates**: Data and error states update immediately upon user input.

---

## Project Structure

### Components
- **Basics**: Handles basic user input fields like name, email, and phone number.
- **Advanced**: Captures additional information such as college and city.
- **Submit**: Provides a summary of user inputs and saves data to Local Storage.

### State Management
The project uses the following states:
- **`data`**: Stores the user input values.
- **`err`**: Tracks field-specific validation errors.
- **`disp`**: Manages the visibility of form sections.

---

## Validation Rules

The following regex patterns are used for validation:

| Field      | Regex                                                                 | Description                                                                                 |
|------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Name**   | `^[a-zA-Z\s.-]{2,50}$`                                               | Allows letters, spaces, dots, and hyphens; length 2–50 characters.                         |
| **Email**  | `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`                    | Standard email format (e.g., `user@example.com`).                                           |
| **Phone**  | `^\d{10}$`                                                           | Exactly 10 digits (no spaces or special characters).                                        |
| **College**| `^[a-zA-Z0-9\s.,'-]{2,100}$`                                         | Allows alphanumeric characters, spaces, commas, dots, and hyphens; length 2–100 characters.|
| **City**   | `^[a-zA-Z\s.-]{2,50}$`                                               | Allows letters, spaces, dots, and hyphens; length 2–50 characters.                         |

---
