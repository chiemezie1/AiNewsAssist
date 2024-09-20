import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
  }

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    const headers = new Headers();
    headers.set('Content-Type', response.headers['content-type']);
    headers.set('Cache-Control', 'public, max-age=86400'); // Cache for 1 day

    return new NextResponse(response.data, { status: 200, headers });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Failed to load image' }, { status: 500 });
  }
}
