
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { postProduct } from '../actions/index';

const HomeScreen = () => {



    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch()

    const { product } = useSelector((state) => state.getProduct)

    console.log(product);


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(postProduct({ name, category, description, image, price }))

    }

    return (


        <div>
            <form onSubmit={submitHandler}>

                <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input> <br />

                <input placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}></input> <br />

                <input placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></input> <br />

                <input placeholder="image" value={image} onChange={(e) => setImage(e.target.value)}></input> <br />

                <input placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}></input> <br />

                <button type='submit'> gonder</button>

            </form>

            <p>
                <strong> Name:</strong>
                {product.name}
            </p>
            <p>
                <strong> Description:</strong>
                {product.description}
            </p>
            <p>
                <strong> Price:</strong>
                {product.price}
            </p> <p>
                <strong> Category:</strong>
                {product.category}
            </p>
            <p>
                <strong> Image:</strong>
                {product.image}
            </p>

        </div>
    );
};
export default HomeScreen;