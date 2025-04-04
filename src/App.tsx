import MenuList from './components/MenuList';

import './App.css';

const foodItems = [
  {
    id: 1,
    itemName: "Caesar's Salad",
    description: "The original Caesar's Salad recipe",
    foodImage: 'https://cdn.britannica.com/14/234014-050-CB842159/Caesar-salad-side-view.jpg',
    price: 12,
    isFavorite: false,
  },
  {
    id: 2,
    itemName: 'Spaghetti Carbonara',
    description: "Better than your nonna's! All local and fresh ingredients",
    foodImage: 'https://cdn.britannica.com/96/238196-050-C5560987/Plate-of-traditional-Italian-spaghetti-carbonara-surrounded-by-the-ingredients-use-to-make-it.jpg',
    price: 15,
    isFavorite: true,
  },
  {
    id: 3,
    itemName: 'Grilled Fish',
    description: 'Fish of the day, grilled with a side of vegetables',
    foodImage: 'https://cdn.britannica.com/38/235438-050-08E3AE20/Grilled-barramundi-steak-on-a-bed-of-vegetables.jpg',
    price: 20,
    isFavorite: false,
  },
  {
    id: 4,
    itemName: 'Steak',
    description: 'Meat!',
    foodImage: 'https://cdn.britannica.com/70/189770-050-AA419662/New-York-City-steak-Delmonico-rib-eyes.jpg',
    price: 30,
    isFavorite: false,
  }
];

function App() {
  return (
    <main>
      <h1>MarmiWild</h1>
      
      {/* pass the variable foodItems as props to MenuList component */}
      <MenuList foodItems={foodItems}/>
    </main>
  );
};

export default App;