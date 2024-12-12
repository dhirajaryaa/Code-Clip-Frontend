import { AppSidebar, FilterTags, UserAvatar } from "../components/custom/index.js";
import { Separator } from "../components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Plus } from "lucide-react";

const Dashboard = () => {

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      }}
      className="bg-gray-200/50">
      <AppSidebar />
      <SidebarInset className="bg-gray-200/50">
        <main className="p-3">
          {/* dashboard header  */}
          <header className="flex items-center justify-between bg-sidebar py-2 px-4 rounded-md shadow-md">
            {/* sidebar open/close btn   */}
            <div className="flex items-center">

              <SidebarTrigger className="-ml-1 " />
              <Separator orientation="vertical" className=" mx-1 h-4" />
              {/* user profile  */}
              <UserAvatar className={"w-8 h-8"} />
            </div>
            {/* search and new snippet create  */}
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search Code Snippet..." />
              <Button type="button" variant="default" >
                <Plus />
                Snippet</Button>
            </div>
          </header>
          {/* Tags and Filters  */}
            <FilterTags />
          {/* snippet list */}
          <h1>This is main container</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;