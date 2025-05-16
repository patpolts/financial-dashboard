# Financial Dashboard

Financial Dashboard is a Next.js 15 application for visualizing and managing financial transactions, featuring charts, filters, and a user-friendly interface.

---

## Features

- Dashboard with charts for industry, monthly balance, states, and income vs expenses
- Filters for year, month, transaction type, account, industry, and state
- Sidebar navigation with collapse functionality
- Simple pagination on transactions table
- Styled components for clean UI
- Data loaded from local JSON (`./data/transactions.json`)
- Unit tests for core data loading logic  
- Login via google login

---

## Tech Stack

- Next.js 15 
- React (with hooks)
- Styled Components
- Recharts (charts)
- Radix UI (for accessible components)
- Jest (for testing)
- TypeScript

---

## Setup & Installation

1. **Clone the repository and checkout the `develop` branch**

```bash
git clone https://github.com/patpolts/financial-dashboard.git
cd financial-dashboard
npm install  
git flow init  
mv .env_example .env  #add google credentials and next secret
npm run dev
