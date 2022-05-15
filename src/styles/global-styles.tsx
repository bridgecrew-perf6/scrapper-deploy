import { StyleSheet } from "aphrodite";

export function createGlobalStyles() {
  return {
    color: createColorStyles(),
    layout: createLayoutStyles(),
    text: createTypographyStyles(),
  };
}

export function createLayoutStyles(theme: Theme) {
  return StyleSheet.create({
    screenView: {
      flex: 1,
      padding: theme.sizing.scale500,
      color: theme.colors.primary,
      backgroundColor: theme.colors.primaryB,
    },
    scrollViewFlexFix: {
      flexGrow: 1,
      flex: 0,
    },
    contentView: {
      padding: theme.sizing.scale500,
      width: "100%",
      color: theme.colors.primary,
      backgroundColor: theme.colors.primaryB,
    },
    centerRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    centerColumn: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    alignSelfCenter: {
      alignSelf: "center",
    },
    spaceBetween: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    flexStart: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    flexEnd: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
    },

    relative: {
      position: "relative",
    },
    rightTop: {
      position: "absolute",
      top: theme.sizing.scale500,
      right: theme.sizing.scale500,
    },
    f1: {
      flex: 1,
    },

    fr1: {
      flex: 1,
      flexDirection: "row",
    },
    fr2: {
      flex: 2,
      flexDirection: "row",
    },
    fr3: {
      flex: 3,
      flexDirection: "row",
    },
    fr4: {
      flex: 3,
      flexDirection: "row",
    },
    fc1: {
      flex: 1,
      flexDirection: "column",
    },
    fc2: {
      flex: 2,
      flexDirection: "column",
    },
    fc3: {
      flex: 3,
      flexDirection: "column",
    },
    fc4: {
      flex: 3,
      flexDirection: "column",
    },
    fullWidth: {
      width: "100%",
      maxWidth: "100%",
    },

    fullHeight: { height: "100%" },
    h1: {
      height: theme.sizing.scale500,
    },
    h2: {
      height: theme.sizing.scale800,
    },
    h3: {
      height: theme.sizing.scale950,
    },
    w1: {
      width: theme.sizing.scale500,
    },
    w2: {
      width: theme.sizing.scale800,
    },
    w3: {
      width: theme.sizing.scale950,
    },

    m1: {
      margin: theme.sizing.scale100,
    },
    m2: {
      margin: theme.sizing.scale300,
    },
    m3: {
      margin: theme.sizing.scale500,
    },
    mv1: {
      marginVertical: theme.sizing.scale100,
    },
    mv2: {
      marginVertical: theme.sizing.scale300,
    },
    mv3: {
      marginVertical: theme.sizing.scale500,
    },
    mv4: {
      marginVertical: theme.sizing.scale600,
    },
    mv6: {
      marginVertical: theme.sizing.scale800,
    },
    mh1: {
      marginHorizontal: theme.sizing.scale100,
    },
    mh2: {
      marginHorizontal: theme.sizing.scale300,
    },
    mh3: {
      marginHorizontal: theme.sizing.scale500,
    },
    mr1: {
      marginRight: theme.sizing.scale100,
    },
    mr2: {
      marginRight: theme.sizing.scale300,
    },
    mr3: {
      marginRight: theme.sizing.scale500,
    },
    p1: {
      padding: theme.sizing.scale100,
    },
    p2: {
      padding: theme.sizing.scale300,
    },
    p3: {
      padding: theme.sizing.scale500,
    },
    pv1: {
      paddingVertical: theme.sizing.scale100,
    },
    pv2: {
      paddingVertical: theme.sizing.scale300,
    },
    pv3: {
      paddingVertical: theme.sizing.scale500,
    },
    pv4: {
      paddingVertical: theme.sizing.scale600,
    },
    pv5: {
      paddingVertical: theme.sizing.scale700,
    },
    ph1: {
      paddingHorizontal: theme.sizing.scale100,
    },
    ph2: {
      paddingHorizontal: theme.sizing.scale300,
    },
    ph3: {
      paddingHorizontal: theme.sizing.scale500,
    },
    ph4: {
      paddingHorizontal: theme.sizing.scale600,
    },
    ph5: {
      paddingHorizontal: theme.sizing.scale700,
    },
    ph6: {
      paddingHorizontal: theme.sizing.scale800,
    },
  });
}

export function createTypographyStyles(theme: Theme) {
  return StyleSheet.create({
    // headingXlarge: 28px , headingLarge : 24px , headingMedium :20px,  headingSmall :16px , headingXSmall : 12px

    displayLarge: {
      color: theme.colors.primary,
      ...theme.text.displayLarge,
    },
    displayMedium: {
      color: theme.colors.primary,
      ...theme.text.displayMedium,
    },
    displaySmall: {
      color: theme.colors.primary,
      ...theme.text.displaySmall,
    },
    headingXLarge: {
      color: theme.colors.primary,
      ...theme.text.headingXLarge,
    },
    headingLarge: {
      color: theme.colors.primary,
      ...theme.text.headingLarge,
    },
    headingMedium: {
      color: theme.colors.primary,
      ...theme.text.headingMedium,
    },
    headingSmall: {
      color: theme.colors.primary,
      ...theme.text.headingSmall,
    },
    headingXSmall: {
      color: theme.colors.primary,
      ...theme.text.headingXSmall,
    },

    labelLarge: {
      color: theme.colors.primary,
      ...theme.text.labelLarge,
    },
    labelMedium: {
      color: theme.colors.primary,
      ...theme.text.labelMedium,
    },
    labelSmall: {
      color: theme.colors.primary,
      ...theme.text.labelSmall,
    },
    labelXSmall: {
      color: theme.colors.primary,
      ...theme.text.labelXSmall,
    },
    paragraphLarge: {
      color: theme.colors.primary400,
      ...theme.text.paragraphLarge,
    },
    paragraphMedium: {
      color: theme.colors.primary400,
      ...theme.text.paragraphMedium,
    },
    paragraphSmall: {
      color: theme.colors.primary400,
      ...theme.text.paragraphSmall,
    },

    disabled: {
      color: theme.colors.primary400,
    },

    // Based on baseweb instructions => accent:blue , negative:red , positive:green

    accent: {
      color: theme.colors.accent300,
    },
    center: {
      textAlign: "center",
    },
  });
}

export function createColorStyles(theme: Theme) {
  return StyleSheet.create({
    primary: {
      color: theme.colors.primary,
    },

    primaryA: {
      color: theme.colors.primaryA,
    },
    primaryB: {
      color: theme.colors.primaryB,
    },

    primary300: {
      color: theme.colors.primary300,
    },
    primary400: {
      color: theme.colors.primary400,
    },

    // Accent Palette - blue
    accent: {
      color: theme.colors.accent,
    },

    accent300: {
      color: theme.colors.accent300,
    },

    // Negative Palette - red
    negative: {
      color: theme.colors.negative,
    },

    negative300: {
      color: theme.colors.negative300,
    },

    // Warning Palette -yellow
    warning: {
      color: theme.colors.warning,
    },

    warning300: {
      color: theme.colors.warning300,
    },

    // Positive Palette - green
    positive: {
      color: theme.colors.positive,
    },

    positive300: {
      color: theme.colors.positive300,
    },

    // Monochrome Palette
    white: {
      color: theme.colors.white,
    },
    black: {
      color: theme.colors.black,
    },
    mono100: {
      color: theme.colors.mono100,
    },

    mono300: {
      color: theme.colors.mono300,
    },
    mono400: {
      color: theme.colors.mono400,
    },
    mono500: {
      color: theme.colors.mono500,
    },

    appleBlue: {
      color: theme.colors.accent300,
    },
    backgroundPrimary: {
      backgroundColor: theme.colors.primaryA,
    },
    backgroundSecondary: {
      backgroundColor: theme.colors.primaryB,
    },
    backgroundPrimary400: {
      backgroundColor: theme.colors.primary400,
    },
  });
}
