# Learning TypeScript Decorators

![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2022.svg)

This repository documents my journey of learning TypeScript decorators. Decorators are a powerful feature in TypeScript that allow you to enhance and modify the behavior of classes, methods, properties, and other elements in a concise and reusable manner. Through my exploration, I've gained valuable insights into how decorators work and how they can be used effectively in various scenarios.

## Contents

1. [Introduction to Decorators](#introduction-to-decorators)
2. [Creating Class Decorators](#creating-class-decorators)
3. [Creating Method Decorators](#creating-method-decorators)
4. [Creating Property Decorators](#creating-property-decorators)
5. [Applying Multiple Decorators](#applying-multiple-decorators)
6. [Decorator Factories](#decorator-factories)
7. [Built-in Decorators](#built-in-decorators)
8. [Common Use Cases](#common-use-cases)
9. [Best Practices](#best-practices)
10. [Resources](#resources)

## 1. Introduction to Decorators

Decorators are a design pattern in TypeScript that allows you to add metadata and behavior to classes, methods, and properties. They are denoted by the `@` symbol followed by the decorator function's name. Decorators are executed at runtime and can modify, replace, or enhance the behavior of the target element.

## 2. Creating Class Decorators

Class decorators are applied to classes and can modify the class itself or its constructor. They can be used for logging, validation, dependency injection, and more.

## 3. Creating Method Decorators

Method decorators are applied to methods within a class and can intercept method calls, modify arguments, or even replace the method with a new implementation. They're useful for aspects like caching, authorization, and profiling.

## 4. Creating Property Decorators

Property decorators are used to modify properties of a class. They provide an opportunity to intercept property access or assign new values. This can be useful for data validation, lazy loading, and data transformation.

## 5. Applying Multiple Decorators

Multiple decorators can be applied to a single class, method, or property. They are executed in the order they appear, from the outermost to the innermost decorator.

## 6. Decorator Factories

Decorator factories are functions that return decorator functions. They enable parameterization of decorators, allowing you to customize their behavior based on different scenarios.

## 7. Built-in Decorators

TypeScript provides several built-in decorators like `@deprecated`, `@sealed`, and `@readOnly`. These decorators can be directly applied to elements to convey specific metadata.

## 8. Common Use Cases

- **Logging:** Add logging to methods or class instantiation for debugging.
- **Validation:** Validate method arguments, property values, or class configurations.
- **Caching:** Implement caching for expensive method calls.
- **Authorization:** Control access to methods or classes based on user roles.
- **Dependency Injection:** Automatically inject dependencies into class constructors.
- **Serialization:** Customize JSON serialization and deserialization of class instances.

## 9. Best Practices

- Use decorators sparingly and maintain readability.
- Document the purpose and behavior of custom decorators.
- Consider performance implications, as decorators are executed at runtime.
- Test decorators thoroughly in isolation before applying them.
- Stay updated with TypeScript releases for any changes to decorator syntax or behavior.

## 10. Resources

- [TypeScript Documentation on Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Understanding TypeScript Decorators](https://blog.logrocket.com/understanding-typescript-decorators/)
- [A Deep Dive into TypeScript Decorators](https://www.digitalocean.com/community/tutorials/typescript-decorators)
- [Exploring Decorators in TypeScript](https://www.sitepoint.com/javascript-decorators-what-they-are/)

Feel free to explore the code samples and notes in this repository to dive deeper into the world of TypeScript decorators. Happy coding!

— Mrigesh Thakur

---

**Note:** In my learning process, I also used the `reflect-metadata` library for storing state values for decorators, enabling more advanced use cases. This library provides an elegant way to attach metadata to class constructors, methods, and properties. By leveraging `reflect-metadata`, I was able to enhance the functionality and versatility of my decorators.
