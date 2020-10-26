import * as mongoose from 'mongoose';
import IToy from '../interfaces/toy';
const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "name field is required"],
      max: 40,
    },
  }),
  Leksak = mongoose.model<IToy>("leksak", schema);

export default Leksak;
