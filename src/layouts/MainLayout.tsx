import { Outlet } from "react-router-dom";
import { CreateBlogDialog } from "@/components/CreateBlogDialog";

/**
 * MainLayout Component
 * Serves as the application shell, containing the persistent header text
 * and the main content area where child routes are rendered.
 */
export function MainLayout() {
    return (
        <div className="h-screen w-full bg-background flex flex-col">
            <header className="border-b p-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">CA Monk Blog</h1>
                <CreateBlogDialog />
            </header>
            <main className="flex-1 overflow-hidden">
                {/* Renders the child route element (e.g. HomePage) */}
                <Outlet />
            </main>
        </div>
    );
}
