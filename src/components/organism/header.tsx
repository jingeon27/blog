import { usePath } from "@/hooks/usePath";

export const Header = () => {
  const { mainPush } = usePath();

  return (
    <>
      <header className="flex p-10"></header>
    </>
  );
};
