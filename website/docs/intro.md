---
sidebar_position: 1
---

# Contribution Guidelines

Welcome to the **AASTU Software Engineering Resource** project! This repository serves as a collection of resources for students at **Addis Ababa Science and Technology University**, designed to organize and share helpful materials such as links, PDFs, PPTs, and more. Contributions from the community are highly encouraged!

---

## How to Contribute

Follow these steps to contribute to the project:

### **1. Prerequisites**
To get started, ensure you have the following:
- A GitHub account.
- Basic knowledge of Git for version control.
- [Node.js](https://nodejs.org/en/download/) version **18.0** or above installed on your machine:
  - During installation, check all options related to dependencies.

---

### **2. Fork the Repository**
1. Go to the [AASTU Software Engineering Resource repository](https://github.com/gemechis-elias/AASTU-Software-Engineering-Resource).
2. Click the **Fork** button (top-right) to create a copy of the repository under your account.

---

### **3. Clone the Repository**
Clone the forked repository to your local machine:

```bash
git clone https://github.com/<your-username>/AASTU-Software-Engineering-Resource.git
cd AASTU-Software-Engineering-Resource
```

---

### **4. Add Your Contribution**

#### **Adding Resources**
1. Navigate to the appropriate folder in the `resources/` directory (e.g., `programming/`, `design/`, etc.).
2. Add your resource in the correct format (Markdown, PDF, etc.).
3. Ensure that the file is named clearly and appropriately.

#### **Example Resource Format** (Markdown):
```markdown
# Resource Title

- **Type**: [Link/PDF/Book]
- **Title**: [Resource Name]
- **Link**: [https://example.com](https://example.com)
- **Description**: A brief description of the resource.
```

#### **Run Resource Sync Script (Optional)**
To ensure the resources are synced correctly:

```bash
node sync-resources.js
```

---

### **5. Test the Website Locally**
Run the following commands to test the website locally:

```bash
cd website
npm install
npm run start
```

This starts a local development server. Open your browser and go to `http://localhost:3000/` to see the website.

---

### **6. Commit and Push Your Changes**
After adding your resources:

1. Stage your changes:
   ```bash
   git add .
   ```
2. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add [resource name] to [category]"
   ```
3. Push your changes to your forked repository:
   ```bash
   git push origin main
   ```

---

### **7. Create a Pull Request**
1. Go to your forked repository on GitHub.
2. Click **Pull Request** > **New Pull Request**.
3. Compare changes between your fork and the main repository.
4. Add a descriptive title and explanation for your changes.
5. Submit the pull request for review.

---

## Code of Conduct
Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a welcoming and inclusive environment.

---

Thank you for contributing to the **AASTU Software Engineering Resource** project!
