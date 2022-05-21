import { StyleSheet } from "aphrodite";

export function createGlobalStyles() {
  return {
    color: createColorStyles(),
    layout: createLayoutStyles(),
    text: createTypographyStyles(),
    ul: createListStyles(),
  };
}

export function createLayoutStyles() {
  return StyleSheet.create({
    screenView: {
      flex: 1,
      padding: 10,
  
    },
    scrollViewFlexFix: {
      flexGrow: 1,
      flex: 0,
    },
    contentView: {
      padding: 10,
      width: "100%",
    
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
    flexStartColumn:{
       display: "flex",
       flexDirection:"column",
       justifyContent: "center",
       alignItems:"flex-start"
    },
    spaceBetweenColumn:{
     display: "flex",
     flexDirection:"column",
     justifyContent: "space-between",
     alignItems:"center"
    },

    relative: {
      position: "relative",
    },
    rightTop: {
      position: "absolute",
      top: 10,
      right: 10,
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
      height: 10,
    },
    h2: {
      height: 20,
    },
    h3: {
      height: 16,
    },
    w1: {
      width: 10,
    },
    w2: {
      width: 20,
    },
    w3: {
      width: 16,
    },

    m1: {
      margin: 4,
    },
    m2: {
      margin: 8,
    },
    m3: {
      margin: 10,
    },
    mv1: {
      marginVertical: 4,
    },
    mv2: {
      marginVertical: 8,
    },
    mv3: {
      marginVertical: 10,
    },
    mv4: {
      marginVertical: 12,
    },
    mv6: {
      marginVertical: 20,
    },
    mh1: {
      marginHorizontal: 4,
    },
    mh2: {
      marginHorizontal: 8,
    },
    mh3: {
      marginHorizontal: 10,
    },
    mr1: {
      marginRight: 4,
    },
    mr2: {
      marginRight: 8,
    },
    mr3: {
      marginRight: 10,
    },
    p1: {
      padding: 4,
    },
    p2: {
      padding: 8,
    },
    p3: {
      padding: 10,
    },
    pv1: {
      paddingVertical: 4,
    },
    pv2: {
      paddingVertical: 8,
    },
    pv3: {
      paddingVertical: 10,
    },
    pv4: {
      paddingVertical: 12,
    },
    pv5: {
      paddingVertical: 16,
    },
    ph1: {
      paddingHorizontal: 4,
    },
    ph2: {
      paddingHorizontal: 8,
    },
    ph3: {
      paddingHorizontal: 10,
    },
    ph4: {
      paddingHorizontal: 12,
    },
    ph5: {
      paddingHorizontal: 16,
    },
    ph6: {
      paddingHorizontal: 20,
    },
    noPadding:{
      padding: 0,
    },
    w100:{
     width: "100%",
    }
  });
}

export function createTypographyStyles() {
  return StyleSheet.create({
    // headingXlarge: 28px , headingLarge : 24px , headingMedium :20px,  headingSmall :16px , headingXSmall : 12px

    displayLarge: {
     
   
    },
    displayMedium: {
     
     
    },
    displaySmall: {
     
     
    },
    headingXLarge: {
     
     
    },
    headingLarge: {
     
  
    },
    headingMedium: {
     
      
    },
    headingSmall: {
     
          },
    headingXSmall: {
     
      
    },

    labelLarge: {
     
      },
    labelMedium: {
     
         },
    labelSmall: {
     
      },
    labelXSmall: {
     
         },
    paragraphLarge: {
   
   
    },
    paragraphMedium: {
   
    
    },
    paragraphSmall: {
   
    
    },

    disabled: {
     
    },

    // Based on baseweb instructions => accent:blue , negative:red , positive:green

    accent: {
     
    },
    center: {
      textAlign: "center",
    },
  });
}

export function createColorStyles() {
  return StyleSheet.create({
    primary: {
      color: "white",
    },

    secondary: {
      color: "black",
    },
    
    backgroundPrimary: {
      background: "#100c08",
    },

    
    backgroundSecondary: {
      backgroundColor: "#353839",
    },
  
  });
}
export function createListStyles(){
  return StyleSheet.create({
   noBulltet:{
     listStyle: "none",
   }
   
  });
}
