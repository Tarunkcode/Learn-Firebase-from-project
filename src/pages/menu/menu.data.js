const MENU_DATA = [
    {
      id: 1,
      title: 'ESPRESSO',
      routeName: 'espresso',
      items: [
        {
          id: 1,
          name: 'Americano',
          imageUrl: 'https://i.ibb.co/mzXvnGh/image.png',
          price: 2.50
        },
        {
          id: 2,
          name: 'Latte',
          imageUrl: 'https://i.ibb.co/0BzWY8c/image.png',
          price: 3.0
        },
        {
          id: 3,
          name: 'Cappuccino',
          imageUrl: 'https://i.ibb.co/y0qjQnq/image.png',
          price: 0.75
        },
        {
          id: 4,
          name: 'Cloud Macchiato',
          imageUrl: 'https://i.ibb.co/jW0zzHb/image.png',
          price: 3.50
        },
        {
          id: 5,
          name: 'Doke Latte',
          imageUrl: 'https://i.ibb.co/wCdBt6w/image.png',
          price: 4.50
        },
        {
          id: 6,
          name: 'Mocha',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Z6-BU3WpMGpxy8QBT_eKIA71b3FnNELyjw&usqp=CAU',
          price: 1.8
        },
        {
          id: 7,
          name: 'Red Eye',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjlgf17FodgfWJ7lDsFtRaJo-tOb7cOd9dQ&usqp=CAU',
          price: 1.4
        },
        {
          id: 8,
          name: 'Ristretto',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1Kd5ZIBmBOnBwJCoeOjK8pjLQ242IXjK4Q&usqp=CAU',
          price: 1.6
        }
      ]
    },
    {
      id: 2,
      title: 'HOT COFFEE',
      routeName: 'hot-coffee',
      items: [
        {
          id: 10,
          name: 'Blonde Latte',
          imageUrl: 'https://i.ibb.co/dpg3Qwb/image.png',
          price: 2.20
        },
        {
          id: 11,
          name: 'Caramel Macchioto',
          imageUrl: 'https://i.ibb.co/DtSzyqX/image.png',
          price: 2.80
        },
        {
          id: 12,
          name: 'Skinny Mocha',
          imageUrl: 'https://i.ibb.co/QQfSBq2/image.png',
          price: 1.10
        },
        {
          id: 13,
          name: 'Hot Coffee',
          imageUrl: "https://i.ibb.co/fGhQC2M/image.png",
          price: 1.60
        },
        {
          id: 14,
          name: 'Irish Coffee',
          imageUrl: 'https://i.ibb.co/Ps2KsGm/image.png',
          price: 1.60
        },
        {
          id: 15,
          name: 'Flat Whites',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 1.60
        },
        {
          id: 16,
          name: 'Brewed Coffee',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 1.90
        },
        {
          id: 17,
          name: 'Espresso Shots',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 2.00
        }
      ]
    },
    {
      id: 3,
      title: 'Cold Coffees',
      routeName: 'cold-coffee',
      items: [
        {
          id: 18,
          name: 'Nitro Cold Brew',
          imageUrl: 'https://i.ibb.co/gFbBvgX/image.png',
          price: 1.25
        },
        {
          id: 19,
          name: 'Iced Latte',
          imageUrl: 'https://i.ibb.co/JCxt1dJ/image.png',
          price: 1.0
        },
        {
          id: 20,
          name: 'Frappuccino',
          imageUrl: 'https://i.ibb.co/rs0RNDq/image.png',
          price: 2.0
        },
        {
          id: 21,
          name: 'Creamy Iced Coffee',
          imageUrl: 'https://i.ibb.co/jWn8dWr/image.png',
          price: 1.85
        },
        {
          id: 22,
          name: 'fated cold Coffee',
          imageUrl: 'https://i.ibb.co/RjvJMvz/image.png',
          price: 1.85
        }
      ]
    },
    {
      id: 4,
      title: 'For Childrens',
      routeName: 'children',
      items: [
        {
          id: 23,
          name: 'Plane Milk',
          imageUrl: 'https://i.ibb.co/PYbXFrd/image.png',
          price: 0.25
        },
        {
          id: 24,
          name: 'Choco Milk',
          imageUrl: 'https://i.ibb.co/fY3bymn/image.png',
          price: 2.0
        },
        {
          id: 25,
          name: 'Hot Chocolete',
          imageUrl: 'https://i.ibb.co/jW0zzHb/image.png',
          price: 0.80
        },
        {
          id: 26,
          name: 'Milk Shake',
          imageUrl: 'https://i.ibb.co/4FnGXP6/image.png',
          price: 0.80
        },
        {
          id: 27,
          name: 'Butter Milk',
          imageUrl: 'https://i.ibb.co/b3w2KSm/image.png',
          price: 0.45
        },
        {
          id: 28,
          name: 'sugar free coffee',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 1.35
        },
        {
          id: 29,
          name: 'Butter Milk',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Extras',
      routeName: 'extras',
      items: [
        {
          id: 30,
          name: 'Expresso SHOT',
          imageUrl: 'https://i.ibb.co/gw5yJgG/image.png',
          price: 3.25
        },
        {
          id: 31,
          name: 'Flavour Shot',
          imageUrl: 'https://i.ibb.co/QdhxKsr/image.png',
          price: 2.0
        },
        {
          id: 32,
          name: 'SOY MILK',
          imageUrl: 'https://i.ibb.co/ZNLZG7F/image.png',
          price: 2.5
        },
        {
          id: 33,
          name: 'Breve',
          imageUrl: "https://i.ibb.co/5jdC8wG/image.png",
          price: 0.5
        },
        {
          id: 34,
          name: 'Whiped Cream',
          imageUrl: 'https://i.ibb.co/nbyS4b9/image.png',
          price: 0.75
        },
        {
          id: 35,
          name:" AMY LAIT",
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 2.5
        }
      ]
    }
  ];
  
  export default MENU_DATA;