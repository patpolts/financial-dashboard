# 📊 Financial Dashboard

**Financial Dashboard** is a web application built with **Next.js 15**, designed for visualizing and exploring financial transaction data through interactive charts, filters, and a clean table interface.

---

## 🚀 Features

- ✅ Built with **Next.js 15 App Router**
- 🎨 Styled using **Styled Components**
- 📊 Dashboard with dynamic charts:
  - Industry breakdown
  - Monthly balance
  - State distribution
  - Income vs Expenses
- 🔍 Powerful filtering:
  - Year, Month, Transaction Type
  - Account, Industry, State
- 📄 Paginated, responsive transaction table
- 📁 Loads data from local JSON
- 🧭 Collapsible sidebar with route-aware navigation
- 🧪 Unit-tested data loading logic with Jest

---

## 🧰 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Styled Components
- **UI Components:** Radix UI
- **Icons:** React Icons
- **Charts:** Recharts
- **Testing:** Jest

---

## ⚙️ Configuration

Copy the example environment file:

```bash
cp .env_example .env
Edit the .env file and add any necessary credentials or environment-specific variables.
```  

🧪 Running the App
To start the development server, run:

```bash
npm run dev
Then open your browser and go to: http://localhost:3000
```  

✅ Running Tests
This project includes basic unit tests for data loading (i.e. loadTransactions):

```bash
npm run test  
```
Ensure test files are located in src/tests/ and named using .test.ts or .spec.ts.

🗂 Project Structure

```bash
├── src/
│   ├── app/                  # App router pages
│   ├── components/           # UI components (Sidebar, Table, etc.)
│   ├── lib/                  # Utility functions (e.g., loadTransactions)
│   ├── styles/               # Global and theme styles
│   └── tests/                # Unit tests
├── data/
│   └── transactions.json     # Local dataset
├── .env_example              # Environment variable template
├── .env                      # Local environment config (created by user)
├── README.md  
```  

📝 Notes
Transactions are loaded from a local JSON file located at data/transactions.json.

The sidebar's collapsed state is persisted via localStorage.

This is a client-rendered dashboard — no backend/server-side API.

The UI uses accessible components provided by Radix UI.

Charts are responsive and built with Recharts.