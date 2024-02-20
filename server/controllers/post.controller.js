import { errorHandler } from "../utils/error"




export const createm = async (req, res, next) => {
    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
    }

    const slug = req.body.title
        .split(' ')
        .join('_')
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, '');

    const newPost = new postMessage({
        ...req.body,
        slug,
        userId: req.user.id,
    });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
       } catch (error) {
        next(error);
    }
};


 
export const getPosts = async (req, res, next) => {
    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        
    } catch (error) {
        
    }
}