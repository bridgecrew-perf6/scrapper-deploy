import { StyleSheet, css } from "aphrodite";
import { useGlobalStyles } from "src/styles/style-hooks";

export default function Home() {
  const { gs } = useGlobalStyles();

  return (
    <div className={css(styles.root, gs.layout.screenView)}>
      <h1 className={css(styles.title, styles.root)}>My page</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 80,
    height: 60,
    background: "black",
    ":hover": {
      background: "black",
    },
  },

  title: {
    marginLeft: 5,
    color: "black",
    fontSize: 22,
    ":hover": {
      color: "white",
    },
  },
});
