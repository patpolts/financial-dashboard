# 💰 Financial Dashboard

A sample web application developed as part of a technical challenge, designed to demonstrate modern full-stack development practices. This project allows users to manage and visualize personal financial transactions using mock data sourced from ./data/transactions.json. It leverages Next.js App Router, NextAuth.js for Google authentication, and TypeScript for strong type safety.

---

## 🔍 Features

- 🔐 Google OAuth2 authentication with NextAuth.js
- 📊 Dashboard for viewing and filtering financial transactions
- 💾 Server-side transaction loading with secure session validation
- 🎨 Styled with Styled Components and Radix UI primitives
- 📁 App Router (Next.js 15) structure
- 📦 Lightweight and optimized for performance

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Tests**: [Jests](https://jestjs.io/)  
- **Styling**: [Styled Components](https://styled-components.com/), [Radix UI](https://www.radix-ui.com/)  
- **Language**: TypeScript
- **Icons**: React Icons (Google logo)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/patpolts/financial-dashboard.git
cd financial-dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Copy `env_example` to `.env`  
```bash  
cp env_example .env  
```  

and add the following:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=local next url
```

You can generate `NEXTAUTH_SECRET` using:

```bash
openssl rand -base64 32
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```  

### 5. Run tests

```bash
npm run test
# or
yarn test
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
src/
├── app/                # App Router structure (Next.js 13+)
│   ├── login/          # Public login page
│   ├── dashboard/      # Authenticated dashboard
│   └── api/            # API routes
│       └── auth/
│           ├── [...nextauth]/  # NextAuth handler
│           └── login-limit/    # Rate limiting endpoint (optional)
├── components/         # Reusable UI components
├── libs/               # Auth/session utilities, helpers
├── styles/             # Styled Components & theme setup
```

---

## 👤 Author

- **Patricia Poltts**  
[LinkedIn](https://www.linkedin.com/in/poltts/) • [GitHub](https://github.com/patpolts)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).