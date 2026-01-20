import axios from "axios";
import type { Blog, CreateBlogInput } from "@/types";

// Base URL for the JSON Server mocking the backend
const API_URL = "http://localhost:3001";

/**
 * Fetches all blogs from the backend.
 * Returns a list of Blog objects.
 */
export const getBlogs = async (): Promise<Blog[]> => {
    const response = await axios.get(`${API_URL}/blogs`);
    return response.data;
};

/**
 * Fetches a single blog by its ID.
 * Useful for detail views or permalinks.
 */
export const getBlogById = async (id: string): Promise<Blog> => {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    return response.data;
};

/**
 * Creates a new blog post.
 * Sends the payload to the server and returns the created object.
 */
export const createBlog = async (blog: CreateBlogInput): Promise<Blog> => {
    const response = await axios.post(`${API_URL}/blogs`, blog);
    return response.data;
};
