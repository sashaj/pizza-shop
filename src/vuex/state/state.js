export default {
  products: [],
  cart: [],
  usd: {},
  total_cart_items: 0,
  sorted_products: [],
  cart_item_data: [],
  select_options: [
    {
      name: "all",
      value: "all",
    },
    {
      name: "small",
      value: "small",
    },
    {
      name: "medium",
      value: "medium",
    },
    {
      name: "big",
      value: "big",
    },
  ],
  searchValue: '',
  selected_option: "all",
  are_options_visible: false,
  nouisliderConfig: {
    start: 5,
    orientation: 'vertical',
    end: 30,
    step: 0.01,
    tooltips: true,
    rangeStart: 0,
    rangeEnd: 30,
    currentValues: [12, 30],
  },
  offline_data: {
    "products": [
      {
        "image": "1.jpg",
        "name": "T-shirt 1",
        "price": 2100,
        "article": "T1",
        "available": true,
        "category": "Мужские"
      },
      {
        "image": "2.jpg",
        "name": "T-shirt 2",
        "price": 3150,
        "article": "T2",
        "available": true,
        "category": "Женские"
      },
      {
        "image": "3.jpg",
        "name": "T-shirt 3",
        "price": 4200,
        "article": "T3",
        "available": false,
        "category": "Женские"
      },
      {
        "image": "4.jpg",
        "name": "T-shirt 4",
        "price": 5300,
        "article": "T4",
        "available": true,
        "category": "Мужские"
      },
      {
        "image": "5.jpg",
        "name": "T-shirt 5",
        "price": 6500,
        "article": "T5",
        "available": false,
        "category": "Женские"
      },
      {
        "image": "6.jpeg",
        "name": "T-shirt 6",
        "price": 8700,
        "article": "T6",
        "available": true,
        "category": "Женские"
      }
    ]
  }
};
