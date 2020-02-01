'use strict';

// const supergoose = require('./supergoose.js');

const Categories = require('../models/categories/categories.js');


const categories = new Categories();

describe('Categories Model (Modular)', () => {

  it('can create() a new category', () => {
    let obj = { name: 'rose', description: 'flower' };
     categories.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  

  
  it('can get() a category', () => {
    let obj = { name: 'rose', description: 'flower' };
     categories.post(obj)
      .then(record => {
        // console.log(record);
         categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  
  it('can update() a categories', () => {
    let obj = { name: 'rose', description: 'flower' };
     categories.post(obj)
      .then(record => {
        // console.log(record);
         categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  
  it('can get() all categories', () => {
    let obj = { name: 'rose', description: 'flower' };
     categories.post(obj)
      .then(record => {
        // console.log(record);
         categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  
  it('can delete() a category', () => {
    let obj = { name: 'rose', description: 'flower' };
     categories.post(obj)
      .then(record => {
        // console.log(record);
     categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});