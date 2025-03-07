# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Taskly - Frontend
Taskly is a comprehensive task management system designed to streamline and optimize organizational task tracking, assignment, and completion. This repository contains the frontend built with React.
 Live Demo
•	Frontend: Deployed Frontend Link
•	Backend: Deployed Backend Link
Backend Repository
To ensure full functionality, connect the frontend to the backend. Find the backend repository here: Taskly Backend Repository

 MIT License
MIT License

Copyright (c) 2025 Benjamin Mweribaya, Larry Mecha, Nadifo, Rome

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Contributors
•	Benjamin Mweribaya
•	Larry Mecha
•	Nadifo Ismail
•	Rome Otieno

Setup Instructions
1. Clone the repository
git clone git@github.com:benjaminmweribaya/taskly-app-front-end.git
cd taskly-app-front-end
2. Install dependencies
npm install or npm ci (for a more accurate installation of exact files from package-lock.json)
3. Start the development server
npm run dev
4. Build for production
npm run build

 Project Structure
To view the project structure, run:
tree -I "node_modules”.

├── README.md
├── Taskly ReadMe.docx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── Cartoon.jpg:Zone.Identifier
│   │   ├── Drawing.jpg
│   │   ├── Drawing.jpg:Zone.Identifier
│   │   ├── Feature.jpg
│   │   ├── Hero section.jpg:Zone.Identifier
│   │   ├── Hero.jpg
│   │   ├── Team.jpg
│   │   └── Team.jpg:Zone.Identifier
│   ├── components
│   │   ├── auth
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── LoginModal.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   └── Signup.jsx
│   │   ├── common
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── dashboard
│   │   │   └── Dashboard.jsx
│   │   ├── profile
│   │   │   └── Profile.jsx
│   │   └── tasks
│   │       ├── TaskBoard.jsx
│   │       ├── TaskComments.jsx
│   │       ├── TaskDetails.jsx
│   │       ├── TaskForm.jsx
│   │       ├── TaskItem.jsx
│   │       └── TaskList.jsx
│   ├── context
│   │   └── AuthContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── AboutUs.jsx
│   │   ├── Accessibility.jsx
│   │   ├── ContactUs.jsx
│   │   ├── LandingPage.jsx
│   │   ├── NotFound.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Services.jsx
│   │   └── TermsAndConditions.jsx
│   └── socket.js
├── tailwind.config.js
├── vite.config.js
└── ~$skly ReadMe.docxContact
For any questions or contributions, feel free to reach out to us!
Happy coding! 