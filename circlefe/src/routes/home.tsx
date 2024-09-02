import { Home } from "@/features/home/components/home";
import { AppLayout } from "@/features/home/layouts/app-layout";

export default function HomeRoute() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}
