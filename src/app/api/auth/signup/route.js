//Saves user data to a database

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const { name, email, password, selectedCategories, selectedSources } = await req.json();

    const client = await clientPromise;
    const db = client.db('ai_news_test');

    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user
    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
      selectedCategories,
      selectedSources,
      createdAt: new Date(),
    });

    // Return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
