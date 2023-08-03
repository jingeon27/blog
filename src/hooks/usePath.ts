import { useRouter } from "next/navigation";

export const usePath = () => {
  const router = useRouter();
  const mainPush = router.push("/");
  return { mainPush };
};
