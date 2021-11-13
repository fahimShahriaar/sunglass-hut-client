import { TextField, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';
const Review = () => {
    const { user } = useAuth();
    const initialInfo = { clientName: user.displayName, text: '' }
    const [values, setValues] = React.useState(initialInfo);


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...values };
        newReview[field] = value;
        setValues(newReview);


    }
    const onSubmit = e => {
        const review = {
            ...values,


        }
        console.log(review);


        fetch('https://polar-island-04208.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                if (data.modifiedCount);

                alert("insert successfully");


            })
        e.preventDefault()
    };

    return (
        <div>
            <Typography sx={{ mt: 5 }} variant='h4'>Add Review</Typography>
            <hr className="w-25 mx-auto mb-2 text-dark  mb-5" />

            <form onSubmit={onSubmit}>

                <TextField sx={{ width: '50%', m: 2 }}
                    id="standard-password-input"
                    label="name"

                    onChange={handleOnChange}
                    defaultValue={user.displayName}
                    name="name"
                    autoComplete="current-password"
                    variant="standard"
                />
                <textarea
                    onChange={handleOnChange}
                    name="text"
                    style={{ width: '50%', height: '10rem' }}
                >
                </textarea><br />


                {/* <Box align="left" component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        value={values}
                        name="rating"
                        onChange={(event, newValue) => {
                            setValues(newValue);
                        }}
                    // onClick={props.handleInputChange}
                    />
                </Box> */}
                <button className="btn my-btn mt-3  ms-2 px-5">Submit</button>
            </form>
        </div>
    );
};

export default Review;