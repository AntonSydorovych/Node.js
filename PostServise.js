import Post from './Post.js';
import FileServise from './FileServise.js';

class PostServise {
    async create(post, file) {
        let fileName =  FileServise.saveFile(file);
        let createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    };

    async getAll() {
        let post = await Post.find();
        return post;
    };

    async getOne(id) {
        let post = await Post.findById(id);
        return post;
    };

    async update(post) {
        let updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    };

    async delete(id) {
        let deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    };
}

export default new PostServise();