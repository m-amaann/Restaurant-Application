const Menu = require('../models/Menu');

// Controller for handling the creation of a new menu item
const createMenu = async (req, res) => {
    try {
        const {
            name,
            description,
            category,
            price,
            toppingOptions,
            cheeseOptions,
            riceOptions,
            addExtraOption,
            isAvailable,
            isSpecial,
            image,
        } = req.body;

        // Create a new menu item
        const newMenu = new Menu({
            name,
            description,
            category,
            price,
            toppingOptions,
            cheeseOptions,
            riceOptions,
            addExtraOption,
            isAvailable,
            isSpecial,
            image,
        });

        // Save the menu item to the database
        const savedMenu = await newMenu.save();

        res.status(201).json(savedMenu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller for getting all menus
const getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.find().populate('category');
        res.status(200).json(menus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller for getting a menu by ID
const getMenuById = async (req, res) => {
    try {
        const { id } = req.params;
        const menu = await Menu.findById(id).populate('category');

        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        res.status(200).json(menu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Controller for getting all menus by category ID
const getMenuByCategoryId = async (req, res) => {
    try {
        const { id } = req.params;
        const menus = await Menu.find({ category: id }).populate('category');

        if (!menus || menus.length === 0) {
            return res.status(404).json({ error: 'No menus found for the given category ID' });
        }

        res.status(200).json(menus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



module.exports = { createMenu, getAllMenus, getMenuById, getMenuByCategoryId };
