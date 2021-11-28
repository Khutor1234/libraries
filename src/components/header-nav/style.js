import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header: {
        background: '#78866b',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 30,
        height: 30,
    }
}));

export default useStyles;
