'use strict';

class Model {


  constructor() {
    // this.schema = this.schema;
    console.log('this.schema', this.schema);
  }


  get(_id) {
    if (_id) {
      return this.schema.findOne({ _id });
    }
    else {
      return this.schema.find({});
    }
  }


  post(record) {
    let newRecord = new this.schema(record);
    console.log('the newrecord :', newRecord);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findByIdAndModify(_id, record);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = Model;
