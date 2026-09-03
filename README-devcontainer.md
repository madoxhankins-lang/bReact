# Dev Container Setup Guide

This environment provides everything you need to build and test activity/assignment using TypeScript inside a VS Code Dev Container.

---

## ✅ Prerequisites

- Install [Visual Studio Code](https://code.visualstudio.com/)

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

- VS Code extensions:
  
  - Dev Containers
  - ESLint (optional)
  - Prettier (optional)

----

### Installing the Dev Containers Extension

1. **Open VS Code**.

2. **Access the Extensions View**:
   
   - Click on the **Extensions** icon in the Activity Bar on the side of the window.
   
   - Or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).

3. **Search for the Extension**:
   
   - In the Extensions view search bar, type `Dev Containers`.

4. **Install the Extension**:
   
   - Locate **Dev Containers** by Microsoft in the search results.
   
   - Click the **Install** button.

----

### Installing the ESLint Extension

1. **Open VS Code**.

2. **Access the Extensions View**:
   
   - Click on the **Extensions** icon in the Activity Bar on the side of the window.
   
   - Or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).

3. **Search for the Extension**:
   
   - In the Extensions view search bar, type `ESLint`.

4. **Install the Extension**:
   
   - Locate **ESLint** by Microsoft in the search results.
   
   - Click the **Install** button.

---

### Installing the Prettier Extension

1. **Open VS Code**.

2. **Access the Extensions View**:
   
   - Click on the **Extensions** icon in the Activity Bar on the side of the window.
   
   - Or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS).

3. **Search for the Extension**:
   
   - In the Extensions view search bar, type `Prettier`.

4. **Install the Extension**:
   
   - Locate **Prettier - Code formatter** by Prettier in the search results.
   
   - Click the **Install** button.

---

## 📁 Folder Structure

```
[assignment/activity] folder/
├── .devcontainer/
│   └── devcontainer.json
├── README.md
├── README-devcontainer.md
└── code/
    └── start/
        ├── package.json
        ├── tsconfig.json
        ├── src/
        └── public/
```

---

## Open in Dev Container

1. Open VS Code
2. File → Open Folder → `[assignment/activity] folder`
3. Click **Reopen in Container** when prompted

---

You're ready to build and test your Assignment/Activity!!!
