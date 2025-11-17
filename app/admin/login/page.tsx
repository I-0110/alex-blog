import FootballLogo from "@/app/ui/football-logo";
import AdminLoginForm from "@/app/ui/admin/admin-login-form";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-chief-300 p-3 md:h-36">
          <div className="w-50 text-chief-50 md:w-54">
            <FootballLogo />
          </div>
        </div>
        <Suspense>
          <AdminLoginForm />
        </Suspense>
      </div>
    </main>
  );
}