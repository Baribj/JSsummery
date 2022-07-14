import CodeSnippet from "../components/CodeSnippet";

// section 7
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
