// Importing necessary modules and dependencies
import express from "express";
import { ItemController } from "../controllers/item-controller";

// Creating an Express router
const router = express.Router()

// Route to handle the creation of a new item
router.post('/add-item', ItemController.createItem);

// TODO: Move the following routes from the server.ts to this router

// Route to handle fetching all items
router.get('/get-items', ItemController.getItems);

// Route to handle updating an item by ID
router.patch('/update-item/:id', ItemController.updateItems);

// Route to handle deleting an item by ID
router.delete('/delete-item/:id',  ItemController.deleteItems);

// Exporting the router to be used in other parts of the application
export default router;
