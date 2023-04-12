import { Model } from "mongoose";
import { Instrument } from "./post.model";
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<Instrument>);
    createPost(post: Instrument): Promise<{
        statusCode: number;
        message: string;
        response: any;
    }>;
    readAllPosts(): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: any;
            author: any;
            title: any;
            model: any;
            id: any;
        }[];
    }>;
    readAllPostsFromAuthor(author: string): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: any;
            author: any;
            title: any;
            model: any;
            id: any;
        }[];
    }>;
    updatePost(post: Instrument): Promise<any>;
    deletePost(id: string): Promise<{
        statusCode: number;
        message: string;
        response: any;
    }>;
}
