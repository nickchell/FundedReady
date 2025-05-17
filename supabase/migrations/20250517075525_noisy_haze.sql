/*
  # Create waitlist users table

  1. New Tables
    - `waitlist_users`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `contact` (text, optional)
      - `created_at` (timestamp)
      - `is_lifetime_access` (boolean) - tracks if user signed up for lifetime access

  2. Security
    - Enable RLS on `waitlist_users` table
    - Add policy for authenticated users to read their own data
    - Add policy for service role to insert data
*/

CREATE TABLE IF NOT EXISTS waitlist_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  contact text,
  created_at timestamptz DEFAULT now(),
  is_lifetime_access boolean DEFAULT false
);

ALTER TABLE waitlist_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON waitlist_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Service role can insert data"
  ON waitlist_users
  FOR INSERT
  TO service_role
  WITH CHECK (true);