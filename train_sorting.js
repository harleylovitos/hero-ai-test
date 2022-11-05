const train_sort = (n, trains) => {
    if (0 <= n && n <= 2000) {
      const negativeWeight = trains.some((train) => train < 0);
      const overWeight = trains.some((train) => train > 10000);
      const sameWeight = trains.some(
        (train, index) => trains.indexOf(train) !== index
      );
  
      if (negativeWeight) return "The weight is a non-negative integer.";
      else if (overWeight) return "The weight should be smaller than 10,000.";
      else if (sameWeight) return "No two cars have the same weight";
      else {
        let newOrder = [];
        for (let index = 0; index < trains.length; index++) {
          if (index === 0) newOrder[0] = trains[0]; //add car on the first
          else if (index !== 0) {
            if (trains[index] > newOrder[0]) { // check if the current car can be added to the start
              newOrder.unshift(trains[index]);
            } else if (trains[index] < newOrder[newOrder.length - 1])  // check if the current car can be added to the end
              newOrder.push(trains[index]);
          }
        }
        
        return newOrder.length;
      }
    } else {
      return "Number of cars should be from 0 to 2000 only";
    }
  };
  
  console.log(train_sort(3, [1, 2, 3]));
  console.log(train_sort(5, [10, 2, 12, 20, 3]))
  