import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CATEGORY_OPTIONS = ["FINANCE", "TECH", "CAREER", "EDUCATION", "REGULATIONS", "LIFESTYLE"];

/**
 * CreateBlogDialog Component
 * Provides a modal form for users to create a new blog post.
 * Handles form state, data validation, and API submission using React Query.
 */
export function CreateBlogDialog() {
    const [open, setOpen] = useState(false);

    // Local state for form fields
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        coverImage: "",
        content: ""
    });

    const queryClient = useQueryClient();

    // Setup mutation for creating a blog
    // Automatically invalidates the "blogs" query on success to refresh the list
    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            setOpen(false); // Close dialog on success
            // Reset form fields
            setFormData({
                title: "",
                category: "",
                description: "",
                coverImage: "",
                content: ""
            });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Convert comma-separated categories string to an array (e.g. "Tech, AI" -> ["Tech", "AI"])
        const categoryArray = formData.category.split(",").map(c => c.trim()).filter(Boolean);

        // Trigger the mutation with the formatted data
        mutation.mutate({
            ...formData,
            category: categoryArray,
            date: new Date().toISOString(),
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Create Blog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Create New Blog</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to create a new blog post.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    {/* Blog Title Input */}
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    {/* Categories Input - select options */}
                    <div className="grid gap-2">
                        <Label htmlFor="category">Categories</Label>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORY_OPTIONS.map(cat => (
                                <label key={cat} className="flex items-center space-x-1">
                                    <input 
                                        type="checkbox" 
                                        value={cat}
                                        checked={formData.category.includes(cat)}
                                        onChange={(e) => {
                                            const checked = e.target.checked;
                                            const currentCategories = formData.category ? formData.category.split(",").map(c => c.trim()) : [];
                                            const newCategories = checked 
                                                ? [...currentCategories, cat]
                                                : currentCategories.filter(c => c !== cat);
                                            setFormData(prev => ({ ...prev, category: newCategories.join(", ") }));
                                        }}
                                    />
                                    <span className="text-sm">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Cover Image URL Input */}
                    <div className="grid gap-2">
                        <Label htmlFor="coverImage">Cover Image URL</Label>
                        <Input id="coverImage" name="coverImage" value={formData.coverImage} onChange={handleChange} required />
                    </div>
                    {/* Short Description Input */}
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description (Short)</Label>
                        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
                    </div>
                    {/* Main Content Input */}
                    <div className="grid gap-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea id="content" name="content" className="min-h-[150px]" value={formData.content} onChange={handleChange} required />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Cancel</Button>
                        </DialogClose>
                        {/* Disable button while submitting to prevent double-clicks */}
                        <Button type="submit" disabled={mutation.isPending}>
                            {mutation.isPending ? "Creating..." : "Create"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
