# Summary

"Ficelta" is an app designed for authoring and running interactive fiction stories. Stories are authored in JS, and then may be read by running the program from the command line.

By running the serve command, the program starts up a very basic HTTP server which lets you see tree diagrams of the stories pages - showing which page links to other pages. (This is designed for the benefit of story authors, not readers).

# Run instructions 

1. Install DenoJS and ensure that the binary is linked in your `PATH` so that the `deno` command will work. 
2. Clone this repository
3. Execute this command to run: `deno run -A --unstable ./app/src/app.js` (The `unstable` flag is needed as a keypress detection library that this project uses relies on the `Deno.setRaw()` function, which is not yet a stable part of the deno core.)

# Other ways of running

In theory, it should be possible to compile the program into a standalone binary. As of Deno 1.6, this feature has been added. However, while using `deno compile --output ficelta -A --unstable ./app/src/app.js` does indeed create a binary called `ficelta`, trying to run the binary yeilds the error "TypeError: Self-contained binaries don't support module loading". It seems that a dependency of the project uses a dynamic import, which is not allowed when compiling binaries.

# Running tests and linter

Deno includes a built-in test runner. This project has 1 test assertion to demonstrate this functionality. To run tests, use the command `deno --unstable test -A`.

Deno includes a built-in linter. To run it, use the command `deno --unstable lint`. The `unstable` flag is required as the linter is still considered to be a new feature.
