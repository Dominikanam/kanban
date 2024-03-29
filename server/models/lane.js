import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// eslint-disable-next-line no-param-reassign
mongoose.plugin(schema => { schema.options.usePushEach = true; });

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
});

function populateNotes(next) {
  this.populate('notes');
  next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
laneSchema.pre('remove', function deleteLineNotes(next) {
  this.notes.forEach(note => {
    note.remove();
  });
  next();
});

export default mongoose.model('Lane', laneSchema);
