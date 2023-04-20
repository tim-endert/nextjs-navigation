import Herobanner from "@/components/Herobanner/Herobanner";
import { useRouter } from "next/router";

const ExamplePage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <Herobanner title={pid as string} />;
};

export default ExamplePage;
