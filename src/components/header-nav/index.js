import {Breadcrumbs,Link} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import useStyles from './style';


const HeaderNav = () => {
    const classes = useStyles();

    return(
        <Breadcrumbs className={classes.header}>
            <Link className={classes.link} color="inherit" href="/" >
                <HomeIcon className={classes.icon}/>
                Библиотеки
            </Link>
            <Link className={classes.link} color="inherit" href="/other" >
                <ShoppingBasketOutlinedIcon className={classes.icon}/>
                Другое
            </Link>
        </Breadcrumbs>
    )
}

export default HeaderNav