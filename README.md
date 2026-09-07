<div align="center">

<h1>@bradleyhodges/sfsymbols-types</h1>
<h3>Typescript companion package containing type definitions for the <a href="https://github.com/bradleyhodges/sfsymbols">@bradleyhodges/sfsymbols</a> and <a href="https://github.com/bradleyhodges/sfsymbols-react">@bradleyhodges/sfsymbols-react</a> packages.</h3>

<p align="center">
				<a href="">
				<img alt="NPM Downloads by package author" src="https://img.shields.io/npm-stat/dm/bradleyhodges" />
				</a>
    <a href="https://www.npmjs.com/package/@bradleyhodges/sfsymbols-types">
				<img src="https://img.shields.io/badge/npmjs-package-red?logo=npm" alt="npmjs package" />
    </a>
    <a href="https://github.com/bradleyhodges/sfsymbols-types">
				<img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="GitHub repo" />
    </a>
    <br />
    <a href="https://github.com/bradleyhodges/sfsymbols-types/releases">
				<img src="https://img.shields.io/badge/version-8.1.1-blue.svg" alt="Version: 8.1.1" />
    </a>
				<a href="">
    <img src="https://img.shields.io/badge/Platforms-Next.js%20|%20React.js%20|%20React%20Native-FF69B4.svg" alt="Platforms: Next.js – React.js – React Nav" />
				</a>
    <a href="https://github.com/bradleyhodges/sfsymbols-types/blob/stable/LICENSE">
				<img src="https://img.shields.io/badge/license-MIT-lightgrey.svg" alt="License: MIT" />
    </a>
</p>
</div>

SF Symbols is a library of over 7,000 symbols that are designed to integrate seamlessly with San Francisco, the system font for Apple platforms.

> [!CAUTION]
> SF Symbols is licensed by Apple for use only on Apple platforms. **Use of this package, or any of the other @bradleyhodges/sfsymbols-* packages, outside of Apple platforms is NOT permitted.**

## Usage
In most cases, you won't need to actually install this type package as the types are referenced in the icon and react component packages.

However, if for whatever reason you need to reference or extend the types, simply install the package to the root of your project:

```bash
pnpm add @bradleyhodges/sfsymbols-types@latest
```

### Using SF Symbols Icons
You will need to install the following packages to use the icons in your project:

- [`@bradleyhodges/sfsymbols`](https://github.com/bradleyhodges/sfsymbols) – Contains the actual icons.
- [`@bradleyhodges/sfsymbols-react`](https://github.com/bradleyhodges/sfsymbols-react) – Contains the React components for the using the icons.

```bash
pnpm add @bradleyhodges/sfsymbols@latest @bradleyhodges/sfsymbols-react@latest
```

**For detailed usage instructions and more information about the SF Symbols project, see the base package: [https://github.com/bradleyhodges/sfsymbols](https://github.com/bradleyhodges/sfsymbols)**
