import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
/// stackoverflow start
/// https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
import tsconfigPaths from "vite-tsconfig-paths";
/// answered by Yuns : https://stackoverflow.com/users/8335317/yuns

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
