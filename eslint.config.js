import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
    },
  },
];

export default eslintConfig;
