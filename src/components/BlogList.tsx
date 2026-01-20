import type { Blog } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BlogListProps {
    blogs: Blog[];                   // Array of blog data to display
    isLoading: boolean;              // Loading state from the parent data fetch
    onSelectBlog: (id: number) => void; // Callback when a user clicks a blog card
    selectedId?: number;             // Currently selected blog ID for highlighting
}

/**
 * BlogList Component
 * Displays a scrollable list of blog cards.
 * Handles the selection state and visual feedback for the active item.
 */
export function BlogList({ blogs, isLoading, onSelectBlog, selectedId }: BlogListProps) {
    // Show a simple loading indicator while data is being fetched
    if (isLoading) {
        return <div className="p-4">Loading blogs...</div>;
    }

    return (
        <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto w-full">
            {blogs.map((blog) => (
                <Card
                    key={blog.id}
                    // Apply different styles if this card is currently selected
                    className={`cursor-pointer hover:bg-accent transition-colors ${selectedId === blog.id ? 'border-primary bg-accent' : ''}`}
                    onClick={() => onSelectBlog(blog.id)}
                >
                    <CardHeader>
                        <div className="flex gap-2 mb-2">
                            {/* Render categories as pill attributes */}
                            {blog.category.map((cat, idx) => (
                                <span key={idx} className="text-xs font-semibold px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <CardTitle className="text-lg">{blog.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="line-clamp-2">{blog.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
