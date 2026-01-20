import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogs, getBlogById } from "@/api/blogs";
import { BlogList } from "@/components/BlogList";
import { BlogDetail } from "@/components/BlogDetail";

/**
 * HomePage Component
 * Implements a split-view layout:
 * - Left panel: List of blogs
 * - Right panel: Detailed view of the selected blog
 */
export function HomePage() {
    // Track the currently selected blog ID to display in the detail view
    const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

    // Fetch the list of all blogs
    const { data: blogs = [], isLoading: isLoadingBlogs } = useQuery({
        queryKey: ["blogs"],
        queryFn: getBlogs,
    });

    // Fetch details for the selected blog only when an ID is selected
    const { data: selectedBlog, isLoading: isLoadingDetail } = useQuery({
        queryKey: ["blog", selectedId],
        queryFn: () => getBlogById(selectedId!.toString()),
        enabled: !!selectedId, // Dependent query: only runs if selectedId is truthy
    });

    return (
        <div className="flex h-full w-full">
            {/* Left Panel: Blog List (33% width) */}
            <div className="w-1/3 border-r h-full bg-background/50 backdrop-blur-sm">
                <BlogList
                    blogs={blogs}
                    isLoading={isLoadingBlogs}
                    onSelectBlog={setSelectedId}
                    selectedId={selectedId}
                />
            </div>

            {/* Right Panel: Blog Details (66% width) */}
            <div className="w-2/3 h-full bg-background">
                <BlogDetail
                    blog={selectedBlog}
                    isLoading={isLoadingDetail}
                />
            </div>
        </div>
    );
}
