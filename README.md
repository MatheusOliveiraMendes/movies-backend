# 🎬 Movies Backend API

API developed in **Node.js + Express** to serve movie data, integrated with a **PostgreSQL** database (Neon) and **Prisma ORM**.

---

# ⚠️ Important Notice

> **⚠️ Please Note:**  
> This backend is hosted on a **free-tier Render server**, which may **enter hibernation after a period of inactivity**.  
>  
> The **initial request** might take **15–30 seconds** to respond while the server **wakes up**.  
>  
> After that, the API will respond normally.

---

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Neon](https://neon.tech/) (database hosting)
- [Render](https://render.com/) (backend hosting)

---

## 📂 Project Structure

```
movies-backend/
├── prisma/                 # Prisma schema
│   └── schema.prisma
├── public/images/          # Movie images
├── scripts/                # JSON import script
│   └── import-movies.ts
├── src/
│   ├── data/movies.json
│   ├── generated/prisma/   # Generated Prisma client
│   ├── routes/movies.ts    # API routes
│   ├── app.ts              # Express app configuration
│   └── server.ts           # Server startup
├── .env                    # Environment variables
├── package.json
└── tsconfig.json
```

---

## ⚙️ Initial Setup

### 1. Clone the project

```bash
git clone https://github.com/MatheusOliveiraMendes/movies-backend.git
cd movies-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the database

Create a PostgreSQL database on [Neon](https://neon.tech/) and add the URL in the `.env` file:

```env
DATABASE_URL=postgresql://<user>:<password>@<host>/<db-name>?sslmode=require
```

### 4. Generate the Prisma Client

```bash
npx prisma generate
```

### 5. Apply the schema migration

> ⚠️ This will create the `Movie` table in the database.

```bash
npx prisma migrate dev --name init
```

---

## 🗃️ Import JSON Data

To populate the database with movies from the `movies.json` file, run:

```bash
npx ts-node scripts/import-movies.ts
```

---

## ▶️ Run the Server Locally

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3001/api/movies
http://localhost:3001/images/<image-name>
```

---

## 📌 API Endpoints

| Method | Route                     | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/api/movies`             | List all movies                      |
| GET    | `/api/movies?search=...`  | Search by name                       |
| GET    | `/api/movies?genre=...`   | Filter by genre                      |
| GET    | `/api/movies/:id`         | Get movie details                    |

---

## 🌐 Hosting

- **Backend**: Render  
- **Database**: Neon PostgreSQL

---

## 🛠 Useful Scripts

```bash
# Compile the TypeScript project
npm run build

# Start the production server (after build)
npm start

# Start in development mode (with ts-node-dev)
npm run dev

# Run the movie import script
npx ts-node scripts/import-movies.ts
```

---

## 🧾 License

MIT © [Matheus Mendes]

# Link Site: https://moviesfront.netlify.app