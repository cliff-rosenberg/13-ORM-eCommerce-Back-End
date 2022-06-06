const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//* route to display all Category
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const results = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name']
      }]
    })
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* route to find a single Category by ID
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const results = await Category.findByPk(req.params.id, {
      attributes: ['id', 'category_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    if (results === null) {
      res.status(404).json({message: 'Not found!'});
    } else {
    res.status(200).json(results);
    };
  } catch (err) {
    res.status(400).json(err);
  }
});

//* route to create a new category
router.post('/', async (req, res) => {
  // create a new category
  try {
    const result = await Category.create({
      category_name: req.body.category_name
    });
    // The instanceof operator tests to see if the prototype property of a constructor
    // appears anywhere in the prototype chain of an object. 
    // The return value is a boolean value.
    if (result instanceof Category) {
      res.status(200).json(result);
    } else {
      res.status(500).json({error: 'Something went wrong'})
    };
  } catch (err) {
    res.status(400).json(err);
  }
});

//* route to update a Category by ID
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const result = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* route to delete a Category
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    result = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
