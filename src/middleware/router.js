'use strict';

const express = require('express');
const router = express.Router();


// Models
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
  categories.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postCategories(request, response, next) {
  console.log(request.body);
  categories.post(request.body)
    .then(result => {
      console.log('after mongo.js record is :',result);
      response.status(200).json(result);
    })
    .catch(next);
}


function putCategories(request, response, next) {
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
  products.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postProducts(request, response, next) {
  products.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function putProducts(request, response, next) {
  products.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function deleteProducts(request, response, next) {
  products.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}

module.exports = router;