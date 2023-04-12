import { Model } from "mongoose";
import { Instrument } from "./post.model";
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<Instrument>);
    createPost(post: Instrument): Promise<{
        statusCode: number;
        message: string;
        response: import("mongoose").Document<any, any, Instrument> & Instrument & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    readAllPosts(): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            author: string;
            title: string;
            model: string;
            id: any;
        }[];
    }>;
    readAllPostsFromAuthor(author: string): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            author: string;
            title: string;
            model: string;
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
