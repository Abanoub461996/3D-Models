import path from "path";
import { defineConfig } from 'vite'


export default {
  base: "/models/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        hut: path.resolve(__dirname, "hut.html"),
        robot: path.resolve(__dirname, "robot.html"),
        house: path.resolve(__dirname, "house.html"),

      },
    },
  },
};
