module.exports = {
  speakers: [
    require("../speakers/andrey-okonetchnikov"),
    require("../speakers/artem-sapegin"),
  ],
  title: "Styleguide-driven Development",
  description: `Web applications becoming bigger and more complex, and as they grow, the complexity of the User Interface, arguably the most important part of your application, increases. And with it, your responsibility as a UI developer.

  A traditional development workflow — change code, refresh the app in the browser, click-click-click to reproduce the desired state, repeat — doesn't work anymore. Tools like React hot loader make it faster but don't really fix the underlying issue.

  This workshop will help you:

  * Understand what a design system is and how to start thinking in design constraints
  * Analyze and split your UI into small reusable components
  * Setup an environment to create components in isolation
  * Create a living style guide and start building a component library
  * Structure your application around components
  * Write maintainable styles for your components based on the design system`,
};
