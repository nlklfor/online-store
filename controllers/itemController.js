import ItemModel from '../models/Item.js';

export const getAllItems = async (req, res) => {
    try {
        const items = await ItemModel.find();
        res.json(items)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Can't get items , try again"
        })
    }
};

export const getOneItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await ItemModel.findById(itemId);

        if (!item) {
            return res.status(404).json({
                message: "Item not found"
            });
        }

        res.json(item);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Can't get the item, try again"
        });
    }
};
