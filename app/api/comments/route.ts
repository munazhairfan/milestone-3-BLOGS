// app/api/comments/route.ts
import { NextResponse } from 'next/server';

interface Comment {
  id: string;
  text: string;
  createdAt: string;
}

// In-memory mock database for simplicity
let comments: Comment[] = [];

export async function GET() {
  // Respond with the list of comments
  return NextResponse.json(comments);
}

export async function POST(req: Request) {
  const { text }: { text: string } = await req.json();
  
  if (!text) {
    return NextResponse.json({ error: 'Comment text is required' }, { status: 400 });
  }

  // Create a new comment
  const newComment: Comment = {
    id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
    text,
    createdAt: new Date().toISOString(),
  };

  // Add the new comment to the mock database
  comments.push(newComment);

  return NextResponse.json(newComment, { status: 201 });
}
