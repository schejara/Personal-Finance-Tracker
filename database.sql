CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL
);
-- Accounts Table
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
  account_name VARCHAR(100) NOT NULL,
  account_type VARCHAR(50),
  balance DECIMAL(12, 2) DEFAULT 0.0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions Table
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
  account_id INT REFERENCES accounts(id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(id) ON DELETE SET NULL,
  amount DECIMAL(12, 2) NOT NULL,
  type VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL,
  description TEXT,
  transaction_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL
);

CREATE TABLE budgets (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE,
  amount DECIMAL(12, 2) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recurring_transactions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user"(id) ON DELETE CASCADE,
  account_id INT REFERENCES accounts(id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(id) ON DELETE SET NULL,
  amount DECIMAL(12, 2) NOT NULL,
  type VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL,
  description TEXT,
  frequency VARCHAR(20) CHECK (frequency IN ('daily', 'weekly', 'monthly', 'yearly')) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE, -- NULL means indefinite
  last_generated DATE, -- used to prevent duplicate creation
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
