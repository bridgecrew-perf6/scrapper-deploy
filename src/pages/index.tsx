import { StyleSheet, css } from "aphrodite";
import { useGlobalStyles } from "src/styles/style-hooks";
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import { GlobalStyles } from "../../types/global-types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Home() {
  const { gs } = useGlobalStyles();
  
const styles= createStyles(gs);
  return (
    <div className={css(gs.color.backgroundSecondary)}>
         <Grid container spacing={2}>
        <Grid item xs={2} className={css(styles.sideBar, gs.layout.spaceBetweenColumn, )}>
            
             <div className={css(gs.layout.centerColumn,gs.layout.flexStartColumn)}>
             <div className={css(styles.userAccount, gs.layout.centerRow)}> 
               
               <div>
                 <h1 className={css(gs.color.primary)}>Kanan Gasimov</h1>
               </div>
             </div>
             <div className={css(gs.layout.w100,gs.layout.centerColumn)}>
             <ul className={css(gs.layout.w100, gs.ul.noBulltet,gs.layout.noPadding, gs.layout.flexStartColumn)}>
               <li className={css(gs.layout.w100,gs.color.primary, gs.layout.flexStart,styles.menuItems)}> 
               <DashboardIcon className={css(gs.layout.p3)}/> Dashboard</li>
               <li className={css(gs.layout.w100,gs.color.primary,gs.layout.flexStart,styles.menuItems)}><AccountBalanceWalletIcon className={css(gs.layout.p3)}/>Wallet</li>
               <li className={css(gs.layout.w100,gs.color.primary,gs.layout.flexStart,styles.menuItems)}><PersonIcon className={css(gs.layout.p3)}/>Profile</li>

             </ul>
             </div>
            
             </div>

             <div className={css(gs.layout.w100,gs.layout.centerColumn)}>
             <ul className={css(gs.layout.w100, gs.ul.noBulltet,gs.layout.noPadding, gs.layout.flexStartColumn)}>
                 <li className={css(gs.layout.w100,gs.color.primary,gs.layout.flexStart,styles.menuItems)}><HelpIcon className={css(gs.layout.p3)}/>Help Center</li>
                 <li className={css(gs.layout.w100,gs.color.primary,gs.layout.flexStart,styles.menuItems)}><LogoutIcon className={css(gs.layout.p3)}/>Logout</li>
               </ul>
             </div>
               
            
        </Grid>
        <Grid item xs={10} className={css(gs.color.backgroundPrimary,styles.flowSide)}>
        

        </Grid>
        
      </Grid>
    </div>
  );
}

const createStyles = (gs:GlobalStyles)=>{
  return StyleSheet.create({
    root: {
     
  
    },
  
    title: {
      marginLeft: 5,
      color: "black",
      fontSize: 22,
      ":hover": {
        color: "white",
      },
    },
    userAccount:{
  
    },
    sideBar:{
      height: "100vh",
      background:"#353839"
    },
    menuItems:{
      borderRadius: "10px",
      cursor: "pointer",
      ":hover":{
        backgroundColor: "purple",
      }
    
    },
    flowSide:{
      borderTopLeftRadius: "40px",
      borderBottomLeftRadius: "40px",
    }
  });
}
