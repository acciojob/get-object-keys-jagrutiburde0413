//your JS code here. If required.
// Create a student object with a name property
const student = {
  name: 'John Doe'
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

const keys = student.getKeys();

console.log(keys); // ['name']