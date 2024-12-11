import { AppSidebar, UserAvatar } from "../components/custom/index.js";
import { Separator } from "../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Dashboard = () => {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      }}
    >
      <AppSidebar />
      <SidebarInset >
        <main className="p-4 ">
          {/* dashboard header  */}
          <header className="flex items-center justify-start">

            <SidebarTrigger className="-ml-1 "  />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <UserAvatar className={"w-8 h-8"}/>
          </header>
          <h1>This is main container</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;