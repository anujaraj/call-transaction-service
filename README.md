# Voice Agent Analytics Dashboard

A React + TypeScript web application that visualizes call analytics for voice agents using interactive charts.

## Features
- Analytics dashboard with multiple charts (Recharts)
- Weekly call volume, call duration, and sad-path analysis
- Email-gated chart editing
- Persisted custom chart data using Supabase
- Overwrite confirmation when existing data is found
- Responsive layout and clean UI

## Tech Stack
- React
- TypeScript
- Recharts
- Supabase
- CSS Modules
- Vite

## Setup Instructions

1. Clone the repository and install dependencies
   ```bash
   git clone <repo-url>
   cd voice-agent-analytics
   npm install
   ```
2. Create .env file
   - VITE_SUPABASE_URL=your_supabase_url
   - VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Run app locally
   ```bash
   npm run dev
   ```   
6. Notes
   - Dummy data is used for chart visualization
   - Supabase is used to store email IDs and associated chart data
   - Only one chart (Weekly Call Volume) shows dynamic live changes when the user tries to overwrite after submitting the email ID
