import CodeSnippet from "../../CodeSnippet";

// section 13
const tips9 = [
  {
    sectionTitle: "Modules",
    chapters: [
      {
        chapterTitle: "Modules, introduction",
        tips: [
          {
            content: (
              <>
                <p>
                  A module is just a file. One script is one module. As simple
                  as that.
                </p>
                <p>
                  As modules support special keywords and features, we must tell
                  the browser that a script should be treated as a module, by
                  using the attribute <code>{`<script type="module"`}</code>.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<script type="module" src="user.js"></script>`}
                />
                <p>
                  Modules work only via HTTP(s), not locally. Locally, we need a
                  web server or use "live server" capability of your editor.
                </p>
                <p>
                  Each module has its own top-level scope. In other words,
                  top-level variables and functions from a module are not seen
                  in other scripts.
                </p>
                <p>
                  With modules we use import/export instead of relying on global
                  variables.
                </p>
                <p>
                  In the browser, if we talk about HTML pages, independent
                  top-level scope also exists for each{" "}
                  <code>{'<script type="module">'}</code>.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<script type="module">
  // The variable is only visible in this module script
  let user = "John";
</script>

<script type="module">
  alert(user); // Error: user is not defined
</script>`}
                />
                <p>
                  However, we can still do <code>window.user = "John"</code>,
                  but that's really bad.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  A module code is evaluated only the first time when imported.
                </p>
                <CodeSnippet
                  code={`// 📁 alert.js
console.log("Module is evaluated");

// Import the same module from different files

// 📁 1.js
import './alert.js'; // Module is evaluated!

// 📁 2.js
import './alert.js'; // (shows nothing)`}
                />
                <p>
                  If for example a module exports an object, and that object is
                  imported by multiple modules, if the object is changed in one
                  of the modules, other modules will see the change.
                </p>
                <CodeSnippet
                  code={`// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete

// Both 1.js and 2.js reference the same admin object
// Changes made in 1.js are visible in 2.js`}
                />
                <p>
                  A typical usage will be when a module exports some generic
                  functionality that needs a setup (E.g. authentication needs
                  credentials). Then outer code (maybe top level module?) can
                  configure it so its shared with other imports.
                </p>
                <p>In other words, here is how it typically goes</p>
                <ol>
                  <li>
                    A module exports some means of configuration, e.g. a
                    configuration object.
                  </li>
                  <li>
                    On the first import we initialize it, write to its
                    properties. The top-level application script may do that.
                  </li>
                  <li>Further imports use the module.</li>
                </ol>
                <CodeSnippet
                  code={`// HTML
<!doctype html>                
<script type="module" src="./init.js"></script>
<script type="module" src="./another.js"></script>

// 📁 admin.js
export let config = { };
export function sayHi() {
  console.log("Ready to serve," + " " + config.user);
}

// 📁 init.js (maybe top-level script?)
import {config} from './admin.js';
config.user = "Pete";

// 📁 another.js
import {sayHi} from './admin.js';
sayHi(); // Ready to serve, Pete!`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  The object <code>import.meta</code> contains the information
                  about the current module. Its differs from one environment to
                  another, in browsers, it contains the url of the module file.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<script type="module">
  console.log(import.meta.url); // script URL
  // for an inline script - the URL of the current HTML-page
</script>`}
                />
                <p>
                  A minor point, <code>this</code> is <code>undefined</code> in
                  module scripts. Compare it to non-module scripts, where{" "}
                  <code>this</code> is a global object:
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<script>
  console.log(this); // window
</script>

<script type="module">
  console.log(this); // undefined
</script>`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  Module scripts are always deferred, same effect as defer
                  attribute.
                </p>
                <p>In other words:</p>
                <ol>
                  <li>
                    Downloading external module scripts{" "}
                    <code>{'<script type="module" src="...">'}</code> doesn't
                    block HTML processing, they load in parallel with other
                    resources.
                  </li>
                  <li>
                    Module scripts wait until the HTML document is fully ready
                    (even if they are tiny and load faster than HTML), and then
                    run.
                  </li>
                  <li>
                    Relative order of scripts is maintained: scripts that go
                    first in the document, execute first.
                  </li>
                </ol>
                <p>
                  As a side effect, module scripts always "see" the fully loaded
                  HTML-page, including HTML elements below them.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<script type="module">
  console.log(typeof button); // object: the script can 'see' the button below
  // as modules are deferred, the script runs after the whole page is loaded
</script>

// Compare to regular script below:

<script>
  console.log(typeof button); // button is undefined, the script can't see elements below
  // regular scripts run immediately, before the rest of the page is processed
</script>

<button id="button">Button</button>`}
                />
                <p>
                  Please note: the second script actually runs before the first!
                  So we'll see <code>undefined</code> first, and then{" "}
                  <code>object</code>.
                </p>
                <p>
                  That's because modules are deferred, so we wait for the
                  document to be processed. The regular script runs immediately,
                  so we see its output first.
                </p>
                <p>
                  When using modules, we should be aware that the HTML page
                  shows up as it loads, and JavaScript modules run after that,
                  so the user may see the page before the JavaScript application
                  is ready. Some functionality may not work yet. We should put
                  "loading indicators", or otherwise ensure that the visitor
                  won't be confused by that.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  <code>Async</code> works on inline module scripts. For
                  non-module scripts, the async attribute only works on external
                  scripts.
                </p>
                <p>
                  For example, the inline script below performs the import and
                  runs when ready, even if the HTML document is not finished
                  yet, or if other scripts are still pending.
                </p>
                <CodeSnippet
                  code={`<!doctype html>
<script async type="module">

  import {counter} from './analytics.js';
  
  counter.count();

</script>`}
                />
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  External scripts that have <code>type="module"</code> are
                  different in two aspects:
                </p>
                <p>
                  1- External scripts with the same <code>src</code> run only
                  once. (** not sure how is this different? just tested with
                  internal module scripts and they only execute once too).
                </p>
                <p>
                  2- External scripts that are fetched from another origin (e.g.
                  another site) require CORS headers.
                </p>
                <p>
                  In the browser, import must get either a relative or absolute
                  URL. Modules without any path are called "bare" modules. Such
                  modules are not allowed in import.
                </p>
                <CodeSnippet
                  code={`import {sayHi} from 'sayHi'; // Error, "bare" module`}
                />
                <p>
                  However, this is allowed in some other environments like
                  Node.js for example as they have their own ways finding
                  modules and hooks.
                </p>
              </>
            ),
            seeMore: [""],
          },
          {
            content: (
              <>
                <p>
                  In real-life, browser modules are rarely used in their "raw"
                  form. Usually, we bundle them together with a special tool
                  such as Webpack and deploy to the production server.
                </p>
                <p>Build tools do the following:</p>
                <ol>
                  <li>
                    Take a "main" module, the one intended to be put in{" "}
                    <code>{`<script type="module">`}</code> in HTML.
                  </li>
                  <li>
                    Analyze its dependencies: imports and then imports of
                    imports etc.
                  </li>
                  <li>
                    Build a single file with all modules (or multiple files,
                    that's tunable), replacing native <code>import</code> calls
                    with bundler functions, so that it works. "Special" module
                    types like HTML/CSS modules are also supported.
                  </li>
                  <li>
                    In the process, other transformations and optimizations may
                    be applied. Things like removal of unreachable code,
                    unusable exports removed "tree shaking", removal of
                    development-specific stuff like <code>console.log</code> and{" "}
                    <code>debugger</code>, and modern JS syntax may be
                    transformed to older one.
                  </li>
                </ol>
                <p>
                  If we use bundle tools, then as scripts are bundled together
                  into a single file (or few files), <code>import/export</code>{" "}
                  statements inside those scripts are replaced by special
                  bundler functions. So the resulting "bundled" script does not
                  contain any <code>import/export</code>, it doesn't require
                  <code>type="module"</code>, and we can put it into a regular
                  scrip.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Export and Import",
        tips: [
          {
            content: (
              <>
                <p>To import everything at once:</p>
                <CodeSnippet
                  code={`// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');`}
                />
                <p>Import and export as:</p>
                <CodeSnippet
                  code={`export {sayHi as hi, sayBye as bye};
                  
import {sayHi as hi, sayBye as bye} from './say.js';`}
                />
                <p>
                  As there may be at most one default export per file, the
                  exported entity may have no name.
                </p>
                <CodeSnippet
                  code={`export default function(user) { // no function name
  alert('Hello,' + ' ' + user);
}

//
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];`}
                />
                <p>
                  Named exports force team members to use the same name when
                  importing. For default exports, team members might be
                  importing under different names which can be inconsistent. For
                  that reason, some teams prefer to always use named exports.
                </p>
                <p>
                  Re-export <code>export ... from ...</code>:
                </p>
                <CodeSnippet
                  code={`export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export default`}
                />
                <p>
                  Why do we need that? well, NPM packages for example use it so
                  users can import everything they need from one main file, so
                  they don't have to dig deep in the folders and files to find
                  the right module to import something from. So, the main file
                  re-exports everything.
                </p>
                <p>
                  Re-exporting with syntax <code>export ... from ...</code> is
                  just the same as importing then exporting. The only notable
                  difference is that re-exported modules aren't available in the
                  current file.
                </p>
                <p>
                  The default export needs separate handling when re-exporting:
                </p>
                <ol>
                  <li>
                    <code>export User from './user.js'</code> won't work. That
                    would lead to a syntax error.
                  </li>
                  <li>
                    <code>export * from './user.js'</code> re-exports only named
                    exports, but ignores the default one.
                  </li>
                </ol>
                <p>
                  If we'd like to re-export both named and default exports, then
                  two statements are needed:
                </p>
                <CodeSnippet
                  code={`export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export`}
                />
                <p>
                  Such oddities of re-exporting a default export are another
                  reason why some developers don't like default exports and
                  prefer named ones.
                </p>
                <p>
                  Please note that import/export statements don't work if inside{" "}
                  <code>{"{...}"}</code> (e.g. if statements).
                </p>
                <p>
                  But what if we need to do that? we will see how in the dynamic
                  import chapter.
                </p>
              </>
            ),
            seeMore: [""],
          },
        ],
      },
      {
        chapterTitle: "Dynamic imports",
        tips: [
          {
            content: (
              <>
                <p>We can't dynamically generate any parameters of import.</p>
                <CodeSnippet
                  code={`import ... from getModuleName(); // Error, only from "string" is allowed`}
                />
                <p>
                  Also, we can't use <code>import</code> inside <code>if</code>{" "}
                  for example.
                </p>
                <p>
                  That's because <code>import</code> / <code>export</code> aim
                  to provide a backbone for the code structure. That's a good
                  thing, as code structure can be analyzed, modules can be
                  gathered and bundled into one file by special tools, unused
                  exports can be removed ("tree-shaken"). That's possible only
                  because the structure of imports/exports is simple and fixed.
                </p>
                <p>But how can we import a module dynamically, on-demand?</p>
                <p>
                  The <code>import(module)</code> expression loads the module
                  and returns a promise that resolves into a module object that
                  contains all its exports. It can be called from any place in
                  the code.
                </p>
                <CodeSnippet
                  code={`let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => console.log(obj))
  .catch(err => console.log(err))
  
// We can use await inside async function
let {hi, bye} = await import('./say.js');

// To import a default export
let obj = await import('./say.js');
let say = obj.default;
// or, in one line: let {default: say} = await import('./say.js');`}
                />
                <p>
                  Dynamic imports work in regular scripts, they don't require{" "}
                  <code>script type="module"</code>.
                </p>
                <p>
                  Although <code>import()</code> looks like a function call,
                  it's a special syntax that just happens to use parentheses. It
                  is not a function.
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

export default tips9;
