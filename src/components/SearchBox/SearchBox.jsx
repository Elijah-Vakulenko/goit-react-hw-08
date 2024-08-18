import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from '../../redux/filters/selectors';


const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <div className={s.searchBox}>
            <label className='label' htmlFor="search">Find contacts by name:</label>
            <input
                className={s.input}
                type="text"
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
                placeholder="Enter name..."
            />
        </div>
    );
};

export default SearchBox;
