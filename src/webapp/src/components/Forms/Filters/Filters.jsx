import { useState } from 'react'
import './Filters.css'

export default function Filters() {
    const [formData, setFormData] = useState({
        tags: '',
        location: '',
        distance: 200,
        priceMin: 0,
        priceMax: undefined,
        type: {
            store: false,
            product: true,
        }
    })

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                type: {
                    ...prevFormData.type,
                    [e.target.name]: !prevFormData.type[e.target.name]
                },
            }))
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [e.target.name]: e.target.value,
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="tags">
            <input 
                type="search" 
                id='tags' 
                name='tags'
                placeholder='Que recherchez-vous ?'
                maxLength='30'
                autoComplete='true'
                value={formData.tags}
                onChange={handleChange}
            />
        </label>
        <label htmlFor="location">
            <input 
                type="text" 
                id='location' 
                name='location'
                placeholder='Saisissez une ville.'
                maxLength='30'
                autoComplete='true'
                value={formData.location}
                onChange={handleChange}
            />
        </label>
        <label htmlFor="distance">
            <input 
                type="range"
                id='distance'
                name='distance' 
                min='0'
                max='200'
                step='40'
                default='200'
                value={formData.distance}
                onChange={handleChange}
            />
        </label>
        <label htmlFor="priceMin">
            <input 
                type='number'
                id='priceMin'
                name='priceMin'
                min='0'
                max={formData.priceMax !== '' && formData.priceMax}
                onChange={handleChange}
            />
        </label>
        <label htmlFor="priceMax">
            <input 
                type="number" 
                id='priceMax'
                name='priceMax'
                min='0'
                onChange={handleChange}
            />
        </label>
        <fieldset>
            <label htmlFor="store">
                Store
                <input 
                    type="checkbox"
                    id='store'
                    name='store'
                    checked={formData.type.store}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="product">
                Produit
                <input 
                    type="checkbox"
                    id='product'
                    name='product'
                    checked={formData.type.product}
                    onChange={handleChange}
                />
            </label>
        </fieldset> 
        <input type="submit" value='Test Submit' />
    </form>
}