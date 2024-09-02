import { Profile } from "@/features/home/components/profile";
import { AppLayout } from "@/features/home/layouts/app-layout";

export default function ProfileRoute() {
  return (
    <AppLayout>
      <Profile />
    </AppLayout>
  );
}
