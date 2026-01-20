import type { Blog } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BlogDetailProps {
    blog?: Blog;        // The currently selected blog object (optional because it might not be selected yet)
    isLoading: boolean; // Loading state for async data fetching
}

/**
 * BlogDetail Component
 * Renders the full details of a blog post, including the cover image,
 * categories, meta info, and the main content body.
 */
export function BlogDetail({ blog, isLoading }: BlogDetailProps) {
    // Show loading state if data is still being fetched
    if (isLoading) {
        return <div className="p-4">Loading blog details...</div>;
    }

    // Show empty state if no blog is selected
    if (!blog) {
        return (
            <div className="flex items-center justify-center h-full text-muted-foreground">
                Select a blog to view details
            </div>
        );
    }

    return (
        <div className="h-full overflow-y-auto p-4 animate-in fade-in duration-300">
            <Card className="border-none shadow-none">
                <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                </div>
                <CardHeader className="px-0">
                    <div className="flex gap-2 mb-2">
                        {blog.category.map((cat, idx) => (
                            <span key={idx} className="text-sm font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                                {cat}
                            </span>
                        ))}
                    </div>
                    <CardTitle className="text-3xl font-bold">{blog.title}</CardTitle>
                    <CardDescription>
                        Published on {new Date(blog.date).toLocaleDateString()}
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-0 text-lg leading-relaxed whitespace-pre-line text-foreground/90">
                    {/* Render the core blog content. whitespace-pre-line preserves paragraphs. */}
                    {blog.content}
                </CardContent>
            </Card>
        </div>
    );
}
