const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: ['./public/index/index.js', 
        './public/index/arrivals.js', 
        './public/catalogue/catalogue.js', 
        './public/login/login.js', 
        './public/users/administrator.js', 
        './app/publisher.js', 
        './app/controllers/arrivals-controller.js',
        './app/controllers/cart-controller.js',
        './app/controllers/login-controller.js',
        './app/controllers/nav-footer-controller.js',
        './app/controllers/order-controller.js',
        './app/controllers/pagination-controller.js',
        './app/controllers/product-view-controller.js',
        './app/controllers/products-controller.js',
        './app/controllers/search-controller.js',
        './app/model/arrivals-model.js',
        './app/model/cart-model.js',
        './app/model/login-model.js',
        './app/model/order-model.js',
        './app/model/product-view-model.js',
        './app/model/products-model.js',
        './app/views/arrivals-views.js',
        './app/views/cart-views.js',
        './app/views/login-views.js',
        './app/views/nav-footer-views.js',
        './app/views/order-views.js',
        './app/views/pagination-views.js',
        './app/views/product-view-views.js',
        './app/views/products-views.js',
        './app/views/search-views.js',
    ],
        
      },    
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
};