import css from './Filter-style.module.css'
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtrSlice';


export const Filter = () => {
    const dipatch = useDispatch();

    return (
        <div className={css.filterDiv}>
            <label htmlFor="search">Find contacts by name</label>
            <input name="search" onChange={e => dipatch(setFilter(e.target.value))} />
        </div>
    );
};

