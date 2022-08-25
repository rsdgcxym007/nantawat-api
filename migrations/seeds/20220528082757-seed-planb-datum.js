'use strict';
const tableProductName = 'products';
const tableCategoryName = 'categorys';

async function seedCategory(queryInterface) {
  await queryInterface.bulkInsert(
    tableCategoryName,
    [{
        name: 'spot',
        status: 'active',
        description: '',
      },
      {
        name: 'game',
        status: 'active',
        description: '',
      },
      {
        name: 'com',
        status: 'active',
        description: '',
      },
    ], {},
  );
}

async function seedProduct(queryInterface) {
  await queryInterface.bulkInsert(
    tableProductName,
    [{
        sku: '0057F000000yx52QAA',
        name: 'firstName4 dsadsada',
        price: '250',
        stock: '10',
        description: 'การเขียน',
        categoryId: 1,
        status: 'active',
      },
      {
        sku: '0057F000000yxwwwAA',
        name: 'firstName4 xxxxx',
        price: '250',
        stock: '10',
        description: 'การเขียน',
        categoryId: 2,
        status: 'active',
      },
      {
        sku: '0057F000000y468QAA',
        name: 'firstName4 cccc',
        price: '250',
        stock: '10',
        description: 'การเขียน',
        categoryId: 3,
        status: 'active',
      },
    ], {},
  );
}

module.exports = {
  async up(queryInterface) {
    await seedCategory(queryInterface);
    await seedProduct(queryInterface);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(tableCategoryName, null, {});
    await queryInterface.bulkDelete(tableProductName, null, {});
  },
};