![icon](NodeJS-Handbook.png)   NodeJS-Handbook
==============================================

Design patterns and best practices for Node.js and its most popular packages.

#### [Designing Singletons](http://fredkschott.com/post/2013/12/node-js-cookbook---designing-singletons/)
> Node doesn't imposes much structure on it's developers, so it's up to you to choose the right design for your modules. In this post, I'll share a few simple patterns that will help you get the most out of your singletons by designing them as cleanly and clearly as possible.

#### [Crafting Constructors](http://fredkschott.com/post/2014/01/node-js-cookbook---constructors-and-custom-types/)
> Node's module system was built to share objects across an application. The [singleton pattern](http://fredkschott.com/post/2013/12/node-js-cookbook---designing-singletons/) is a natural fit for this, but what if we want something that isn't shared? What if we want to create multiple objects, each with unique properties but shared common behavior? In most languages this would require a new class. For Javascript, we'll need something a little different.

#### [Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
>  If the V8 Engine is the heart of your Node.js application, then callbacks are its veins. They enable a balanced, non-blocking flow of control and processing power across applications and modules. But for callbacks to work at scale, developers needed a common, reliable protocol. The "error-first" callback (or "Errorback") was introduced to solve this problem, and has since become *the* standard protocol for Node.js callbacks. This post will define this pattern, it's proper use, and exactly why it is so powerful.

#### [Testing Essentials](http://fredkschott.com/post/2014/05/nodejs-testing-essentials/)
> This post will explain the types of tools needed to overcome the challenges of testing with Node.js. Together, these tools form an essential testing suite that will cover almost any project. The setup isn't the most complex or feature-rich, but you could say that's on purpose. If that sounds counter-intuitive... read on.

#### Diving into `require()` (Coming Soon)
> Almost any Node.js developer can tell you what the `require` function does. We use it every day to load external libraries, files, and JSON objects into our project. But do any of us actually know how it works? Curious, I dug into Node core to find out what was happening under the hood. But instead of finding a single function, I ended up at the heart of Node's module system: `module.js`. The file is an undocumented core module that controls the loading, compiling, and caching of every module used. `require`, it turned out, was only the tip of the iceberg.


---
 
2014 Copyright [Fred K. Schott](http://fredkschott.com/). All rights reserved.
