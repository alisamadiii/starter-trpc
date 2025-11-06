import { caller } from "@/trpc/server";

import { HomeIcon } from "@/components/icons";

export default async function Home() {
  const data = await caller.hello();

  return (
    <div>
      <HomeIcon />
      {data.message}
    </div>
  );
}
