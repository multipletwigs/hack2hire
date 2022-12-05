import { useRouter } from "next/router";
import { useEffect } from "react";

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://hack2hire.vercel.app';


export default function Index() {
  const router = useRouter()

  console.log(server)
  return (
    useEffect(() => {
      router.push("/login")
    })
  )
}
