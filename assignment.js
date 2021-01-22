// kilometerToMeter function for converting Kilometer to Meter
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Distance cannot be negative,Check your input value";
  } else {
    var meter = kilometer * 1000; // 1km =1000m
    return meter;
  }
}

// budgetCalculator function for calculating your budget
function budgetCalculator(watch, mobile, laptop) {
  if (watch < 0 || mobile < 0 || laptop < 0) {
    return "You cant input negative value";
  }
  var watchCost = watch * 50;
  var mobileCost = mobile * 100;
  var laptopCost = laptop * 500;
  var totalCost = watchCost + mobileCost + laptopCost; //getting total cost for this budget
  return totalCost;
}

// hotelCost function for calculating hotel bill

function hotelCost(days) {
  var totalCost = 0;
  if (days < 0) {
    return "Days are negative make it correct";
  } else if (days <= 10) {
    totalCost = days * 100; //Rent for First 10 days
    return totalCost;
  } else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = days - 10; //finding out which days a applicable for  first offer
    var secondTenDays = remainingDays * 80;
    totalCost = firstTenDays + secondTenDays;
    return totalCost;
  } else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remainingDays = days - 20; //finding out which days a applicable for  second offer
    var thirdTenDays = remainingDays * 50;
    totalCost = firstTenDays + secondTenDays + thirdTenDays;
    return totalCost;
  }
}

// megaFriend function to find out maximum length of a name from your friend list

function megaFriend(names) {
  if (names.length == 0) {
    return "The name list is empty please input correctly";
  }

  var maximumName = names[0]; // initial value of maximum length of a name

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (typeof name == typeof 1) {
      return "There is  Number in this list verify list properly"; //checking is there any number type element in array by mistake
    } else if (name.length > maximumName.length) {
      maximumName = name;
    }
  }
  return maximumName;
}
