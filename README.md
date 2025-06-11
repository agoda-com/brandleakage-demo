# Brand Leakage Detection Demo with Playwright Visual Tests

This React application demonstrates the power of **Playwright visual testing** for detecting brand leakage in white-label applications. It showcases two different bank websites that should maintain distinct branding, and includes a mechanism to intentionally introduce brand leakage for testing purposes.

## 🎯 What This Demo Shows

This project illustrates how visual regression testing can catch subtle UI inconsistencies that traditional functional tests might miss. It's particularly valuable for:

- **White-label applications** where different clients need distinct branding
- **Multi-tenant SaaS platforms** with custom theming
- **Brand compliance** verification across different environments
- **Visual regression testing** best practices with Playwright

## 🏗️ Project Structure

- **Two Bank Websites**: Bank A (Blue theme, USD) and Bank B (Green theme, PHP)
- **Brand Leakage Simulation**: A flag that intentionally introduces cross-brand contamination
- **Visual Tests**: Playwright tests that capture and compare screenshots to detect inconsistencies
- **Component-Level Testing**: Individual component screenshots and full-page comparisons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd whitelabeldemo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🖥️ Running the Application

### Start the Development Server

```bash
npm start
```

The application will be available at `http://localhost:3000`

### Viewing the Bank Pages

#### Bank A (No Brand Leakage)
Navigate to: `http://localhost:3000/bankA`

- **Theme**: Blue (#1E90FF)
- **Currency**: USD
- **Features**: Loan Calculator, Savings Tracker
- **Logo**: Bank A logo
- **Exclusive Component**: Visible (Bank A specific feature)

#### Bank B (No Brand Leakage)
Navigate to: `http://localhost:3000/bankB`

- **Theme**: Green (#32CD32)  
- **Currency**: PHP
- **Features**: Investment Planner, Credit Score Checker
- **Logo**: Bank B logo
- **Exclusive Component**: Hidden (Bank A exclusive)

## 🚨 Simulating Brand Leakage

To demonstrate how visual tests catch brand inconsistencies:

### 1. Enable Brand Leakage

Edit `src/App.tsx` and modify line 14:

```tsx
// Current (no leakage)
<WhitelabelPage config={bankBConfig} simulateLeakage={false} />

// Change to (with leakage)
<WhitelabelPage config={bankBConfig} simulateLeakage={true} />
```

### 2. View Bank B with Brand Leakage

After saving the changes, visit `http://localhost:3000/bankB`

**You'll notice the following leakages:**
- ❌ **Currency**: Shows USD instead of PHP
- ❌ **Logo**: Shows Bank A logo instead of Bank B logo  
- ❌ **Exclusive Component**: Bank A's exclusive component appears on Bank B

### 3. Restore Normal State

Change `simulateLeakage` back to `false` to restore proper branding.

## 🧪 Running Visual Tests

The project includes comprehensive Playwright visual tests that will detect the brand leakage.

### Run All Visual Tests

```bash
npx playwright test src/tests/
```

### Run Tests for Specific Bank

```bash
# Bank A tests only
npx playwright test src/tests/visualTestsBankA.spec.ts

# Bank B tests only  
npx playwright test src/tests/visualTestsBankB.spec.ts
```

### View Test Results

```bash
npx playwright show-report
```

## 📊 Understanding Test Results

### ✅ Tests Pass (No Brand Leakage)
When `simulateLeakage={false}`, all tests should pass, indicating proper brand separation.

### ❌ Tests Fail (Brand Leakage Detected)
When `simulateLeakage={true}` for Bank B, the visual tests will fail because:

1. **Component Screenshots**: Individual components (logo, currency) don't match expected baselines
2. **Full Page Screenshots**: The entire page layout differs from the expected Bank B appearance
3. **Pixel Differences**: Playwright reports exactly which pixels have changed

## 🔍 Test Architecture

The visual testing strategy includes:

### Component-Level Tests
- **Logo Component**: Ensures correct bank logo is displayed
- **Currency Component**: Verifies proper currency formatting
- **Feature Lists**: Confirms bank-specific features are shown
- **Exclusive Components**: Validates proper conditional rendering

### Full-Page Tests
- **Complete Layout**: Captures entire page for comprehensive comparison
- **Masked Elements**: Excludes dynamic content from comparisons
- **Cross-Browser**: Tests across different browser engines

### Screenshot Management
- **Baseline Images**: Stored in `-snapshots` directories
- **Diff Images**: Generated when tests fail to show exact differences
- **Update Baselines**: Use `--update-snapshots` flag when UI changes are intentional

## 🛠️ Customization

### Adding New Banks
1. Create new config in `src/configs.ts`
2. Add route in `src/App.tsx`  
3. Create corresponding visual tests

### Modifying Brand Elements
Update the following files to change branding:
- `src/configs.ts`: Theme colors, features, currency
- `public/logos/`: Logo images
- Component files: Adjust styling and content

### Test Configuration
- Adjust `maxDiffPixelRatio` in test files for tolerance levels
- Modify locators in `src/tests/locators.ts`
- Update screenshot helpers in `src/tests/screenshotHelper.ts`

## 🎯 Use Cases & Learning Outcomes

This demo is perfect for:

- **Learning Playwright**: Hands-on experience with visual testing
- **Understanding Brand Compliance**: See how subtle leakage can occur
- **Testing Strategies**: Component vs. full-page testing approaches
- **CI/CD Integration**: Foundation for automated visual regression testing
- **Documentation**: Living example for blog posts and tutorials

## 📝 Key Takeaways

1. **Visual Tests Catch What Functional Tests Miss**: Brand leakage often involves correct functionality but wrong appearance
2. **Component Isolation**: Test individual components to pinpoint specific issues
3. **Full-Page Context**: Comprehensive tests ensure overall layout integrity
4. **Automation Value**: Manual visual checking doesn't scale; automated visual tests do
5. **Fast Feedback**: Immediate detection of visual regressions in CI/CD pipelines

## 🤝 Contributing

This is a demonstration project designed for educational purposes. Feel free to fork and modify for your own experiments with visual testing!

## 🔗 Related Resources

- [Playwright Visual Testing Documentation](https://playwright.dev/docs/test-screenshots)
- [Visual Testing Best Practices](https://playwright.dev/docs/best-practices)
- Blog post: [Link to your detailed blog post will go here]

---

**Happy Testing! 🎭**
