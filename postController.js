import PostServise from './PostServise.js';

class postController {
    async create(req, res) {
        try {
            let post = await PostServise.create(req.body, req.files.picture);
            return res.json(post);
        } catch (error) {
            res.json(error.message);
        }
    };

    async getAll(req, res) {
        try {
            let post = await PostServise.getAll();
            return res.json(post);
        } catch (error) {
            res.status(500).json(error.message);
        }
    };

    async getOne(req, res) {
        try {
            let { id } = req.params;
            if (!id) {
                res.status(400).json({ message: "id не вказано" })
            }
            let post = await PostServise.getOne(id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error.message);
        }
    };

    async update(req, res) {
        try {
            let post = req.body;
            if (!post._id) {
               return res.status(400).json({ message: "id не вказано" })
            }
            let updatedPost = await PostServise.update(post);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error.message);
        }
     };

    async delete(req, res) {
        try {
            let {id} = req.params;
            if (!id) {
               return res.status(400).json({ message: "id не вказано" })
            }
            let deletedPost = await PostServise.delete(id);
            return res.json(deletedPost);
        } catch (error) {
            res.status(500).json(error.message);
        }
     };
}

export default new postController;