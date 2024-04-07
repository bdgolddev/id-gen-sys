const getAllUsersData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  };
  const getSingleUserData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  };

module.exports = {
    getAllUsersData,
    getSingleUserData
}