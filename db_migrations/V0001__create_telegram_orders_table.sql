CREATE TABLE IF NOT EXISTS telegram_orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    telegram VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

CREATE INDEX idx_telegram_orders_created_at ON telegram_orders(created_at DESC);
CREATE INDEX idx_telegram_orders_status ON telegram_orders(status);