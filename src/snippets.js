const snippets = {
  0: `const obj = {
    user: 'John'
}`,
  1: `if (obj.noSuchProperty === undefined) {
    //
}`,
  2: `if ("key" in obj) {
    //
}`,
  3: `for (let key in obj) {
    //
}`,
  4: `Object.keys(obj).map((key) => {
    //
});`,
  5: `function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

let user = new User("Jack");`,

  6: `for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
     // do something
    } else {
      // do something else
    }
}`,
};

export default snippets;
