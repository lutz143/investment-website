const router = require('express').Router();
const { Valuation } = require('../../models');

// GET all Stock Valuations
router.get('/', async (req, res) => {
  try {
    const valuationData = await Valuation.findAll();
    res.status(200).json(valuationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET a single traveller
// router.get('/:id', async (req, res) => {
//   try {
//     const travellerData = await Traveller.findByPk(req.params.id, {
//       // JOIN with locations, using the Trip through table
//       include: [{ model: Location, through: Trip, as: 'planned_trips' }]
//     });

//     if (!travellerData) {
//       res.status(404).json({ message: 'No traveller found with this id!' });
//       return;
//     }

//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE a traveller
// router.post('/', async (req, res) => {
//   try {
//     const travellerData = await Traveller.create(req.body);
//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a traveller
// router.delete('/:id', async (req, res) => {
//   try {
//     const travellerData = await Traveller.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!travellerData) {
//       res.status(404).json({ message: 'No traveller found with this id!' });
//       return;
//     }

//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
