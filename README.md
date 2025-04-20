# EcoTrack - Personal Sustainable Dashboard

A Carbon Footprint Calculator built with React (frontend) and Flask (backend).

## 🔧 Tech Stack
- React + Tailwind CSS (Frontend)
- Flask + Python (Backend)
- Axios for HTTP Requests
- CORS for cross-origin access

---

## 🌐 Deployment

### 🐍 Backend (Render)
1. Push `server/` folder to GitHub.
2. Create a new Web Service on [Render](https://render.com).
3. Set build command: `pip install -r requirements.txt`
4. Start command: `python app.py`

### ⚛️ Frontend (Vercel)
1. Push `client/` folder to GitHub.
2. Import to [Vercel](https://vercel.com) and set root directory to `client/`.
3. If needed, set `VITE_API_URL` in a `.env` file for API integration.

---

## 📁 Folder Structure
```
EcoTrack/
├── client/                 # React frontend
│   └── ...
├── server/                 # Flask backend
│   ├── app.py
│   ├── carbon_calc.py
│   └── requirements.txt
├── .gitignore
└── README.md
```
