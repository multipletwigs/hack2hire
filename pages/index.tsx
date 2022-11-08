import { useRouter } from "next/router";
import { useEffect } from "react";

export default function index() {
  const router = useRouter()
  return (
    useEffect(() => {
      router.push("/event")
    })
  )
}
