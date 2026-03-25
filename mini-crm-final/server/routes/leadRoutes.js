
const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, async (req, res) => {
  res.json(await Lead.find());
});

router.post('/', auth, async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.json(lead);
});

router.put('/:id', auth, async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
});

router.delete('/:id', auth, async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

router.post('/:id/notes', auth, async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  lead.notes.push({ text: req.body.text });
  await lead.save();
  res.json(lead);
});

module.exports = router;
