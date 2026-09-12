# Expo Router bottom toolbar transition reproduction

An iOS-only, two-screen reproduction. No authentication, custom native module, patch, nested navigator, or focus-effect toolbar workaround.

## Run

Requires macOS, Xcode, Node, pnpm, and an iOS 26 simulator.

```sh
pnpm install
pnpm exec expo run:ios
```

1. On Home, observe the native integrated search field and plus button at the bottom.
2. Tap **Open conversation** (not the plus button).
3. Watch the bottom edge during and immediately after the push. The destination intentionally has no `Stack.Toolbar`; its pale input makes any outgoing toolbar overlap easy to see.
4. Return using the native back button and repeat. Also try completing and cancelling an interactive edge-swipe return.

Expected: the outgoing toolbar visibility is coordinated with the native navigation transition, with no late independent fade over the destination. Returning restores Home's toolbar, including after a cancelled interactive pop.

The relevant code is entirely in `app/_layout.jsx`, `app/index.jsx`, and `app/detail.jsx`.

Versions: Expo 57.0.22, Expo Router 57.0.21, React Native 0.86.3, React Native Screens 4.26.2. `pnpm dlx expo-doctor@latest`: **21/21 checks passed**.

Verified with a normally signed Debug build on Xcode 26.5 / iOS 26.5 (iPhone 17 Pro Simulator). [Recording](evidence/transition.mp4) shows the outgoing toolbar overlapping the destination input during push. The original app's late fade was longer; this reduced example does not establish that the toolbar remains after the entire push completes.
