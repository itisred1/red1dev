# 💼 Redouane Daali - Portfolio Website

Welcome to my personal portfolio website! This site showcases my skills, projects, and experience as a **Full-stack Developer**.  
It highlights my technical abilities, creativity, and passion for building modern web solutions.

## 🌐 Live Demo

👉 [red1dev.com](https://red1dev.com)

## 🛠️ Built With

- **HTML5**, **CSS3**, **JavaScript**
- **PHP**
- **PHPMailer** for secure contact form emails
- **.env** for environment configuration
- Multi-language support (English / French)
- Dark / Light theme toggle

## 📂 Project Structure

- css/ - Stylesheets
- js/ - JavaScript scripts
- lang/ - Language JSON files (en.json, fr.json)
- PHPMailer/ - PHPMailer library for SMTP mailing
- index.html - Main portfolio webpage
- contact.php - Server-side contact form processor
- .env.example - Template for environment variables
- .gitignore - Git ignore rules

## 📋 Features

- Clean, modern and responsive design (desktop-first)
- Dark and Light theme switcher
- Multi-language support with English and French
- Downloadable CV link
- Contact form with backend email sending via PHPMailer and Gmail SMTP
- Secure environment variables for sensitive data
- Smooth animations and fade-in effects on scroll

## 🧪 Running Locally

1. Clone the repository  
   `git clone https://github.com/itisred1/red1dev.git`

2. Navigate to the project folder  
   `cd red1dev`

3. Create your environment config file from the template  
   `cp .env.example .env`

4. Edit the `.env` file to add your SMTP email and password

5. Start PHP built-in server (from the root folder)  
   `php -S localhost:8000`

Open your browser at [http://localhost:8000](http://localhost:8000) to see the website.

## 🔒 Security & Best Practices

- The `.env` file is included in `.gitignore` and should **never** be committed with sensitive info.
- The contact form only accepts **POST** requests and responds with JSON.
- SMTP credentials are used securely with PHPMailer, not PHP's default `mail()` function.
- Contact API is protected to accept requests only from the same origin.

## 📸 Screenshots

Add screenshots here demonstrating desktop design, dark mode, and language toggle.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Connect With Me

- GitHub: https://github.com/itisred1
- LinkedIn: https://linkedin.com/in/redouane-daali
- Email: radwanedaali8@gmail.com

---

Thank you for checking out my portfolio! Feel free to get in touch.
