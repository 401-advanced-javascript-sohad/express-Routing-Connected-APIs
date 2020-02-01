'use strict';

const express = require('express');
const router = express.Router();


// Models
// TODO: Pull these in (or create them)!
const Products = require('../../models/products/products.js');
const products = new Products();

const Categories = require('../../models/categories/categories.js');
const categories = new Categories();

// Routes
router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);
router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);

router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', postProducts);
router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', putProducts);
router.delete('/api/v1/products/:id', deleteProducts);

// ROUTE HANDLER FUNCTIONS
function getCategories(request, response, next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getCategory(request, response, next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postCategories(request, response, next) {
  console.log(request.body);
  // expects the record that was just added to the database
  categories.post(request.body)
    .then(result => {
      console.log('after mongo.js record is :',result);
      response.status(200).json(result);
    })
    .catch(next);
}


function putCategories(request, response, next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function deleteCategories(request, response, next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function getProducts(request, response, next) {
  // expects an array of objects back
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getProduct(request, response, next) {
  // expects an array with one object in it
  products.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postProducts(request, response, next) {
  // expects the record that was just added to the database
  products.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function putProducts(request, response, next) {
  // expects the record that was just updated in the database
  products.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function deleteProducts(request, response, next) {
  // Expects no return value (the resource should be gone)
  products.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
};

module.exports = router;