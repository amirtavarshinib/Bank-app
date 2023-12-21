import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import './MenuAppBar.css';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';




export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchoorEl, setAnchoorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [state, setState] = React.useState({
   
    left: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Loans', 'Insure','ePay', 'Manage Cards','eBills','Statements',].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {(index===0)? <AccountBalanceIcon/> :<AddTaskOutlinedIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchoorEl(event.currentTarget);
   };

   const handleCloose = () => {
    setAnchoorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

  

  <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
      <div>
      
    </div>
     <div className='head2'>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {['Menu '].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </Menu>
      <AppBar position="static" style={{background:"purple"}}>
        <Toolbar className='menuicon'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="demo-positioned-button"
            height="3cm"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className='logo'>
            <img src="banklogofin2.png" alt='logo'/>
            </div>
          </Typography>
          {auth && (
            <div>
              {/* <Avatar
                onClick={handleMenu}
              >A</Avatar> */}
               <Avatar  onClick={handleMenu} src="/broken-image.jpg" />
              <Menu
                id="menu-appbar"
                anchoorEl={anchoorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchoorEl)}
                onClose={handleCloose}
              >
                <MenuItem onClick={handleCloose}>Profile</MenuItem>
                <MenuItem onClick={handleCloose}>My account</MenuItem>
                <MenuItem onClick={handleCloose}>Logout</MenuItem>
                
              </Menu>
              

            </div>
          )}
        </Toolbar>
      </AppBar>
      <br/><br/><br/>
<center><h1  className='head' style={{fontSize:'50px'}}>Building a Better life with Banking</h1></center>
</div>
      
      <br/><br/><br/>
      <h4 style={{color:"purple"}}><center>Quick Pay</center></h4>
      <div className='pay'>
      <Card style={{height:'130px'}}>
      <CardContent>
      <div className='maincol'>
      <div className='i'>
      <div className='qr' style={{color:"purple"}}>
        <QrCodeScannerIcon/><br/>
        
        </div>
        <div style={{color:"purple"}}>
        Scan & Pay
        </div>
        </div>
        <div className='ii'>
      <div className='con' style={{color:"purple"}}>
        <PermContactCalendarOutlinedIcon/><br/>
        </div>
        <div style={{color:"purple"}}>
          Pay to Contact
        </div>
        </div>
        <div className='iii'>
      <div className='acc' style={{color:"purple"}}>
        <AccountBalanceIcon/><br/>
        </div>
        <div style={{color:"purple"}}>
          Pay to Bank A/C
        </div>
        </div>
        <div className='iiii'>
        <div className='bi' style={{color:"purple"}}>
        <DescriptionOutlinedIcon/><br/>
        </div>
        <div style={{color:"purple"}}>
          ePay Bill
        </div>
        </div>
        <div className='iiiii'>
        <div className='ba' style={{color:"purple"}}>
        <AccountBalanceWalletOutlinedIcon/><br/>
        </div>
        <div style={{color:"purple"}}>
          Balance
        </div>
        </div>
      </div>
      </CardContent>
      </Card>
      
      </div>
      <br/><br/>
      <div className='balance'>
      <Card  className='balcard'>
      <CardContent>
        <div className='divba'>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          
          <div style={{color:"purple"}}><VisibilityOutlinedIcon/></div><p style={{color:"purple"}}>View Balance</p>
          
        </Typography>
        <Typography variant="body2">
         View account balance and recent transactions.
        </Typography>
        </div>
      </CardContent>
    </Card>
    </div>
    <br/><br/><br/>
      <div className='maincard'>
      <div className='card1'>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://cdn0.knowledgecity.com/opencontent/courses/previews/BUS1075/800--v112234.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:"purple"}}>
            Statement
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Statement and bills of your recent transactions 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
   
    <div className='card2'>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://media.istockphoto.com/id/1668926850/video/animation-of-businessman-signing-and-stamping-on-a-loan-document-form-transparent-background.jpg?s=640x640&k=20&c=aLuu5gmiFwfGaNcTXheJKLi8_l0Wst8rH4yzXPkIJIw="
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:"purple"}}>
            Loans
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Innovative loan pollicies to make your life easy
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
    
    <div className='card3'>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://cdn.dribbble.com/userupload/5621021/file/original-ba6824f107622333aa1b86167f5eb698.jpg?resize=400x0"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:"purple"}}>
            Best Plans
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Best plans and deals to keep your money safe . 

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className='card4'>
       <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://www.shutterstock.com/image-photo/fixed-deposit-wording-on-selective-260nw-1905110275.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{color:"purple"}}>
            Fixed Deposit
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Deposit and secure your money in a wise way .
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
    <div>
      <br/><br/><br/><br/><br/><br/>
      <div className='footer' >
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[300],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={{color:"purple"}}>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are AV Banking , dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={{color:"purple"}}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, Anytown, India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom style={{color:"purple"}}>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="purple" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              avbank.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
    </div>
  
    </Box>
  );
}