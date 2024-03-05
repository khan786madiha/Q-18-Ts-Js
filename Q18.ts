// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

    // Define the array of places 
let places: string[] = [
   "Pakistan",
    "Japan",
    "paris",
    " Europe.",
    "Zimbabwe",
    "Canada"
];

// Print the array in its original order
console.log("Original Order:");
console.log(places);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...places].sort());

// Verify that the original array is still in its original order
console.log("\nOriginal Order:");
console.log(places);

// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...places].sort().reverse());

// Verify that the original array is still in its original order
console.log("\nOriginal Order:");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nReversed Order:");
console.log(places);

// Reverse the order of the list again to bring it back to its original order
places.reverse();
console.log("\nOriginal Order:");
console.log(places);

// Sort the array in alphabetical order
places.sort();
console.log("\nSorted Alphabetically:");
console.log(places);

// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places);
