import CodeSnippet from "../../components/CodeSnippet";

// section 7 and 8
const tips4 = [
  {
    sectionTitle: "Object properties configuration",
    chapters: [
      {
        chapterTitle: "Property flags and descriptors",
        tips: [
          {
            content: (
              <>
                <p>
                  Object properties, besides a value, have three special
                  attributes (so-called "flags"):
                </p>
                <p>
                  - <code>writable</code>, if <code>true</code>, property can be
                  changed.
                </p>
                <p>
                  - <code>enumerable</code> if <code>true</code>, property is
                  listed in loop.
                </p>
                <p>
                  - <code>configurable</code> if <code>true</code>, property can
                  be deleted, and these attributes can be modified.
                </p>
                <p>
                  All the above default to <code>true</code>.
                </p>
                <p>
                  The method <code>Object.getOwnPropertyDescriptor</code> allows
                  to query the full information about a property. The syntax is:
                </p>
                <CodeSnippet
                  code={`let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);`}
                />
                <p>
                  The returned value is a so-called "property descriptor"
                  object: it contains the value and all the flags.
                </p>
                <p>
                  To change the flags, we can use{" "}
                  <code>Object.defineProperty.</code>, the syntax is:
                </p>
                <CodeSnippet
                  code={`Object.defineProperty(obj, propertyName, descriptor)`}
                />
                <p>
                  If the property didn't exist, it will be created. If the
                  property didn't exist, and a certain flag isn't included in
                  the object, it will default to <code>false</code>.
                </p>
                <p>
                  Making a property non-configurable is a one-way road. We
                  cannot change it back with defineProperty.
                </p>
                <p>
                  Please note: <code>configurable: false</code> prevents changes
                  of property flags and its deletion, while allowing to change
                  its value.
                </p>
                <p>
                  The only thing we can change in a non-configurable property,
                  is changing <code>writable</code> from <code>true</code> to{" "}
                  <code>false</code>. Note that this doesn't work the other way
                  around.
                </p>
                <p>
                  - <code>Object.defineProperties</code> allows us to define
                  multiple properties at once. It returns the object.
                </p>
                <p>
                  - <code>Object.getOwnPropertyDescriptors</code> to get all
                  property descriptors at once.
                </p>
                <p>
                  Together, we can use them to create a flag-aware copy of an
                  object:
                </p>
                <CodeSnippet
                  code={`let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
`}
                />
                <p>
                  As we have seen before, we can use <code>for..in </code> to
                  copy an object, but <code>for..in </code> doesn't copy flags
                  and it ignores symbolic and non-enumerable properties, but
                  <code>Object.getOwnPropertyDescriptors</code> returns all
                  property descriptors including symbolic and non-enumerable
                  ones.
                </p>
                <p>
                  There exist methods to seal whole objects, not going to go
                  through them for now, click on "see more" to take a look.
                </p>
              </>
            ),
            seeMore: [
              "https://javascript.info/property-descriptors#sealing-an-object-globally",
            ],
          },
        ],
      },
      {
        chapterTitle: "Property getters and setters",
        tips: [
          {
            content: (
              <>
                <p>
                  There are two types of object properties, data properties, and
                  accessor properties (setters and getters).
                </p>
                <CodeSnippet
                  code={`let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};`}
                />
                <p>Consider the following example:</p>
                <CodeSnippet
                  code={`et user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return this.name + " " + this.surname;
  }
};

console.log(user.fullName);`}
                />
                <p>
                  From the outside, an accessor property looks like a regular
                  one. That's the idea of accessor properties. We don't call
                  <code>user.fullName</code> as a function, we read it normally:
                  the getter runs behind the scenes. To an external code, it
                  looks just like a regular property.
                </p>
                <p>
                  As of now, we can't set the fullName property, trying to do so
                  will result in an error, lets add a setter:
                </p>
                <CodeSnippet
                  code={`let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return this.name + ' ' + this.surname;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Descriptors for accessor properties are different from those
                  for data properties.
                </p>
                <p>
                  For accessor properties, descriptors have no{" "}
                  <code>value</code> and no <code>writable</code>, but instead
                  there is <code>get</code> and <code>set</code>.
                </p>
                <p>
                  In other words, they have <code>get</code>, <code>set</code>,{" "}
                  <code>enumerable</code> and <code>configurable</code>.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can use getters/setter as wrappers around real properties
                  to gain more control over them. For example, we can use them
                  to prevent short names like:
                </p>
                <CodeSnippet
                  code={`let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...`}
                />
                <p>
                  Notice how the name was saved in a separate property{" "}
                  <code>_name</code>, using <code>_</code> is just a convention.
                </p>
                <p>
                  Technically, someone can still access user._name directly, but
                  there is a widely known convention that properties that start
                  with <code>_</code> aren't to be accessed directly.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can use getters/setters for compatibility. Imagine if we
                  started with a <code>user</code> object that has{" "}
                  <code>name</code> and <code>age</code> properties:
                </p>
                <CodeSnippet
                  code={`function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);
`}
                />
                <p>
                  But at some point later, we wanted to use{" "}
                  <code>birthday</code> instead of <code>age</code>. We can try
                  to find all instances of old <code>age</code> and replace
                  them, but that would be hectic. Also, <code>age</code> is
                  useful to have, lets keep it.
                </p>
                <p>
                  Instead, we can add a getter to automatically calculate{" "}
                  <code>age</code> from <code>birthday</code>:
                </p>
                <CodeSnippet
                  code={`function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age`}
                />
              </>
            ),
            seeMore: [""],
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Prototypes, inheritance",
    chapters: [
      {
        chapterTitle: "Prototypal inheritance",
        tips: [
          {
            content: (
              <>
                <p>
                  The property <code>[[Prototype]]</code> is internal and
                  hidden, but there are many ways to set it. One of which is
                  through the special name <code>__proto__</code> like this:
                </p>
                <CodeSnippet
                  code={`admin.__proto__ = user
// or

let admin = {
  //
  //
  //
  __proto__: user
}`}
                />
                <p>
                  Now if we read a property from <code>admin</code> and it is
                  missing, JS will automatically take it from <code>user</code>.
                </p>
                <p>
                  The value of <code>[[Prototype]]</code> can be either an
                  object or <code>null</code>. Other types are ignored.
                </p>
                <p>
                  Please note that <code>__proto__</code> is different from the
                  internal property <code>[[Prototype]]</code>. Its actually a
                  getter/setter for <code>[[Prototype]]</code> and exists for
                  historical reasons.
                </p>
                <p>
                  Modern JS suggests that we use{" "}
                  <code>Object.getPrototypeOf</code> /{" "}
                  <code>Object.setPrototypeOf</code>, instead (we will study
                  them later).
                </p>
                <p>
                  Note that the prototype is only used for reading. Not Writing
                  / deleting. If you do <code>admin.role = "super"</code>, and
                  the <code>role</code> property didn't exist in{" "}
                  <code>admin</code> but existed in <code>user</code> (a
                  prototype for <code>admin</code>), it won't be overwritten,
                  instead a new property <code>role</code> will be set in{" "}
                  <code>admin</code>.
                </p>
                <p>Accessor properties are an exception:</p>
                <CodeSnippet
                  code={`let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return this.name + ' ' + this.surname;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected`}
                />
                <p>
                  What the value of <code>this</code> in the example above?
                </p>
                <p>
                  No matter where the method is found: in an object or its
                  prototype. In a method call, <code>this</code> is always the
                  object before the dot.
                </p>
                <p>
                  So, the setter call <code>admin.fullName=</code> uses{" "}
                  <code>admin</code> as <code>this</code>, not <code>user</code>
                  .
                </p>
                <p>
                  Remember, If we call <code>obj.method()</code>, and the method
                  is taken from the prototype, <code>this</code> still
                  references <code>obj</code>. So methods always work with the
                  current object even if they are inherited.
                </p>
                <p>
                  Remember, methods are shared, but the object state is not.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>for..in</code> loop iterates over inherited properties
                  too. <code>Object.keys</code> doesn't.
                </p>
                <p>
                  If we wan't to use <code>for...in</code> loop, but don't want
                  inherited properties, we can use{" "}
                  <code>obj.hasOwnProperty(key):</code> that returns{" "}
                  <code>true</code> if object has its own (not inherited)
                  property named <code>key</code>.
                </p>
                <p>
                  Literal objects inherit from <code>Object.prototype</code> by
                  default.
                </p>
                <p>
                  If you use <code>for...in</code> to iterate an object and
                  don't see any properties from <code>Object.prototype</code>,
                  don't start scratching your head, the reason they don't show
                  up is because all of them are not enumerable.
                </p>
                <p>
                  Almost all other key/value-getting methods, such as
                  <code>Object.keys</code>, <code>Object.values</code> and so on
                  ignore inherited properties.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "F.prototype",
        tips: [
          {
            content: (
              <>
                <p>
                  By default, each constructor function has a regular property
                  called <code>prototype</code>. It sets the{" "}
                  <code>[[property]]</code> for objects created with that
                  constructor function.
                </p>
                <CodeSnippet
                  code={`let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log( rabbit.eats ); // true`}
                />
                <p>
                  By default, the <code>prototype</code> property is an object
                  that has a <code>constructor</code> property that points back
                  to the constructor function itself.
                </p>
                <p>
                  If we do nothing to change it, objects created with that
                  constructor function will also have a <code>constructor</code>{" "}
                  property that points to the constructor function.
                </p>
                <p>
                  We can use that to create an object with the same constructor
                  as another object that we don't know the constructor it was
                  created with:
                </p>
                <CodeSnippet
                  code={`function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");`}
                />
                <p>
                  Naturally, if we do <code>Rabbit.prototype = animal</code>,
                  now the default <code>constructor</code> property of the{" "}
                  <code>prototype</code> object is gone, so objects created with
                  constructor function will still have there{" "}
                  <code>[[Prototype]]</code> pointing to <code>animal</code> but
                  they won't have a <code>constructor</code> property that
                  points to the constructor functions that created the object.
                </p>
                <p>
                  So, to keep the right <code>constructor</code>:
                </p>
                <CodeSnippet
                  code={`function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved

// Or
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};`}
                />
                <p>
                  On regular objects, <code>prototype</code> is nothing special,
                  just a regular property.
                </p>
                <p>
                  Remember, we can get the constructor of an object by accessing
                  its <code>constructor</code> property (I think only if the
                  default one wasn't overwritten).
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Native prototypes",
        tips: [
          {
            content: (
              <>
                <p>
                  So where is the <code>Object.prototype....</code> coming from?
                </p>
                <p>
                  The constructor function <code>Object()</code> has its{" "}
                  <code>prototype</code> property pointing to a huge built-in
                  object with a lot of methods. Basically somebody did{" "}
                  <code>Object.prototype = hugeObject</code>.
                </p>
                <p>
                  When an object is created with <code>new Object()</code> or
                  with object literal <code>{`{...}`}</code>, its{" "}
                  <code>[[Prototype]]</code> is set by the constructor's
                  function <code>prototype</code> property, (remember from the
                  previous chapter ?) to reference that <code>hugeObject</code>.
                </p>
                <p>
                  So, again, when we say <code>Object.prototype....</code>,{" "}
                  <code>prototype</code> here is a property of the{" "}
                  <code>Object()</code> constructor function, it is different
                  from <code>[[Prototype]]</code> which is a hidden internal
                  property on object referencing the object its inheriting from.
                </p>
                <p>
                  If the value inside <code>F.prototype</code> is an object,
                  then that value will get assigned to the property{" "}
                  <code>[[Prototype]]</code> of any object created with that
                  constructor function.
                </p>
                <p>
                  Goes without saying that <code>Object.prototype</code> stores
                  the object that has all native object properties and methods
                  like <code>toString()</code> and so on.
                </p>
                <p>
                  Same applies to other build in objects like arrays and
                  functions, when we create an array [1, 2, 3], the default{" "}
                  <code>new Array()</code> constructor is used internally. So{" "}
                  <code>Array.prototype</code> becomes its prototype and
                  provides methods.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  By specification, all of the built-in prototypes have{" "}
                  <code>Object.prototype</code> on the top. That's why some
                  people say that "everything inherits from objects".
                </p>
                <CodeSnippet
                  code={`let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
console.log( arr.__proto__.__proto__.__proto__ ); // null`}
                />
                <p>
                  As we remember, primitives are not objects. But if we try to
                  access their properties, temporary wrapper objects are created
                  using built-in constructors String, Number and Boolean. They
                  provide the methods and disappear.
                </p>
                <p>
                  These objects are created invisibly to us and most engines
                  optimize them out, but the specification describes it exactly
                  this way. Methods of these objects also reside in prototypes,
                  available as <code>String.prototype</code>,{" "}
                  <code>Number.prototype</code> and{" "}
                  <code>Boolean.prototype</code> (what about Symbol ?).
                </p>
                <p>
                  Data types <code>null</code> and <code>undefined</code> have
                  no object wrappers, hence no prototypes.
                </p>
                <p>
                  In modern programming, there is only one case where modifying
                  native prototypes is approved. That's polyfilling.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  We can borrow methods (just like we talked about method
                  borrowing in the Decorators chapter).
                </p>
                <p>
                  Fo example, if we have an array-like object and we want to
                  apply some <code>Array</code> method on it:
                </p>
                <CodeSnippet
                  code={`let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

console.log( obj.join(',') ); // Hello,world!`}
                />
                <p>
                  It works because the internal algorithm of the built-in{" "}
                  <code>join</code> method only cares about the correct indexes
                  and the <code>length</code> property. It doesn't check if the
                  object is indeed an array. Many built-in methods are like
                  that.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Prototype methods, objects without __proto__",
        tips: [
          {
            content: (
              <>
                <p>
                  As we have mentioned in the first chapter of this section,
                  setting or reading the prototype with{" "}
                  <code>obj.__proto__</code> is considered outdated and somewhat
                  deprecated.
                </p>
                <p>The modern methods to get/set a prototype are:</p>
                <p>
                  - <code>Object.getPrototypeOf(obj)</code> returns the{" "}
                  <code>[[Prototype]]</code> of <code>obj</code>.
                </p>
                <p>
                  - <code>Object.setPrototypeOf(obj, proto)</code> sets the{" "}
                  <code>[[Prototype]]</code> of <code>obj</code> to{" "}
                  <code>proto</code>.
                </p>
                <p>
                  The only usage of <code>__proto__</code>, that's not frowned
                  upon, is as a property when creating a new object:{" "}
                  <code>{`{__proto__: ... }`}</code>. As in when you are
                  creating a new object literal and are adding it as a property
                  (Not as a getter/setter tho, <code>obj.__proto__</code>).
                </p>
                <p>Although, there's a special method for this too:</p>
                <p>
                  - <code>Object.create(proto, [descriptors])</code> creates an
                  empty object with given <code>proto</code> as{" "}
                  <code>[[Prototype]]</code> and optional property descriptors.
                </p>
                <p>For example:</p>
                <CodeSnippet
                  code={`let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

console.log(rabbit.jumps); // true`}
                />
                <p>
                  We can use it to create an exact replica of an object,
                  including all properties: enumerable and non-enumerable, data
                  properties and setters/getters - everything, and with the
                  right <code>[[Prototype]]</code>:
                </p>
                <CodeSnippet
                  code={`let clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);`}
                />
                <p>
                  Changing <code>[[Prototype]]</code> by using{" "}
                  <code>Object.setPrototypeOf</code> or{" "}
                  <code>obj.__proto__</code>, is a very slow process. Do it once
                  at object creation time, and avoid doing it on-the-fly.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  As we know, objects can be used as associative arrays to store
                  key/value pairs.
                </p>
                <p>
                  What if those keys and values are user generated, and the user
                  enters "__proto__" as key? might lead to pretty confusing
                  bugs.
                </p>
                <p>
                  As we know, <code>__proto__</code> is not a property of an
                  object, but an accessor property of{" "}
                  <code>Object.prototype</code>.
                </p>
                <p>
                  So, if <code>obj.__proto__</code> is read or set, the
                  corresponding getter/setter is called from its prototype, and
                  it gets/sets <code>[[Prototype]]</code>.
                </p>
                <p>
                  As it was said in the beginning of this tutorial section:{" "}
                  <code> __proto__</code> is a way to access{" "}
                  <code>[[Prototype]]</code>, it is not{" "}
                  <code>[[Prototype]]</code> itself.
                </p>
                <p>
                  Now, if we intend to use an object as an associative array and
                  be free of such problems, we can do it with a little trick:
                </p>
                <CodeSnippet
                  code={`let obj = Object.create(null);
// or: obj = { __proto__: null }

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

console.log(obj[key]); // "some value"`}
                />
                <p>
                  This creates an object with a <code>null</code> prototype. So
                  there is no inherited getter/setter for <code>__proto__</code>
                  . Now it is processed as a regular data property, so the
                  example above works right.
                </p>
                <p>
                  ** Question tho, if we use it like{" "}
                  <code>{`obj = { __proto__: null }`}</code>, how is it still a
                  setter/getter? (there is no set and get as we did in the
                  setters/getters chapter) ?
                </p>
                <p>
                  That's called a "very plain" or "pure dictionary" object. The
                  downside is we now don't have any of the built in object
                  methods, but that's usually fine for associative arrays.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
    ],
  },
];

export default tips4;
