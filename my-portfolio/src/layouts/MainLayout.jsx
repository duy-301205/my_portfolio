import Header from "./Header";
import Fireflies from "../components/Fireflies";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen">
      {/* Fireflies nền */}
      <Fireflies />

      {/* Header luôn nổi trên */}
      <Header />

      {/* Nội dung trang */}
      <main className="relative z-10 max-w-7xl mx-auto px-14">
        <Outlet />
      </main>
    </div>
  );
}
