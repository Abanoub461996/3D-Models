import path from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        view: path.resolve(__dirname, "view.html"),
        controller: path.resolve(__dirname, "controller.html"),
      },
    },
  },
};
