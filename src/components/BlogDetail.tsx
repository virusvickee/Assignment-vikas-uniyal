import type { Blog } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { calculateReadTime } from "@/utils/readTime";

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
                    <CardTitle className="text-3xl font-bold mb-6">{blog.title}</CardTitle>
                    
                    {/* Meta section with category, read time, and date */}
                    <div className="grid grid-cols-3 gap-8 py-4 bg-gray-50 rounded-lg px-6">
                        <div className="text-center">
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">CATEGORY</div>
                            <div className="font-semibold text-gray-900">{blog.category.join(' & ')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">READ TIME</div>
                            <div className="font-semibold text-gray-900">{calculateReadTime(blog.content)} Mins</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">DATE</div>
                            <div className="font-semibold text-gray-900">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                        </div>
                    </div>
                    
                    {/* Partition line */}
                    <hr className="my-6 border-gray-200" />
                    
                    <CardDescription className="mt-6">
                        {blog.description}
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
