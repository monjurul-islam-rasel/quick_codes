    //JavaScript or ReactJS Sorting Object by property value
    
    var arrayOfObjects = [
      {
        name: "Diana",
        born: 1373925600000, // Mon, Jul 15 2013
        num: 4,
        sex: "female"
      },
      {
        name: "Beyonce",
        born: 1366832953000, // Wed, Apr 24 2013
        num: 2,
        sex: "female"
      },
      {
        name: "Albert",
        born: 1370288700000, // Mon, Jun 3 2013
        num: 3,
        sex: "male"
      },
      {
        name: "Doris",
        born: 1354412087000, // Sat, Dec 1 2012
        num: 1,
        sex: "female"
      }
    ];
    
   
    // sort by date born, oldest first
  
    var byDate = arrayOfObjects.slice(0);
    byDate.sort(function(a, b) {
      return a.born - b.born;
    });
    console.log("by date:");
    console.log(byDate);
    
    
    // sort by name

    var byName = arrayOfObjects.slice(0);
    byName.sort(function(a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });

    console.log('by name:');
    console.log(byName);
    
