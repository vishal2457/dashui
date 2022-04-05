import { Button } from "@dash/core";
import { useIsomorphicLayoutEffect } from "@dash/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("dash docs page");
  }, []);
  return (
    <div>
      <h1>dash Documentation</h1>
      <Button>Click me!</Button>
    </div>
  );
}
