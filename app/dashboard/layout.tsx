import SideNav from "@/app/ui/dashboard/sidenav"
export const experimental_ppr = true; // Enable PPR for this layout
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      <SideNav />
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}