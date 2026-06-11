import React from "react";

type State = { hasError: boolean; error?: Error | null };

export default class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error } as State;
  }

  componentDidCatch(error: Error, info: any) {
    // Log to console so it's visible in browser devtools
    console.error("Unhandled error in App:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: "Inter, sans-serif" }}>
          <h1 style={{ color: "#E11D48" }}>Application Error</h1>
          <p>An unexpected error occurred while loading the app.</p>
          <pre style={{ whiteSpace: "pre-wrap", color: "#111827" }}>
            {this.state.error?.message}
            {this.state.error && this.state.error.stack
              ? "\n\n" + this.state.error.stack
              : null}
          </pre>
          <p>Please check the console for more details.</p>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
