# Backend - Blind Dating API

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blind_dating
PAYMENT_GATEWAY=razorpay
PAYMENT_AMOUNT=499
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

3. Start MongoDB (if running locally):
```bash
mongod
```

4. Run the server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### User Routes
- `POST /api/users/create` - Create a new user

### Payment Routes
- `POST /api/payments/create-order` - Create payment order
- `POST /api/payments/verify` - Verify payment

## Payment Gateway Configuration

Set `PAYMENT_GATEWAY` in `.env` to either:
- `razorpay` - For Indian payments (default)
- `stripe` - For international payments


# va_backend
