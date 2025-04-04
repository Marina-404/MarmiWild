import MenuItem from './MenuItem';
import { Items } from './MenuItem';

type Props =  {
    foodItems: Items[];
}


function MenuList({ foodItems } :Props) {
  console.log(foodItems);

  return (
    <>
     {foodItems.map((item) => (
        <MenuItem 
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            foodImage={item.foodImage}
            isFavorite={item.isFavorite}
            id={item.id}
        />
      ))}
    {/* render a MenuItem component for each element of the foodItems array */}
    </>
  );
}

export default MenuList;