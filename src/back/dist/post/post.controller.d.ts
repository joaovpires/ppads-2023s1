import { Instrument } from './post.model';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createPost(post: Instrument): Promise<any>;
    readAllPosts(): Promise<any>;
    readAllPostsFromAuthor(author: string): Promise<any>;
    updatePost(post: Instrument): Promise<any>;
    deletePost(id: string): Promise<any>;
}
