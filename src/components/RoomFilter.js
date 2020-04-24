import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { RoomContext } from '../context';
import Title from '../components/Title';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({ rooms }) {
    const classes = useStyles();
    const usersContext = useContext(RoomContext);
    const { type, capacity, price, minSize, maxSize, breakfast, pets, handleChange, handlePriceChange } = usersContext;

    // console.log(`${type}, ${capacity}, ${price}, ${minPrice}, ${maxPrice}, ${minSize}, ${maxSize}, ${breakfast}, ${pets}`);

    // get Unique types
    let types = getUnique(rooms, 'type');
    // add all 
    types = ['all', ...types];
    // map to jsx 
    types = types.map((item, index) => {
        return <MenuItem value={item} key={index}>{item}</MenuItem>
    })

    // people 
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <MenuItem value={item} key={index}>{item}</MenuItem>
    })

    // let price = Math.max(...rooms.map(item => item.price));

    return (
        <>
            <Title title="Search Rooms" />
            <div style={{ margin: '20px 0 40px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={2} xs={6} sm={4} md={2}>
                        <FormControl className={classes.formControl}>
                            <Typography variant="caption" display="block">
                                Room Type
                            </Typography>
                            <Select
                                labelId="room-type-label"
                                id="room-type"
                                value={type}
                                name="type"
                                onChange={handleChange}
                            >
                                {types}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={2} xs={6} sm={4} md={2}>
                        <FormControl className={classes.formControl}>
                            <Typography variant="caption" display="block">
                                Guests
                            </Typography>
                            <Select
                                labelId="guests-label"
                                id="guests"
                                value={capacity}
                                name="capacity"
                                onChange={handleChange}
                            >
                                {people}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={2} xs={6} sm={4} md={2}>
                        <Typography variant="caption" display="block" className="roomPriceLabel">
                            Room price ${price}
                        </Typography>
                        <Slider className="roomPriceSlider" value={price} min={0} max={600} onChange={handlePriceChange} aria-labelledby="continuous-slider" />
                    </Grid>

                    <Grid item lg={4} xs={6} sm={6} md={4}>
                        <Typography variant="caption" display="block" className="roomSizeLabel">
                            Room Size:
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <TextField style={{ margin: '0 10px 0 0' }}
                                id="minSize"
                                type="number"
                                name="minSize"
                                value={minSize}
                                onChange={handleChange}
                            />
                            <TextField
                                id="standard-number2"
                                type="number"
                                name="maxSize"
                                value={maxSize}
                                onChange={handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid item lg={2} xs={12} sm={6} md={2}>
                        <FormControl>
                            <FormGroup aria-label="position" className="breakfastPetsContainer">
                                <FormControlLabel
                                    value={breakfast}
                                    name="breakfast"
                                    control={<Checkbox color="primary" />}
                                    label="Breakfast"
                                    labelPlacement="end"
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    value={pets}
                                    name="pets" 
                                    control={<Checkbox color="primary" />}
                                    label="Pets"
                                    labelPlacement="end"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default RoomFilter
