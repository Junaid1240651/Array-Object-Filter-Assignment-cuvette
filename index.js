let arr = [
  {
    foodName: "Oats Idli",
    foodCategory: "breakfast",
    isJunkFood: true,
    calories: 150,
    foodItemImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13aYX-diF-nkJm42z6mearKBiE42YM_iBgQ&usqp=CAU",
  },
  {
    foodName: "Masala Bhindi",
    foodCategory: "lunch",
    isJunkFood: false,
    calories: 140,
    foodItemImageUrl:
      "https://i.ndtvimg.com/i/2015-04/bhindi_625x350_51429706972.jpg",
  },
  {
    foodName: "Dum Aloo Lakhnawi",
    foodCategory: "dinner",
    isJunkFood: false,
    calories: 291,
    foodItemImageUrl:
      "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_51434362664.jpg",
  },
  {
    foodName: "Dahi Vada Recipe",
    foodCategory: "snacks",
    isJunkFood: false,
    calories: 420,
    foodItemImageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/dahi-vada-280x280.jpg",
  },
  {
    foodName: "Oats Upma",
    foodCategory: "breakfast",
    isJunkFood: false,
    calories: 350,
    foodItemImageUrl:
      "https://cityspideynews.s3.amazonaws.com/uploads/spidey/202106/oats-upma-recipe-1623562641.jpg",
  },
  {
    foodName: "Chana Kulcha",
    foodCategory: "lunch",
    isJunkFood: true,
    calories: 195,
    foodItemImageUrl:
      "https://i.ndtvimg.com/i/2015-04/chana-kulcha_625x350_41429707001.jpg",
  },
  {
    foodName: "Shahi Egg Curry",
    foodCategory: "dinner",
    isJunkFood: false,
    calories: 151,
    foodItemImageUrl:
      "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_61434362285.jpg",
  },
  {
    foodName: "Chakli Recipe",
    foodCategory: "snacks",
    isJunkFood: false,
    calories: 555,
    foodItemImageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/10/chakli-3-280x280.jpg",
  },
  {
    foodName: "Aloo Paratha",
    foodCategory: "breakfast",
    isJunkFood: true,
    calories: 230,
    foodItemImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-QE6BtLEFODkKl1WoV3Ed7sR1ZblPMezJg&usqp=CAU",
  },
  {
    foodName: "Paneer Tamatar Ki Subzi",
    foodCategory: "lunch",
    isJunkFood: false,
    calories: 255,
    foodItemImageUrl:
      "https://c.ndtvimg.com/2018-10/mms64sd_paneer-sabzi_625x300_15_October_18.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
  },
  {
    foodName: "Malabari Prawn Curry",
    foodCategory: "dinner",
    isJunkFood: true,
    calories: 320,
    foodItemImageUrl:
      "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_71434362500.jpg",
  },
  {
    foodName: "Bhel Puri",
    foodCategory: "snacks",
    isJunkFood: false,
    calories: 390,
    foodItemImageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2012/08/bhel-puri-1-280x280.jpg",
  },
];

let arrItem = "";

let filter = arr.filter(function (item) {
  items(item);
});
function filterItem(category) {
  arrItem = "";
  if (category === "breakFast") {
    arr.filter(function (item) {
      if (item.foodCategory == "breakfast") {
        items(item);
      }
    });
  } else if (category === "calories") {
    arr.filter(function (item) {
      if (item.calories > 250) {
        items(item);
      }
    });
  } else if (category === "junk") {
    arr.filter(function (item) {
      if (item.isJunkFood == true) {
        items(item);
      }
    });
  } else if (category === "allItem") {
    arr.filter(function (item) {
      items(item);
    });
  }
}
if (item.isJunkFood == true) {
  abc(item);
}

function items(item) {
  arrItem += `<div class='maincontainer'>
  <div><img class='img' src='${item.foodItemImageUrl}'></div>
  <div class='data'><h4>FoodName - ${item.foodName}</h4>
  <h4>FoodCategory - ${item.foodCategory}</h4>

  <h4>IsJunkFood - ${item.isJunkFood}</h4>
  <h4>Calories - ${item.calories}</h4>
  </div>
  </div>`;
  document.getElementById("container").innerHTML = arrItem;
}
