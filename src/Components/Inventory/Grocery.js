const groceryProducts = [
  {
    id: 1,
    hashId: "f12e1bca",
    name: "Apple",
    price: 0.5,
    nutrients: {
      protein: "0.3g",
      vitamins: ["Vitamin C", "Vitamin K"],
      carbohydrates: "14g",
      fiber: "2.4g",
      fat: "0.2g"
    },
    availableSeason: ["Fall", "Winter"],
    description: "A sweet, crunchy fruit that is great for snacks and desserts."
  },
  {
    id: 2,
    hashId: "a45e2bd3",
    name: "Banana",
    price: 0.3,
    nutrients: {
      protein: "1.3g",
      vitamins: ["Vitamin C", "Vitamin B6"],
      carbohydrates: "27g",
      fiber: "3.1g",
      fat: "0.4g"
    },
    availableSeason: ["Year-round"],
    description: "A soft, sweet fruit that is high in potassium and great for energy."
  },
  {
    id: 3,
    hashId: "b21c3d74",
    name: "Carrot",
    price: 0.2,
    nutrients: {
      protein: "0.9g",
      vitamins: ["Vitamin A", "Vitamin K"],
      carbohydrates: "10g",
      fiber: "2.8g",
      fat: "0.2g"
    },
    availableSeason: ["Spring", "Summer"],
    description: "A crunchy root vegetable that is rich in beta-carotene and great for vision."
  },
  {
    id: 4,
    hashId: "e87f1ca5",
    name: "Broccoli",
    price: 1.0,
    nutrients: {
      protein: "2.8g",
      vitamins: ["Vitamin C", "Vitamin K"],
      carbohydrates: "7g",
      fiber: "2.6g",
      fat: "0.4g"
    },
    availableSeason: ["Fall", "Winter"],
    description: "A green vegetable that is high in vitamins and great for immune support."
  },
  {
    id: 5,
    hashId: "c65f2a9e",
    name: "Chicken Breast",
    price: 5.0,
    nutrients: {
      protein: "31g",
      vitamins: ["Vitamin B6", "Niacin"],
      carbohydrates: "0g",
      fat: "3.6g",
      iron: "1.2mg"
    },
    availableSeason: ["Year-round"],
    description: "A lean source of protein, perfect for grilling or baking."
  },
  {
    id: 6,
    hashId: "d39e4b76",
    name: "Salmon",
    price: 8.0,
    nutrients: {
      protein: "25g",
      vitamins: ["Vitamin D", "Vitamin B12"],
      carbohydrates: "0g",
      fat: "13g",
      omega3: "2.5g"
    },
    availableSeason: ["Year-round"],
    description: "A fatty fish rich in omega-3 fatty acids, great for heart health."
  },
  {
    id: 7,
    hashId: "f54e6c83",
    name: "Spinach",
    price: 1.5,
    nutrients: {
      protein: "2.9g",
      vitamins: ["Vitamin A", "Vitamin C"],
      carbohydrates: "3.6g",
      fiber: "2.2g",
      iron: "2.7mg"
    },
    availableSeason: ["Spring", "Fall"],
    description: "A leafy green vegetable that is high in iron and great for salads."
  },
  {
    id: 8,
    hashId: "a17b8d25",
    name: "Almonds",
    price: 10.0,
    nutrients: {
      protein: "21g",
      vitamins: ["Vitamin E", "Magnesium"],
      carbohydrates: "22g",
      fiber: "12.5g",
      fat: "49g"
    },
    availableSeason: ["Year-round"],
    description: "A nutritious nut that is high in healthy fats and great for snacking."
  },
  {
    id: 9,
    hashId: "c23e9f61",
    name: "Oats",
    price: 3.0,
    nutrients: {
      protein: "13g",
      vitamins: ["Vitamin B1", "Folate"],
      carbohydrates: "68g",
      fiber: "10g",
      fat: "7g"
    },
    availableSeason: ["Year-round"],
    description: "A whole grain that is perfect for a hearty breakfast or baking."
  },
  {
    id: 10,
    hashId: "d39a7c42",
    name: "Sweet Potato",
    price: 0.7,
    nutrients: {
      protein: "2g",
      vitamins: ["Vitamin A", "Vitamin C"],
      carbohydrates: "20g",
      fiber: "3g",
      fat: "0.1g"
    },
    availableSeason: ["Fall", "Winter"],
    description: "A starchy root vegetable that is sweet and rich in beta-carotene."
  },
  {
    id: 11,
    hashId: "e48b2d17",
    name: "Tomato",
    price: 0.6,
    nutrients: {
      protein: "0.9g",
      vitamins: ["Vitamin C", "Vitamin K"],
      carbohydrates: "3.9g",
      fiber: "1.2g",
      fat: "0.2g"
    },
    availableSeason: ["Summer"],
    description: "A juicy, red fruit that is versatile in cooking and high in antioxidants."
  },
  {
    id: 12,
    hashId: "f59c4b83",
    name: "Avocado",
    price: 1.5,
    nutrients: {
      protein: "2g",
      vitamins: ["Vitamin E", "Vitamin K"],
      carbohydrates: "9g",
      fiber: "7g",
      fat: "15g"
    },
    availableSeason: ["Spring", "Summer"],
    description: "A creamy fruit that is high in healthy fats and perfect for salads and spreads."
  },
  {
    id: 13,
    hashId: "a63d5c99",
    name: "Eggs",
    price: 2.0,
    nutrients: {
      protein: "6g",
      vitamins: ["Vitamin B12", "Vitamin D"],
      carbohydrates: "1.1g",
      fat: "5g",
      cholesterol: "186mg"
    },
    availableSeason: ["Year-round"],
    description: "A versatile source of protein, great for breakfast or baking."
  },
  {
    id: 14,
    hashId: "b74e6d56",
    name: "Blueberries",
    price: 4.0,
    nutrients: {
      protein: "0.7g",
      vitamins: ["Vitamin C", "Vitamin K"],
      carbohydrates: "14g",
      fiber: "2.4g",
      fat: "0.3g"
    },
    availableSeason: ["Summer"],
    description: "A small, sweet berry that is high in antioxidants and great for snacking."
  },
  {
    id: 15,
    hashId: "c85f7e22",
    name: "Greek Yogurt",
    price: 1.2,
    nutrients: {
      protein: "10g",
      vitamins: ["Vitamin B12", "Calcium"],
      carbohydrates: "3.6g",
      fat: "5g",
      probiotics: "Yes"
    },
    availableSeason: ["Year-round"],
    description: "A thick, creamy yogurt that is high in protein and great for digestion."
  },
  {
    id: 16,
    hashId: "d96f8c34",
    name: "Quinoa",
    price: 5.0,
    nutrients: {
      protein: "8g",
      vitamins: ["Vitamin B6", "Folate"],
      carbohydrates: "21g",
      fiber: "2.8g",
      fat: "2g"
    },
    availableSeason: ["Year-round"],
    description: "A gluten-free grain that is high in protein and perfect for salads and side dishes."
  },
  {
    id: 17,
    hashId: "e18f9d45",
    name: "Cucumber",
    price: 0.4,
    nutrients: {
      protein: "0.7g",
      vitamins: ["Vitamin K", "Vitamin C"],
      carbohydrates: "4g",
      fiber: "0.5g",
      fat: "0.1g"
    },
    availableSeason: ["Summer"],
    description: "A refreshing, hydrating vegetable that is great for salads and snacks."
  },
  {
    id: 18,
    hashId: "f21f0e56",
    name: "Milk",
    price: 1.5,
    nutrients: {
      protein: "8g",
      vitamins: ["Vitamin D", "Calcium"],
      carbohydrates: "12g",
      fat: "8g"
    },
    availableSeason: ["Year-round"],
    description: "A nutrient-rich liquid that is great for drinking and cooking."
  },
  {
    id: 19,
    hashId: "a32f1f67",
    name: "Orange",
    price: 0.8,
    nutrients: {
      protein: "1.2g",
      vitamins: ["Vitamin C", "Folate"],
      carbohydrates: "12g",
      fiber: "3g",
      fat: "0.2g"
    },
    availableSeason: ["Winter"],
    description: "A citrus fruit that is sweet, juicy, and high in vitamin C."
  },
  {
    id: 20,
    hashId: "b43f2g78",
    name: "Potato",
    price: 0.5,
    nutrients: {
      protein: "2g",
      vitamins: ["Vitamin C", "Vitamin B6"],
      carbohydrates: "17g",
      fiber: "2.2g",
      fat: "0.1g"
    },
    availableSeason: ["Year-round"],
    description: "A starchy vegetable that is versatile in cooking and a great source of energy."
  },
  {
    id: 21,
    hashId: "c54f3h89",
    name: "Brown Rice",
    price: 2.0,
    nutrients: {
      protein: "2.6g",
      vitamins: ["Vitamin B1", "Magnesium"],
      carbohydrates: "23g",
      fiber: "1.8g",
      fat: "1g"
    },
    availableSeason: ["Year-round"],
    description: "A whole grain that is perfect for hearty meals and sides."
  },
  {
    id: 22,
    hashId: "d64f4i90",
    name: "Lettuce",
    price: 1.0,
    nutrients: {
      protein: "1.4g",
      vitamins: ["Vitamin K", "Vitamin A"],
      carbohydrates: "2.9g",
      fiber: "1.3g",
      fat: "0.2g"
    },
    availableSeason: ["Spring", "Summer"],
    description: "A leafy green that is refreshing and perfect for salads and sandwiches."
  },
  {
    id: 23,
    hashId: "e74f5j01",
    name: "Garlic",
    price: 0.6,
    nutrients: {
      protein: "6.4g",
      vitamins: ["Vitamin C", "Vitamin B6"],
      carbohydrates: "33g",
      fiber: "2.1g",
      fat: "0.5g"
    },
    availableSeason: ["Year-round"],
    description: "A pungent spice that is essential in cooking and has health benefits."
  },
  {
    id: 24,
    hashId: "f84f6k12",
    name: "Olive Oil",
    price: 6.0,
    nutrients: {
      protein: "0g",
      vitamins: ["Vitamin E", "Vitamin K"],
      carbohydrates: "0g",
      fat: "100g",
      omega9: "73g"
    },
    availableSeason: ["Year-round"],
    description: "A healthy oil rich in monounsaturated fats, perfect for cooking and dressings."
  },
  {
    id: 25,
    hashId: "a94f7l23",
    name: "Honey",
    price: 7.0,
    nutrients: {
      protein: "0.3g",
      vitamins: ["Vitamin B6", "Niacin"],
      carbohydrates: "82g",
      fiber: "0.2g",
      fat: "0g"
    },
    availableSeason: ["Year-round"],
    description: "A natural sweetener with antioxidant properties, perfect for teas and baking."
  }
];

export default groceryProducts;