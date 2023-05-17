import {NextResponse} from 'next/server';

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  if (!name || !age) {
    return NextResponse.json('No name or age provided. Example: /api/greetMe?name=John&age=25')
  }

  let funnyMessage = ''
  if (Number(age) < 18) {
    funnyMessage = 'You are too young to be here!'
  } else if (Number(age) < 40) {
    funnyMessage = 'You are in the prime of your life!'
  } else {
    funnyMessage = 'You are getting old!'
  }

  const greeting = `Hello ${name}, you are ${age} years old! ${funnyMessage}`
  return NextResponse.json(greeting)
}
