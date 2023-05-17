import {NextResponse} from 'next/server';
import {users} from "@/app/data/users";

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json('No user id provided. Example: /api/getUser?id=1')
  }

  const user = users.find(user => user.id === Number(id))
  return NextResponse.json(user)
}
