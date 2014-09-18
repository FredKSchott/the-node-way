![icon](NodeJS-Handbook.png)   NodeJS-Handbook
==============================================

Design patterns and best practices for Node.js and its most popular packages.

#### [Designing Singletons](http://fredkschott.com/post/2013/12/node-js-cookbook---designing-singletons/)
> Node doesn't imposes much structure on its developers, so it's up to you to choose the right design for your modules. In this post, I'll share a few simple patterns that will help you get the most out of your singletons by designing them as cleanly and clearly as possible.

#### [Crafting Constructors](http://fredkschott.com/post/2014/01/node-js-cookbook---constructors-and-custom-types/)
> Node's module system was built to share objects across an application. The [singleton pattern](http://fredkschott.com/post/2013/12/node-js-cookbook---designing-singletons/) is a natural fit for this, but what if we want something that isn't shared? What if we want to create multiple objects, each with unique properties but shared common behavior? In most languages this would require a new class. For Javascript, we'll need something a little different.

#### [Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
>  If the V8 Engine is the heart of your Node.js application, then callbacks are its veins. They enable a balanced, non-blocking flow of control and processing power across applications and modules. But for callbacks to work at scale, developers needed a common, reliable protocol. The "error-first" callback (or "Errorback") was introduced to solve this problem, and has since become *the* standard protocol for Node.js callbacks. This post will define this pattern, its proper use, and exactly why it is so powerful.

#### [Testing Essentials](http://fredkschott.com/post/2014/05/nodejs-testing-essentials/)
> This post will explain the types of tools needed to overcome the challenges of testing with Node.js. Together, these tools form an essential testing suite that will cover almost any project. The setup isn't the most complex or feature-rich, but you could say that's on purpose. If that sounds counter-intuitive... read on.

#### [How \`require()\` Actually Works](http://fredkschott.com/post/2014/06/require-and-the-module-system/)
> Almost any Node.js developer can tell you what the `require()` function does, but how many of us actually know how it works? Curious, I dug into Node core to find out what was happening under the hood. But instead of finding a single function, I ended up at the heart of Node's module system. `require()`, it turned out, was only the tip of the iceberg.

#### [Monkey Patches & MP3s - Exploring Dangerous Design Patterns in Node.js](http://fredkschott.com/post/2014/09/nodejs-dangerous-module-design-patterns/)
> There are a million different ways to design a JavaScript module. Standard patterns like the singleton and custom type have been widely adopted, and when used together they provide a dependable feature-set. Some other patterns, however, push the limits of what a module can (and should) actually be. The first group is often encouraged, while the second is denounced without further thought. This post will attempt to explore that second group.

---
 
2014 Copyright [Fred K. Schott](http://fredkschott.com/). All rights reserved.
